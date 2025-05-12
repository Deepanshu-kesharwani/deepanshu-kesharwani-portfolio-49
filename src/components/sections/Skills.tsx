
import React from "react";
import { Card } from "@/components/ui/card";

const SkillCategory = ({ title, skills }: { title: string; skills: { name: string; level: number }[] }) => (
  <Card className="p-6">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <div className="space-y-4">
      {skills.map((skill) => (
        <div key={skill.name} className="space-y-1">
          <div className="flex justify-between">
            <span className="font-medium">{skill.name}</span>
            <span className="text-sm text-muted-foreground">{skill.level}%</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full" 
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  </Card>
);

const Skills = () => {
  const programmingSkills = [
    { name: "Python", level: 95 },
    { name: "C++", level: 85 },
    { name: "SQL", level: 80 },
  ];

  const dataSkills = [
    { name: "Machine Learning", level: 90 },
    { name: "Deep Learning", level: 85 },
    { name: "TensorFlow", level: 80 },
    { name: "Data Analytics", level: 85 },
  ];

  const toolsSkills = [
    { name: "FastAPI", level: 80 },
    { name: "Streamlit", level: 85 },
    { name: "Git", level: 75 },
    { name: "Cloud Services", level: 70 },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="animate-fade-in">
            <SkillCategory title="Programming" skills={programmingSkills} />
          </div>
          <div className="animate-fade-in [animation-delay:200ms]">
            <SkillCategory title="Data & ML" skills={dataSkills} />
          </div>
          <div className="animate-fade-in [animation-delay:400ms]">
            <SkillCategory title="Tools & Frameworks" skills={toolsSkills} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
