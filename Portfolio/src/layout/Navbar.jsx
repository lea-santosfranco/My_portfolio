



import { Button } from "../components/Button";

const navLinks = [
    { href: "#about", label: "A propos" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
];


export const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 right-0 bg-transparent py-5">
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a>
                    Portfolio<span>.</span>
                </a>

                <div className="hidden md:flex items-center gap-4">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {navLinks.map((link, index) => (
                            <a key={index} href={link.href} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <Button size="sm">Contactez-moi</Button>
                </div>
            </nav>
        </header>
    )
}