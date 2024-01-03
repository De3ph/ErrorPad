import React from "react";
import { Card, CardBody, CardFooter } from "@/ui/index";
import BarChartComponent from "@/components/barchart";
import data from "@/errors.json";
import { ErrorData, Data } from "../types/Error";
import Languages from "./languages";

type ChartData = {
  name: string;
  count: number;
};

function myErrors() {
  let errorCount: ChartData[] = [];
  data.map((error: Data) => {
    var index = errorCount.findIndex(({ name }) => name == error.lang);
    index == -1
      ? errorCount.push({ name: error.lang, count: 1 })
      : errorCount[index].count++;
  });
  console.log(errorCount);
  return (
    <Card className=" flex flex-col items-center gap-4 ">
      <h2 className=" text-4xl">My All Errors</h2>
      <div className="flex flex-col md:flex-row">
        <BarChartComponent dataList={errorCount} />
        <Languages />
      </div>
    </Card>
  );
}

export default myErrors;
