import { Card, CardContent } from "./ui/card";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { motion } from "motion/react";

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-blue-950 via-slate-900 to-blue-950">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>
        
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="border-2 border-blue-500/30 bg-gradient-to-br from-slate-800/80 to-blue-900/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <motion.div
                    className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full shadow-lg shadow-blue-500/50"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <GraduationCap className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="flex-1 space-y-3">
                    <motion.h3
                      className="text-2xl text-cyan-400"
                      whileHover={{ x: 5 }}
                    >
                      Cairo University
                    </motion.h3>
                    <p className="text-lg text-gray-300">
                      Bachelor of Computer Science - Artificial Intelligence Section
                    </p>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>September 2020 - April 2024</span>
                    </div>
                    <motion.div
                      className="flex items-center gap-2 text-cyan-400"
                      whileHover={{ x: 5 }}
                    >
                      <Award className="w-4 h-4" />
                      <span>GPA: 3.0 | Graduation Project: A+</span>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
