import React from "react"

import {
  SupabaseClient,
  createServerComponentClient
} from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
export const dynamic = "force-dynamic"

import { Card } from "@/ui/index"
import BarChartComponent from "@/components/barchart"
import { Data } from "../types/Error"
import Languages from "./languages"

type ChartData = {
  name: string
  count: number
}

async function fetchData(supabase: SupabaseClient, userEmail?: string) {
  try {
    let { data: errors, error } = await supabase
      .from("errors")
      .select("*")
      .eq("user_email", userEmail)
    return errors
  } catch (error) {
    console.log(error)
  }
}

async function myErrors() {
  const supabase = createServerComponentClient({ cookies })

  const session = await supabase.auth.getSession()

  if (session.data.session === null) {
    return <div>Unauthorized</div>
  }

  const errors = await fetchData(supabase, session.data.session.user.email)

  let errorCount: ChartData[] = []

  errors?.forEach((error: Data) => {
    var index = errorCount.findIndex(({ name }) => name == error?.lang)
    index == -1
      ? errorCount.push({ name: error?.lang, count: 1 })
      : errorCount[index].count++
  })

  return (
    <Card className=' flex flex-col items-center gap-4 '>
      <h2 className=' text-4xl'>My All Errors</h2>
      <div className='flex flex-col md:flex-row'>
        <BarChartComponent dataList={errorCount} />
        <Languages />
      </div>
    </Card>
  )
}

export default myErrors
