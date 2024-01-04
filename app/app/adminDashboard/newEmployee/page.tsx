import React from "react";
import CreateEmployeeForm from "./createEmployeeForm";
import {
  SupabaseClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

async function page() {
  const supabase = createServerComponentClient({ cookies });

  const session = await supabase.auth.getSession();

  if (session.data.session === null) {
    return <div>Unauthorized</div>;
  }

  var companyMail = session.data.session.user.email?.split("@")[1];
  return (
    <div className="flex w-full px-8 justify-center gap-2">
      <CreateEmployeeForm mail={companyMail} />
    </div>
  );
}

export default page;
