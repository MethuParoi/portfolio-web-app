"use client";

import { metadata } from "./metadata";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/ui/Footer";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IoMdHome } from "react-icons/io";
import { MdRocketLaunch } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import { usePathname, useRouter } from "next/navigation";

// const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname();
  const isRoot = pathname === "/";

  const handleNavigation = (id: string) => {
    if (isRoot) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 1500);
    }
  };
  return (
    //  <StoreProvider>
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
      </head>
      <body className="bg-black-100">
        <main className=" md:px-0 md:mx-auto min-h-screen min-w-screen flex flex-col justify-between overflow-x-hidden">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* navbar */}
            <FloatingNav
              navItems={[
                {
                  name: "Home",
                  onClick: () => {
                    router.push("/");
                  },
                  icon: (
                    <IoMdHome className="h-4 w-4 text-neutral-500 dark:text-white" />
                  ),
                },

                {
                  name: "Projects",
                  onClick: () => handleNavigation("my-projects"),
                  icon: (
                    <MdRocketLaunch className="h-4 w-4 text-neutral-500 dark:text-white" />
                  ),
                },

                {
                  name: "Contact",
                  onClick: () => handleNavigation("get-in-touch"),
                  icon: (
                    <BiMessageDetail className="h-4 w-4 text-neutral-500 dark:text-white" />
                  ),
                },
              ]}
            />
            <div className="flex-grow">{children}</div>

            <Footer />
          </ThemeProvider>
        </main>
      </body>
    </html>
    // <ToastContainer
    //       position="top-right"
    //       autoClose={5000}
    //       hideProgressBar={false}
    //       newestOnTop={false}
    //       closeOnClick
    //       rtl={false}
    //       pauseOnFocusLoss
    //       draggable
    //       pauseOnHover
    //       theme="colored"
    //     />
    //  </StoreProvider>
  );
}
