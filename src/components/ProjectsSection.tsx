import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { link } from "fs";

const projects = [

  {
    id: 2,
    title: "Law Office Management App",
    description: "Law office website featuring services, lawyer profiles, appointment booking, and contact options.",
    images: [
      "/inprogress1.jpg"
        ],
    link: "",
    gradient: "from-blue-600 to-cyan-600"
  },
  {
    id: 3,
    title: "MotorBike Shop",
    description: "Bike shop web app showcasing products with filtering, ordering, reviews, and multi-language support (English/Arabic).",
    images: [
      "/elbossely1.png",
      "/elbossely2.png",
      "/elbossely3.png"
    ],
    link: "https://elbossely-bikeshop-frontend-2rin.vercel.app/",
    gradient: "from-cyan-600 to-teal-600"
  },
  {
    id: 4,
    title: "Find My Art",
    description: "Art discovery app using the MetMuseum API to search and explore paintings, artists, and artworks.",
    images: [
      "/findmyart1.png"
    ],
    link: "https://github.com/YahiaSalah11/FindmyArt",
    gradient: "from-indigo-600 to-purple-600"
  },
  {
    id: 5,
    title: "Cloude Monet Gallery",
    description: "Collaborative project management tool with real-time updates.",
    images: [
      "/ClaudeMonetGallery.png"
    ],
    link: "https://github.com/YahiaSalah11/gallerieWithReact",
    gradient: "from-pink-600 to-rose-600"
  },
  {
    id: 6,
    title: "WhatsApp Clone",
    description: "Full-stack chat app like WhatsApp using React, Node.js, Express, and Socket.io.",
    images: [
      "/WhatsappClone.png"
    ],
    link: "",
    gradient: "from-emerald-600 to-green-600"
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute bottom-10 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="overflow-hidden border-2 border-blue-500/20 bg-gradient-to-br from-slate-800/80 to-blue-900/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 h-full">
                <Carousel className="w-full">
                  <CarouselContent>
                    {project.images.map((image, imgIndex) => (
                      <CarouselItem key={imgIndex}>
                        <div onClick={() => window.open(project.link, "_blank")} className="aspect-video relative overflow-hidden">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.4 }}
                          >
                            <ImageWithFallback
                              src={image}
                              alt={`${project.title} screenshot ${imgIndex + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </motion.div>
                          <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 hover:opacity-20 transition-opacity duration-300`}></div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {project.images.length > 1 && (
                    <>
                      <CarouselPrevious className="left-2 bg-slate-800/80 border-cyan-400/50 hover:bg-slate-700" />
                      <CarouselNext className="right-2 bg-slate-800/80 border-cyan-400/50 hover:bg-slate-700" />
                    </>
                  )}
                </Carousel>
                <CardContent onClick={() => window.open(project.link, "_blank")} className="p-6">
                  <motion.h3
                    className="text-xl mb-2 text-cyan-400"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-gray-300">{project.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              onClick={() => window.open("https://github.com/YahiaSalah11", "_blank")}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg shadow-blue-500/50"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              More Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
