import { Mail, Phone} from "lucide-react";

export const ContactSection = () => {

    return (
        <section id ="contact" className="py-24 px-4 relative bg-secondary/30"> 
        <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center justify-center py-10">
            Get in <span className="text-primary"> Touch </span>
        </h2>
        <div className="text-center">
            <div className="space-y-8">
                <div className=" text-center space-y-6 justify-center">
                   {/*Email */}
                    <div className="flex items-center justify-center space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                        <Mail className="h-6 w-7 text-primary"/>
                        </div>
                        <div className="items-center">
                            <h4 className="font-medium">
                                Email: 
                            </h4>
                            <a href="mailto:kentgabrielle0827@gmail.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                kentgabrielle0827@gmail.com
                            </a>
                        </div>
                    </div>
                     {/*Phone Number */}
                    <div className="flex items-center justify-center space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                        <Phone className="h-6 w-7 text-primary"/>
                        </div>
                        <div className="items-center">
                            <h4 className="font-medium">
                                Phone Number: 
                            </h4>
                            <p> 0933 812 9383 (SMART)</p>
                            <p> 0991 210 7367 (DITO)</p>
                        </div>
                    </div>
                </div>
            </div>
            {/*Other side of the Grid, Contact Form */}
                </div>
            </div>
        </section>
    );
};