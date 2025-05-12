
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
      issuer: "Forage",
      date: "2024",
      url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_eCbfmY83sPf3yWrsd_1737884329194_completion_certificate.pdf",
    },
    {
      title: "Python Programming",
      issuer: "GUVI",
      date: "2023",
      url: "https://www.guvi.in/verify-certificate?id=22015k1MNx5n2369ep",
    },
    {
      title: "AI for Beginners",
      issuer: "HP Life",
      date: "2023",
      url: "https://www.life-global.org/certificate/d0d6547e-98b3-45fe-938f-91b2d08eaf5b",
    },
    {
      title: "What is Generative AI",
      issuer: "LinkedIn Learning",
      date: "2024",
      url: "https://www.linkedin.com/learning/certificates/bce09d2b242cffdef10d3639ff22d5bdff5b0ca72f025f2e160372067595c1a7",
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
