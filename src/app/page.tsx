import Image from "next/image";
import Button from "../components/button";
import Button1 from "@/components/buttononc";
import Box from "../components/box";
import Box2 from "../components/box2";
import Customer from "@/components/customer";
import Chats from "@/components/chats";
import Topstates from "@/components/topstates";
import Newdeals from "@/components/newdeals";
import Graph from "@/components/graph";
export default function Home() {
  return (
    <main className="grid w-screen h-screen bg-[#F6F6F3] grid-col-8 gap-4 m-4">
      <nav className="bg-[#FFF] flex flex-col h-full border-4  col-start-1 col-end-2  border-white rounded-xl gap-2">
        <div className="px-4 py-2 flex flex-col gap-6">
          <Image src="orangeFarm.svg" alt="yo" width={200} height={200} />
          <div className="flex bg-white border-y-2 gap-2 border-x-4 border-white py-2  rounded-lg ">
            <Image src="search.svg" alt="s" width={25} height={25} />
            <input placeholder="Search" className="outline-none" />
          </div>
        </div>
        <div className="flex flex-col gap-2 px-4 ">
          <Button
            imgt="Icon (from Tabler.io)Dashboardtrue.svg"
            imgf="Icon (from Tabler.io)Dashboardtrue.svg"
            ialt="Alternative text for the image"
            text="Dashboard"
          />

          <Button1
            imgt="Icon (from Tabler.io)Customerfalse.svg"
            imgf="Icon (from Tabler.io)Customertrue.svg"
            ialt="Alternative text for the image"
            text="Customers"
          />

          <Button
            imgt="Icon (from Tabler.io)Allreportfalse.svg"
            imgf="Icon (from Tabler.io)Allreporttrue.svg"
            ialt="Alternative text for the image"
            text="All Reports"
          />

          <Button
            imgt="Icon (from Tabler.io)Geographyfalse.svg"
            imgf="Icon (from Tabler.io)Geographytrue.svg"
            ialt="Alternative text for the image"
            text="Geography"
          />

          <Button
            imgt="Icon (from Tabler.io)Conversationfalse.svg"
            imgf="Icon (from Tabler.io)Conversationtrue.svg"
            ialt="Alternative text for the image"
            text="Conversation"
          />

          <Button
            imgt="Icon (from Tabler.io)Dealsfalse.svg"
            imgf="Icon (from Tabler.io)Dealstrue.svg"
            ialt="Alternative text for the image"
            text="Deals"
          />

          <Button
            imgt="Icon (from Tabler.io)Exportfalse.svg"
            imgf="Icon (from Tabler.io)Exporttrue.svg"
            ialt="Alternative text for the image"
            text="Export"
          />
        </div>
        <div className="mt-auto flex flex-col gap-2 px-4">
          <div className="flex px-4">
            <img src="Avatar.svg" />
            <div className="px-3">
              <h2>Gustavo Xavier</h2>
              <p
                className="bg-orange-300
              text-white w-14 px-1 rounded-lg 
              "
              >
                admin
              </p>
            </div>
          </div>

          <Button
            imgt="Icon (from Tabler.io)Settings.svg"
            imgf="Icon (from Tabler.io)Settingstrue.svg"
            ialt="Alternative text for the image"
            text="Setting"
          />

          <Button
            imgt="logout.svg"
            imgf="logout.svg"
            ialt="Alternative text for the image"
            text="Log out"
          />
        </div>
      </nav>
      <main
        className="
        col-start-2 col-end-8 
       "
      >
        <div className="grid grid-col-12 gap-4">
          <div className="col-start-1 col-end-4">
            <Box
              h1="Revenues"
              logo={true}
              num="15"
              h2="Increase compared to last week"
              h3="Revenues report"
            />
          </div>
          <div className="col-start-4 col-end-8">
            <Box
              h1="Lost deals"
              logo={false}
              num="4"
              h2="You closed 96 out of 100 deals"
              h3="All deals"
            />
          </div>
          <div className="col-start-8 col-end-12">
            <Box2 h1="Quater goal" num={84} h2="yes" />
          </div>
          <div className="col-start-1 col col-end-6">
            <Customer />
          </div>
          <div className="col-start-6 col-end-12">
            <Graph />
          </div>

          <div className="col-start-1 col-end-4">
            <Chats />
          </div>
          <div className="col-start-4 col-end-8">
            <Topstates />
          </div>

          <div className="col-start-8 col-end-12">
            <Newdeals />
          </div>
        </div>
      </main>
    </main>
  );
}

// <Chats />
// <Topstates />
//  <Newdeals />

// <Box
// h1="Revenues"
// logo={true}
// num="15"
// h2="Increase compared to last week"
// h3="Revenues report"
// />

// <Customer />
