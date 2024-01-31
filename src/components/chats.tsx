import React from "react";

type Props = {};

function chats({}: Props) {
  return (
    <div className="p-6 flex flex-col gap-2 h-full bg-white">
      <h1 className="text-[1.250rem] font-semibold">Chats</h1>
      <h2
        className="text-[.878rem]
      pb-4 text-[#454545]"
      >
        2 unread messages
      </h2>
      <div className="flex gap-2">
        <img src="Frame 27c1.svg" alt="c1" />
        <img src="Frame 28c2.svg" alt="c2" />
        <img src="Frame 29c3.svg" alt="c3" />
        <img src="Frame 30c4.svg" alt="c4" />
      </div>
    </div>
  );
}

export default chats;
