
import React from "react";
import { Card } from "@/components/ui/card";
import { Award, ExternalLink } from "lucide-react";

interface CertificateProps {
  title: string;
  issuer: string;
  date: string;
  url?: string;
}

const Certificate = ({ title, issuer, date, url }: CertificateProps) => (
  <Card className="p-5 hover:shadow-md transition-shadow animate-fade-in">
    <div className="flex items-start gap-3">
      <div className="p-2 rounded-full bg-primary/10">
        <Award className="h-6 w-6 text-primary" />
      </div>
      <div className="flex-grow">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-muted-foreground">{issuer}</p>
        <p className="text-sm text-muted-foreground">{date}</p>
      </div>
      {url && (
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-primary hover:text-primary/80"
        >
          <ExternalLink className="h-5 w-5" />
        </a>
      )}
    </div>
  </Card>
);

const Certificates = () => {
  const certificates = [
    {
      title: "Data Analytics Job Simulation",
      issuer: "Accenture",
      date: "2024",
      url: "#",
    },
    {
      title: "Python Programming",
      issuer: "GUVI",
      date: "2023",
      url: "#",
    },
    {
      title: "AI for Beginners",
      issuer: "HP Life",
      date: "2023",
      url: "#",
    },
    {
      title: "What is Generative AI",
      issuer: "LinkedIn Learning",
      date: "2024",
      url: "#",
    },
  ];

  return (
    <section id="certificates" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <h2 className="section-title">Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {certificates.map((cert, index) => (
            <Certificate
              key={index}
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              url={cert.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
