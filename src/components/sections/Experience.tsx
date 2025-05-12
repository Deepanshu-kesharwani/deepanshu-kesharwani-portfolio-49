
import React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ExperienceItemProps {
  role: string;
  company: string;
  period: string;
  description: string;
  index: number;
}

const ExperienceItem = ({ role, company, period, description, index }: ExperienceItemProps) => (
  <div className={cn("relative pl-8 pb-8 animate-fade-in", { "border-l-2 border-primary": index !== 2 })}>
    <div className="absolute left-[-8px] top-0 w-4 h-4 bg-primary rounded-full" />
    <Card className="p-5">
      <h3 className="text-xl font-bold">{role}</h3>
      <h4 className="text-lg text-primary font-semibold">{company}</h4>
      <p className="text-sm text-muted-foreground mb-3">{period}</p>
      <p>{description}</p>
    </Card>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      role: "Subject Matter Expert",
      company: "Chegg Inc.",
      period: "Aug 2022 – Present",
      description: "Providing expert solutions to complex problems in computer science, programming, and data science domains, helping students understand difficult concepts."
    },
    {
      role: "Machine Learning Engineer Intern",
      company: "YBI Foundation",
      period: "Sep 2024 – Nov 2024",
      description: "Worked on developing and fine-tuning machine learning models, focusing on predictive analytics and pattern recognition algorithms."
    },
    {
      role: "Data Analyst Intern",
      company: "Edunet Foundation",
      period: "Dec 2024 – Jan 2025",
      description: "Analyzed large datasets, created visualization dashboards, and generated actionable insights to improve decision-making processes."
    }
  ];

  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <h2 className="section-title">Work Experience</h2>
        <div className="mt-12 max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              role={exp.role}
              company={exp.company}
              period={exp.period}
              description={exp.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
