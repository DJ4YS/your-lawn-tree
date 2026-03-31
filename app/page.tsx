import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Services />
        <Pricing />
        <Gallery />
        <About />
        <Reviews />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
}
