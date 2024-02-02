import React from "react";
import Ndhelper from "./ndhelper";
type Props = {};

function newdeals({}: Props) {
  return (
    <div className="bg-white p-6 min-w-72 h-full">
      <h1 className="text-xl font-semibold ">New deals</h1>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <Ndhelper h1="Fruit2Go" />
          <Ndhelper h1="Marshalls MKT " />
          <Ndhelper h1="CCNT" />
        </div>

        <div className="flex gap-2">
          <Ndhelper h1="Joana Mini-market" />
          <Ndhelper h1="Little Brazil Vegan" />
        </div>

        <div className="flex gap-2">
          <Ndhelper h1="Target" />
          <Ndhelper h1="Organic Place" />
          <Ndhelper h1="Morello" />
        </div>
      </div>
    </div>
  );
}

export default newdeals;
