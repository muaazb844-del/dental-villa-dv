import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

import Hero from "@/components/home/Hero";
import Trust from "@/components/home/Trust";
import Services from "@/components/home/Services";
import Doctor from "@/components/home/Doctor";
import WhyChoose from "@/components/home/WhyChoose";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import BeforeAfter from "@/components/home/BeforeAfter";
import FAQ from "@/components/home/FAQ";
import Contact from "@/components/home/Contact";
import Map from "@/components/home/Map";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>

        <Hero />

        <Trust />

        <Services />

        <Doctor />

        <WhyChoose />

        <Testimonials />

        <CTA />

        <BeforeAfter />

        <FAQ />

        <Contact />

        <Map />

      </main>

      <Footer />

      <WhatsAppButton />

    </>
  );
}