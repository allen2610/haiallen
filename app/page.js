import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import MyWorks from "@/components/MyWorks";
import Footer from "@/components/Footer"; 
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe/>
      <MyWorks/>
      <Footer/>
    </main>
  );
}
