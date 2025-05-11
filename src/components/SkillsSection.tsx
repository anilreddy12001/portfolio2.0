import React, { useState } from 'react';
import { skills } from '../data';

type SkillCategory = 'all' | 'frontend' | 'backend' | 'tools' | 'other';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');
  
  const categories: { id: SkillCategory; label: string }[] = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'tools', label: 'Tools' },
    { id: 'other', label: 'Other' },
  ];
  
  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            I've worked with a variety of technologies and tools throughout my career.
            Here's an overview of my technical skills.
          </p>
        </div>
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeCategory === category.id
                  ? 'bg-primary text-white dark:bg-primary-light'
                  : 'bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map(skill => (
            <div 
              key={skill.name}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </h3>
                <span className="text-sm font-medium px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded-full text-gray-800 dark:text-gray-200">
                  {skill.category}
                </span>
              </div>
              
              <div className="w-full bg-gray-200 dark:bg-gray-600 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-primary dark:bg-primary-light h-full rounded-full transition-all duration-1000"
                  style={{ width: `${(skill.level / 5) * 100}%` }}
                />
              </div>
              
              <div className="mt-2 flex justify-between text-sm text-gray-600 dark:text-gray-400">
                <span>Beginner</span>
                <span>Expert</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};