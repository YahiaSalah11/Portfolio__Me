import { Code2, Smartphone, Cloud } from "lucide-react";
import { motion } from "motion/react";

export function SkillsSection() {
  const skills = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Smartphone,
      title: "Progressive Web Apps",
      description: "⚡ Progressive Web Applications (PWA) in normal and SPA Stacks",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "⚡ Integration of third party services such as Firebase / AWS / Digital Ocean",
      gradient: "from-cyan-500 to-teal-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 right-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <motion.h2
            className="text-4xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What I Do
          </motion.h2>
          <motion.p
            className="text-xl text-cyan-400 uppercase tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Crazy Full Stack Developer Who Wants To Explore Every Tech Stack
          </motion.p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="space-y-4 p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-blue-900/30 border border-blue-500/20 backdrop-blur-sm"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "rgba(34, 211, 238, 0.5)",
                  boxShadow: "0 20px 40px rgba(34, 211, 238, 0.2)"
                }}
              >
                <motion.div
                  className="flex justify-center"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={`p-4 bg-gradient-to-br ${skill.gradient} rounded-full shadow-lg`}>
                    <skill.icon className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
                <p className="text-gray-300">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
