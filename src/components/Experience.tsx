import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { Experience } from '../types';

interface ExperienceProps {
  experiences: Experience[];
}

const ExperienceSection: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section id="experience" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey and roles"
        />
        
        <div className="relative border-l-2 border-blue-600 dark:border-blue-500 ml-3 md:ml-6 pl-8 space-y-12">
          {experiences.map((experience, index) => (
            <div 
              key={index}
              className="relative animate-fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute -left-12 mt-1.5 w-8 h-8 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center shadow-md">
                <Briefcase className="w-4 h-4 text-white" />
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {experience.title}
                  </h3>
                  
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="text-sm">{experience.period}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-lg text-blue-600 dark:text-blue-400">
                    {experience.company}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {experience.location}
                  </p>
                </div>
                
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  {experience.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {experience.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;