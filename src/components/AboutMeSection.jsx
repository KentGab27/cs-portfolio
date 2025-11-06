import { Code, Computer, School, User, User2 } from "lucide-react";

export const AboutMeSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me </span>
                </h2>
                {/* Something about me */}
                <div className="grid cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Building My Path in Web Development
                        </h3>
                        <p className="text-muted-foreground">As a Computer Science student, I’m still building my foundation in web development. 
                            I’m eager to learn, practice, and work on projects that help me understand both design and development better.</p>
                        <div className="flex flex-col sm:flex-row gap-4 pt=4 justify-center">
                            <a href="https://github.com/KentGab27" className="cosmic-button"
                            target="_blank">
                                My Github Repository
                            </a>

                            <a href="/projects/My_CV.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                View My CV
                            </a>
                        </div>
                    </div>
                    {/* Interests*/}
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                               <div className="p-3 rounded-full bg-primary/10">
                               <User2 className="h-6 w-6 text-primary"/>
                                </div> 
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Interests </h4>
                                    <p className="text-muted-foreground"> - Web Development </p>
                                    <p className="text-muted-foreground"> - Machine Learning </p>
                                </div>
                            </div>
                        </div>
                        {/* Education*/}
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                               <div className="p-3 rounded-full bg-primary/10">
                               <School className="h-6 w-6 text-primary"/>
                                </div> 
                                 <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Education </h4>
                                    <p className="text-muted-foreground"> Studying Bachelors of Computer Science</p>
                                    <p>at <a href="https://mcm.edu.ph/" className="text-primary" target="_blank">Mapua Malayan Colleges Mindanao</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};