
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
      title: "PDFQuery – Multi PDF AI Chat Assistant",
      description: "Developed an AI-powered document question-answering system that enables users to upload and chat with multiple PDF files simultaneously. Implemented a Retrieval-Augmented Generation (RAG) pipeline using LangChain, FAISS, and Sentence Transformers for semantic search and contextual retrieval. Integrated multiple LLMs including Gemini 2.5 Flash, GPT-4o Mini, DeepSeek Chat, and Qwen models through OpenRouter. Built an interactive Streamlit interface with source attribution and persistent chat history.",
      technologies: ["Python", "Streamlit", "LangChain", "FAISS", "Sentence Transformers", "OpenRouter", "PyPDF2", "PyMuPDF"],
      links: {
        demo: "https://deepanshu-kesharwani-pdfquery-app-pfdrkp.streamlit.app/",
        github: "https://github.com/Deepanshu-kesharwani/PDFQuery",
      },
    },
    {
      title: "Smart ATS – Resume & Job Description Analyzer",
      description: "Built an AI-powered Applicant Tracking System that evaluates resumes against job descriptions and generates ATS match scores, missing keywords, and profile summaries. Integrated OpenRouter GPT-4o Mini for intelligent resume analysis and recommendation generation. Implemented PDF resume parsing, keyword gap detection, and structured JSON-based reporting through an intuitive Streamlit web application.",
      technologies: ["Python", "Streamlit", "OpenRouter", "GPT-4o Mini", "ATS", "Resume Analysis", "PyPDF2", "NLP", "AI"],
      links: {
        demo: "https://deepanshu-kesharwani-smart-ats-tracking-resume-and--main-kgqbqe.streamlit.app/",
        github: "https://github.com/Deepanshu-kesharwani/Smart-ATS-tracking-Resume-and-JD",
      },
    },
    {
      title: "YouTube RAG Based Chatbot",
      description: "Transcribed YouTube video audio using Faster Whisper and embedded processed transcripts into a FAISS vector store for semantic retrieval. Implemented a RAG pipeline using Google Gemini for context-aware response generation. Exposed RESTful APIs with FastAPI and Dockerized the system for scalable deployment.",
      technologies: ["Python", "FastAPI", "Faster Whisper", "FAISS", "Google Gemini", "Docker"],
      links: {
        github: "https://github.com/Deepanshu-kesharwani/YouTube-backend",
      },
    },
    {
      title: "AI-Powered Manim Animation Studio",
      description: "Generated executable Manim animations from natural language prompts using a LangGraph-orchestrated RAG pipeline. Added automated error detection and self-correction for failed renders while optimizing Gemini LLM usage for cost and performance. Built a desktop editor enabling code editing, local rendering, timeline-based video editing, and customizable exports.",
      technologies: ["Python", "Manim", "LangGraph", "RAG", "Gemini LLM"],
      links: {
        github: "https://github.com/yashpinjarkar10/Cursor_2D_Animation",
      },
    },
    {
      title: "SoundMap",
      description: "A music app built with FastAPI backend and Streamlit frontend, integrated with Last.fm for recommendations and YouTube for playback.",
      technologies: ["Python", "FastAPI", "Streamlit", "Last.fm API", "YouTube API"],
      links: {
        github: "https://github.com/Deepanshu-kesharwani/SoundMap",
      },
    },
    {
      title: "Stock Market Analysis",
      description: "A financial analysis tool using Python and Streamlit with Yahoo Finance API and Gemini Chatbot for real-time market sentiment.",
      technologies: ["Python", "Streamlit", "Yahoo Finance API", "Gemini", "Data Visualization"],
      links: {
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
