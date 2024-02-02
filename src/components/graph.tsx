// pages/graph.tsx
"use client";
import React, { useState, useEffect } from "react";
import Chart from "./chart";
import Graph2 from "./graph2";
type ChartData = {
  Timestamp: string;
  "Profit Percentage": string;
};

const Graph: React.FC = () => {
  const [data, setData] = useState<ChartData[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data...");
        const response = await fetch("/api/data/chart-data");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const chartData = await response.json();
        console.log("Fetched data:", chartData);
        setData(chartData);

        console.log(chartData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=" ">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {data ? (
            <ul>
              <div className="flex justify-between bg-white gap-4 p-6">
                <h1 className="text-xl font-semibold ">Growth</h1>
                <div className="flex">
                  <p>Yearly</p>
                  <img src="down.svg" alt="down" />
                </div>
              </div>
              <Chart data={data} />
              <br />
              <Graph2 />
            </ul>
          ) : (
            <div>Data is null</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Graph;
