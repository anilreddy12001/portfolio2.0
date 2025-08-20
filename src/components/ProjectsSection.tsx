import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data';
import image from '../assets/images/metro_image.png';

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  
  // Extract unique tags from all projects
  const allTags = Array.from(
    new Set(projects.flatMap(project => project.tags))
  ).sort();
  
  // Filter projects based on active tag
  const filteredProjects = activeFilter
    ? projects.filter(project => project.tags.includes(activeFilter))
    : projects;
console.log("image: ",image);
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            Here are some of my recent projects. Each one was built to solve a specific problem and showcase different skills.
          </p>
        </div>
        
        {/* Filter tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveFilter(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              activeFilter === null
                ? 'bg-primary text-white dark:bg-primary-light'
                : 'bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            All
          </button>
          
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeFilter === tag
                  ? 'bg-primary text-white dark:bg-primary-light'
                  : 'bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-primary dark:text-primary-light hover:underline"
                    >
                      <ExternalLink size={18} className="mr-1" />
                      Live Demo
                    </a>
                  )}
                  
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light"
                    >
                      <Github size={18} className="mr-1" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};