
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Mail, Phone, Linkedin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-portfolio-navy">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-portfolio-gray mb-6">
              I am a data analyst and React developer passionate about transforming raw data into actionable insights and building engaging user interfaces. With expertise in Python, SQL, and data visualization tools like Tableau and Power BI, I help organizations make data-driven decisions.
            </p>
            <p className="text-lg text-portfolio-gray mb-6">
              My background spans both educational analytics and inventory management systems, where I've successfully improved operational efficiency and delivered meaningful business outcomes through data-driven approaches.
            </p>
            <p className="text-lg text-portfolio-gray">
              I'm constantly exploring new technologies and methodologies to enhance my analytical and development skills, with a focus on creating solutions that make a real impact.
            </p>
          </div>
          <div>
            <Card className="overflow-hidden border-portfolio-light-blue shadow-md">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-portfolio-navy mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin size={20} className="text-portfolio-blue flex-shrink-0" />
                    <span className="text-portfolio-gray">Gurugram, Haryana, India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={20} className="text-portfolio-blue flex-shrink-0" />
                    <a href="mailto:luckskyaarora@gmail.com" className="text-portfolio-gray hover:text-portfolio-blue transition">
                      luckskyaarora@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={20} className="text-portfolio-blue flex-shrink-0" />
                    <a href="tel:+916396089078" className="text-portfolio-gray hover:text-portfolio-blue transition">
                      +91 6396089078
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin size={20} className="text-portfolio-blue flex-shrink-0" />
                    <a 
                      href="https://www.linkedin.com/in/luckskyaarora" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-portfolio-gray hover:text-portfolio-blue transition"
                    >
                      linkedin.com/in/luckskyaarora
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
