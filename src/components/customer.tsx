import React from "react";
import Customername from "./customername";
type Props = {};

function customer({}: Props) {
  return (
    <div className="bg-white py-6 flex flex-col gap-4 h-full">
      <div className="flex justify-between items-center px-6">
        <h1 className="text-xl font-semibold ">Customers</h1>
        <div className="flex  justify-center items-center">
          <h2 className="w-[7rem] text-[.8rem]">Sort by Newest</h2>
          <img src="down.svg" alt="yo" />
        </div>
      </div>
      <div className="m-2 ">
        <Customername
          img="Avatarp1.svg"
          h1="Chris Friedkly"
          h2="Supermarket Villanova"
        />

        <Customername
          img="Avatarp2.svg"
          h1="Maggie Johnson"
          h2="Oasis Organic Inc."
        />

        <Customername
          img="Avatarp3.svg"
          h1="Gael Harry"
          h2="New York Finest Fruits"
        />

        <Customername img="Avatarp4.svg" h1="Jenna Sullivan" h2="Walmart" />
      </div>
      <div className="flex relative ">
        <a className="text-[#734A00] px-6 ">All customers</a>
        <img src="rr.svg" alt="yo" />
      </div>
    </div>
  );
}

export default customer;
