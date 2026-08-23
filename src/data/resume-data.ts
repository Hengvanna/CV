import { Education, Experience, PersonalInfo, Project, Skill } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Heng Vanna',
  title: 'Full-Stack Developer',
  email: 'vanna.edu.168@gmail.com',
  phone: '+855 966379997',
  location: '193b Preah Norodom Blvd (41), Phnom Penh',
  bio: 'Passionate Full-Stack Developer with hands-on experience building modern web applications using React, Laravel, Node.js, and MySQL. Skilled in developing responsive user interfaces, RESTful APIs, database-driven applications, and integrating third-party services. Committed to writing clean, maintainable code, solving technical problems, and creating intuitive user experiences. Currently pursuing a degree in Software Development and continuously expanding my skills in modern web technologies.',
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