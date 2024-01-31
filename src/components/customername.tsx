"use client";
import React, { useState } from "react";
import Image from "next/image";

type ButtonProps = {
  h1: string;
  img: string;
  h2: string;
};

function customername({ img, h1, h2 }: ButtonProps) {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <div className="" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {isHovering ? (
        <div className="flex p-4 gap-3 boreder-2 rounded-xl hover:bg-[#FFF7E8]">
           <img src={img} alt="img" />
          <div>
            <p className="text-[.9rem] font-semibold">{h1}</p>
            <p className="text-[.8rem]">{h2}</p>
          </div>
          <div className="flex ml-auto gap-6 ">
            <img src="Icon (from Tabler.io)i1.svg" alt="i1" />
            <img src="Icon (from Tabler.io)i2.svg" alt="i2" />
            <img src="Icon (from Tabler.io)i3.svg" alt="i3" />
            <img src="l2.svg" alt="l2" />
            <img src="Icon (from Tabler.io)i4.svg" alt="i4" />
            </div>
        </div>
      ) : (
        <div 
        
        className="flex gap-3  p-4">
          <img src={img} alt="img" />
          <div>
          <p className="text-[.9rem] font-semibold">{h1}</p>
            <p className="text-[.8rem]">{h2}</p>
          </div>
          <div
          style={{visibility:"hidden"}} 
          className="flex  gap-6 ">
            <img src="Icon (from Tabler.io)i1.svg" alt="i1" />
            <img src="Icon (from Tabler.io)i2.svg" alt="i2" />
            <img src="Icon (from Tabler.io)i3.svg" alt="i3" />
            <img src="l2.svg" alt="l2" />
            <img src="Icon (from Tabler.io)i4.svg" alt="i4" />
            </div>
          
        </div>
      )}
    </div>
  );
}

export default customername;
