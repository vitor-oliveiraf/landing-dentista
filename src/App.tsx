import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Services from "./components/Services";
import ResultsBeforeAfter from "./components/ResultsBeforeAfter";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import MobileCTA from "./components/MobileCTA";
import { useRevealOnScroll } from "./hook/useRevealOnScroll";

export default function App() {
  useRevealOnScroll();

  return (
    <>
      <Header />
      <main id="top" className="hero">
        <Hero />
      </main>

      <Benefits />
      <Services />
      <ResultsBeforeAfter />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />

      <FloatingWhatsApp />
      <MobileCTA />
    </>
  );
}
