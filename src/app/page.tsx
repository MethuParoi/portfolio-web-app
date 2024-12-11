import Hero from "@/components/hero/Hero";
import TechStack from "@/components/tech-stack/TechStack";

export default function Home() {
  return (
    <main className=" relative flex flex-col justify-start items-center overflow-hidden mx-auto min-h-screen ">
      <Hero />
      <TechStack />
    </main>
  );
}
