import "./globals.css";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Sidebar from "@/components/sidebar";
import fetchUserData from "./methods/fetchuserdata";

export const metadata = {
  title: "eRRoRpad",
  description: "Lets Solve the Errors Together",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();
  let userData = null;
  if (user) userData = await fetchUserData(user.id);

  return (
    <html lang="en">
      <body className="grid bg-background text-black">
        <header>
          <Header user={userData} />
        </header>

        <main className="flex place-self-stretch min-h-screen">
          <nav className="h-full hidden md:block max-w-screen-sm">
            {userData ? <Sidebar user={userData} /> : <></>}
          </nav>
          <nav className="h-full md:hidden max-w-screen-sm">
            <div>mobile nav</div>
          </nav>
          <section className="py-16 px-8 w-full">{children}</section>
        </main>

        <footer className="w-full grid items-stretch">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
