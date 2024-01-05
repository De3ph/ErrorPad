import React from "react"

import {
  SupabaseClient,
  createServerComponentClient
} from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
export const dynamic = "force-dynamic"

import pythonLogo from "@/images/python.png"
import csharpLogo from "@/images/csharp.png"
import javaLogo from "@/images/java.png"
import tsLogo from "@/images/ts.png"
import Image from "next/image"
import { Typography } from "@/ui/index"

type ChartData = {
  errorName: string
  count: number
}

const LangList = [
  {
    lang: "Python",
    image: pythonLogo,
    param: "python"
  },
  {
    lang: "C#",
    image: csharpLogo,
    param: "csharp"
  },
  {
    lang: "Java",
    image: javaLogo,
    param: "java"
  },
  {
    lang: "typescript",
    image: tsLogo,
    param: "ts"
  }
]

const getLangImage = (lang: string) => {
  return LangList.find((_) => _.param.toLowerCase() == lang.toLowerCase())
    ?.image
}

async function fetchData(supabase: SupabaseClient, lang: string) {
  try {
    let { data: errors, error } = await supabase
      .from("errors")
      .select("*")
      .eq("lang", lang)
    return errors
  } catch (error) {
    console.log(error)
  }
}

async function MyErrorsInLang({ params }: any) {
  const supabase = createServerComponentClient({ cookies })

  const errors = await fetchData(supabase, params.lang)

  let lang: any = LangList.find((lang) => params.lang == lang.param)

  const image = getLangImage(params.lang)
  let errorCount: ChartData[] = []

  errors?.forEach((_: any) => {
    if (_.lang == params.lang.toLowerCase()) {
      var index = errorCount.findIndex(({ errorName }) => errorName == _.code)
      index == -1
        ? errorCount.push({ errorName: _.code, count: 1 })
        : errorCount[index].count++
    }
  })

  return (
    <div className='container flex flex-col'>
      <header className='flex items-center gap-2'>
        <Image src={image} width={64} height={64} alt='lang logo' />
        <h2 className='text-4xl'>My {lang?.lang} Errors </h2>
      </header>
      <section>
        <table className='w-full min-w-max table-auto text-left overflow-scroll'>
          <thead>
            <tr>
              {/* <th className='border-b border-blue-gray-100 bg-blue-gray-50 p-4'>
                <Typography
                  variant='small'
                  color='blue-gray'
                  className='font-normal leading-none opacity-70'
                >
                  At Line
                </Typography>
              </th> */}
              <th className='border-b border-blue-gray-100 bg-blue-gray-50 p-4'>
                <Typography
                  variant='small'
                  color='blue-gray'
                  className='font-normal leading-none opacity-70'
                >
                  Error Name
                </Typography>
              </th>
              <th className='border-b border-blue-gray-100 bg-blue-gray-50 p-4'>
                <Typography
                  variant='small'
                  color='blue-gray'
                  className='font-normal leading-none opacity-70'
                >
                  Count
                </Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            {errorCount.map((error: ChartData, index: number) => (
              <tr key={index}>
                <td className='border px-4 py-2'>{error.errorName}</td>
                <td className='border px-4 py-2'>{error.count}</td>
              </tr>
            ))}

            {/* {errors?.map((error: any, index: number) => {
              return (
                <tr key={index}>
                  <td className='border px-4 py-2'>{error.line}</td>
                  <td className='border px-4 py-2'>{error.code}</td>
                  <td className='border px-4 py-2'>{error.message}</td>
                </tr>
              )
            })} */}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default MyErrorsInLang
