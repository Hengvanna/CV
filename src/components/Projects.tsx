import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';
import { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projects" className="scroll-mt-24 py-20 bg-[#10243f]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          title="Projects"
          subtitle="Some of my recent work and contributions"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group rounded-2xl border border-white/10 bg-[#0b1c33] overflow-hidden shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 animate-fadeIn"
      style={{ animationDelay: `${index * 0.2}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {project.image && (
        <div className="relative overflow-hidden h-64">
          <img 
            src={project.image} 
            alt={project.title} 
            className={`w-full h-full transition-transform duration-500 group-hover:scale-110 ${
              project.imageContain ? 'object-contain bg-[#f98012] p-8' : 'object-cover'
            }`}
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-100 md:opacity-0 md:group-hover:opacity-100'
          }`}>
            <div className="absolute bottom-4 left-4 flex space-x-2">
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#13284c] text-white p-2 rounded-full hover:bg-[#3db5e6] transition-colors"
                  aria-label="View GitHub Repository"
                >
                  <Github size={20} />
                </a>
              )}
              
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#13284c] text-white p-2 rounded-full hover:bg-[#3db5e6] transition-colors"
                  aria-label="View Live Project"
                >
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
      
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-white mb-3">
          {project.title}
        </h3>
        
        <p className="text-white/80 mb-4 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, idx) => (
            <span 
              key={idx}
              className="px-2.5 py-1 text-xs bg-[#13284c] text-[#3db5e6] border border-[#3db5e6]/40 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-3 mt-4">
          {project.github && (
            <Button 
              href={project.github} 
              variant="outline" 
              size="sm" 
              icon={Github}
            >
              View Code
            </Button>
          )}
          
          {project.secondaryLink && (
            <Button 
              href={project.secondaryLink} 
              variant="outline" 
              size="sm" 
              icon={ExternalLink}
            >
              {project.secondaryLabel || 'Learn More'}
            </Button>
          )}
          
          {project.link && (
            <Button 
              href={project.link} 
              variant="primary" 
              size="sm" 
              icon={ExternalLink}
            >
              {project.linkLabel || 'View Project'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
