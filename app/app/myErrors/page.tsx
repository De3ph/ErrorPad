import React from "react"
import { Card, CardBody, CardFooter } from "@/ui/index"
import BarChartComponent from "@/components/barchart"
import { ErrorData, Data } from "../types/Error"
import Languages from "./languages"
import { supabase } from "@/app/util/supabaseClient"

type ChartData = {
  name: string
  count: number
}

async function fetchData() {
  try {
    let { data: errors, error } = await supabase.from("errors").select("*")
    return errors
  } catch (error) {
    console.log(error)
  }
}

async function myErrors() {
  const errors = await fetchData()
  let errorCount: ChartData[] = []

  errors?.forEach((_: any) => {
    _?.errors?.data.forEach((error: Data) => {
      var index = errorCount.findIndex(({ name }) => name == error?.lang)
      index == -1
        ? errorCount.push({ name: error?.lang, count: 1 })
        : errorCount[index].count++
    })
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
