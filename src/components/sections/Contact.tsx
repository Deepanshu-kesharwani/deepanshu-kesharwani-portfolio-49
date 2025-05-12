
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  link?: string;
}

const ContactInfo = ({ icon, title, value, link }: ContactInfoProps) => (
  <div className="flex items-center gap-3 animate-fade-in">
    <div className="p-2 rounded-full bg-primary/10 shrink-0">
      {icon}
    </div>
    <div>
      <p className="text-sm text-muted-foreground">{title}</p>
      {link ? (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="font-medium hover:text-primary transition-colors flex items-center gap-1"
        >
          {value}
          <ExternalLink className="h-3 w-3" />
        </a>
      ) : (
        <p className="font-medium">{value}</p>
      )}
    </div>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <h2 className="section-title">Get In Touch</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <Card className="p-6 animate-fade-in">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-6 mb-6">
              <ContactInfo 
                icon={<Mail className="h-5 w-5 text-primary" />} 
                title="Email" 
                value="dkesharwani2002@gmail.com" 
                link="mailto:dkesharwani2002@gmail.com" 
              />
              <ContactInfo 
                icon={<Phone className="h-5 w-5 text-primary" />} 
                title="Phone" 
                value="+91 6394451931" 
                link="tel:+916394451931" 
              />
              <ContactInfo 
                icon={<Linkedin className="h-5 w-5 text-primary" />} 
                title="LinkedIn" 
                value="Deepanshu Kesharwani" 
                link="https://www.linkedin.com/in/deepanshu-kesharwani-0028b1191/" 
              />
              <ContactInfo 
                icon={<Github className="h-5 w-5 text-primary" />} 
                title="GitHub" 
                value="Deepanshu-kesharwani" 
                link="https://github.com/Deepanshu-kesharwani" 
              />
              <ContactInfo 
                icon={<ExternalLink className="h-5 w-5 text-primary" />} 
                title="GeeksforGeeks" 
                value="Profile" 
                link="https://www.geeksforgeeks.org/user/dkesharwith6/?_gl=1*cv9965*_up*MQ..*_gs*MQ..&gclid=Cj0KCQjwlYHBBhD9ARIsALRu09ql6-89kdjrtNoNtmvV5VBSj-ZmAWwLJz_zVF4iJXbqK_xWrkux48UaAu-pEALw_wcB&gbraid=0AAAAAC9yBkBZ7WmoeqGfHQqOI_boNP7hg" 
              />
            </div>
          </Card>
          
          <Card className="p-6 animate-fade-in [animation-delay:200ms]">
            <h3 className="text-xl font-bold mb-4">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={4}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
