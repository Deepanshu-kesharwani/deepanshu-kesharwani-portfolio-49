
import React from "react";
import { Card } from "@/components/ui/card";

const About = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Institute of Technology, Guru Ghasidas Viswavidyalaya, Bilaspur",
      year: "2022–2026",
    },
    {
      degree: "Intermediate (Science)",
      institution: "Maharishi Vidya Mandir, Prayagraj, Uttar Pradesh",
      year: "2020–2021",
    },
    {
      degree: "High School",
      institution: "Maharishi Vidya Mandir, Prayagraj, Uttar Pradesh",
      year: "2018–2019",
    },
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="animate-slide-in">
            <h3 className="text-2xl font-bold mb-4 font-poppins">Who I Am</h3>
            <p className="mb-4 text-lg">
              I'm a Computer Science Engineering graduate with a passion for building intelligent systems and data-driven solutions that solve real-world problems.
            </p>
            <p className="mb-4">
              My expertise spans Artificial Intelligence, Machine Learning, Generative AI, Data Analytics, and Full-Stack Development. I have hands-on experience developing RAG-based applications, AI-powered document processing systems, resume analysis tools, and scalable web applications using modern technologies and frameworks.
            </p>
            <p>
              I enjoy transforming complex data into actionable insights and creating innovative products that deliver meaningful user experiences. Committed to continuous learning and professional growth, I actively explore emerging technologies and industry best practices to stay at the forefront of the rapidly evolving technology landscape.
            </p>
          </div>
          <div className="animate-slide-in [animation-delay:200ms]">
            <h3 className="text-2xl font-bold mb-4 font-poppins">Education</h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="p-4 animate-fade-in [animation-delay:300ms]">
                  <h4 className="font-semibold text-lg">{edu.degree}</h4>
                  <p className="text-muted-foreground">{edu.institution}</p>
                  <p className="text-sm text-primary font-medium">{edu.year}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
