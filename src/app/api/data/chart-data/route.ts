import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "dataset.csv");
    const fileData = await fs.promises.readFile(filePath, "utf-8");

    // Parse CSV data

    // Downsample data using max pooling
    const downsampledData = downsampleData(fileData, 4); // Downsample by a factor of 4

    return NextResponse.json(downsampledData);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// CSV parsing function (replace with your implementation)

// Max pooling downsampling function
function downsampleData(data: any, factor: any) {
  // console.log(data.split("\r\n"));
  //console.log(data);
  let a = data.split("\n");
  // console.log(a);
  let d: any = {};
  for (let i of a) {
    //  console.log(i);
    let z: number = parseInt(i.substring(0, 4));
    //  console.log(i.substring(0, 4));
    let z2: number = parseInt(i.substring(20, i.length));
    //console.log(z,z2);
    if (i[4] == "-") {
      if (d[z] == undefined) {
        d[z] = [z2, 1];
      } else {
        d[z][1] += 1;
        d[z][0] += z2;
      }
    }
  }
  //console.log(d);
  let aa = [];
  for (let i in d) {
    if ((d[i][0] != undefined || d[i][1] != undefined) && i.length > 0) {
      aa.push(d[i][0] / d[i][1], i);
    }
    //console.log(d[i][0],d[i][1]);
  }
   console.log(aa);
  /// console.log(d);
  return aa;
}
