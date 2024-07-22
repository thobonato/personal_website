import React from "react";
import resumePDF from '../assets/docs/bonato_thomaz_resume.pdf';

const Description = () => {
    return (
        <div className="max-w-5xl mx-auto text-l pt-6">
            <p className="py-2">👋 Hi! I'm Thomaz -- an engineer, researcher, and AI enthusiast. Originally from Brazil 🇧🇷, I've lived across Australia 🇦🇺, Costa Rica 🇨🇷, and the US 🇺🇸. I am currently studying Artificial Intelligence for Business at USC (Fight On! ✌️) in Los Angeles, where I lead the university's flagship startup incubator, supporting 10+ companies.</p>
            <p className="py-2">My journey with tech began at 13 when I built Clevr LMS, igniting my passion for coding. Since then, I've fallen in love with hacking away at challenges, working on diverse projects from eco-friendly AI models to NLP to algo trading.</p>
            <p className="py-2">When I'm not diving into tech, you'll find me playing tennis or basketball, exploring nature, or just chilling with friends :)</p>
            <p className="py-2">See more on my&nbsp;
                    <a className="underline" href={resumePDF} target="_blank" rel="noopener noreferrer">
                        resume
                    </a> 
                    &nbsp;or contact me at&nbsp;
                    <a className="underline" href="mailto:bonato@usc.edu">
                        bonato@usc.edu
                    </a>.
                </p>
        </div>
    )
};

export default Description;

