
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  links?: { demo?: string; github?: string };
}

const ProjectCard = ({ title, description, technologies, links }: ProjectCardProps) => (
  <Card className="flex flex-col overflow-hidden group animate-fade-in">
    <div className="h-48 bg-muted flex items-center justify-center overflow-hidden">
      {/* Project image placeholder */}
      <div className="text-4xl font-bold text-primary/20 group-hover:scale-110 transition-transform duration-300">
        {title}
      </div>
    </div>
    <div className="p-6 flex-grow">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span key={index} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-2 mt-auto">
        {links?.demo && (
          <Button size="sm" variant="default" asChild>
            <a href={links.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-1 h-4 w-4" />
              Demo
            </a>
          </Button>
        )}
        {links?.github && (
          <Button size="sm" variant="outline" asChild>
            <a href={links.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-1 h-4 w-4" />
              Code
            </a>
          </Button>
        )}
      </div>
    </div>
  </Card>
);

const Projects = () => {
  const projects = [
    {
      title: "SoundMap",
      description: "A music app built with FastAPI backend and Streamlit frontend, integrated with Last.fm for recommendations and YouTube for playback.",
      technologies: ["Python", "FastAPI", "Streamlit", "Last.fm API", "YouTube API"],
      links: {
        demo: "#",
        github: "https://github.com/Deepanshu-kesharwani/SoundMap",
      },
    },
    {
      title: "Stock Market Analysis",
      description: "A financial analysis tool using Python and Streamlit with Yahoo Finance API and Gemini Chatbot for real-time market sentiment.",
      technologies: ["Python", "Streamlit", "Yahoo Finance API", "Gemini", "Data Visualization"],
      links: {
        demo: "https://finanancial-market-analysis.streamlit.app/",
        github: "https://github.com/chirag-agrawal24/stock_market_analysis",
      },
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              links={project.links}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
