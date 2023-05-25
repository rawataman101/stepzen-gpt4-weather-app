"use client";
import React from "react";
import { Card, Title, AreaChart } from "@tremor/react";
import Root from "@/typings";

type Props = {
  results: Root;
};

function TempChart({ results }: Props) {
  console.log(results.hourly);

  const hourly = results?.hourly.time
    .map((time) =>
      new Date(time).toLocaleString("en-US", {
        hour: "numeric",
        hour12: false,
      })
    )
    .slice(0, 24);
  const data = hourly.map((hour, i) => ({
    time: Number(hour),
    "UV Index": results.hourly.dewpoint_2m[i],
    "Temperature (C)": results.hourly.temperature_2m[i],
  }));
  console.log(data);

  const dataFormatter = (number: number) => `${number}° C`;
  return (
    <>
      <Card>
        <Title>Temprature & UV Index</Title>
        <AreaChart
          className="mt-6"
          data={data}
          showLegend
          index="time"
          categories={["Temperature (C)", "UV Index"]}
          colors={["yellow", "rose"]}
          valueFormatter={dataFormatter}
          minValue={0}
          yAxisWidth={40}
        />
      </Card>
    </>
  );
}

export default TempChart;
