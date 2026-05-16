
import React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

interface ExperienceItemProps {
  role: string;
  company: string;
  period: string;
  description: string;
  index: number;
  companyLink?: string;
}

const ExperienceItem = ({ role, company, period, description, index, companyLink }: ExperienceItemProps) => (
  <div className={cn("relative pl-8 pb-8 animate-fade-in", { "border-l-2 border-primary": index !== 3 })}>
    <div className="absolute left-[-8px] top-0 w-4 h-4 bg-primary rounded-full" />
    <Card className="p-5">
      <h3 className="text-xl font-bold">{role}</h3>
      {companyLink ? (
        <a 
          href={companyLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-lg text-primary font-semibold hover:underline inline-flex items-center gap-1"
        >
          {company}
          <ExternalLink className="h-4 w-4" />
        </a>
      ) : (
        <h4 className="text-lg text-primary font-semibold">{company}</h4>
      )}
      <p className="text-sm text-muted-foreground mb-3">{period}</p>
      <p>{description}</p>
    </Card>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      role: "Consultant",
      company: "Netscribes Data & Insights Pvt. Ltd.",
      period: "Mar 2026 - May 2026",
      description: "Worked on e-commerce data quality analysis and content auditing projects, ensuring accuracy and consistency of product information. Analyzed datasets, reviewed product descriptions, features, and images, and contributed to maintaining high-quality standards in team-based projects. Collaborated with cross-functional teams to complete group projects within strict deadlines while handling pressure in a fast-paced work environment. Demonstrated strong decision-making, time management, and problem-solving skills to improve workflow efficiency and task completion."
    },
    {
      role: "Subject Matter Expert",
      company: "Chegg Inc.",
      period: "August 2022 - Dec 2025",
      description: "Deliver accurate academic solutions across disciplines, simplifying complex concepts to support global learners and promote academic success."
    },
    {
      role: "AI & Cloud Intern",
      company: "Edunet Foundation",
      period: "June 2025 - July 2025",
      description: "Gained hands-on training on Microsoft Azure, learning to apply ML, Generative AI, and Computer Vision for building AI-driven solutions.",
      companyLink: "https://www.dropbox.com/scl/fi/7ah14xs8rc74fid0a7hfj/Edunet-Foundation-June-to-July-2025.pdf?rlkey=qggefeotw6ynz680fgsis83or&st=5gdy93pj&dl=0"
    },
    {
      role: "Data Analyst Intern",
      company: "Edunet Foundation",
      period: "December 2024 - January 2025",
      description: "Extracted insights from educational data, created visual reports, and supported data-driven improvements in learning outcomes.",
      companyLink: "https://www.dropbox.com/scl/fi/svr0z603i17e0hpc9mcyw/Edunet-Foundation-Dec-to-Jan.pdf?rlkey=p1og9pczlqdfgzseb7uyqrpnz&st=apwz719o&dl=0"
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
              companyLink={exp.companyLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
