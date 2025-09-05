"use client";

import { useTheme } from "@/components/theme-provider";
import { HeaderComponent } from "@/components/Header";
import { ExternalLink } from "lucide-react";

type Project = {
  title: string;
  description: string;
  url?: string;
  tech?: string[];
  event?: string;
};

const projects: Project[] = [
  {
    title: "CodeShot",
    description: "Pixel-perfect AI frontend engineer",
    url: "https://codeshot.dev",
    event: "Mercor x Cognition x Etched",
    tech: ["2nd Place"],
  },
  {
    title: "ForgeUI",
    description: "Frontend UI, faster with Groq.",
    url: "https://useforgeui.vercel.app/",
    event: "Project",
    tech: ["Groq"],
  },
  {
    title: "PalmLabs",
    description: "Gamified sign language",
    url: "https://www.linkedin.com/company/hackmit/",
    tech: ["1st Place"],
    event: "HackMIT 2024",
  },
  {
    title: "CypressMFA",
    description: "Gesture-driven auth",
    url: "https://devpost.com/software/cypress-mfa",
    tech: ["3rd Place"],
    event: "PennApps",
  },
  {
    title: "Terminal",
    description: "Summer Invitational 2024",
    url: "https://terminal.app",
    tech: ["Top 30"],
    event: "Citadel",
  },
  {
    title: "QuRE",
    description: "LLM query routing engine",
    url: "https://qure.dev",
    tech: ["1st Place"],
    event: "AI for Change",
  },
];

export default function Projects() {
  const { theme } = useTheme();

  return (
    <div className={`h-screen flex flex-col font-mono transition-colors duration-500 
        ${theme === 'light' 
          ? 'bg-white text-gray-600' 
          : 'bg-black text-gray-400'}`}
    >
      <HeaderComponent />
      <main className="flex-1 overflow-y-auto px-8 py-4">
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-lg font-base mb-6 tracking-tight transition-colors duration-500 ${
              theme === "light" ? "text-black" : "text-white"
            }`}
          >
            projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  group border rounded-xl p-5 flex flex-col gap-2 transition-all duration-300
                  shadow-sm hover:shadow-lg
                  ${theme === "light"
                    ? "bg-white border-gray-200 hover:border-black hover:bg-gray-50"
                    : "bg-neutral-900 border-neutral-800 hover:border-white hover:bg-neutral-800"}
                `}
                style={{ minHeight: "120px" }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`font-base text-base transition-colors duration-500 ${
                      theme === "light" ? "text-black" : "text-white"
                    }`}
                  >
                    {project.title}
                  </span>
                  <ExternalLink
                    className={`ml-2 text-lg opacity-60 group-hover:opacity-100 transition-opacity duration-200 ${
                      theme === "light" ? "text-gray-500 group-hover:text-black" : "text-gray-400 group-hover:text-white"
                    }`}
                  />
                </div>
                <p className="text-sm opacity-80 mb-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech && project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`text-xs px-2 py-0.5 rounded bg-opacity-20
                        ${theme === "light"
                          ? "bg-black text-black"
                          : "bg-white text-white"}
                      `}
                      style={{ backgroundColor: theme === "light" ? "#00000010" : "#ffffff10" }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.event && (
                    <span
                      className={`text-xs px-2 py-0.5 rounded border border-dashed ml-auto
                        ${theme === "light"
                          ? "border-gray-300 text-gray-500"
                          : "border-gray-700 text-gray-400"}
                      `}
                    >
                      {project.event}
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
      <footer className="px-8 py-4 text-xs text-center opacity-60">
        Copyright © 2025 Thomaz Bonato.
      </footer>
    </div>
  );
}