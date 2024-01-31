import React from "react";
import ApexCharts from "apexcharts";

type Props = {
  h1: string;
  num: number;
  h2: string;
};

function Box2({ h1, num, h2 }: Props) {
  let num2 = 100 - num;

  return (
    <div className=" bg-white p-6 border-5 flex  flex-col items-center rounded-xl min-h-52 min-w-80 gap-1">
      <h1 className="text-xl font-semibold">{h1}</h1>
      <div className=" items-center flex flex-col">
        <img className="relative " src="bar.svg" alt="yo" />
        <p className="relative bottom-9 text-[2rem]">{num}%</p>
      </div>
      <div className="flex">
        <h2 className="text-[#734A00]">{h2}</h2>
        <img src="rr.svg" alt="yo" />{" "}
      </div>
    </div>
  );
}

export default Box2;
