"use client";
import React from 'react';
import { useState } from 'react';
import { useTheme } from 'next-themes';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Github, Linkedin, Twitter, Mail, Eye, EyeClosed } from 'lucide-react';
import experiences from '@/lib/experiences.json';
import projects from '@/lib/projects.json';
import Image from 'next/image';

const Portfolio = () => {
  const { theme, setTheme } = useTheme();
  const [ eyesClosed, setEyesClosed ] = useState(false);

  return (
    <div className={`min-h-screen p-8 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-4xl mx-auto">
        {/* Header with Theme Toggle */}
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-bold">thomaz felipe bonato.</h1>
          <div className="flex items-center gap-1">
            <Switch
                checked={theme === 'dark'}
                onCheckedChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              />
            <div className="flex">
            <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setEyesClosed(!eyesClosed)}
                className='hover:bg-transparent'
              >
              { !eyesClosed ?
              (<Eye className="w-6 h-6" />) :
              (<EyeClosed className="w-6 h-6" />)
              }
            </Button>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="mb-16 space-y-4">
          <p className="text-lg">
            👋 Hi! I'm Thomaz -- an engineer, researcher, and tech enthusiast. Originally from Brazil 🇧🇷, 
            I've lived across Australia 🇦🇺, Costa Rica 🇨🇷, and the US 🇺🇸.
          </p>
          <p className="text-lg">
            I am currently studying Artificial Intelligence for Business at USC in LA, 
            where I also help lead the university's flagship startup incubator, supporting 10+ companies.
          </p>
        </div>

        {/* Work Experience Section */}
        <h2 className="text-2xl font-semibold mb-6">work experience</h2>
        <div className="space-y-4 mb-16">
          {experiences.experiences.map((job, index) => (
            <a 
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="block transform transition-all hover:translate-x-2"
            >
              <div className="flex items-center justify-between p-4 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 relative rounded-lg overflow-hidden">
                    <Image
                      src={`/logos/${job.logo}`}
                      alt={job.company}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{job.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">@ {job.company}</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {job.startDate} - {job.endDate || 'Present'}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Projects Section */}
        <h2 className="text-2xl font-semibold mb-6">projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.projects.map((project, index) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="group"
            >
              <div className="p-4 rounded-lg bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 relative rounded-lg overflow-hidden">
                    <Image
                      src={`/logos/${project.logo}`}
                      alt={project.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold group-hover:text-blue-500 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {project.description}
                    </p>
                    <div className="mt-2 flex items-center justify-between">
                      <span 
                        className={`text-xs px-2 py-1 rounded-full ${
                          project.awardColor === 'gold' 
                            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100'
                            : project.awardColor === 'blue'
                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100'
                            : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100'
                        }`}
                      >
                        {project.award}
                      </span>
                      {project.sponsor && (
                        <div className="w-6 h-6 relative">
                          <Image
                            src={`/sponsors/${project.sponsor}`}
                            alt="Sponsor"
                            layout="fill"
                            objectFit="contain"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        <footer>
          <div className="flex items-center gap-1">
            <div className="flex">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-transparent" 
                onClick={() => window.open('https://www.linkedin.com/in/thomaz-felipe-bonato','_blank')}
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-transparent" 
                onClick={() => window.open('https://github.com/thobonato','_blank')}
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-transparent" 
                onClick={() => window.open('https://x.com/thomazbonato','_blank')}
              >
                <Twitter className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-transparent" 
                onClick={() => window.location.href = "mailto:bonato@usc.edu"}
              >
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;