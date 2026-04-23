import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { AnimatedBorderButton} from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Portfolio",
    description:
      "Un portfolio personnel pour présenter mes projets et compétences, c'est un tuto pour mes apprenants.",
    image: "/projectImg/portfolio.png",
    tags: ["React", "Tailwind CSS"],
    link: "#",
    github: "https://github.com/devJeremie/Tuto-Portfolio",
  },
  {
    title: "Chamborelle",
    description:
      "Site de vente online pour une entreprise de lunettes françaises, avec gestion des stocks et paiements sécurisés, ainsi qu'une grosse partie admin et gestion des commerciaux",
    image: "/projectImg/chamborelle.png",
    tags: ["PHP", "Symfony ,CSS"],
    link: "https://chamborelle.com/",
    github: "Private Repository",
  },
  {
    title: "Jeux d'échec",
    description:
      "Un jeu d'échec en ligne avec une interface utilisateur interactive, des fonctionnalités de jeu en temps réel et un système de classement des joueurs.",
    image: "/projectImg/chassGame.png",
    tags: ["Html", "Javascript ,CSS, minimax"],
    link: "#",
    github: "https://github.com/devJeremie/testChessGame",
  },
  {
    title: "Créas de Lynca",
    description:
      "Site e-commerce pour une créatrice de bijoux artisanaux, avec une boutique en ligne conviviale, un système de paiement sécurisé et une gestion des stocks efficace.",
    image: "/projectImg/creasLynca.png",
    tags: ["Php", "Javascript ,CSS, Wordpress"],
    link: "https://lescreasdelynca.fr/",
    github: "Private Repository",
  },
  {
    title: "PacMan",
    description:
      "Un jeu PacMan en ligne avec des graphismes rétro, des niveaux stimulants et une jouabilité fluide pour une expérience de jeu nostalgique.",
    image: "/projectImg/pacMan.png",
    tags: ["Html canvas", "Javascript ,CSS"],
    link: "#",
    github: "https://github.com/devJeremie/Pac-Man-Project",
  },
  {
    title: "WashAndWork",
    description:
      "Site de nettoyage automobile avec réservation en ligne, gestion des services et des horaires, et options de paiement sécurisées.",
    image: "/projectImg/washandwork.png",
    tags: ["Php", "Javascript ,CSS, wordpress"],
    link: "#",
    github: "https://washandwork.pro/",
  },
];

export const Projects = () => {
    return (
      <section id="projects" className="py-32 relative overflow-hidden">
        {/* Background brillant */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-6 relative z-10">
          {/* Header Section */}
          <div className="text-center mx-auto max-w-3xl mb-16">
            <span
              className="text-secondary-foreground text-sm font-medium tracking-wider uppercase 
                                    animation-fade-in"
            >
              Travaux vedettes
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100
                                text-secondary-foreground"
            >
              Projets
              <span className="font-serif italic font-normal text-white">
                {" "}
                qui font la différence
              </span>
            </h2>
            <p className="text-muted-foreground animate-fade-in animation-delay-200">
              Une petite selection de travaux récents, de la plus silple a un
              peu plus complexe pour des clients ou apprenants.
            </p>
          </div>
          {/*Projet avec grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, id) => (
              <div
                key={id}
                className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                style={{ animationDelay: `${id + 1 * 100}ms` }}
              >
                {/*Image des projets*/}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 bg-linear-to-t from-card via-card/50
                               to-transparent opacity-60"
                  />
                  {/* Liens overlay*/}
                  <div
                    className="absolute inset-0 flex items-center justify-center gap-4
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <a
                      href={project.link}
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground 
                      transition-all "
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                    <a
                      href={project.github}
                      className="p-3 rounded-full glass hover:bg-primary  hover:text-primary-foreground 
                      transition-all "
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                {/* Contenu */}
                <div className="p-6 space-y-4 ">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight 
                      className="w-5 h-5 text-muted-foreground group-hover:text-primary
                                 group-hover:translate-x-1 group-hover:translate-y-1 transition-all" 
                    />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagId) => (
                      <span 
                        key={tagId}
                        className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border
                                      border-border/50 text-muted-foreground hover:border-primary/50
                                      hover:text-primary transition-all duration-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Vue de tout les projets*/}
          <div className="text-center mt-12 animate-fade-in animation-delay-500">
            <AnimatedBorderButton>
              Voir tous les projets
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </div>
        </div>
      </section>
    );
}