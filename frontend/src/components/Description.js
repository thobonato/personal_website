import React from "react";
import resumePDF from '../assets/docs/bonato_thomaz_resume.pdf';

const Description = () => {
    return (
        <div className="text-l pt-6">
            <p className="py-2">I'm Thomaz Bonato, an engineer and researcher with a passion for AI/ML. Originally from Brazil 🇧🇷, I've lived across Australia 🇦🇺, Costa Rica 🇨🇷, and the US 🇺🇸. I am currently studying Artificial Intelligence for Business at USC in Los Angeles, where I lead the university's flagship startup incubator, supporting 10+ companies.</p>
            <p className="py-2">Growing up, I was always involved in math, coding, and robotics. At 13, I created Clevr LMS, a peer tutoring software that sparked my love for technology. My interests extend to AI safety, focusing on using mathematical approaches to develop safer algorithms.</p>
            <p className="py-2">I love playing tennis, basketball, volleyball and hanging out with friends :)</p>
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

