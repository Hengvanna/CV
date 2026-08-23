import React from 'react';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import Button from './ui/Button';
import { PersonalInfo } from '../types';

interface HeroProps {
  personalInfo: PersonalInfo;
}

const Hero: React.FC<HeroProps> = ({ personalInfo }) => {
  const socialIcons: Record<string, React.ReactNode> = {
    Github: <Github size={20} />,
    Linkedin: <Linkedin size={20} />,
  };

  return (
    <section id="top" className="pt-24 pb-16 min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <span className="text-[#3db5e6] text-xl mb-4 block font-medium animate-fadeInUp">
                Hello I'm
              </span>
              <h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#13284c] mb-6 leading-tight uppercase tracking-wide animate-fadeInUp"
                style={{ animationDelay: '0.15s' }}
              >
                {personalInfo.name}
              </h1>
              <h2
                className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-8 animate-fadeInUp"
                style={{ animationDelay: '0.3s' }}
              >
                {personalInfo.title}
              </h2>
            </div>
            
            <p
              className="text-lg text-gray-600 mb-10 max-w-2xl leading-relaxed animate-fadeInUp"
              style={{ animationDelay: '0.45s' }}
            >
              {personalInfo.bio}
            </p>
            
            <div
              className="flex flex-wrap gap-4 mb-12 animate-fadeInUp"
              style={{ animationDelay: '0.6s' }}
            >
              <Button href="#contact" variant="primary" size="lg">
                Hire Me
              </Button>
              
              <Button href="#projects" variant="outline" size="lg">
                View Projects
              </Button>
            </div>
            
            <div
              className="flex gap-6 animate-fadeInUp"
              style={{ animationDelay: '0.75s' }}
            >
              {personalInfo.socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#3db5e6] transition-colors"
                  aria-label={link.name}
                >
                  {socialIcons[link.icon] || link.name}
                </a>
              ))}
            </div>
          </div>
          
          <div
            className="flex justify-center lg:justify-end animate-fadeInRight"
            style={{ animationDelay: '0.25s' }}
          >
            <img
              src="/profile.jpg"
              alt={personalInfo.name}
              className="w-80 h-80 sm:w-96 sm:h-96 lg:w-full lg:max-w-[40rem] lg:h-auto lg:aspect-square object-cover object-top rounded-2xl shadow-2xl ring-4 ring-[#3db5e6]/40"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;