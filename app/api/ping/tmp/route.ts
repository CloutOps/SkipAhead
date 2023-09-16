import { NextResponse } from "next/server";

function handler() {
  const sampleResponse = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
  };

  return NextResponse.json(sampleResponse, {
    status: 200,
    statusText: "SUCCESS",
  });
}

export { handler as GET };
