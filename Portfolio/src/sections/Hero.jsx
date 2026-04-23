import { Button } from "../components/Button";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const skills = [
    "IA",
    "JavaScript",
    "React",
    "React Native",
    "Node.js",
    "TypeScript",
    "MongoDB",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Next.js",
    "Express.js",
    "Figma",
    "Git",
    "Docker",
    "Github Actions",
    "PostgreSQL",
    "SQL",
    "WordPress",
    "PHP",
];

const orbs = [...Array(12)].map(() => {
    const size = 80 + Math.random() * 160;
    const colors = [
        "radial-gradient(circle, #b44fff55 0%, #b44fff00 70%)",
        "radial-gradient(circle, #ff2d9e44 0%, #ff2d9e00 70%)",
        "radial-gradient(circle, #b44fff33 0%, #ff2d9e22 50%, transparent 70%)",
    ];
    return {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size,
        background: colors[Math.floor(Math.random() * colors.length)],
        animationDuration: `${18 + Math.random() * 22}s`,
        animationDelay: `${Math.random() * 6}s`,
    };
});

export const Hero = () => {

    return (
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/bg-typeGithub.png"
            alt="Image de fond style github"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        {/* Orbes flottantes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {orbs.map((orb, index) => (
            <div
              key={index}
              className="absolute rounded-full"
              style={{
                width: orb.size,
                height: orb.size,
                background: orb.background,
                top: orb.top,
                left: orb.left,
                filter: "blur(24px)",
                animation: `slow-drift ${orb.animationDuration} ease-in-out infinite`,
                animationDelay: orb.animationDelay,
              }}
            />
          ))}
        </div>

        {/*Contenu principal*/}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/*Colonne de gauche contenu textuel*/}
            <div className="space-y-8">
              <div className="animate-fade-in">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  Software
                </span>
              </div>
              {/*Titre principal*/}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-100">
                  Développeur{" "}
                  <span className="text-primary glow-text">Fullstack</span>
                  <br />
                  passionné par le code
                  <br />
                  <span className="font-serif italic font-normal text-white">
                    et les défis web.
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-600">
                  Bonjour, je suis Léa SANTOS FRANCO
                  <br />
                  Je conçois et développe des applications web et mobile.
                </p>
              </div>
              {/*Bouton d'appel à l'action*/}
              <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                <Button
                  href="#contact"
                  size="lg"
                  className="animate-fade-in animation-delay-800"
                >
                  Contactez-moi <ArrowRight className="w-5 h-5" />
                </Button>
                <AnimatedBorderButton>
                  <Download className="w-5 h-5"/>
                  Download CV
                </AnimatedBorderButton>
              </div>
              {/* Réseau sociaux */}
              <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                <span className="text-sm text-muted-foreground">
                  Suivez-moi :{" "}
                </span>
                {[
                  { icon: FaGithub,   href: "https://github.com/lea-santosfranco" },
                  { icon: FaLinkedin, href: "https://www.linkedin.com/in/lea1207" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  >
                    {<social.icon className="w-5 h-5" />}
                  </a>
                ))}
              </div>
            </div>

            {/*Colonne de droite image profil*/}
            <div className="relative animate-fade-in animation-delay-300">
              <div className="relative max-w-md mx-auto">
                <div
                  className="absolute inset-0 rounded-3xl bg-linear-to-br
                                from-primary/30 via-transparent to primary/10
                                blur-2xl animate-pulse"
                />
                <div className="relative glass rounded-3xl p-2 glow-border">
                  <img
                    src="/BaldMan.jpg"
                    alt="photo de profil"
                    className="w-full aspect-[4/5] object-cover rounded-2xl"
                  />
                  {/*Badge flottant*/}
                  <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm font-medium">
                        Disponible pour de nouvelles opportunités
                      </span>
                    </div>
                  </div>
                  {/* Stats du badge */}
                  <div className="absolute -top-4 -let-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                    <div className="text-2xl font-bold text-primary">5+</div>
                    <div className="text-xs text-muted-foreground">
                      Années Exp.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="mt-20 animate-fade-in animation-delay-600">
            <p className="text-sm text-muted-foreground mb-6 text-center">
                Technologie pratiqués
            </p>
            <div className="relative overflow-hidden">
              <div className="flex animate-marquee">
                {[...skills, ...skills].map((skill, id) => (
                <div key={id} className="shrink-0 px-8 py-4 ">
                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-secondary-foreground transition-colors">
                        {skill}
                    </span>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>

        {/*Scroll*/}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2
                        animate-fade-in animation-delay-800">
            <a
                href="#about"
                className="flex flex-col items-center gap-2 text-secondary-foreground
                           hover:text-primary transition-colors"
            >
                <span className="text-xs uppercase tracking-wider">Scroll</span>
                <ChevronDown className="w-6 h-6 animate-bounce" />
            </a>
        </div>
      </section>
    );
}
