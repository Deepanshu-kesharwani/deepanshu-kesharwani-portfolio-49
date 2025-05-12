
import React from "react";
import { Card } from "@/components/ui/card";
import { Code, BarChart3, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => (
  <Card className="p-6 text-center flex flex-col items-center hover:shadow-lg transition-shadow animate-fade-in">
    <div className="p-4 rounded-full bg-primary/10 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-muted-foreground mb-6">{description}</p>
    <Button variant="outline" className="mt-auto" asChild>
      <a href="#contact">Get in Touch</a>
    </Button>
  </Card>
);

const Services = () => {
  const services = [
    {
      title: "Full-Stack Development",
      description: "Custom web applications using FastAPI for backend and Streamlit for interactive user interfaces.",
      icon: <Code className="h-8 w-8 text-primary" />,
    },
    {
      title: "Data Analysis & Visualization",
      description: "Transform raw data into actionable insights through comprehensive analysis and compelling visualizations.",
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
    },
    {
      title: "ML Model Development",
      description: "Design, train and deploy machine learning models for prediction, classification and recommendation systems.",
      icon: <Database className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
