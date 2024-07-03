import React from 'react';
import Sage from '../assets/images/sage-ai.png';
import Azalea from '../assets/images/azalea.png';
import Clevr from '../assets/images/clevr.png';
import HyIQ from '../assets/images/hyiq.png'; 
import ThePlug from '../assets/images/theplug.png'; 
import Hubtas from '../assets/images/hubtas.png'; 
import USC from '../assets/images/usc.png'; 
import ClairesPlace from '../assets/images/claires-logo.png'; 


const WorkSection = ({ experiences }) => {
    
    const logos = {
      'sage-ai.png': Sage,
      'azalea.png': Azalea,
      'clevr.png': Clevr,
      'hyiq.png': HyIQ,
      'theplug.png': ThePlug,
      'hubtas.png': Hubtas,
      'usc.png': USC,
      'claires-logo.png': ClairesPlace,
        // add logos here
    };

  return (
    <div className="max-w-4xl mx-auto pt-6">
        <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
        {experiences.map((exp, index) => (
        <div key={index} className="mb-2 h-14 bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <div className="flex items-center justify-between h-full px-4 w-full">
            <div className="flex items-center flex-grow">
                <img 
                src={logos[exp.logo]} 
                alt={`${exp.company} logo`} 
                className="w-8 h-auto object-contain"
                />
                <p className="text-sm text-gray-800 ml-3">
                <span className="font-semibold">{exp.title}</span>
                <span className="font-normal"> @ {exp.company}</span>
                </p>
            </div>
            <p className="text-sm text-gray-500 flex-shrink-0">
                {exp.endDate === "" ? exp.startDate : `${exp.startDate} - ${exp.endDate}`}
            </p>
            </div>
        </div>
        ))}
    </div>
  );
};

export default WorkSection;