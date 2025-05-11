
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Analysis",
      skills: ["Python (pandas, numpy, matplotlib)", "SQL", "Excel", "Data Cleansing", "Data Visualization", "Statistical Analysis"]
    },
    {
      title: "Database Management",
      skills: ["MySQL", "MS Excel", "Database Design", "Query Optimization", "Data Modeling"]
    },
    {
      title: "Data Visualization",
      skills: ["Tableau", "Power BI", "Dashboard Design", "Interactive Reports", "Data Storytelling"]
    },
    {
      title: "Programming",
      skills: ["Python", "SQL", "HTML", "CSS", "PHP", "JavaScript", "React", "C++"]
    },
    {
      title: "Statistical Analysis",
      skills: ["Basic statistical modelling", "Data-driven decision-making", "Hypothesis Testing", "Regression Analysis"]
    },
    {
      title: "Soft Skills",
      skills: ["Strong analytical skills", "Problem-solving", "Team Collaboration", "Communication", "Time Management"]
    }
  ];

  return (
    <section id="skills" className="section bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-portfolio-navy">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover border-t-4 border-t-portfolio-blue">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-portfolio-navy mb-4">{category.title}</h3>
                <div className="flex flex-wrap">
                  {category.skills.map((skill, idx) => (
                    <span key={idx} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
