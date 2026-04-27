import { Code2, GraduationCap, Lightbulb, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Back-end avant tout",
    description: "J'aime concevoir des architectures solides et des APIs bien pensées. Le back-end, c'est là où la vraie logique prend vie.",
  },
  {
    icon: Rocket,
    title: "Fascinée par l'IA",
    description: "L'intelligence artificielle représente pour moi la frontière la plus stimulante du développement. J'explore activement ses possibilités.",
  },
  {
    icon: GraduationCap,
    title: "Reconversion par passion",
    description: "Issue d'un DEUG en cultures digitales, j'ai fait le choix de me reconvertir pour exercer enfin le métier qui me passionnait depuis toujours.",
  },
  {
    icon: Lightbulb,
    title: "Touche-à-tout assumée",
    description: "Je ne me limite pas à une seule techno. Explorer de nouveaux langages et frameworks, c'est ce qui nourrit ma curiosité et ma progression.",
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
                <span className="text-primary text-sm font-medium tracking-wider uppercase">
                  À propos de moi
                </span>
              </div>
              <h2
                className=" text-4xl md:text-5xl font-bold leading-tight animate-fade-in
                                        animation-delay-100 text-secondary-foreground"
              >
                Curieuse de nature,
                <span className="font-serif italic font-normal text-white">
                  {" "}
                  développeuse par conviction.
                </span>
              </h2>
              <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                <p>J'ai toujours été attirée par la tech, mais j'ai mis du temps à oser franchir le pas. Après un DEUG en Langues Étrangères Appliquées, spécialité Cultures Digitales et Nouveaux Médias, j'ai décidé de tout changer et de me lancer dans le développement full-stack. Un choix qui aligne enfin ma passion avec mon métier.</p>
                <p>Je suis à l'aise aussi bien côté front-end que back-end, mais c'est la logique serveur qui me passionne vraiment. Inspirée par des proches dans le métier, portée d'abord par un apprentissage autodidacte puis par une formation de Conceptrice Développeuse d'Applications, j'aime explorer plusieurs langages et frameworks pour comprendre ce que chacun apporte, sans jamais me limiter à un seul écosystème.</p>
                <p>Ce que j'aime par-dessus tout dans ce métier, c'est résoudre des problèmes et créer des choses concrètes. Cette curiosité m'a amenée tout naturellement vers l'intelligence artificielle, un domaine que j'adore et qui représente pour moi l'un des défis les plus stimulants de la tech aujourd'hui.</p>
              </div>
              <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                <p className="text-lg font-medium italic text-foreground">
                  «J'ai choisi le développement pour passer de la simple utilisation à la création. Je n'ai jamais regardé en arrière.»
                </p>
              </div>
            </div>
            {/*Colonne de droite - highligts*/}
            <div className="grid sm:grid-cols-2 gap-6">
                {highlights.map((item, id) => (
                    <div
                        key={id}
                        className="glass rounded-2xl p-6 animate-fade-in"
                        style={{animationDelay: `${(id + 1) * 100}ms`}}
                    >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center
                                        mb-4 hover:bg-primary/20">
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
