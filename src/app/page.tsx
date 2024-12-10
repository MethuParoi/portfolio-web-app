import Hero from "@/components/hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" relative flex flex-col justify-center items-center overflow-hidden mx-auto ">
      <Hero />
    </main>
  );
}
