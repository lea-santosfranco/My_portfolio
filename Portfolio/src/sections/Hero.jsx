import { Button } from "../components/Button";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import {
  SiJavascript, SiTypescript, SiPython, SiDart, SiPhp,
  SiReact, SiFlutter, SiSymfony, SiNodedotjs,
  SiHtml5, SiCss, SiTailwindcss,
  SiGit, SiGithub, SiDocker, SiSupabase, SiMysql,
} from "react-icons/si";

const skills = [
  { label: "JavaScript",   Icon: SiJavascript,  color: "#F7DF1E" },
  { label: "TypeScript",   Icon: SiTypescript,  color: "#3178C6" },
  { label: "Python",       Icon: SiPython,      color: "#3776AB" },
  { label: "Dart",         Icon: SiDart,        color: "#00B4AB" },
  { label: "PHP",          Icon: SiPhp,         color: "#8892be" },
  { label: "React",        Icon: SiReact,       color: "#61DAFB" },
  { label: "React Native", Icon: SiReact,       color: "#61DAFB" },
  { label: "Flutter",      Icon: SiFlutter,     color: "#54C5F8" },
  { label: "Symfony",      Icon: SiSymfony,     color: "#ffffff" },
  { label: "Node.js",      Icon: SiNodedotjs,   color: "#339933" },
  { label: "HTML",         Icon: SiHtml5,       color: "#E34F26" },
  { label: "CSS",          Icon: SiCss,         color: "#264de4" },
  { label: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { label: "Git",          Icon: SiGit,         color: "#F05032" },
  { label: "GitHub",       Icon: SiGithub,      color: "#ffffff" },
  { label: "Docker",       Icon: SiDocker,      color: "#2496ED" },
  { label: "Supabase",     Icon: SiSupabase,    color: "#3ECF8E" },
  { label: "MySQL",        Icon: SiMysql,       color: "#4479A1" },
];

const colors = [
    "radial-gradient(circle, #b44fff77 0%, #b44fff00 70%)",
    "radial-gradient(circle, #ff2d9e66 0%, #ff2d9e00 70%)",
    "radial-gradient(circle, #b44fff55 0%, #ff2d9e44 50%, transparent 70%)",
];

const orbs = [...Array(12)].map((_, i) => {
    const col = i % 4;
    const row = Math.floor(i / 4);
    return {
        top: `${(row / 3) * 100 + Math.random() * 30}%`,
        left: `${(col / 4) * 100 + Math.random() * 22}%`,
        size: 150 + Math.random() * 250,
        background: colors[i % colors.length],
        animationDuration: `${14 + Math.random() * 10}s`,
        animationDelay: `${Math.random() * 4}s`,
    };
});

export const Hero = () => {

    return (
      <section className="relative min-h-screen flex items-center overflow-hidden">
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
          <div className="max-w-5xl mx-auto text-center space-y-8">
            {/*Titre principal*/}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Développeuse{" "}
                <span className="text-primary glow-text">Full-Stack</span>
                <br />
                <span className="font-serif italic font-normal text-white">
                  Web & Mobile
                </span>
              </h1>
              <div className="flex justify-center animate-fade-in animation-delay-200">
                <div className="h-1 w-24 rounded-full bg-gradient-to-r from-primary to-highlight" />
              </div>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto animate-fade-in animation-delay-600">
                Bonjour, je suis Léa Santos Franco.
                Je conçois et développe des applications web et mobile.
              </p>
            </div>

            {/*Boutons*/}
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in animation-delay-300">
              <Button href="#contact" size="lg">
                Contactez-moi <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton href="/cv.pdf" download="CV_Lea_Santos_Franco.pdf">
              </AnimatedBorderButton>
            </div>

            {/* Réseaux sociaux */}
            <div className="flex items-center justify-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Suivez-moi :</span>
              {[
                { icon: FaGithub,   href: "https://github.com/lea-santosfranco" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/lea1207" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mt-24 animate-fade-in animation-delay-600">
            <p className="text-xs text-primary font-medium tracking-widest uppercase mb-6 text-center">
              Stack technique
            </p>
            <div className="relative overflow-hidden">
              <div className="flex animate-marquee">
                {[...skills, ...skills].map((skill, id) => (
                  <div key={id} className="shrink-0 flex items-center gap-2 px-7 py-4">
                    <skill.Icon
                      className="w-5 h-5 shrink-0"
                      style={{ color: skill.color }}
                    />
                    <span className="text-lg font-semibold text-muted-foreground/50 hover:text-secondary-foreground transition-colors whitespace-nowrap">
                      {skill.label}
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
