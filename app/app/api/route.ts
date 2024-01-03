import { NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"

export const dynamic = "force-dynamic"

export async function GET() {
  return NextResponse.json({
    message: "Hi"
  })
}

// Handles inserting new errors to db
export async function POST(req: NextRequest) {
  const supabase = createRouteHandlerClient({ cookies })

  const body = await req.json()

  const { data, error } = await supabase
    .from("errors")
    .insert(body?.data)
    .select()

  if (error) {
    console.log("🚀 ~ file: route.ts:23 ~ POST ~ error:", error)
    return NextResponse.json({
      message: "failed"
    })
  }

  console.log("ok")

  return NextResponse.json({
    message: "ok"
  })
}
