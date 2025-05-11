
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 pb-16 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-portfolio-navy animate-fade-in">
            Lakshya Arora
          </h1>
          <h2 className="text-xl md:text-2xl text-portfolio-blue font-medium mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Data Analyst | SQL | Python | Tableau | Power BI
          </h2>
          <p className="text-lg text-portfolio-gray mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Data Analyst and React Developer skilled in Python, SQL, Tableau, and frontend development. Experienced in building dashboards, predictive models, and responsive web apps. Passionate about using data and technology to drive smart solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button className="bg-portfolio-blue hover:bg-portfolio-dark-blue text-white px-6 py-2">
              <a href="/lovable-uploads/cce66251-32b7-4445-9a0e-ac9299b2b003.png" download="Lakshya_Arora_CV.png">
                Download CV
              </a>
            </Button>
            <ScrollLink to="contact" spy={true} smooth={true} offset={-80} duration={500}>
              <Button variant="outline" className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white px-6 py-2">
                Contact Me
              </Button>
            </ScrollLink>
          </div>
        </div>
        <div className="flex justify-center mt-20 animate-bounce">
          <ScrollLink to="about" spy={true} smooth={true} offset={-80} duration={500} className="cursor-pointer">
            <ArrowDown size={32} className="text-portfolio-blue" />
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
