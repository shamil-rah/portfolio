import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import WorkSection from './components/WorkSection';
import ProjectModal from './components/ProjectModal';
import TechStackMarquee from './components/TechStackMarquee';
import { projects, Project } from './data/projects';
import { techStack } from './data/techStack';

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const heroRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLElement>(null);
  const storyRef = useRef<HTMLElement>(null);
  const chatRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = [heroRef.current, workRef.current, storyRef.current, chatRef.current];
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToWork = () => {
    const workSection = document.getElementById('work-section');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
      setActiveSection('work-section');
    }
  };

  const handleStoryClick = () => {
    const storySection = document.getElementById('story-section');
    if (storySection) {
      storySection.scrollIntoView({ behavior: 'smooth' });
      setActiveSection('story-section');
    }
  };

  const handleChatClick = () => {
    const chatSection = document.getElementById('chat-section');
    if (chatSection) {
      chatSection.scrollIntoView({ behavior: 'smooth' });
      setActiveSection('chat-section');
    }
  };

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <div 
        ref={heroRef}
        id="hero"
        className="relative min-h-screen font-compita-semibold flex flex-col justify-between overflow-hidden"
      >
        {/* Gradient Background Animation */}
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ scaleY: 1.6, opacity: 0.6 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "linear" }}
          style={{
            transformOrigin: "top center",
            background: 'radial-gradient(ellipse 150% 140% at top center, #38BDF8 0%, #38BDF8 6%, #F0F9FF 50%, #FFFFFF 95%)'
          }}
        />

        {/* Navigation Bar */}
        <div className="pt-6 md:pt-8 flex justify-center relative z-20">
          <nav className="bg-black rounded-full px-4 md:px-6 py-2 md:py-3 flex items-center space-x-4 md:space-x-6">
            <div className={`rounded-full px-2 md:px-3 py-1 flex items-center space-x-1 transition-colors ${
              activeSection === 'hero' ? 'bg-yellow-300 text-black' : 'text-gray-300 hover:text-white'
            }`}>
              <Sparkles className="w-4 h-4 text-black" />
              <span className="text-xs md:text-sm font-medium text-black">Hey</span>
            </div>
            <span
              onClick={scrollToWork}
              className={`text-xs md:text-sm font-medium cursor-pointer transition-colors px-2 md:px-3 py-1 rounded-full ${
                activeSection === 'work-section' ? 'bg-yellow-300 text-black' : 'text-gray-300 hover:text-white'
              }`}
            >
              Work
            </span>
            <span
              onClick={handleStoryClick}
              className={`text-xs md:text-sm font-medium cursor-pointer transition-colors px-2 md:px-3 py-1 rounded-full ${
                activeSection === 'story-section' ? 'bg-yellow-300 text-black' : 'text-gray-300 hover:text-white'
              }`}
            >
              Story
            </span>
            <span
              onClick={handleChatClick}
              className={`text-xs md:text-sm font-medium cursor-pointer transition-colors px-2 md:px-3 py-1 rounded-full ${
                activeSection === 'chat-section' ? 'bg-yellow-300 text-black' : 'text-gray-300 hover:text-white'
              }`}
            >
              Chat
            </span>
          </nav>
        </div>

        
        <div className="px-4 md:px-8 pb-6 md:pb-8 relative z-10">
          
          
          <motion.h1 
            className="relative z-20 text-gray-500 text-2xl sm:text-3xl md:text-4xl leading-relaxed font-compita-semibold font-normal max-w-full md:max-w-4xl mb-4"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 30, delay: 0.6 }}
          >
            Howdy! Meet your trusted design partner,<br />
            crafting strong brands for SaaS and Web3.
          </motion.h1>

          
          <div className="relative z-10 text-left">
            <div className="text-black font-beni-regular text-[6rem] sm:text-[10rem] md:text-[12rem] lg:text-[16rem] leading-none tracking-normal md:tracking-[0.05em] lg:tracking-[0.05em]">
              Shamil Rahman
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Marquee */}
      <TechStackMarquee techStack={techStack} />

      
      <section ref={workRef} id="work-section">
        <WorkSection projects={projects} onProjectSelect={handleProjectSelect} />
      </section>

      {/* Story Section */}
      <section ref={storyRef} id="story-section" className="min-h-screen bg-white py-16 px-4 md:px-8 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-6xl md:text-8xl font-beni-regular text-black mb-8">My Story</h2>
          <p className="text-gray-600 font-compita-semibold text-lg max-w-2xl">
            Coming soon - Learn about my journey in design and development.
          </p>
        </div>
      </section>

      {/* Chat Section */}
      <section ref={chatRef} id="chat-section" className="min-h-screen bg-gray-50 py-16 px-4 md:px-8 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-6xl md:text-8xl font-beni-regular text-black mb-8">Let's Chat</h2>
          <p className="text-gray-600 font-compita-semibold text-lg max-w-2xl">
            Coming soon - Get in touch to discuss your next project.
          </p>
        </div>
      </section>
      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </>
  );
}

export default App;
