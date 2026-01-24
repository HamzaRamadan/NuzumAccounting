import './App.css'
import About from './components/About'
import AdditionalServices from './components/AdditionalServices'
import { Analytics } from './components/Analytics'
import Contact from './components/Contact'
import FloatingFeatures from './components/FloatingFeatures'
import Footer from './components/Footer'
import Home from './components/Home'
import Partners from './components/Partners'
import PricingSection from './components/Price'
import Reviews from './components/Reviews'
import WhoAre from './components/WhoAre'
import WhyChoose from './components/WhyChoose'

function App() {

  return (
    <>
     <Analytics
        gtmId="GTM-125455"
        fbPixelId=""
        clarityId=""
      />
     <Home />
     <FloatingFeatures/>
     <About />
     <WhoAre />
     <PricingSection />
     <AdditionalServices />
     <Partners />
     <WhyChoose />
     <Reviews />
     <Contact />
     <Footer />
    </>
  )
}

export default App


// service_ii9h6xw                     template_b969o32        xfBdJV0Wg9Lj2jxwQ