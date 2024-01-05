import React from "react";
import {
  SupabaseClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Button } from "@/ui/index";
import Link from "next/link";
import Image from "next/image";
import pylogo from "@/images/python.png";
import fetchUserData from "../methods/fetchuserdata";

async function adminDashboard() {
  const supabase = createServerComponentClient({ cookies });

  const session = await supabase.auth.getSession();

  if (session.data.session === null) {
    return <div>Unauthorized</div>;
  }

  return (
    <div className="container grid grid-cols-2 items-center justify-items-center gap-8">
      <div>
        <Link href="/adminDashboard/employeeList">
          <Button
            ripple={true}
            variant="outlined"
            className="text-4xl flex gap-4 justify-center items-center text-gray-800"
          >
            <h3>Employee List</h3>
          </Button>
        </Link>
      </div>
      <div>
        <Link href="/adminDashboard/newEmployee">
          <Button
            ripple={true}
            variant="outlined"
            className="text-4xl flex gap-4 justify-center items-center text-gray-800"
          >
            Create New Employee
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default adminDashboard;
