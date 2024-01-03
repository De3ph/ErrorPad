"use client";
import { Card, Typography } from "@/ui/index";
import { Employee } from "../types/Employee";
import { useEffect, useState } from "react"

const headerList = [
  "Picture",
  "Name",
  "Job",
  "Review",
  "Email",
  "Employed",
  "ID"
]

export default function EmployeeTable({ dataList = [{}] }) {
  const [employeeList, setEmployeeList] = useState<Employee[]>([])

  useEffect(() => {
    console.log(dataList)
    dataList.map((employee: any) => {
      setEmployeeList((employeeList) => [...employeeList, employee])
    })
  }, [])
  console.log(employeeList)
  return (
    <Card className='max-h-[46rem] w-full overflow-scroll'>
      <table className='w-full min-w-max table-auto text-left overflow-scroll'>
        <thead>
          <tr>
            {headerList.map((head: String, index: number) => (
              <th
                key={index}
                className='border-b border-blue-gray-100 bg-blue-gray-50 p-4'
              >
                <Typography
                  variant='small'
                  color='blue-gray'
                  className='font-normal leading-none opacity-70'
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {employeeList.map((employee: Employee, index: number) => {
            const isLast = index === employeeList.length - 1
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50"

            return (
              <tr key={employee?.id}>
                {employee.picLink ? (
                  <td className={classes}>
                    <img
                      className='h-16 w-16 rounded-full object-cover object-center'
                      src={employee.picLink}
                      alt='nature image'
                    />
                  </td>
                ) : (
                  <td className={classes}>
                    <img
                      className='h-12 w-12 rounded-full object-cover object-center'
                      src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/2048px-Windows_10_Default_Profile_Picture.svg.png'
                      alt='default image'
                    />
                  </td>
                )}

                <td className={classes}>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-normal'
                  >
                    {employee.name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-normal'
                  >
                    {employee.job}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-normal'
                  >
                    {employee.review}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-normal'
                  >
                    {employee.email}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-normal'
                  >
                    {employee.employedDate}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-normal'
                  >
                    {employee.id}
                  </Typography>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Card>
  )
}
