"use client"
import React, { useState } from "react";
import Image from "next/image";

type ButtonProps = {
  imgt: string;
  imgf:string;
  ialt: string;
  text: string;
  
};

function Button({ imgt,imgf, ialt, text }: ButtonProps) {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <div  
    className=""
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    >
      {isHovering ? (
        <div className="flex gap-3 hover:bg-[#FFF7E8] px-4 py-3 text-[#734A00] border-1 rounded-full  ">
          <Image src={imgf} width={25} height={25} alt={ialt} />
        <p className="text-lg">{text}</p>
        </div>
      ) : (
        <div className="flex px-4 py-3  gap-3 max-w-80 ">
          <Image src={imgt} width={25} height={25} alt={ialt} />
        <p className="text-lg">{text}</p>
        </div>
      )}
     
    </div>
  );
}

export default Button;
