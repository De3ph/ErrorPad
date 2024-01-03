import React from "react";
import { Button } from "@/ui/index";
import Link from "next/link";
import Image from "next/image";
import pylogo from "@/images/python.png"

function adminDashboard() {
  return (
    <div className="container grid grid-cols-2 items-center justify-items-center gap-8">
      <div>
        <Link href="/adminDashboard/py">
          <Button
            ripple={true}
            variant="outlined"
            className="text-4xl flex gap-4 justify-center items-center text-gray-800"
          >
            <Image width={48} height={48} src={pylogo} alt="py logo" />
            <h3>Python</h3>
          </Button>
        </Link>
      </div>
      <div>
        <Link href="/adminDashboard/py">
          <Button
            ripple={true}
            variant="outlined"
            className="text-4xl flex gap-4 justify-center items-center text-gray-800"
          >
            <Image width={48} height={48} src={pylogo} alt="py logo" />
            Python
          </Button>
        </Link>
      </div>
      <div>
        <Link href="/adminDashboard/py">
          <Button
            ripple={true}
            variant="outlined"
            className="text-4xl flex gap-4 justify-center items-center text-gray-800"
          >
            <Image width={48} height={48} src={pylogo} alt="py logo" />
            Python
          </Button>
        </Link>
      </div>
      <div>
        <Link href="/adminDashboard/py">
          <Button
            ripple={true}
            variant="outlined"
            className="text-4xl flex gap-4 justify-center items-center text-gray-800"
          >
            <Image width={48} height={48} src={pylogo} alt="py logo" />
            Python
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default adminDashboard;
