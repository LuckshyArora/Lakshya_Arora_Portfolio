
import React from 'react';
import { Linkedin, Mail, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">Lakshya Arora</h3>
            <p className="text-gray-300 mt-2">Data Analyst | React Developer</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.linkedin.com/in/luckskyaarora" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:luckskyaarora@gmail.com" 
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
        
        <hr className="border-white/10 my-8" />
        
        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Lakshya Arora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
