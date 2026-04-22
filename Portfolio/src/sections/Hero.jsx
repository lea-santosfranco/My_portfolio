import { Button } from "../components/Button";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <img
                    src="#"
                    alt="Image de fond dans le style Github"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
            </div>
            {/* Carré vert type répo github */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, index) => (
                    <div
                        key={index}
                        className="absolute w-5 h-5 opacity-50"
                        style={{
                            backgroundColor: `#0a970a`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>
            {/* Contenu principal */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Colonne de gauche (contenu textuel) */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                Software
                            </span>
                        </div>
                        {/* Titre principal */}
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-100">
                                Développeur <span className="font-serif italic font-normal text-white">Fullstack</span>
                                <br />
                                passionée par le web
                                <br />
                                <span className="font-serif italic font-normal text-white">
                                    et les défis web.
                                </span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-500">
                                Bonjour, je suis Léa SANTOS FRANCO, je conçois et développe des sites internet et applications mobiles.
                            </p>
                        </div>
                        {/* CTA Button */}
                        <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-500">
                            <Button
                                href="#contact"
                                size="lg"
                                className="animate-fade-in animation-delay-500"
                            >
                                Contactez-moi <ArrowRight className="w-5 h-5"/>
                            </Button>
                            <AnimatedBorderButton />
                        </div>
                        {/* Suivez-moi */}
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            <span className="text-sm text-muted-foreground">
                                Suivez-moi :{" "}
                            </span>
                            {[
                                { icon: FaGithub, href: "https://github.com/lea-santosfranco" },
                                { icon: FaLinkedin, href: "https://www.linkedin.com/in/lea1207/" },
                            ].map(({ icon: Icon, href }, index) => (
                                <a
                                    key={index}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full glass hover:primary/10 hover:text-primary transition-all duration-300"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                    {/* Colonne de droite (image) */}
                    <div className="relative max-w-md mx-auto">
                        <div className="absolute inset-0 rounded-3x1 bg-linear-to-br from-primary/30 via transparent to primary/10 blur-2x1 animate-pulse"/>
                        <div className="relative glass rounded-3x1 p-2 glow-border">
                            <img src="#" alt="photo de profil" className="w-full aspect-4/5 object-cover rounded-2x1" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
