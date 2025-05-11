import React from 'react';
import { Code, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { navItems, socialLinks } from '../data';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const renderSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <Github size={20} />;
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
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-primary-light" />
              <span className="text-xl font-bold">
                Anil Kumar Reddy <span className="text-primary-light"> K </span>
              </span>
            </div>
            <p className="text-gray-400 max-w-xs">
              Building beautiful, functional web experiences. Let's create something amazing together.
            </p>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-primary-light transition-colors"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white hover:bg-primary-light transition-colors duration-300"
                  aria-label={social.name}
                >
                  {renderSocialIcon(social.icon)}
                </a>
              ))}
            </div>
            <p className="text-gray-400">
              Feel free to reach out and connect!
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">
          <p>&copy; {currentYear} Anilmation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};