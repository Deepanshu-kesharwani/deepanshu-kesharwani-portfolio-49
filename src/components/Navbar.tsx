
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" }
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar style on scroll
      setIsScrolled(window.scrollY > 20);
      
      // Get current visible section
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200 && 
            window.scrollY < sectionTop + sectionHeight - 200) {
          current = section.getAttribute("id") || "";
        }
      });
      
      if (current) {
        setActiveSection(current);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <nav className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold font-poppins text-primary">
          Deepanshu<span className="text-foreground">.dev</span>
        </a>
        
        {/* Mobile menu button */}
        <button 
          className="lg:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <span className="text-2xl">✕</span>
          ) : (
            <span className="text-2xl">≡</span>
          )}
        </button>
        
        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "nav-link",
                activeSection === link.href.substring(1) && "active"
              )}
            >
              {link.name}
            </a>
          ))}
          <Button 
            size="sm" 
            className="ml-4"
            asChild
          >
                <a href="https://www.dropbox.com/scl/fi/rz0zsn84bdbhbq1zkoqmd/resume.pdf?rlkey=ztmtxx0fl9dcxt5hvj0cnem3r&st=fyy3lziq&dl=0" target="_blank" rel="noopener noreferrer">Resume</a>
          </Button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-sm shadow-md py-4">
            <div className="flex flex-col items-center space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "nav-link",
                    activeSection === link.href.substring(1) && "active"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button 
                size="sm" 
                className="mt-2"
                asChild
              >
                <a href="https://www.dropbox.com/scl/fi/rz0zsn84bdbhbq1zkoqmd/resume.pdf?rlkey=ztmtxx0fl9dcxt5hvj0cnem3r&st=fyy3lziq&dl=0" target="_blank" rel="noopener noreferrer">Resume</a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
