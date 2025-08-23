import React, { useRef } from 'react';
import { ArrowRight, Heart } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { Project } from '../data/projects';

interface WorkSectionProps {
  projects: Project[];
  onProjectSelect: (project: Project) => void;
}

const WorkSection: React.FC<WorkSectionProps> = ({ projects, onProjectSelect }) => {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, margin: "-100px" });

  const titleVariants = {
    hidden: {
      clipPath: "inset(0 100% 0 0)",
      backgroundPositionX: "100%"
    },
    visible: {
      clipPath: "inset(0 0% 0 0)",
      backgroundPositionX: "0%",
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2 
          ref={titleRef}
          className="text-6xl md:text-8xl lg:text-9xl font-beni-regular text-gradient-fill mb-16 text-center"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{
            backgroundImage: "linear-gradient(90deg, #000000 0%, #000000 50%, #D1D5DB 50%, #D1D5DB 100%)",
            backgroundSize: "200% 100%"
          }}
        >
          My Work
        </motion.h2>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
              onClick={() => onProjectSelect(project)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                    <Heart className="w-4 h-4 text-white fill-white" />
                  </div>
                  <h3 className="text-2xl font-beni-regular text-black">{project.title}</h3>
                </div>
                <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all duration-300" />
              </div>

              <p className="text-gray-600 font-compita-semibold text-lg leading-relaxed mb-8 max-w-2xl">
                {project.shortDescription}
              </p>

              {/* Project Preview Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl p-6 h-64 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center text-white">
                    <Heart className="w-6 h-6 text-yellow-300 fill-yellow-300 mx-auto mb-2" />
                    <div className="text-yellow-300 font-compita-semibold text-lg">{project.title}</div>
                    <div className="text-white/80 text-sm mt-4">
                      {project.title} offers
                    </div>
                  </div>
                  {/* Gradient overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <div className="bg-gray-100 rounded-2xl p-4 h-64 flex items-center justify-center">
                  <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm">
                    <div className="text-center">
                      <div className="text-lg font-compita-semibold text-gray-800 mb-2">
                        Innovative solutions for
                      </div>
                      <div className="text-sm text-gray-600 mb-4">modern businesses</div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-gray-100 rounded-lg h-16"></div>
                        <div className="bg-gray-100 rounded-lg h-16"></div>
                        <div className="bg-gray-100 rounded-lg h-16"></div>
                        <div className="bg-gray-100 rounded-lg h-16"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;