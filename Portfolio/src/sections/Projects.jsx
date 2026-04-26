import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { AnimatedBorderButton} from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "[Nom du projet 1]",
    description: "[Description courte du projet — ce qu'il fait, pour qui, le contexte.]",
    image: null,
    tags: ["[Tech 1]", "[Tech 2]"],
    link: "#",
    github: "#",
  },
  {
    title: "[Nom du projet 2]",
    description: "[Description courte du projet — ce qu'il fait, pour qui, le contexte.]",
    image: null,
    tags: ["[Tech 1]", "[Tech 2]"],
    link: "#",
    github: "#",
  },
  {
    title: "[Nom du projet 3]",
    description: "[Description courte du projet — ce qu'il fait, pour qui, le contexte.]",
    image: null,
    tags: ["[Tech 1]", "[Tech 2]"],
    link: "#",
    github: "#",
  },
  {
    title: "[Nom du projet 4]",
    description: "[Description courte du projet — ce qu'il fait, pour qui, le contexte.]",
    image: null,
    tags: ["[Tech 1]", "[Tech 2]"],
    link: "#",
    github: "#",
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
              [Sous-titre de section]
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100
                                text-secondary-foreground"
            >
              [Titre de la section]
              <span className="font-serif italic font-normal text-white">
                {" "}
                [en italique]
              </span>
            </h2>
            <p className="text-muted-foreground animate-fade-in animation-delay-200">
              [Phrase d'introduction de tes projets.]
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
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground text-sm">
                      [Image du projet]
                    </div>
                  )}
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
