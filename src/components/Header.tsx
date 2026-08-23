import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, DownloadCloud } from 'lucide-react';
import Button from './ui/Button';
import { PersonalInfo } from '../types';

interface HeaderProps {
  personalInfo: PersonalInfo;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ personalInfo, darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <a href="#top" className="text-xl font-bold text-[#3db5e6]">
            {personalInfo.name.split(' ')[0]}<span className="text-[#13284c]">.dev</span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href}
                    className="text-gray-700 hover:text-[#3db5e6] dark:text-gray-300 dark:hover:text-[#3db5e6] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center space-x-3">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              {personalInfo.resumeUrl && (
                <Button 
                  variant="primary" 
                  size="sm" 
                  icon={DownloadCloud} 
                  href={personalInfo.resumeUrl}
                  download="Heng-Vanna-Resume.pdf"
                >
                  Resume
                </Button>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-3 md:hidden">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="py-2 px-4">
            {navItems.map((item) => (
              <li key={item.label} className="py-2">
                <a 
                  href={item.href}
                  className="block text-gray-700 hover:text-[#3db5e6] dark:text-gray-300 dark:hover:text-[#3db5e6]"
                  onClick={toggleMobileMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
            
            {personalInfo.resumeUrl && (
              <li className="py-2">
                <Button 
                  variant="primary" 
                  size="sm" 
                  icon={DownloadCloud}
                  href={personalInfo.resumeUrl}
                  download="Heng-Vanna-Resume.pdf"
                  className="w-full"
                >
                  Download Resume
                </Button>
              </li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;