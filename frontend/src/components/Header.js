import React from "react";
import linkedin from "../assets/images/linkedin.svg"
import github from "../assets/images/github.svg"
import twitter from "../assets/images/twitter.svg"
import devpost from "../assets/images/devpost.svg"

const Header = () => {
    return (
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row h-auto sm:h-[50px] w-full items-center bg-white py-3 sm:py-0">
            <div className="flex w-full items-center justify-between sm:justify-start text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-0">
                <span className="text-2xl sm:text-3xl">thomaz felipe bonato.</span>
                <div className="flex sm:ml-auto">
                    <a href="https://www.linkedin.com/in/thomaz-felipe-bonato" target="_blank" rel="noopener noreferrer" className="ml-2 sm:ml-auto">
                        <img src={linkedin} alt="linkedin" className="fill-none rounded w-5 h-5 sm:w-6 sm:h-6" />
                    </a>
                    <a href="https://github.com/thobonato" target="_blank" rel="noopener noreferrer" className="ml-2">
                        <img src={github} alt="github" className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>
                    <a href="https://twitter.com/ThomazBonato" target="_blank" rel="noopener noreferrer" className="ml-2">
                        <img src={twitter} alt="twitter" className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                    <a href="https://devpost.com/thobonato" target="_blank" rel="noopener noreferrer" className="ml-2">
                        <img src={devpost} alt="devpost" className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;