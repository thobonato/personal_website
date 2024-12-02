"use client";
import React from 'react';
import { useState } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Github, Linkedin, Twitter, Mail, Eye, EyeClosed } from 'lucide-react';
import { WorkExperience } from '@/components/WorkExperience';
import { Projects } from '@/components/Projects';
import { motion } from "framer-motion";
import { Footer } from '@/components/Footer';


const Portfolio = () => {
  const { theme, setTheme } = useTheme();
  const [ eyesClosed, setEyesClosed ] = useState(false);

  return (
    <div className={`min-h-screen p-8 ${theme === 'dark' ? 'bg-neutral-900 text-gray-200' : 'bg-neutral-50 text-neutral-900'}`}>
      <div className="max-w-6xl mx-auto">
        
        
        {/* Header with Theme Toggle */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0 }}
        >
          <div
            className="flex justify-between items-center mt-16">
            <h1 className="text-3xl font-bold mb-2">thomaz felipe bonato.</h1>
            <div className="flex items-center gap-1">
              <Switch
                  checked={theme === 'dark'}
                  onCheckedChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                />
              <div className="flex">
              <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setEyesClosed(!eyesClosed)}
                  className='hover:bg-transparent'
                >
                { !eyesClosed ?
                (<Eye className="w-6 h-6" />) :
                (<EyeClosed className="w-6 h-6" />)
                }
              </Button>
              </div>
            </div>
          </div>

          {/* Bio Section */}
          <div className="mb-16 space-y-4">
            <p className="text-md">
              👋 Hi! I'm Thomaz -- an engineer, researcher, and tech enthusiast. Originally from Brazil 🇧🇷, 
              I've lived across Australia 🇦🇺, Costa Rica 🇨🇷, and the US 🇺🇸.
            </p>
            <p className="text-md">
              I am currently studying Artificial Intelligence for Business at USC in LA, 
              where I also help lead the university's flagship startup incubator, supporting 10+ companies.
            </p>
          </div>
        </motion.div>

        {/* Work Experience Section */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='mb-16'
        >
          <WorkExperience/>
        </motion.div>

        {/* Projects Section */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='mb-16'
        >
          <Projects/>
        </motion.div>
        

        {/* footer */}
        <motion.footer 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='mb-16'
        >
          <Footer/>
        </motion.footer>
      </div>
    </div>
  );
};

export default Portfolio;