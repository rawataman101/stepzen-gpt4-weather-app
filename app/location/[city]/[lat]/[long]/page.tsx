import React from "react";
import { getClient } from "@/stepzen/apollo-client";
import fetchWeatherQuery from "@/graphql/queries/fetchWeatherQueries";
import Root from "../../../../../typings";
import CalloutCard from "@/app/components/CalloutCard";
import StatCard from "@/app/components/StatCard";
import InformationPanel from "@/app/components/InformationPanel";
import TempChart from "@/app/components/TempChart";
import RainChart from "@/app/components/RainChart";
import HumidityChart from "@/app/components/HumidityChart";
import cleanData from "@/lib/cleanData";
import { log } from "console";
import { checkEnvironment } from "@/lib/getBasePath";

export const revalidate = 60;
type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};
async function WeatherPage({ params: { city, lat, long } }: Props) {
  const client = getClient();
  const { data } = await client.query({
    query: fetchWeatherQuery,
    variables: {
      current_weather: "true",
      longitude: long,
      latitude: lat,
      timezone: "GMT",
    },
  });

  const results: Root = data.myQuery;
  // OPENAI
  const dataToSend = cleanData(results, city);
  //console.log("----->", dataToSend);
  console.log(checkEnvironment);

  const res = await fetch(checkEnvironment().concat("/api/getWeatherSummary"), {
    method: "POST",
    headers: {
      "CONTENT-TYPE": "application/json",
    },
    body: JSON.stringify({
      weatherData: dataToSend,
    }),
  });
  //console.log("RESPONSE=>>", res);
  let reply = "";
  try {
    const GPTdata = await res.json();
    console.log("GPTDATA=>>", GPTdata);

    const { content } = GPTdata;
    reply = content;
    console.log("CONTENTt=>>", content);
  } catch (error) {
    console.error("error!!!!!");
  }

  return (
    <div className="flex flex-col min-h-screen  md:flex-row">
      {/* Welcome to weather page: {city} {lat} {long} */}
      {/* Information Page */}
      <InformationPanel city={city} results={results} lat={lat} long={long} />

      <div className="flex-1 p-5 lg:p-10">
        <div className="p-5">
          <div className="pb-5">
            <h2 className="text-xl font-bold">Today&apos;s Overview</h2>
            <p className="text-sm text-gray-400">
              Last updated at:
              {new Date(results.current_weather.time).toLocaleString()}{" "}
              {results.timezone}
            </p>
          </div>
          <div className="m-2 mb-10">
            {/* Callout card */}
            <CalloutCard
              message={
                reply
                  ? reply
                  : `Welcome to the weather forecast. Now, let’s see what the weather is like today.`
              }
            />
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 m-2">
            <StatCard
              title={"Maximum Temperature"}
              metric={`${results.daily.temperature_2m_max[0].toFixed(1)}°`}
              color="yellow"
            />
            <StatCard
              title={"Minimum Temperature"}
              metric={`${results.daily.temperature_2m_min[0].toFixed(1)}°`}
              color="green"
            />

            <div>
              <StatCard
                title={"Wind Speed"}
                metric={`${results.current_weather.windspeed}  Km/s`}
                color="rose"
              />

              {Number(results.current_weather.windspeed) > 11 && (
                <CalloutCard
                  message="The wind speed is high, be careful!"
                  warning
                />
              )}
            </div>
            <div className="flex space-x-3">
              <StatCard
                title={"Daily Time"}
                metric={`${results.daily.time[0]}`}
                color="cyan"
              />
              <StatCard
                title={"Temperature Unit's"}
                metric={`${results.daily_units.temperature_2m_max} `}
                color="violet"
              />
            </div>
          </div>
        </div>
        <hr className="mb-5" />
        <div className="space-y-3">
          {/* charts */}
          <TempChart results={results} />
          <RainChart results={results} />
          <HumidityChart results={results} />
        </div>
      </div>
    </div>
  );
}

export default WeatherPage;
