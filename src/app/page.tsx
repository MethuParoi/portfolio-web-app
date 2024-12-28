import GetInTouch from "@/components/get-in-touch/GetInTouch";
import Hero from "@/components/hero/Hero";
import MyClients from "@/components/my-clients/MyClients";
import MyProjects from "@/components/my-projects/MyProjects";
import TechStack from "@/components/tech-stack/TechStack";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { BiMessageDetail } from "react-icons/bi";
import { IoMdHome } from "react-icons/io";
import { MdRocketLaunch } from "react-icons/md";

export default function Home() {
  return (
    <main className=" relative flex flex-col justify-start items-center overflow-hidden mx-auto min-h-screen ">
      <FloatingNav
        navItems={[
          {
            name: "Home",
            link: "/",
            icon: (
              <IoMdHome className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
          },

          {
            name: "Projects",
            link: "/contact",
            icon: (
              <MdRocketLaunch className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
          },

          {
            name: "Contact",
            link: "/contact",
            icon: (
              <BiMessageDetail className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
          },
        ]}
      />
      <Hero />
      <TechStack />
      <MyProjects />
      <MyClients />
      <GetInTouch />
    </main>
  );
}
