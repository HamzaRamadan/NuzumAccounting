import { FaWhatsapp } from "react-icons/fa";
import "./App.css";
import About from "./components/About";
// import AdditionalServices from "./components/AdditionalServices";
import { Analytics } from "./components/Analytics";
import Contact from "./components/Contact";
import FloatingFeatures from "./components/FloatingFeatures";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Partners from "./components/Partners";
import PricingSection from "./components/Price";
import Reviews from "./components/Reviews";
import WhoAre from "./components/WhoAre";
import WhyChoose from "./components/WhyChoose";

function App() {
  return (
    <>
      <Analytics gtmId="GTM-125455" fbPixelId="" clarityId="" />
      <Home />
      <FloatingFeatures />
      <About />
      <WhoAre />
      <PricingSection />
      {/* <AdditionalServices /> */}
      <Partners />
      <WhyChoose />
      <Reviews />
      <Contact />
      <Footer />

      <a
        href="https://wa.me/+966564280855"
        target="_blank"
        aria-label="WhatsApp"
        className="
    fixed bottom-6 right-6 z-50
    w-16 h-16
    flex items-center justify-center
    rounded-full
    bg-[#25D366]
    text-white
    shadow-lg
    hover:scale-110
    transition
  "
      >
        <FaWhatsapp className="w-8 h-8" />
      </a>
    </>
  );
}

export default App;

// service_ii9h6xw                     template_b969o32        xfBdJV0Wg9Lj2jxwQ
