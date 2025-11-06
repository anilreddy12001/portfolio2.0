import React, { useState, useMemo } from 'react';
import Fuse from 'fuse.js';
import { projects, skills, experiences, aboutMe, socialLinks } from '../data';
import { Project, Skill, Experience } from '../types';

interface SearchResult {
  type: 'project' | 'skill' | 'experience' | 'about' | 'social';
  title: string;
  description: string;
  data: any;
  relevanceScore: number;
}

const SearchSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  // Build a unified index for natural-language search
  const unifiedData = useMemo(() => {
    const projectItems = projects.map((project: Project) => ({
      type: 'project' as const,
      title: project.title,
      description: project.description,
      tags: project.tags,
      data: project,
    }));

    const skillItems = skills.map((skill: Skill) => ({
      type: 'skill' as const,
      title: skill.name,
      description: `${skill.category} skill (Level ${skill.level}/5)`,
      category: skill.category,
      data: skill,
    }));

    const experienceItems = experiences.map((experience: Experience) => ({
      type: 'experience' as const,
      title: `${experience.position} at ${experience.company}`,
      description: experience.description,
      technologies: experience.technologies,
      company: experience.company,
      position: experience.position,
      data: experience,
    }));

    const aboutItem = [{
      type: 'about' as const,
      title: 'About Me',
      description: aboutMe.description,
      name: aboutMe.name,
      role: aboutMe.title,
      location: aboutMe.location,
      availability: aboutMe.availability,
      data: aboutMe,
    }];

    const socialItems = socialLinks.map((social) => ({
      type: 'social' as const,
      title: social.name,
      description: `Connect with me on ${social.name}`,
      data: social,
    }));

    return [...projectItems, ...skillItems, ...experienceItems, ...aboutItem, ...socialItems];
  }, []);

  const fuse = useMemo(() => {
    return new Fuse(unifiedData, {
      includeScore: true,
      threshold: 0.35,
      ignoreLocation: true,
      keys: [
        { name: 'title', weight: 0.5 },
        { name: 'description', weight: 0.3 },
        { name: 'tags', weight: 0.2 },
        { name: 'category', weight: 0.2 },
        { name: 'technologies', weight: 0.25 },
        { name: 'company', weight: 0.25 },
        { name: 'position', weight: 0.25 },
        { name: 'name', weight: 0.2 },
        { name: 'role', weight: 0.2 },
        { name: 'location', weight: 0.15 },
        { name: 'availability', weight: 0.1 },
      ],
    });
  }, [unifiedData]);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const results = fuse.search(searchQuery.trim());
    return results.map((res) => ({
      // @ts-expect-error narrow on runtime
      type: res.item.type,
      // @ts-expect-error unify fields available
      title: res.item.title,
      // @ts-expect-error unify fields available
      description: res.item.description,
      data: res.item.data,
      relevanceScore: res.score != null ? 1 - res.score : 1,
    })) as SearchResult[];
  }, [searchQuery, fuse]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setIsSearching(e.target.value.length > 0);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setIsSearching(false);
  };

  const getResultIcon = (type: string) => {
    switch (type) {
      case 'project':
        return '🚀';
      case 'skill':
        return '💻';
      case 'experience':
        return '💼';
      case 'about':
        return '👤';
      case 'social':
        return '🔗';
      default:
        return '📄';
    }
  };

  const getResultColor = (type: string) => {
    switch (type) {
      case 'project':
        return 'border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20';
      case 'skill':
        return 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20';
      case 'experience':
        return 'border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-900/20';
      case 'about':
        return 'border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-900/20';
      case 'social':
        return 'border-pink-200 bg-pink-50 dark:border-pink-800 dark:bg-pink-900/20';
      default:
        return 'border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800/20';
    }
  };

  return (
    <section id="search" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Search My Profile
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Find specific information about my projects, skills, experience, and more
          </p>
        </div>

        <div className="relative mb-8">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search for projects, skills, technologies, companies..."
              className="w-full px-6 py-4 pl-12 pr-12 text-lg border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {isSearching && (
          <div className="space-y-4">
            {searchResults.length > 0 ? (
              <>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for "{searchQuery}"
                </div>
                <div className="space-y-3">
                  {searchResults.map((result, index) => (
                    <div
                      key={`${result.type}-${index}`}
                      className={`p-4 rounded-lg border transition-all duration-200 hover:shadow-md ${getResultColor(result.type)}`}
                    >
                      <div className="flex items-start space-x-3">
                        <span className="text-2xl">{getResultIcon(result.type)}</span>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                            {result.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                            {result.description}
                          </p>
                          {result.type === 'project' && result.data.demoUrl && (
                            <div className="flex space-x-2">
                              <a
                                href={result.data.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                              >
                                View Demo
                              </a>
                              {result.data.githubUrl && (
                                <a
                                  href={result.data.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-gray-600 dark:text-gray-400 hover:underline text-sm"
                                >
                                  GitHub
                                </a>
                              )}
                            </div>
                          )}
                          {result.type === 'experience' && (
                            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                              {result.data.startDate} - {result.data.endDate || 'Present'}
                            </div>
                          )}
                          {result.type === 'social' && (
                            <a
                              href={result.data.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                            >
                              Connect
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No results found
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Try searching for different keywords like "React", "JavaScript", "projects", or company names.
                </p>
              </div>
            )}
          </div>
        )}

        {!isSearching && (
          <div className="text-center py-8">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Start searching
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Search through my projects, skills, work experience, and personal information.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {['React', 'JavaScript', 'TypeScript', 'Node.js', 'Projects', 'Experience'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSearchQuery(tag)}
                  className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchSection;
