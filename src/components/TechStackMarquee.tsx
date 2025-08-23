import React from 'react';
import { TechItem } from '../data/techStack';

interface TechStackMarqueeProps {
  techStack: TechItem[];
}

const TechStackMarquee: React.FC<TechStackMarqueeProps> = ({ techStack }) => {
  return (
    <div className="w-full overflow-hidden bg-gray-50 py-8 border-t border-gray-200">
      <div className="marquee-container">
        <div className="marquee-content">
          {/* First set of items */}
          {techStack.map((tech, index) => (
            <div key={`first-${index}`} className="marquee-item">
              <img 
                src={tech.logoUrl} 
                alt={tech.name}
                className="w-12 h-12 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {techStack.map((tech, index) => (
            <div key={`second-${index}`} className="marquee-item">
              <img 
                src={tech.logoUrl} 
                alt={tech.name}
                className="w-12 h-12 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackMarquee;