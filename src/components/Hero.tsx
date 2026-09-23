import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import Button from './ui/Button';
import ProfileOrbit from './ProfileOrbit';
import { FlutterLogo, LaravelLogo, ReactLogo } from './skill-icons';
import { PersonalInfo } from '../types';

interface HeroProps {
  personalInfo: PersonalInfo;
}

const techStack = [
  { name: 'Laravel', color: 'text-[#FF2D20]', bg: 'bg-[#FF2D20]/10 border-[#FF2D20]/20', Logo: LaravelLogo },
  { name: 'React', color: 'text-[#0ea5e9]', bg: 'bg-[#0ea5e9]/10 border-[#0ea5e9]/20', Logo: ReactLogo },
  { name: 'Flutter', color: 'text-[#027DFD]', bg: 'bg-[#027DFD]/10 border-[#027DFD]/20', Logo: FlutterLogo },
];

const Hero: React.FC<HeroProps> = ({ personalInfo }) => {
  const socialIcons: Record<string, React.ReactNode> = {
    Github: <Github size={20} />,
    Linkedin: <Linkedin size={20} />,
  };

  return (
    <section id="top" className="relative overflow-x-hidden pt-28 pb-20 min-h-[85vh] flex items-center">
      <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-[#3db5e6]/20 blur-3xl" />
      <div className="pointer-events-none absolute top-28 left-0 h-72 w-72 rounded-full bg-[#FF2D20]/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-10 h-64 w-64 rounded-full bg-[#13284c]/10 blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FF2D20]/25 bg-[#FF2D20]/10 px-4 py-1.5 text-sm font-semibold text-[#FF2D20] mb-6 animate-fadeInUp">
              <LaravelLogo className="h-4 w-4" />
              Laravel Developer
            </span>
            <h1
              className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#13284c] mb-4 leading-[1.1] tracking-tight animate-fadeInUp"
              style={{ animationDelay: '0.15s' }}
            >
              {personalInfo.name}
            </h1>
            <h2
              className="text-xl sm:text-2xl font-medium text-[#3db5e6] mb-6 animate-fadeInUp"
              style={{ animationDelay: '0.3s' }}
            >
              {personalInfo.title}
            </h2>
            
            <p
              className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed animate-fadeInUp"
              style={{ animationDelay: '0.45s' }}
            >
              {personalInfo.bio}
            </p>

            <div
              className="flex flex-wrap gap-3 mb-8 animate-fadeInUp"
              style={{ animationDelay: '0.55s' }}
            >
              {techStack.map(({ name, color, bg, Logo }) => (
                <span
                  key={name}
                  className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-semibold ${color} ${bg}`}
                >
                  <Logo className="h-5 w-5" />
                  {name}
                </span>
              ))}
            </div>
            
            <div
              className="flex flex-wrap gap-4 mb-10 animate-fadeInUp"
              style={{ animationDelay: '0.65s' }}
            >
              <Button href="#contact" variant="primary" size="lg">
                Hire Me
              </Button>
              
              <Button href="#projects" variant="outline" size="lg">
                View Projects
              </Button>
            </div>
            
            <div
              className="flex gap-4 animate-fadeInUp"
              style={{ animationDelay: '0.75s' }}
            >
              {personalInfo.socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:border-[#3db5e6] hover:text-[#3db5e6] hover:bg-[#3db5e6]/10 transition-colors"
                  aria-label={link.name}
                >
                  {socialIcons[link.icon] || link.name}
                </a>
              ))}
            </div>
          </div>
          
          <div
            className="relative flex justify-center lg:justify-end animate-fadeInRight"
            style={{ animationDelay: '0.25s' }}
          >
            <ProfileOrbit name={personalInfo.name} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
