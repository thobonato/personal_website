"use client";
import React from "react";
import experiences from '@/lib/experiences.json';
import Image from "next/image";

export const WorkExperience = () => {

    return (
    <div>
        {/* Work Experience Section */}
        <h2 className="text-xl font-mono mb-6 max-w-6xl mx-auto">work experience</h2>
        <div className="space-y-4">
          {experiences.experiences.map((job, index) => (
            <a 
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="block transform transition-all hover:translate-x-1"
            >
              <div className="flex items-center justify-between p-2 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 relative rounded-lg overflow-hidden">
                    <Image
                      src={`/logos/${job.logo}`}
                      alt={job.company}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{job.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{job.company}</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {job.startDate} - {job.endDate || 'Present'}
                </span>
              </div>
            </a>
          ))}
        </div>
    </div>
    )
}