import { ExternalLink } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Auto Vision",
        description: "A machine learning based Android application created for a Thesis to detect external damage on sedan vehicles and generate repair cost estimates.",
        image: "/projects/AutoVision_Logo.png",
        tags: ["Python", "Kotlin", "Android Studio", "YOLO v8"],
        githubUrl: "https://github.com/KentGab27/AutoVision"
    },
    {
        id: 2,
        title: "CellScope",
        description: "A machine learning based Android application created for an App Dev final project to detect and classify blood cells.",
        image: "/projects/CellScope_Logo.png",
        tags: ["Python", "Kotlin", "Android Studio", "YOLO v8"],
        githubUrl: "https://github.com/KentGab27/CellScope"
    },
    {
        id: 3,
        title: "Web Programming Frontend Project",
        description: "A single page Frontend project Web programming class",
        image: "/projects/WebProg.png",
        tags: ["HTML", "CSS", "JavaScript"],
        githubUrl: "https://github.com/KentGab27/Web-Programming-Frontend-Project"
    }
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    My <span className="text-primary">Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of the projects I’ve worked on as part of my learning journey. Each one helped me practice 
                    new skills, explore different tools, and grow as a developer.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <a
                            key={key}
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover block hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-bold mb-5">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-3 text-justify">
                                    {project.description}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};
