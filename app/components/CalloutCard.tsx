"use client";
import React from "react";
import { CheckCircleIcon, ExclamationIcon } from "@heroicons/react/solid";
import { Callout, Card, Metric, Text } from "@tremor/react";

type Props = {
  message: string;
  warning?: boolean;
};

function CalloutCard({ message, warning }: Props) {
  return (
    <>
      <Callout
        className="mt-4"
        title={message}
        icon={warning ? ExclamationIcon : CheckCircleIcon}
        color={warning ? "rose" : "teal"}
      />

      {/* <Card className="max-w-md">
        <Text>Current wind speed: Turbine 2</Text>
        <Metric>7.2knts</Metric>
        <Callout
          className="mt-4"
          title="No critical system data"
          icon={CheckCircleIcon}
          color="teal"
        >
          All systems are currently within their default operating ranges.
        </Callout>
      </Card> */}
    </>
  );
}

export default CalloutCard;
