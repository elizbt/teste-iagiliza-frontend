import HeroSection from "@/Components/HeroSection/HeroSection";
import { Features } from "@/Components/FeaturesSection/FeaturesSection";
import TestimonialsSection from "@/Components/TestimonialsSection/TestimonialsSection";
import Footer from "@/Components/Footer/Footer";


export default function Home() {
  return ( 
    <div>
      <main>
        <HeroSection />
        <Features />
        <TestimonialsSection />

        <Footer />
      </main>
    </div>
  )
}
