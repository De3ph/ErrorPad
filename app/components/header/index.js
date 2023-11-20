import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import LogoutButton from "@/components/logoutButton";

async function Header() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="p-5 flex justify-end items-center bg-white shadow-sm text-gray-800">
      {user ? (
        <div className="flex items-center gap-4">
          Hey, {user.email}!
          <LogoutButton />
        </div>
      ) : (
        <div
          href="/login"
          className="py-2 px-4 rounded-md no-underline bg-gray-500 hover:bg-btn-background-hover"
        >
          Login
        </div>
      )}
    </div>
  );
}

export default Header;
