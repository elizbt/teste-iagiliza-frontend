import styles from "./page.module.css";
import HeroSection from "@/Components/HeroSection/HeroSection";
import { Features } from "@/Components/FeaturesSection/FeaturesSection";

export default function Home() {
  return ( 
    <div>
      <main>
        <HeroSection/>
        <Features/>
      </main>
    </div>
  )
}
