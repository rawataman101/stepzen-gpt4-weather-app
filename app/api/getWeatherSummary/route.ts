import { NextResponse } from "next/server";
import openai from "@/openai";

export async function POST(request: Request) {
  // weather data in the body of POST req

  const { weatherData } = await request.json();
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: "system",
        content: `Provide a summary for State city, then give a summary of today's weather only.`,
      },
      {
        role: "user",
        content: `Hi there can i get a summary of today's weather, use the following infomation to get the weather data: ${JSON.stringify(
          weatherData
        )}`,
      },
    ],
  });
  const { data } = response;
  //console.log("DATA IS:", data.choices[0].message);
  return NextResponse.json(data.choices[0].message);
}
