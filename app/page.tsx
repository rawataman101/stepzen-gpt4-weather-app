"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Card, Divider, Subtitle, Text } from "@tremor/react";
import CityPicker from "./components/CityPicker";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5CD4A] to-[#F0B620] p-10 flex flex-col justify-center items-center">
      <Card className="max-w-4xl mx-auto bg-[#FCFCFC] rounded p-10">
        <Text className=" text-6xl font-bold text-center mb-10">
          Weather AI
        </Text>
        <Subtitle className="text-xl text-center">
          Powered by OpenAI, Next.js 13.3, Tailwind CSS, Tremor 2.0 More!
        </Subtitle>
        <Divider className="my-10" />
        <Card className="bg-[#F5CD4A] p-5">
          <CityPicker />
        </Card>
      </Card>
    </div>
  );
}
