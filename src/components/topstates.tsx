import React from "react";

type Props = {};

function topstates({}: Props) {
  return (
    <div className="p-6 bg-white h-full">
      <h1 className="text-xl font-semibold  pb-4">Top States</h1>

      <div className="flex flex-col gap-2   items-start ">
        <img src="Barb1.svg" alt="b1" />
        <img src="Barb2.svg" alt="b2"  />
        <img src="Barb3.svg" alt="b3" />
        <img src="Barb4.svg" alt="b4"  />
      </div>
    </div>
  );
}

export default topstates;
