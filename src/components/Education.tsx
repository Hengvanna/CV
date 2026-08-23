import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { Education } from '../types';

interface EducationProps {
  educations: Education[];
}

const EducationSection: React.FC<EducationProps> = ({ educations }) => {
  return (
    <section id="education" className="py-16 bg-[#13284c]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          title="Education"
          subtitle="My academic background and qualifications"
        />
        
        <div className="relative border-l-2 border-[#3db5e6] ml-3 md:ml-6 pl-8 space-y-12">
          {educations.map((education, index) => (
            <div 
              key={index}
              className="relative animate-fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute -left-12 mt-1.5 w-8 h-8 rounded-full bg-[#3db5e6] flex items-center justify-center shadow-md">
                <GraduationCap className="w-4 h-4 text-white" />
              </div>
              
              <div className="bg-[#0f2038] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">
                    {education.degree}
                  </h3>
                  
                  <div className="flex items-center text-white/70 mt-2 md:mt-0">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="text-sm">{education.period}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-lg text-[#3db5e6]">
                    {education.institution}
                  </h4>
                  <p className="text-white/70 text-sm">
                    {education.location}
                  </p>
                </div>
                
                {education.description && (
                  Array.isArray(education.description) ? (
                    <ul className="list-disc list-inside space-y-2 text-white">
                      {education.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-white">{education.description}</p>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;