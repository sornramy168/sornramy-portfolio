import { ThemeProvider } from "./context/ThemeContext.jsx";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import Hero from "./components/sections/Hero.jsx";
import About from "./components/sections/About.jsx";
import Skills from "./components/sections/Skills.jsx";
import Projects from "./components/sections/Projects.jsx";
import Experience from "./components/sections/Experience.jsx";
import Contact from "./components/sections/Contact.jsx";
import Footer from "./components/layout/Footer.jsx";
import TechStack from "./components/sections/TechStack.jsx";
import MotionGridBackground from "./components/effects/MotionGridBackground.jsx";

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="relative flex flex-col min-h-screen">
          
          {/* Background នៅខាងក្រោយគេ */}
          <MotionGridBackground />
          
          {/* Content នៅខាងលើ */}
          <div className="relative z-10 flex flex-col flex-grow">
            <Navbar />
            <main className="flex-grow">
              <Hero />
              <TechStack />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Contact />
            </main>
            <Footer />
          </div>
          
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}