"use client";
import React from "react";
import { Card, Title, AreaChart } from "@tremor/react";
import Root from "@/typings";

type Props = {
  results: Root;
};

function HumidityChart({ results }: Props) {
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
    "Humidity (%)": results.hourly.relativehumidity_2m[i],
  }));

  const dataFormatter = (number: number) => `${number} %`;
  return (
    <>
      <Card>
        <Title>Humidity Index</Title>
        <AreaChart
          className="mt-6"
          data={data}
          showLegend
          index="time"
          categories={["Humidity (%)"]}
          colors={["teal"]}
          valueFormatter={dataFormatter}
          minValue={0}
          maxValue={100}
          yAxisWidth={40}
        />
      </Card>
      ;
    </>
  );
}

export default HumidityChart;
