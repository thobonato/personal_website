import React from "react";
import { Button } from "./ui/button";
import { Linkedin, Github, Twitter, Mail } from "lucide-react";

export const Footer = () => {

    return (
      <div>
          <div className="flex items-center gap-1">
            <div className="flex">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-transparent hover:scale-90 transition-transform"
                onClick={() => window.open('https://www.linkedin.com/in/thomaz-felipe-bonato','_blank')}
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-transparent hover:scale-90 transition-transform"
                onClick={() => window.open('https://github.com/thobonato','_blank')}
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-transparent hover:scale-90 transition-transform"
                onClick={() => window.open('https://x.com/thomazbonato','_blank')}
              >
                <Twitter className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-transparent hover:scale-90 transition-transform"
                onClick={() => window.location.href = "mailto:bonato@usc.edu"}
              >
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
          <div className='ml-2 mt-2 text-xs font-sans	'>
            Copyright © 2024 Thomaz Bonato
          </div>
      </div>
    )
}