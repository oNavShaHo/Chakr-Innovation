import React from "react";

type Props = {
  h1: string;
};

function ndhelper({ h1 }: Props) {
  return (
    <div className="flex  border-4 rounded-lg bg-[#FFF7E8] gap-2  px-3 pr-3 border-[#FFF7E8] items-center justify-center ">
      <img src="plus.svg" alt="yoyo" />
      <h2 className="text-[.9rem] text-[#734A00]">{h1}</h2>
    </div>
  );
}

export default ndhelper;
