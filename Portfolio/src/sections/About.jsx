import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "[Valeur 1]",
    description: "[Description de ta première valeur ou point fort.]",
  },
  {
    icon: Rocket,
    title: "[Valeur 2]",
    description: "[Description de ta deuxième valeur ou point fort.]",
  },
  {
    icon: Users,
    title: "[Valeur 3]",
    description: "[Description de ta troisième valeur ou point fort.]",
  },
  {
    icon: Lightbulb,
    title: "[Valeur 4]",
    description: "[Description de ta quatrième valeur ou point fort.]",
  },
];


export const About = () => {
    return (
      <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/*Colonne de gauche*/}
            <div className="space-y-8">
              <div className="animate-fade-in ">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                  A propos de moi
                </span>
              </div>
              <h2
                className=" text-4xl md:text-5xl font-bold leading-tight animate-fade-in
                                        animation-delay-100 text-secondary-foreground"
              >
                [Titre accrocheur],
                <span className="font-serif italic font-normal text-white">
                  {" "}
                  [sous-titre en italique.]
                </span>
              </h2>
              <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                <p>[Paragraphe 1 — ton parcours et qui tu es.]</p>
                <p>[Paragraphe 2 — ta spécialité et ce que tu sais faire.]</p>
                <p>[Paragraphe 3 — ce qui te motive ou ta vie en dehors du code.]</p>
              </div>
              <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                <p className="text-lg font-medium italic text-foreground">
                  [Citation ou phrase qui te représente.]
                </p>
              </div>
            </div>
            {/*Colonne de droite - highligts*/}
            <div className="grid sm:grid-cols-2 gap-6">
                {highlights.map((item, id) => (
                    <div
                        key={id}
                        className="glass rounded-2xl p-6 animate-fade-in"
                        style={{animationDelay: `${id + 1 * 100}ms`}}
                    >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center
                                        mb-4 hover:bg-primary/200">
                            <item.icon className="w-6 h-6 text-primary"/>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    );
}
