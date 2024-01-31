"use client"
import React, { useEffect, useRef } from "react";
/* eslint-disable-next-line padded-blocks */ 
 // eslint-disable-line no-console // eslint-disable-next-line no-console console.
import { Chart, ChartConfiguration } 
from "chart.js"; // Import ChartConfiguration type


type Props = {
  data: any[];
};

function Example({ data }: Props) {
  const chartRef = useRef<HTMLCanvasElement>(null); // Add type annotation for chartRef

  const values: number[] = [];
  const labels: string[] = [];

  for (let i = 0; i < data.length; i++) {
    if (i % 2 === 0) values.push(data[i]);
    else labels.push(data[i]);
  }

  useEffect(() => {
    if (chartRef.current) {
      const chartConfig: ChartConfiguration = {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              data: values,
              label: "Applied",
              borderColor: "green",
              backgroundColor: "rgba(0, 128, 0, 0.1)",
              fill: false,
              borderDash: [5, 5],
            },
          ],
        },
      };

      new Chart(chartRef.current, chartConfig); // Pass chartRef.current and chartConfig
    }
  }, [data, labels, values]); // Include labels and values in the dependency array

  return (
    <div className="bg-white">
      
          <canvas id="myChart" ref={chartRef}></canvas>
       
      
    </div>
  );
}

export default Example;
