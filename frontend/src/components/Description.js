import React from "react";
import resumePDF from '../assets/docs/bonato_thomaz_resume.pdf';

const Description = () => {
    return (
        <div className="max-w-5xl mx-auto text-l pt-6">
            <p className="py-2">👋 Hi! I'm Thomaz -- an engineer, researcher, and tech enthusiast. Originally from Brazil 🇧🇷, I've lived across Australia 🇦🇺, Costa Rica 🇨🇷, and the US 🇺🇸. I am currently studying Artificial Intelligence for Business at USC in LA, where I also help lead the university's flagship startup incubator, supporting 10+ companies.</p>
            <p className="py-2">My journey with tech began at 13 when I built Clevr LMS. Since then, I've loved hacking away at problems and working on different projects. Outside of tech, I love playing tennis, basketball, exploring nature, lifting or just chilling with friends.</p>
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

