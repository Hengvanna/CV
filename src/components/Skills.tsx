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
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills"
          subtitle="My technical expertise and proficiency levels"
        />
        
        <div className="mb-8 overflow-x-auto">
          <div className="inline-flex space-x-2 border-b border-gray-200 dark:border-gray-700 pb-2 min-w-full">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
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
              className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md transition-transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {skill.name}
                </h3>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
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
                  skill.category === 'frontend' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' :
                  skill.category === 'backend' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                  skill.category === 'database' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' :
                  skill.category === 'devops' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300' :
                  skill.category === 'tools' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300' :
                  'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300'
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