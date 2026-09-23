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
    <footer className="bg-[#0b1c33] text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#top" className="font-display text-xl font-extrabold text-[#3db5e6]">
              {personalInfo.name.split(' ')[0]}<span className="text-white">.dev</span>
            </a>
            <p className="text-white/60 mt-2 max-w-md">
              Aspiring software developer building mobile and web apps with Flutter, React, and Laravel.
            </p>
          </div>
          
          <div className="flex space-x-3">
            {personalInfo.socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 hover:border-[#3db5e6] hover:text-[#3db5e6] hover:bg-[#3db5e6]/10 transition-colors"
                aria-label={link.name}
              >
                {socialIcons[link.icon] || link.name}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/50 text-sm mb-4 md:mb-0">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </div>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            <a href="#about" className="text-white/50 hover:text-[#3db5e6] transition-colors text-sm">
              About
            </a>
            <a href="#skills" className="text-white/50 hover:text-[#3db5e6] transition-colors text-sm">
              Skills
            </a>
            <a href="#experience" className="text-white/50 hover:text-[#3db5e6] transition-colors text-sm">
              Experience
            </a>
            <a href="#projects" className="text-white/50 hover:text-[#3db5e6] transition-colors text-sm">
              Projects
            </a>
            <a href="#certificates" className="text-white/50 hover:text-[#3db5e6] transition-colors text-sm">
              Certificates
            </a>
            <a href="#contact" className="text-white/50 hover:text-[#3db5e6] transition-colors text-sm">
              Contact
            </a>
          </div>
        </div>
        
        <div className="text-center text-white/40 text-sm mt-8 flex items-center justify-center">
          Made with <Heart size={16} className="mx-1 text-[#3db5e6]" /> in {currentYear}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
