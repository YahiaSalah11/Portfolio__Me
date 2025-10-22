import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { SkillsSection } from "./components/SkillsSection";
import { EducationSection } from "./components/EducationSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 text-white py-8 border-t border-blue-500/20">
        <div className="container mx-auto px-6 text-center">
          <motion.p
            className="text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            © 2025 Yahia Elsherif. Made with passion{" "}
            <motion.span
              className="inline-block"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ❤️
            </motion.span>
          </motion.p>
        </div>
      </footer>
    </div>
  );
}
