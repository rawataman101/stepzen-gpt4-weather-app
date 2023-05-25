"use client";
import { Card, Metric, Text, Color } from "@tremor/react";
import React from "react";
type Props = {
  title: string;
  metric: string;
  color?: Color;
};

function StatCard({ title, metric, color }: Props) {
  return (
    <Card decoration="top" decorationColor={color}>
      <Text>{title}</Text>
      <Metric>{metric}</Metric>
    </Card>
  );
}

export default StatCard;
