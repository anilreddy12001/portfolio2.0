import React, { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { navItems } from '../data';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white dark:bg-gray-900 shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-primary dark:text-primary-light" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Anil Kumar Reddy <span className="text-primary dark:text-primary-light"> K </span>
            </span>
          </a>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary-light font-medium transition-colors"
              >
                {item.title}
              </a>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden space-x-4">
            <ThemeToggle />
            <button 
              onClick={toggleMenu}
              className="text-gray-800 dark:text-gray-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-white dark:bg-gray-900 transition-transform duration-300 ease-in-out ${
          isOpen ? 'transform translate-x-0' : 'transform translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-16 px-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="py-4 text-xl text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800"
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};
