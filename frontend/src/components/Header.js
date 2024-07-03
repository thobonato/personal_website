import React from "react";
import linkedin from "../assets/images/linkedin.svg"
import github from "../assets/images/github.svg"
import twitter from "../assets/images/twitter.svg"
import devpost from "../assets/images/devpost.svg"

const Header = () => {
    return (
        <div className="flex h-[50px] w-full items-center bg-white">
            <div className="flex w-full items-center text-2xl font-bold text-gray-800">
                <span className="text-3xl">thomaz felipe bonato.</span>
                <a href="https://www.linkedin.com/in/thomaz-felipe-bonato" target="_blank" rel="noopener noreferrer" className="ml-auto">
                    <img src={linkedin} alt="linkedin" className="fill-none	rounded w-6 h-6" />
                </a>
                <a href="https://github.com/thobonato" target="_blank" rel="noopener noreferrer" className="ml-2">
                    <img src={github} alt="github" className="w-6 h-6" />
                </a>
                <a href="https://twitter.com/ThomazBonato" target="_blank" rel="noopener noreferrer" className="ml-2">
                    <img src={twitter} alt="twitter" className="w-5 h-5" />
                </a>
                <a href="https://devpost.com/thobonato" target="_blank" rel="noopener noreferrer" className="ml-2">
                    <img src={devpost} alt="devpost" className="w-6 h-6" />
                </a>
            </div>
        </div>
    );
};

export default Header;