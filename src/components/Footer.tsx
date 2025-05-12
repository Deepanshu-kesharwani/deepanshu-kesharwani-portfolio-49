
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-card text-center">
      <div className="container mx-auto">
        <p className="text-muted-foreground">
          &copy; {currentYear} Deepanshu Kesharwani. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          <span className="text-primary">B.Tech</span> Computer Science and Engineering
        </p>
      </div>
    </footer>
  );
};

export default Footer;
