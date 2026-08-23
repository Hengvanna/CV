import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { PersonalInfo } from '../types';

interface AboutProps {
  personalInfo: PersonalInfo;
}

const About: React.FC<AboutProps> = ({ personalInfo }) => {
  return (
    <section id="about" className="py-16 bg-[#13284c]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          title="About Me"
          subtitle="Get to know me and my background"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-white mb-6 leading-relaxed">
              I am an aspiring software developer with strong interests in mobile and web development.
              I have hands-on experience building applications using Flutter, React, and Laravel, with
              both SQLite and MySQL databases.
            </p>
            
            <p className="text-lg text-white mb-6 leading-relaxed">
              I enjoy creating full-stack solutions such as dashboards, APIs, and course management systems.
            </p>
            
            <p className="text-lg text-white mb-6 leading-relaxed">
              I continuously improve my technical skills through Udemy courses and self-directed learning.
            </p>
            
            <p className="text-lg text-white leading-relaxed">
              Dedicated and detail-oriented, I aim to become a proficient full-stack or mobile developer
              capable of building scalable and user-friendly applications.
            </p>
          </div>
          
          <div className="bg-[#0f2038] rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold text-white mb-6">
              Personal Information
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-[#3db5e6] mr-3" />
                <div>
                  <h4 className="text-sm text-white/70">Email</h4>
                  <p className="text-lg text-white">
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="hover:text-[#3db5e6] transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-[#3db5e6] mr-3" />
                <div>
                  <h4 className="text-sm text-white/70">Phone</h4>
                  <p className="text-lg text-white">
                    <a 
                      href={`tel:${personalInfo.phone}`}
                      className="hover:text-[#3db5e6] transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-[#3db5e6] mr-3" />
                <div>
                  <h4 className="text-sm text-white/70">Location</h4>
                  <p className="text-lg text-white">{personalInfo.location}</p>
                </div>
              </div>
            </div>
            
            <hr className="my-6 border-white/20" />
            
            <h3 className="text-2xl font-bold text-white mb-6">
              Languages
            </h3>
            
            <div className="space-y-2">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-base text-white">English</span>
                  <span className="text-sm text-white/70">Basic</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-[#3db5e6] h-2 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-base text-white">Khmer</span>
                  <span className="text-sm text-white/70">Native</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-[#3db5e6] h-2 rounded-full" style={{ width: '100%' }}></div>
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
