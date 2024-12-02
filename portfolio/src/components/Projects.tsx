import React from "react";
import projects from '@/lib/projects.json';
import { ExternalLink } from "lucide-react";

export const Projects = () => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <h2 className="text-xl font-mono mb-12 text-neutral-800 dark:text-neutral-200">projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {projects.projects.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="group relative"
          >
            <div className="p-8 rounded-xl bg-white/5 hover:bg-white/10 dark:bg-black/5 dark:hover:bg-black/10 backdrop-blur-sm border border-neutral-200/40 dark:border-neutral-200/10 transition-all duration-300">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-mono text-md text-neutral-800 dark:text-neutral-200 group-hover:text-blue-300 transition-colors">
                    {project.name}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-blue-500 transition-colors" />
                </div>
                
                <p className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
                  {project.description}
                </p>
                
                {(project.award || project.sponsor) && (
                  <div className="flex items-center justify-between mt-2">
                    {project.award && (
                      <span className="font-mono text-xs px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                        {project.award}
                      </span>
                    )}
                    {project.sponsor && (
                      <div className="w-6 h-6 relative opacity-50 group-hover:opacity-100 transition-opacity">
                        <img
                          src={`/sponsors/${project.sponsor}`}
                          alt="Sponsor"
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;