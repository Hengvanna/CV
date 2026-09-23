import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';
import { PersonalInfo } from '../types';

interface ContactProps {
  personalInfo: PersonalInfo;
}

const ContactSection: React.FC<ContactProps> = ({ personalInfo }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill out all required fields');
      return;
    }
    
    if (!isValidEmail(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setError('');
    setSubmitted(true);
    
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };
  
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const inputClass =
    'w-full px-4 py-2.5 border border-white/15 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3db5e6] bg-[#13284c] text-white placeholder-white/30';
  
  return (
    <section id="contact" className="scroll-mt-24 py-20 bg-[#13284c]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          title="Contact Me"
          subtitle="Let's connect and discuss your next project"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="font-display text-2xl font-bold text-white mb-6">
              Get In Touch
            </h3>
            
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              I'm always open to new opportunities and collaborations. Feel free to reach out
              if you have any questions or want to discuss a potential project.
            </p>
            
            <div className="rounded-2xl border border-white/10 bg-[#0b1c33] p-6 shadow-xl">
              <div className="flex items-start space-x-4">
                <div className="bg-[#3db5e6]/15 rounded-full p-3">
                  <Mail className="w-6 h-6 text-[#3db5e6]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Email Me
                  </h4>
                  <p className="text-white/70 mt-2">
                    For any inquiries, feel free to drop me an email at:
                  </p>
                  <a 
                    href={`mailto:${personalInfo.email}`} 
                    className="text-[#3db5e6] hover:underline mt-1 inline-block"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-2xl border border-white/10 bg-[#0b1c33] p-8 shadow-xl">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-900/40 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg 
                    className="w-8 h-8 text-green-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-white/70 mb-6">
                  Thank you for your message. I'll get back to you as soon as possible.
                </p>
                <Button 
                  onClick={() => setSubmitted(false)} 
                  variant="outline"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="font-display text-2xl font-bold text-white mb-6">
                  Send Me A Message
                </h3>
                
                {error && (
                  <div className="bg-red-900/40 border border-red-400/40 text-red-200 px-4 py-3 rounded-xl mb-4">
                    {error}
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label 
                      htmlFor="name" 
                      className="block text-sm font-medium text-white mb-1"
                    >
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      className={inputClass} 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-sm font-medium text-white mb-1"
                    >
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      className={inputClass} 
                      required 
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label 
                    htmlFor="subject" 
                    className="block text-sm font-medium text-white mb-1"
                  >
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    className={inputClass} 
                  />
                </div>
                
                <div className="mb-6">
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium text-white mb-1"
                  >
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    value={formData.message} 
                    onChange={handleChange} 
                    className={inputClass} 
                    required 
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  variant="primary" 
                  size="lg" 
                  icon={Send} 
                  className="w-full"
                >
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
