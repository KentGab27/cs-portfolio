import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import {StarBackground} from "@/components/StarBackground";
import { HomeSection } from "../components/HomeSection";
import {AboutMeSection} from "../components/AboutMeSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { FooterSection } from "../components/FooterSection";

export const Home = () => {
    return <div  className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Theme toggle */}
        <ThemeToggle />

        {/* Background Effects */}
        <StarBackground/>

        {/* Navigation Bar */}
        <Navbar></Navbar>

        {/* Main */}
        <main>
            <HomeSection/>
            <AboutMeSection/>
            <SkillsSection/>
            <ProjectsSection/>
            <ContactSection/>
        </main>
        

        {/* Footer */}
        <FooterSection />
    </div>
};