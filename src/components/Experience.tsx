
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Data Analyst',
      company: 'Aditya Joshi Academics',
      period: 'February 2024 - Present',
      location: 'Haridwar, Uttarakhand, India',
      responsibilities: [
        'Analysed student performance data, improving educational strategies and increasing enrollment by 30%.',
        'Created automated dashboards in Tableau to track key KPIs, enabling data-driven decision-making.',
        'Utilised Python (pandas, numpy, matplotlib) to identify trends and optimise revenue strategies, leading to a 10LPA increase.',
        'Collaborated with educators and administrators to integrate data insights, resulting in improved educational strategies.'
      ]
    },
    {
      title: 'AI/ML Intern',
      company: 'Feynn Labs',
      period: 'February 2025 - April 2025',
      location: 'Remote',
      responsibilities: [
        'Contributed to three end-to-end data science projects involving market segmentation, predictive modeling, and AI product development.',
        'Led data preprocessing, feature engineering, and model building using Python, scikit-learn, and clustering techniques.',
        'Delivered actionable insights through interactive visualizations (Matplotlib, Seaborn) and business strategy reports.',
        'Collaborated in a cross-functional team on GitHub to document findings and share results.'
      ]
    },
    {
      title: 'SQL Developer',
      company: 'Divya Enterprises',
      period: 'August 2021 - December 2023',
      location: 'Haridwar, Uttarakhand, India',
      responsibilities: [
        'Developed an SQL-based inventory management system, ensuring real-time tracking and reducing discrepancies.',
        'Optimised raw material allocation, minimising waste and improving cost efficiency.',
        'Conducted comprehensive data validation and cleansing processes, increasing data accuracy and consistency by 25% across records, supporting reliable decision-making.'
      ]
    }
  ];

  return (
    <section id="experience" className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-portfolio-navy">
          Professional Experience
        </h2>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-4 bottom-0 w-px bg-portfolio-blue -ml-0.5 hidden md:block"></div>
          
          {/* Experience cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16 md:ml-auto'} md:w-1/2`}>
                {/* Timeline dot */}
                <div className="hidden md:block absolute top-4 w-4 h-4 rounded-full bg-portfolio-blue border-4 border-white md:left-0 md:right-0 md:mx-auto"></div>
                
                <Card className="card-hover bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-2 text-portfolio-blue">
                      <Briefcase size={18} className="mr-2" />
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                    </div>
                    <p className="text-lg font-medium text-portfolio-navy mb-2">{exp.company}</p>
                    <div className="flex items-center mb-4 text-portfolio-gray">
                      <Calendar size={16} className="mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">{exp.location}</p>
                    <ul className="list-disc list-outside ml-5 text-portfolio-gray space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
