import React from 'react';
import Azalea from '../assets/images/azalea.png';
import Clevr from '../assets/images/clevr.png';
import Trading from '../assets/images/trading.svg';

const ProjectsSection = ({ projects }) => {
    const logos = {
        'azalea.png': Azalea,
        'clevr.png': Clevr,
        'trading.svg': Trading,
    };

    return (
        <div className="max-w-6xl mx-auto pt-6 mb-24">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {projects.map((proj) => (
                    <div key={proj.name} className="bg-white rounded-lg shadow-md overflow-hidden h-auto sm:h-40 flex flex-col transition duration-300 ease-in-out transform hover:scale-[1.03]">
                        <a href={proj.link} target="_blank" rel="noopener noreferrer" className="flex-grow flex flex-col">
                            <div className="flex items-center p-3 sm:p-4 bg-gray-50 border-b">
                                <img 
                                    src={logos[proj.logo]} 
                                    alt={`${proj.name} logo`} 
                                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain rounded-full shadow-sm"
                                />
                                <h3 className="text-base sm:text-lg font-semibold ml-2 sm:ml-3 text-gray-800">{proj.name}</h3>
                            </div>
                            <div className="p-3 sm:p-4 flex items-center justify-center h-full">
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center">
                                        {proj.isAwarded && (
                                            <span className={`text-xs font-medium bg-${proj.awardColor}-100 text-${proj.awardColor}-800 py-1 px-2 rounded-full mr-2`}>
                                                {proj.award}
                                            </span>  
                                        )}
                                    </div>
                                    {proj.link && (
                                        <span className="text-xs sm:text-sm text-blue-600 hover:text-blue-500">
                                            View Project
                                        </span>
                                    )}
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsSection;