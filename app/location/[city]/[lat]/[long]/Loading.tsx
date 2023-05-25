import { SunIcon } from "@heroicons/react/solid";
import React from "react";

function Loading() {
  return (
    <div className="bg-gradient-to-br from-[#f1d67e] to-[#eeca56] min-h-screen flex flex-col items-center justify-center text-slate-500">
      <SunIcon className="h-24 w-24 animate-bounce text-black" color="yellow" />
      <h1 className="text-6xl font-bold text-center mb-10 animate-pulse">
        Loading City Weather Infomation
      </h1>
      <h2 className="text-xl font-bold text-center mb-10 animate-pulse">
        Hold on we going home... Crunching the numbers... Generating an AI
        summary of the Weather!
      </h2>
    </div>
  );
}

export default Loading;
