import { Education, Experience, PersonalInfo, Project, Skill } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Alex Johnson',
  title: 'Fullstack Developer',
  email: 'alex.johnson@example.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  bio: 'Passionate fullstack developer with 5+ years of experience building modern web applications. Specializing in React, Node.js, and cloud technologies. Committed to writing clean, maintainable code and creating exceptional user experiences.',
  socialLinks: [
    { name: 'GitHub', url: 'https://github.com', icon: 'Github' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'Linkedin' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'Twitter' },
  ],
  resumeUrl: '/resume.pdf',
};

export const skills: Skill[] = [
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'HTML/CSS', level: 95, category: 'frontend' },
  { name: 'JavaScript', level: 90, category: 'frontend' },
  { name: 'Tailwind CSS', level: 85, category: 'frontend' },
  { name: 'Next.js', level: 80, category: 'frontend' },
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'Express', level: 85, category: 'backend' },
  { name: 'GraphQL', level: 75, category: 'backend' },
  { name: 'RESTful APIs', level: 90, category: 'backend' },
  { name: 'MongoDB', level: 80, category: 'database' },
  { name: 'PostgreSQL', level: 75, category: 'database' },
  { name: 'Redis', level: 70, category: 'database' },
  { name: 'Docker', level: 75, category: 'devops' },
  { name: 'AWS', level: 70, category: 'devops' },
  { name: 'CI/CD', level: 75, category: 'devops' },
  { name: 'Git', level: 90, category: 'tools' },
  { name: 'Jest', level: 80, category: 'tools' },
  { name: 'Webpack', level: 75, category: 'tools' },
  { name: 'Problem Solving', level: 95, category: 'soft' },
  { name: 'Communication', level: 90, category: 'soft' },
  { name: 'Teamwork', level: 95, category: 'soft' },
];

export const experiences: Experience[] = [
  {
    title: 'Senior Frontend Developer',
    company: 'TechNova Solutions',
    location: 'San Francisco, CA',
    period: 'Jan 2022 - Present',
    description: [
      'Lead development of a React-based SaaS platform serving 10,000+ users',
      'Implemented performance optimizations that improved page load times by 40%',
      'Mentored junior developers and conducted code reviews',
      'Collaborated with UX team to implement responsive design improvements',
    ],
    technologies: ['React', 'TypeScript', 'GraphQL', 'Redux', 'Jest'],
  },
  {
    title: 'Fullstack Developer',
    company: 'DataViz Systems',
    location: 'Oakland, CA',
    period: 'Mar 2019 - Dec 2021',
    description: [
      'Developed and maintained multiple client-facing web applications',
      'Built RESTful APIs using Node.js and Express',
      'Implemented database solutions using MongoDB and PostgreSQL',
      'Worked in an agile team environment with weekly sprints',
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
  },
  {
    title: 'Junior Web Developer',
    company: 'CreativeWorks',
    location: 'San Jose, CA',
    period: 'Jun 2017 - Feb 2019',
    description: [
      'Created responsive websites for various clients',
      'Collaborated with designers to implement user interfaces',
      'Participated in client meetings and requirement gathering',
      'Developed custom WordPress themes and plugins',
    ],
    technologies: ['JavaScript', 'HTML/CSS', 'WordPress', 'PHP', 'jQuery'],
  },
];

export const educations: Education[] = [
  {
    degree: 'M.S. in Computer Science',
    institution: 'Stanford University',
    location: 'Stanford, CA',
    period: '2015 - 2017',
    description: 'Specialized in Software Engineering and Human-Computer Interaction',
  },
  {
    degree: 'B.S. in Computer Science',
    institution: 'University of California, Berkeley',
    location: 'Berkeley, CA',
    period: '2011 - 2015',
    description: 'Minor in Mathematics. Graduated with Honors.',
  },
];

export const projects: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'A fully functional e-commerce platform with product management, shopping cart, and payment integration.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    link: 'https://example.com/ecommerce',
    github: 'https://github.com/example/ecommerce',
    image: 'https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features.',
    technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL', 'Redis'],
    link: 'https://example.com/taskmanager',
    github: 'https://github.com/example/taskmanager',
    image: 'https://images.pexels.com/photos/4068314/pexels-photo-4068314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Health Tracker',
    description: 'A mobile-first web application for tracking fitness activities and nutrition.',
    technologies: ['React Native', 'GraphQL', 'Node.js', 'MongoDB'],
    link: 'https://example.com/healthtracker',
    github: 'https://github.com/example/healthtracker',
    image: 'https://images.pexels.com/photos/3927393/pexels-photo-3927393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Developer Portfolio',
    description: 'An open-source portfolio template for developers with customizable themes.',
    technologies: ['Next.js', 'Tailwind CSS', 'MDX', 'Vercel'],
    link: 'https://example.com/portfolio',
    github: 'https://github.com/example/portfolio',
    image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];