import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../data/projects';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal Content */}
          <motion.div
            className="relative bg-gray-50 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Header */}
            <div className="sticky top-0 bg-gray-50 border-b border-gray-200 p-6 flex items-center justify-between rounded-t-3xl">
              <button
                onClick={onClose}
                className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
              <button className="bg-yellow-300 text-black px-4 py-2 rounded-full font-compita-semibold text-sm hover:bg-yellow-400 transition-colors">
                Start new project
              </button>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Project Title */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center">
                  <span className="text-white text-xl">♥</span>
                </div>
                <h1 className="text-4xl font-beni-regular text-black">{project.title}</h1>
              </div>

              {/* Project Description */}
              <div className="mb-12">
                {project.longDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-700 font-compita-semibold text-lg leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-12">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-white px-4 py-2 rounded-full text-sm font-compita-semibold text-gray-700 border border-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Color Palette */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-emerald-800 rounded-2xl p-6 text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="text-yellow-300">♥</span>
                      <span className="font-compita-semibold">{project.title}</span>
                    </div>
                    <div className="bg-yellow-300 rounded-xl p-4 text-black">
                      <div className="text-sm font-compita-semibold mb-1">Tim Evans</div>
                      <div className="text-xs opacity-70">**** **** **** 2847</div>
                      <div className="text-xs opacity-70 mt-2">Tim Evans</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-transparent"></div>
                </div>

                <div className="space-y-3">
                  {project.colors.map((color, index) => (
                    <div
                      key={index}
                      className="rounded-xl p-4 flex items-center justify-between"
                      style={{ 
                        backgroundColor: color.value,
                        color: color.textColor || '#000'
                      }}
                    >
                      <span className="font-compita-semibold">{color.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Brand Icons */}
              <div className="grid grid-cols-3 gap-4">
                {[0, 1, 2].map((index) => (
                  <div
                    key={index}
                    className="aspect-square rounded-2xl flex items-center justify-center"
                    style={{ 
                      backgroundColor: project.colors[index + 1]?.value || '#000',
                    }}
                  >
                    <div className="w-12 h-12 border-2 border-current rounded-xl flex items-center justify-center">
                      <span className="text-2xl">♥</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;