import React from 'react';
import experiencesData from "./assets/misc/experiences.json";
import projectsData from "./assets/misc/projects.json";
import Header from "./components/Header";
import Description from "./components/Description";
import WorkSection from "./components/WorkSection";
import ProjectsSection from "./components/ProjectsSection";
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow container mx-auto px-4 sm:px-16 lg:px-48 pt-14 pb-20 scroll-smooth">
        <div className="App max-w-7xl mx-auto">
          <Header />
          <Description />
          <WorkSection experiences={experiencesData.experiences} />
          <ProjectsSection projects={projectsData.projects} />
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;