import React from 'react';
import { Github as GitHub, Linkedin, Heart } from 'lucide-react';
import { PersonalInfo } from '../types';

interface FooterProps {
  personalInfo: PersonalInfo;
}

const Footer: React.FC<FooterProps> = ({ personalInfo }) => {
  const currentYear = new Date().getFullYear();
  
  const socialIcons: Record<string, React.ReactNode> = {
    Github: <GitHub size={20} />,
    Linkedin: <Linkedin size={20} />,
  };
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#top" className="text-xl font-bold text-[#3db5e6]">
              {personalInfo.name.split(' ')[0]}<span className="text-white">.dev</span>
            </a>
            <p className="text-gray-400 mt-2 max-w-md">
              Fullstack developer specialized in creating beautiful, functional, and user-friendly web applications.
            </p>
          </div>
          
          <div className="flex space-x-6">
            {personalInfo.socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#3db5e6] transition-colors"
                aria-label={link.name}
              >
                {socialIcons[link.icon] || link.name}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </div>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            <a href="#about" className="text-gray-400 hover:text-[#3db5e6] transition-colors text-sm">
              About
            </a>
            <a href="#skills" className="text-gray-400 hover:text-[#3db5e6] transition-colors text-sm">
              Skills
            </a>
            <a href="#experience" className="text-gray-400 hover:text-[#3db5e6] transition-colors text-sm">
              Experience
            </a>
            <a href="#projects" className="text-gray-400 hover:text-[#3db5e6] transition-colors text-sm">
              Projects
            </a>
            <a href="#contact" className="text-gray-400 hover:text-[#3db5e6] transition-colors text-sm">
              Contact
            </a>
          </div>
        </div>
        
        <div className="text-center text-gray-500 text-sm mt-8 flex items-center justify-center">
          Made with <Heart size={16} className="mx-1 text-red-500" /> in 2025
        </div>
      </div>
    </footer>
  );
};

export default Footer;