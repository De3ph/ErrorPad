import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  console.log(req.json())
  return NextResponse.json("hi")
}
