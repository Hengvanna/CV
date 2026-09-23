import { Education, Experience, PersonalInfo, Project, Skill, Certificate } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Heng Vanna',
  title: 'Full-Stack Developer',
  email: 'vanna.edu.168@gmail.com',
  phone: '+855 966379997',
  location: '193b Preah Norodom Blvd (41), Phnom Penh',
  bio: 'Aspiring software developer focused on mobile and web. I build full-stack applications with Flutter, React, and Laravel — including dashboards, APIs, and course management systems.',
  socialLinks: [
    { name: 'GitHub', url: 'https://github.com/Hengvanna', icon: 'Github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/heng-vanna-8b258b261/', icon: 'Linkedin' },
  ],
  resumeUrl: '/Heng-Vanna-Resume.pdf',
};

export const skills: Skill[] = [
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'HTML/CSS', level: 95, category: 'frontend' },
  { name: 'JavaScript', level: 90, category: 'frontend' },
  { name: 'Tailwind CSS', level: 85, category: 'frontend' },
  { name: 'Laravel', level: 85, category: 'backend' },
  { name: 'RESTful APIs', level: 90, category: 'backend' },
  { name: 'MySQL', level: 85, category: 'database' },
  { name: 'MongoDB', level: 80, category: 'database' },
  { name: 'PostgreSQL', level: 75, category: 'database' },
  { name: 'Docker', level: 75, category: 'devops' },
  { name: 'CI/CD', level: 75, category: 'devops' },
  { name: 'Moodle', level: 80, category: 'tools' },
  { name: 'Git', level: 90, category: 'tools' },
  { name: 'Jest', level: 80, category: 'tools' },
  { name: 'Webpack', level: 75, category: 'tools' },
  { name: 'Problem Solving', level: 95, category: 'soft' },
  { name: 'Communication', level: 90, category: 'soft' },
  { name: 'Teamwork', level: 95, category: 'soft' },
];

export const experiences: Experience[] = [
  {
    title: 'Course Management Dashboard',
    company: 'Institute of Digital Governance (IDG)',
    location: 'Phnom Penh · 6-month Internship | 2025',
    period: 'Dec 2025 - Present',
    description: [
      'Built a web-based Course Management Dashboard to manage courses, users, and grades, integrated with a Laravel API.',
      'Designed a responsive and modern front-end using React and Bootstrap 5 for full-view layouts.',
      'Developed RESTful APIs in Laravel to fetch, manage, and synchronize data with Moodle for exams and course participation tracking.',
      'Implemented search, filter, pagination, and year management functionalities for efficient data handling.',
      'Enabled creation of courses, management of participants, and import/export to Moodle system.',
      'Added general access links and a registration form for users to enroll in courses or exams.',
      'Focused on full-stack development, ensuring smooth interaction between front-end, back-end, and external systems (Moodle).',
    ],
    technologies: ['Laravel', 'React', 'Bootstrap 5', 'MySQL', 'Moodle', 'RESTful APIs'],
  },
];

export const educations: Education[] = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Norton University',
    location: 'Phnom Penh · Graduated 2026',
    period: '2022 – 2026',
    description: [
      'Acquired strong foundational and advanced knowledge of software development, including mobile app development, algorithms, and system design.',
      'Developed proficiency in full-stack and mobile technologies, including Flutter, Kotlin, React.js, and Laravel.',
      'Completed hands-on practical projects and coursework to strengthen software engineering and problem-solving abilities.',
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'Course Management Dashboard',
    description: 'Web-based dashboard for the Institute of Digital Governance (IDG) to manage courses, users, and grades through a Laravel API. Includes a responsive React and Bootstrap 5 front-end, Moodle sync for exams and participation, plus search, filters, pagination, import/export, and a public registration form.',
    technologies: ['Laravel', 'React', 'Bootstrap 5', 'MySQL', 'Moodle', 'RESTful APIs'],
    link: 'https://dashboard.idg.edu.kh/login',
    linkLabel: 'View Dashboard',
    image: '/projects/idg-dashboard.jpg',
  },
  {
    title: 'Moodle LMS',
    description: 'Hands-on experience with Moodle, the open-source learning platform. Used CADT e-learning to manage courses and integrated Moodle with the IDG Course Management Dashboard for exams, participation tracking, and import/export.',
    technologies: ['Moodle', 'LMS', 'Laravel', 'RESTful APIs'],
    link: 'https://elearning.cadt.edu.kh/my/courses.php',
    linkLabel: 'View Courses',
    secondaryLink: 'https://moodle.org/',
    secondaryLabel: 'Moodle.org',
    image: '/projects/moodle.jpg',
    imageContain: true,
  },
  {
    title: 'HENG HENG Tire Management',
    description: 'Developed a web-based Tire Management System for managing tire inventory, sales, customers, and business operations. The system helps track stock levels, manage sales transactions, monitor tire products, and generate business reports to improve operational efficiency and data management.',
    technologies: ['Laravel', 'React', 'MySQL', 'RESTful APIs'],
  },
];

export const certificates: Certificate[] = [
  {
    title: 'AI Fundamentals',
    issuer: 'Google · Coursera',
    period: 'September 2026',
    description: 'Generative AI concepts, structured prompting, and evaluating AI outputs for accurate, responsible workplace use.',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/V4OSTNOMAHAZ',
  },
  {
    title: 'AI for App Building',
    issuer: 'Google · Coursera',
    period: 'September 2026',
    description: 'Built a functional web app with vibe coding and Google AI Studio, turning natural language into working code.',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/2SHLCFX77O4D',
  },
  {
    title: 'AI for App Deployment',
    issuer: 'Google · Coursera',
    period: 'September 2026',
    description: 'Turned a prototype into a shareable app: testing, AI-assisted debugging, first-time user setup, and access permissions.',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/03O20STEHR4A',
  },
  {
    title: 'AI for Content Creation',
    issuer: 'Google · Coursera',
    period: 'September 2026',
    description: 'Created visual assets and presentations with Gemini image, video, and Google Slides, aligned to brand guidelines.',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/64CEWQDUDNPM',
  },
  {
    title: 'AI for Research and Insights',
    issuer: 'Google · Coursera',
    period: 'September 2026',
    description: 'Used Gemini Deep Research and Notebook to synthesize sources, extract themes, and verify AI-generated findings.',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/2YP41C5039P9',
  },
  {
    title: 'Flutter Development',
    issuer: 'Udemy',
    description: 'Mobile app development with Flutter and Dart, including UI design and practical project work.',
  },
  {
    title: 'React.js',
    issuer: 'Udemy',
    description: 'Frontend development with React for building responsive web applications and dashboards.',
  },
  {
    title: 'Laravel',
    issuer: 'Udemy',
    description: 'Backend and full-stack development with Laravel, RESTful APIs, and MySQL.',
  },
];