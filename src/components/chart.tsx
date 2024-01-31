"use client";
import React, { useEffect, useRef } from "react";
import { LineChart } from "@mui/x-charts";


type Props = {
  data: any[];
};

function Example({ data }: Props) {


  const values: number[] = [];
  const labels: string[] = [];

  for (let i = 0; i < data.length; i++) {
    if (i % 2 === 0) values.push(data[i]);
    else labels.push(data[i]);
  }

  return (
    <div className="bg-white flex ">
      <LineChart
        xAxis={[{ data: labels }]}
        series={[
          {
            data: values,
          },
        ]}
        width={500}
        height={300}
      />
    </div>
  );
}

export default Example;
