import { Project, Skill, Experience, Social, NavItem } from '../types';
import image from '../assets/images/metro_image.png';
export const navItems: NavItem[] = [
  { title: 'Home', href: '#home' },
  { title: 'Search', href: '#search' },
  { title: 'Projects', href: '#projects' },
  { title: 'Skills', href: '#skills' },
  { title: 'Experience', href: '#experience' },
  { title: 'Contact', href: '#contact' },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Designer Apparel',
    description: 'An e-commerce application for customizing selected suit, cart functionality, and secure payment processing.',
    imageUrl: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demoUrl: 'https://designerapparel.netlify.app/',
    githubUrl: 'https://github.com/anilreddy12001/designerApparel',
  },
  {
    id: '2',
    title: 'Metro Booking Web App',
    description: "A portal featuring an intuitive interface to book a sample metro train, integrating Google's FirebaseDB for data persistence without an extra layer of backend API",
    imageUrl: image,//'assets/images/metro_image.png',
    tags: ['React', 'Firebase', 'TypeScript', 'Redux'],
    demoUrl: 'https://metrobooking.netlify.app',
    githubUrl: 'https://github.com',
  },
  {
    id: '3',
    title: 'AI Face Detector',
    description: 'An application that leverages completely client side tensorflow.js library to detect faces inside an uploaded image using machine learning and AI. Keeps getting better with larger data sets.',
    imageUrl: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React','TypeScript', 'Tensorflowjs'],
    demoUrl: 'https://tensorflowapp.netlify.app/',
    githubUrl: 'https://github.com/anilreddy12001/tensorFlow',
  },
  {
    id: '4',
    title: 'Dashboard',
    description: 'Interactive dashboard for creating, editing, deleting, tracking and visualizing data of several states of India apart from authentication and authorization features.',
    imageUrl: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'GraphQl','Google Firebase', 'Node.js', 'NoSQL'],
    demoUrl: 'https://anilproject12001.web.app/',
    githubUrl: 'https://github.com',
  },
  {
    id: '5',
    title: 'Energy Dashboard',
    description: 'Interactive dashboard for viewing an overview of energy consumption, production, and storage across various buildings.',
    imageUrl: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'GraphQl','Google Firebase', 'Node.js', 'NoSQL'],
    demoUrl: 'https://unityreactapp.netlify.app/',
    githubUrl: 'https://github.com',
  },
  {
    id: '6',
    title: 'Defect Detection Mobile App',
    description: 'Mobile app for registering defects in aircraft with React Native and Kotlin Multiplatform, delivering real-time defect detection powered by TensorFlow Lite ML models. Tailored for engineers preparing aircraft concession documents, this app leverages YOLO-trained models in Python to combine speed, accuracy, and reliability',
    imageUrl: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React Native','Node.js', 'Python', 'TensorFlow Lite', 'Kotlin Multiplatform'],
    demoUrl: 'https://anilproject12001.web.app/app-release.zip',
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
    company: 'Axiscades Technologies',
    position: 'Technical Lead Manager',
    startDate: '2023-01',
    endDate: null,
    description: 'Leading the frontend team in developing modern web applications using React and TypeScript. Implemented CI/CD pipelines and improved throughput by 40%.',
    technologies: ['Reactjs', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Antd','Vitejs', 'Webpack'],
  },
  {
    id: '2',
    company: 'Sterlite Technologies Ltd',
    position: 'Senior Lead Developer',
    startDate: '2022-04',
    endDate: '2022-12',
    description: 'Developed and maintained full-stack applications. Created RESTful APIs and implemented real-time features using WebSockets.',
    technologies: ['Reactjs', 'Node.js', 'Express', 'MongoDB', 'Websockets'],
  },
  {
    id: '3',
    company: 'Nokia Networks',
    position: 'Frontend Developer',
    startDate: '2016-06',
    endDate: '2022-04',
    description: 'Built responsive web applications and contributed to the company\'s UI component library. Worked closely with designers to implement pixel-perfect layouts.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'jQuery', 'Bootstrap', 'Angularjs', 'Reactjs'],
  },
    {
    id: '4',
    company: 'Tata Elxsi',
    position: 'Frontend Developer',
    startDate: '2012-04',
    endDate: '2016-06',
    description: 'Built responsive web applications using jquery and Backbone.js. Worked closely with product owners to implement pixel-perfect layouts at client location.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'jQuery', 'Bootstrap', 'Backbone.js'],
  }, {
    id: '5',
    company: 'KPIT Technologies',
    position: 'Frontend Developer',
    startDate: '2010-10',
    endDate: '2012-03',
    description: 'Created graphics for a client in the automotive domain and a web application for visualizing 2d drawings dynamically.',
    technologies: ['Adobe Illustrator','JavaScript', 'HTML', 'CSS'],
  }, {
    id: '6',
    company: 'Capgemini',
    position: 'Frontend Developer',
    startDate: '2007-04',
    endDate: '2009-05',
    description: 'Network management using IBM Netcool suite and geomap product using Google Maps API, Javascript, HTML and CSS.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
  }
];

export const socialLinks: Social[] = [
  { name: 'GitHub', url: 'https://github.com/anilreddy12001', icon: 'Github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/anilkumarreddy/', icon: 'Linkedin' },
  { name: 'Twitter', url: 'https://twitter.com/anilreddy12001', icon: 'Twitter' },
  { name: 'Email', url: 'mailto:anilreddy12001@gmail.com', icon: 'Mail' },
];

export const aboutMe = {
  name: 'Anil Kumar Reddy K',
  title: 'Technical Lead Developer',
  description: 'I\'m a passionate lead developer with over 14 years of experience creating responsive and performant web applications. I specialize in React, React Native, TypeScript, and modern JavaScript, Kotlin with a focus on building intuitive user interfaces and apps.',
  location: 'Bengaluru, India',
  availability: 'Available for freelance work',
};
