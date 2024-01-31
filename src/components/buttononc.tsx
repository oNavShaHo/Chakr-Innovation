"use client";
import React, { useState } from "react";
import Image from "next/image";

type ButtonProps = {
  imgt: string;
  imgf: string;
  ialt: string;
  text: string;
};

function Button({ imgt, imgf, ialt, text }: ButtonProps) {
  const [isHovering, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  function dropdown() {
    setIsClicked(!isClicked);
  }

  return (
    <div className="" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {isClicked ? (
        <div className="bg-[#FFF7E8]">
          <div
            onClick={dropdown}
            className="flex gap-3 bg-[#FFF7E8] px-4 py-3 text-[#734A00] border-1 rounded-full"
          >
            <Image src={imgf} width={25} height={25} alt={ialt} />
            <p className="text-lg">{text}</p>
            <img className="ml-auto" src="up.svg" alt="down" />
          </div>
          <div className="flex flex-col justify-center items-left px-4 py-3 gap-3">
            <div className="flex gap-3">
              <Image src="yoyo.svg" width={25} height={25} alt={ialt} />
              <p className="text-lg hover:text-[#734A00]">Current</p>
            </div>
            <div className="flex gap-3">
              <Image src="yoyo.svg" width={25} height={25} alt={ialt} />
              <p className="text-lg hover:text-[#734A00]">New</p>
            </div>
            <div className="flex gap-3">
              <Image src="yoyo.svg" width={25} height={25} alt={ialt} />
              <p className="text-lg hover:text-[#734A00]">Negotiating</p>
            </div>
          </div>
        </div>
      ) : (
        (isHovering && (
          <div
            onClick={dropdown}
            className="flex gap-3 hover:bg-[#FFF7E8] px-4 py-3 text-[#734A00] border-1 rounded-full"
          >
            <Image src={imgf} width={25} height={25} alt={ialt} />
            <p className="text-lg">{text}</p>
            <img className="ml-auto" src="down.svg" alt="down" />
          </div>
        )) || (
          <div className="flex px-4 py-3 gap-3 max-w-80">
            <Image src={imgt} width={25} height={25} alt={ialt} />
            <p className="text-lg">{text}</p>
            <img className="ml-auto" src="down.svg" alt="down" />
          </div>
        )
      )}
    </div>
  );
}

export default Button;
