import React from 'react';
import { ArrowDown, Github as GitHub, Linkedin, Mail, Twitter } from 'lucide-react';
import { aboutMe, socialLinks } from '../data';

export const HeroSection: React.FC = () => {
  const renderSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <GitHub size={20} />;
      case 'Linkedin':
        return <Linkedin size={20} />;
      case 'Twitter':
        return <Twitter size={20} />;
      case 'Mail':
        return <Mail size={20} />;
      default:
        return null;
    }
  };

  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen pt-16 pb-12 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 -z-10" />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
        backgroundImage: 'radial-gradient(#3E92CC 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 animate-fadeIn">
            <span className="block">Hi, I'm {aboutMe.name}</span>
            <span className="text-primary dark:text-primary-light">{aboutMe.title}</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 animate-fadeIn animation-delay-200">
            {aboutMe.description}
          </p>

          <div className="flex items-center space-x-4 mb-12 animate-fadeIn animation-delay-300">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-primary hover:text-white dark:hover:bg-primary-light transition-colors duration-300"
                aria-label={social.name}
              >
                {renderSocialIcon(social.icon)}
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fadeIn animation-delay-400">
            <a
              href="#projects"
              className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-full transition-colors duration-300 flex items-center"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 hover:border-primary hover:text-primary dark:hover:border-primary-light dark:hover:text-primary-light text-gray-800 dark:text-white font-medium rounded-full transition-colors duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <a
        href="#projects"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white hover:text-primary dark:hover:text-primary-light animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
};