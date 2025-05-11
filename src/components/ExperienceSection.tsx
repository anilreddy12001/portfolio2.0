import React from 'react';
import { experiences } from '../data';
import { Calendar, Briefcase } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
    });
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            My professional journey and the companies I've had the pleasure to work with.
          </p>
        </div>
        
        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-300 dark:bg-gray-700" />
          
          {experiences.map((experience, index) => (
            <div 
              key={experience.id}
              className={`relative mb-16 md:mb-12 ${
                index % 2 === 0 ? 'md:ml-auto md:pl-10 md:pr-0' : 'md:mr-auto md:pr-10 md:pl-0'
              } md:w-1/2 pl-10`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-auto md:right-auto md:-translate-x-1/2 top-0 w-5 h-5 rounded-full bg-primary dark:bg-primary-light border-4 border-white dark:border-gray-900 z-10" style={{ 
                [index % 2 === 0 ? 'right' : 'left']: '-2.5px',
                [index % 2 === 0 ? 'left' : 'right']: 'auto',
                ...(index % 2 === 0 ? { left: '0', ['-webkit-transform']: 'translateX(-50%)', transform: 'translateX(-50%)' } : { left: '50%', ['-webkit-transform']: 'translateX(-50%)', transform: 'translateX(-50%)' })
              }} />
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Briefcase size={20} className="text-primary dark:text-primary-light mr-2" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {experience.position}
                  </h3>
                </div>
                
                <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                  {experience.company}
                </h4>
                
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>
                    {formatDate(experience.startDate)} - {experience.endDate ? formatDate(experience.endDate) : 'Present'}
                  </span>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {experience.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};