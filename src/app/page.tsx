import HeroSection from "@/Components/HeroSection/HeroSection";
import { Features } from "@/Components/FeaturesSection/FeaturesSection";
import TestimonialsSection from "@/Components/TestimonialsSection/TestimonialsSection";


export default function Home() {
  return ( 
    <div>
      <main>
        <HeroSection/>
        <Features/>
        <TestimonialsSection/>
      </main>
    </div>
  )
}
