import React from "react";
import EmployeeTable from "../employeeTable";
import data from "@/employees.json";
import { Employee } from "@/app/types/Employee";

const langs = [
  {
    paramsName: "py",
    name: "Python",
  },
  {
    paramsName: "js",
    name: "JavaScript",
  },
  {
    paramsName: "csharp",
    name: "C#",
  },
];

function LangEmployees({ params }: any) {
  return (
    <div className="w-full p-8">
      <header className="w-full text-2xl flex items-center mb-4 text-gray-900">
        <h1>{langs.find((lang) => lang.paramsName == params.lang)?.name}</h1>
      </header>
      <div className="w-full">
        <EmployeeTable dataList={data} />
      </div>
    </div>
  );
}

export default LangEmployees;
