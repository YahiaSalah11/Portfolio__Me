import { Button } from "./ui/button";
import { Github, Linkedin, Instagram, Mail, Download } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import Lottie from "lottie-react";
import WavingAnimations from '../../public/WavingAnimations.json';



export function HeroSection() {
  const handleContactEmail = () => {
    window.location.href = "mailto:yahiaelsherif2002@gmail.com";
  };

  const handleDownloadResume = () => {
    const fileUrl = `${import.meta.env.BASE_URL}Software Engineer Resume - Yahia Salah.pdf`;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "r Resume - Yahia Salah.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  const socialLinks = [
    { icon: Github, href: "https://github.com/YahiaSalah11", color: "hover:bg-purple-600" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/yahia-elsherif-b486841b5/", color: "hover:bg-blue-600" },
    { icon: Instagram, href: "https://www.instagram.com/yahiasalah11/", color: "hover:bg-pink-600" }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xl text-cyan-400">Hi All, I'm</p>
              <h1 className="text-5xl bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Yahia
              </h1>
              <h2 className="text-3xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Full-Stack Developer
              </h2>
            </motion.div>

            <motion.p
              className="text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A dedicated Full Stack Developer 🚀 transitioning from a background in Data Science and AI, 
              skilled in creating dynamic web applications with JavaScript, Node.js, and EJS, 
              and passionate about building smart, data-driven backend systems.
            </motion.p>

            {/* Social Links */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full bg-gradient-to-br from-blue-900 to-slate-800 border border-blue-500/30 hover:border-cyan-400/50 transition-all ${social.color}`}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-6 h-6 text-gray-300" />
                </motion.a>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex gap-4 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  onClick={handleContactEmail} 
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg shadow-blue-500/50"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  onClick={handleDownloadResume} 
                  variant="outline"
                  className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-3xl opacity-30"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >









                <div className='TypingAnimation'>
                  <Lottie
                    animationData={WavingAnimations}
                    loop={true}
                  className="relative rounded-3xl shadow-2xl shadow-blue-500/50 w-full h-auto border-2 border-blue-500/30"
                  />
                </div>












                
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
