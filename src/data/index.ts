import { Project, Skill, Experience, Social, NavItem } from '../types';

export const navItems: NavItem[] = [
  { title: 'Home', href: '#home' },
  { title: 'Projects', href: '#projects' },
  { title: 'Skills', href: '#skills' },
  { title: 'Experience', href: '#experience' },
  { title: 'Contact', href: '#contact' },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce application with product management, cart functionality, and secure payment processing.',
    imageUrl: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A productivity app featuring drag-and-drop task management, reminders, and team collaboration tools.',
    imageUrl: 'https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Firebase', 'TypeScript', 'Redux'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: '3',
    title: 'AI Image Generator',
    description: 'An application that leverages OpenAI\'s API to generate and manipulate images based on text prompts.',
    imageUrl: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Python', 'OpenAI', 'FastAPI'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: '4',
    title: 'Financial Dashboard',
    description: 'Interactive dashboard for tracking investments, analyzing market trends, and visualizing financial data.',
    imageUrl: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
];

export const skills: Skill[] = [
  { name: 'JavaScript', level: 5, category: 'frontend' },
  { name: 'TypeScript', level: 4, category: 'frontend' },
  { name: 'React', level: 5, category: 'frontend' },
  { name: 'HTML/CSS', level: 5, category: 'frontend' },
  { name: 'Tailwind CSS', level: 4, category: 'frontend' },
  { name: 'Next.js', level: 4, category: 'frontend' },
  { name: 'Node.js', level: 4, category: 'backend' },
  { name: 'Express', level: 4, category: 'backend' },
  { name: 'MongoDB', level: 3, category: 'backend' },
  { name: 'PostgreSQL', level: 3, category: 'backend' },
  { name: 'Docker', level: 3, category: 'tools' },
  { name: 'Git', level: 4, category: 'tools' },
  { name: 'Jest', level: 3, category: 'tools' },
  { name: 'CI/CD', level: 3, category: 'tools' },
  { name: 'AWS', level: 2, category: 'tools' },
  { name: 'UI/UX Design', level: 3, category: 'other' },
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Tech Innovations Inc.',
    position: 'Senior Frontend Developer',
    startDate: '2022-01',
    endDate: null,
    description: 'Leading the frontend team in developing modern web applications using React and TypeScript. Implemented CI/CD pipelines and improved performance by 40%.',
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
  },
  {
    id: '2',
    company: 'Digital Solutions Ltd.',
    position: 'Full Stack Developer',
    startDate: '2019-05',
    endDate: '2021-12',
    description: 'Developed and maintained full-stack applications. Created RESTful APIs and implemented real-time features using WebSockets.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
  },
  {
    id: '3',
    company: 'StartUp Nexus',
    position: 'Frontend Developer',
    startDate: '2017-09',
    endDate: '2019-04',
    description: 'Built responsive web applications and contributed to the company\'s UI component library. Worked closely with designers to implement pixel-perfect layouts.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'jQuery', 'Bootstrap'],
  },
];

export const socialLinks: Social[] = [
  { name: 'GitHub', url: 'https://github.com', icon: 'Github' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'Linkedin' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'Twitter' },
  { name: 'Email', url: 'mailto:hello@example.com', icon: 'Mail' },
];

export const aboutMe = {
  name: 'Alex Johnson',
  title: 'Frontend Developer',
  description: 'I\'m a passionate frontend developer with over 5 years of experience creating responsive and performant web applications. I specialize in React, TypeScript, and modern JavaScript, with a focus on building intuitive user interfaces.',
  location: 'San Francisco, CA',
  availability: 'Available for freelance work',
};