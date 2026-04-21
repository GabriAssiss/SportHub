import AboutSection from "../components/AboutSection";
import ActivitySection from "../components/ActivitySection";
import { ContactSection } from "../components/ContactSection";
import HeroSection from "../components/HeroSection";

export default function Home() {
    return (
        <>
            <HeroSection />
            <ActivitySection />
            <AboutSection />
            <ContactSection />
        </>
    )
}

