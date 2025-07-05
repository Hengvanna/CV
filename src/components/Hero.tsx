import React from 'react';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import Button from './ui/Button';
import { PersonalInfo } from '../types';

interface HeroProps {
  personalInfo: PersonalInfo;
}

const Hero: React.FC<HeroProps> = ({ personalInfo }) => {
  const socialIcons: Record<string, React.ReactNode> = {
    Github: <Github size={20} />,
    Linkedin: <Linkedin size={20} />,
    Twitter: <Twitter size={20} />,
  };

  return (
    <section id="top" className="pt-24 pb-16 min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeIn">
            <div className="mb-6">
              <span className="text-emerald-600 text-xl mb-4 block">Hello I'm</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {personalInfo.name}
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-8">
                {personalInfo.title}
              </h2>
            </div>
            
            <p className="text-lg text-gray-600 mb-10 max-w-2xl leading-relaxed">
              {personalInfo.bio}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Button href="#contact" variant="primary" size="lg">
                Hire Me
              </Button>
              
              <Button href="#projects" variant="outline" size="lg">
                View Projects
              </Button>
            </div>
            
            <div className="flex gap-6">
              {personalInfo.socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-emerald-600 transition-colors"
                  aria-label={link.name}
                >
                  {socialIcons[link.icon] || link.name}
                </a>
              ))}
            </div>
          </div>
          
          <div className="hidden lg:block">
            <img 
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
              alt="Professional portrait"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;