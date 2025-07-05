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
    <section id="projects" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
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
      className="group bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-fadeIn"
      style={{ animationDelay: `${index * 0.2}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {project.image && (
        <div className="relative overflow-hidden h-64">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="absolute bottom-4 left-4 flex space-x-2">
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-900 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
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
                  className="bg-gray-900 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
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
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
          {project.title}
        </h3>
        
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, idx) => (
            <span 
              key={idx}
              className="px-2 py-1 text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3 mt-4">
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
          
          {project.link && (
            <Button 
              href={project.link} 
              variant="primary" 
              size="sm" 
              icon={ExternalLink}
            >
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;