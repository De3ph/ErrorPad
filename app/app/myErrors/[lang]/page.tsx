import React from "react";
import data from "@/errors.json";
import { ErrorData, Data } from "@/app/types/Error";
import pythonLogo from "@/images/Python-logo-notext.svg.png";
import csharpLogo from "@/images/Logo_C_sharp.svg.png";
import javaLogo from "@/images/1200px-Java_Logo.svg.png";
import jsLogo from "@/images/JavaScript-logo.png";
import Image from "next/image";

type ChartData = {
  errorName: string;
  count: number;
};

const LangList = [
  {
    lang: "Python",
    image: pythonLogo,
    param: "py",
  },
  {
    lang: "C#",
    image: csharpLogo,
    param: "csharp",
  },
  {
    lang: "Java",
    image: javaLogo,
    param: "java",
  },
  {
    lang: "JavaScript",
    image: jsLogo,
    param: "js",
  },
];

function MyErrorsInLang({ params }: any) {
  var lang: any = LangList.find((lang) => params.lang == lang.param);
  let errorCount: ChartData[] = [];
  data.map((error: Data) => {
    if (error.lang == params.lang.toUpperCase()) {
      var index = errorCount.findIndex(
        ({ errorName }) => errorName == error.code
      );
      index == -1
        ? errorCount.push({ errorName: error.code, count: 1 })
        : errorCount[index].count++;
    }
  });
  console.log(errorCount);
  return (
    <div className="container flex flex-col">
      <header className="flex items-center gap-2">
        <Image src={lang?.image} width={64} height={64} alt="lang logo"></Image>
        <h2 className="text-4xl">My {lang?.lang} Errors </h2>
      </header>
    </div>
  );
}

export default MyErrorsInLang;
