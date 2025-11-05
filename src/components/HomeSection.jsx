import { ArrowDown } from "lucide-react";

export const HomeSection = () => {
    return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in"> Hello, I am </span>
                    <span></span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1"> Kent </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-2"> Gabrielle </span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4"> I’m currently improving my UI/UX Design abilities 
                    and discovering more about Machine Learning as part of my continuous learning journey.
                </p>
                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button">
                        View My Projects
                    </a>
                </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <ArrowDown className="h-10 w-10 text-primary"/>
        </div>
    </section>
    );
};