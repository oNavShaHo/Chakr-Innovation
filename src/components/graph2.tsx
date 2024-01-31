import React from "react";

type Props = {};

function graph2({}: Props) {
  return (
    <div className="flex  w-full  gap-4 border-2 border-white rounded-xl">
      <div className="flex flex-col gap-4 p-4 bg-white w-[32%]">
        <h1
          className="text-[1rem]
        text-[#7D7D7D]"
        >
          Top month
        </h1>
        <div>
          <p
            className="text-[1.5rem]
        text-[#734A00]"
          >
            November
          </p>
          <p
            className="text-[1rem]
        text-[#FFA500]"
          >
            2019
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-4 bg-white w-[32%]">
        <h1
          className="text-[1rem]
        text-[#7D7D7D]"
        >
          Top year
        </h1>
        <div>
          <p
            className="text-[1.5rem]
        text-[#734A00]"
          >
            2023
          </p>
          <p
            className="text-[.9rem]
        text-[#454545]"
          >
            96K sold so far
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 p-4 bg-white  justify-center items-left w-[32%]">
        <h1
          className="text-[1rem]
        text-[#7D7D7D]"
        >
          Top buyer
        </h1>
        <img src="Avatarp2.svg" alt="img" className="h-5 self-start" />
        <div>
          <p
            className="text-[1.5rem]
        text-[#734A00]"
          >
            2023
          </p>
          <p
            className="text-[.9rem]
        text-[#454545]"
          >
            96K sold so far
          </p>
        </div>
      </div>
    </div>
  );
}

export default graph2;
