
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Calendar } from 'lucide-react';

const Education = () => {
  const educationItems = [
    {
      degree: "Bachelor of Computer Application",
      major: "Computer Programming, Specific Applications",
      institution: "Maharshi Dayanand University (MDU), Rohtak",
      period: "September 2019 - May 2022",
      location: "Rohtak, Haryana, India"
    },
    {
      degree: "Higher Secondary Education",
      major: "Computer Science",
      institution: "Delhi Public School, Ranipur",
      period: "Completed March 2018",
      location: "Haridwar, Uttarakhand, India"
    },
    {
      degree: "High School Diploma",
      major: "",
      institution: "Delhi Public School, Ranipur",
      period: "Completed March 2016",
      location: "Haridwar, Uttarakhand, India"
    }
  ];

  return (
    <section id="education" className="section bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-portfolio-navy">
          Education
        </h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {educationItems.map((item, index) => (
            <Card key={index} className="card-hover shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-2 text-portfolio-blue">
                  <BookOpen size={20} className="mr-2" />
                  <h3 className="text-xl font-bold">{item.degree}</h3>
                </div>
                {item.major && (
                  <p className="text-portfolio-gray mb-2">{item.major}</p>
                )}
                <p className="text-lg font-medium text-portfolio-navy mb-2">{item.institution}</p>
                <div className="flex items-center mb-2 text-portfolio-gray">
                  <Calendar size={16} className="mr-2" />
                  <span>{item.period}</span>
                </div>
                <p className="text-sm text-gray-500">{item.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
