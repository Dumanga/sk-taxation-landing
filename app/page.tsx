import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Updates } from "@/components/Updates";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollCompanion } from "@/components/ScrollCompanion";

export default function Home() {
  return (
    <main>
      <Header />
      <ScrollCompanion />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Process />
      <Updates />
      <Contact />
      <Footer />
    </main>
  );
}
