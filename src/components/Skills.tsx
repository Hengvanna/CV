import React, { useState } from 'react';
import SectionHeading from './ui/SectionHeading';
import ProgressBar from './ui/ProgressBar';
import { Skill } from '../types';

interface SkillsProps {
  skills: Skill[];
}

type CategoryTab = 'all' | 'frontend' | 'backend' | 'database' | 'devops' | 'tools' | 'soft';

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const [activeTab, setActiveTab] = useState<CategoryTab>('all');
  
  const tabs: { id: CategoryTab; label: string }[] = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'devops', label: 'DevOps' },
    { id: 'tools', label: 'Tools' },
    { id: 'soft', label: 'Soft Skills' },
  ];
  
  const filteredSkills = 
    activeTab === 'all' 
      ? skills 
      : skills.filter(skill => skill.category === activeTab);
  
  return (
    <section id="skills" className="py-16 bg-[#13284c]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          title="Skills"
          subtitle="My technical expertise and proficiency levels"
        />
        
        <div className="mb-8 overflow-x-auto">
          <div className="inline-flex space-x-2 border-b border-white/20 pb-2 min-w-full">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === tab.id
                    ? 'bg-[#3db5e6] text-white'
                    : 'text-white/80 hover:bg-white/10'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-[#0f2038] rounded-lg p-6 shadow-md transition-transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-white">
                  {skill.name}
                </h3>
                <span className="text-sm font-medium text-white/70">
                  {skill.level}%
                </span>
              </div>
              
              <ProgressBar 
                value={skill.level} 
                animated 
                showLabel={false} 
                showValue={false} 
              />
              
              <div className="mt-4">
                <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                  skill.category === 'frontend' ? 'bg-blue-900 text-blue-200' :
                  skill.category === 'backend' ? 'bg-green-900 text-green-200' :
                  skill.category === 'database' ? 'bg-yellow-900 text-yellow-200' :
                  skill.category === 'devops' ? 'bg-red-900 text-red-200' :
                  skill.category === 'tools' ? 'bg-purple-900 text-purple-200' :
                  'bg-indigo-900 text-indigo-200'
                }`}>
                  {skill.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
