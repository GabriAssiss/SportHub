import AboutSection from "../components/About";
import ActivitySection from "../components/ActivitySection";
import { ContactSection } from "../components/Contact";
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

