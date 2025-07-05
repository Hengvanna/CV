import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { PersonalInfo } from '../types';

interface AboutProps {
  personalInfo: PersonalInfo;
}

const About: React.FC<AboutProps> = ({ personalInfo }) => {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Get to know me and my background"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate fullstack developer who loves building innovative web applications.
              With a strong foundation in both frontend and backend technologies, I enjoy creating
              seamless user experiences and solving complex problems.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              My journey in software development began during my computer science studies, and
              I've since worked with various technologies and frameworks to deliver high-quality
              solutions. I'm constantly learning and adapting to new technologies to stay at the
              forefront of the industry.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Outside of coding, I enjoy hiking, reading tech blogs, and contributing to open-source
              projects. I'm always looking for new challenges and opportunities to grow as a developer.
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Personal Information
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400">Email</h4>
                  <p className="text-lg text-gray-800 dark:text-white">
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400">Phone</h4>
                  <p className="text-lg text-gray-800 dark:text-white">
                    <a 
                      href={`tel:${personalInfo.phone}`}
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400">Location</h4>
                  <p className="text-lg text-gray-800 dark:text-white">{personalInfo.location}</p>
                </div>
              </div>
            </div>
            
            <hr className="my-6 border-gray-200 dark:border-gray-700" />
            
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Languages
            </h3>
            
            <div className="space-y-2">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-base text-gray-700 dark:text-gray-300">English</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Native</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-base text-gray-700 dark:text-gray-300">Spanish</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Intermediate</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-base text-gray-700 dark:text-gray-300">German</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Basic</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;