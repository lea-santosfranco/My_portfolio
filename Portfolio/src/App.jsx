import { Navbar } from "@/layout/Navbar";
import { Footer } from "@/layout/Footer";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Contact } from "@/sections/Contact";
function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <div className="h-px w-2/3 mx-auto bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <About />
        <div className="h-px w-2/3 mx-auto bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <Projects />
        <div className="h-px w-2/3 mx-auto bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
export default App
