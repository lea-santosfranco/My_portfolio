import { FaGithub, FaLinkedin } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="border-t border-border/40 py-8">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Léa Santos Franco
        </p>
        <div className="flex items-center gap-3">
          {[
            { icon: FaGithub,   href: "https://github.com/lea-santosfranco" },
            { icon: FaLinkedin, href: "https://www.linkedin.com/in/lea1207" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              <social.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
