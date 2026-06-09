
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-poppins">
              Hi, I'm <span className="text-primary">Deepanshu Kesharwani</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium mb-6 text-muted-foreground">
              AI/ML Engineer | Data Analyst | Generative AI Developer
            </h2>
            <p className="text-lg mb-8 max-w-lg">
              Computer Science Engineering student with hands-on experience in Machine Learning, Generative AI, Data Analytics, and Software Development. Passionate about building scalable AI solutions, RAG applications, intelligent document processing systems, and data-driven products that transform complex information into actionable insights.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="btn-primary" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/80 to-primary p-1">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://i.postimg.cc/RVMsHGg8/Image.jpg" 
                    alt="Deepanshu Kesharwani" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
