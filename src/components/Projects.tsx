
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Database, BarChart, Brain, ChartBar, BookOpen } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Used Car Price Prediction in India",
      description: "ML model to predict used car prices with high accuracy using multiple algorithms.",
      icon: <ChartBar size={32} className="text-portfolio-blue" />,
      achievements: [
        "Conducted a comprehensive analysis of 15,000+ listings to model used car prices using Random Forest, Gradient Boosting, and deep learning.",
        "Identified price drivers like fuel type, transmission, and vehicle age; achieved high predictive accuracy with RMSE and MAPE metrics."
      ],
      technologies: ["Python", "Random Forest", "Gradient Boosting", "Deep Learning", "Predictive Modeling", "Data Analysis"]
    },
    {
      title: "EV Market Segmentation & Strategy",
      description: "ML-driven customer segmentation for India's EV market with actionable insights.",
      icon: <BarChart size={32} className="text-portfolio-blue" />,
      achievements: [
        "Performed machine learning-driven customer segmentation using K-Means and hierarchical clustering on India's EV market.",
        "Formulated a data-backed market entry strategy targeting urban early adopters, fleet operators, and cost-conscious consumers."
      ],
      technologies: ["K-Means Clustering", "Hierarchical Clustering", "Market Analysis", "Strategic Planning", "Python"]
    },
    {
      title: "Learnify – AI-Powered Learning Platform",
      description: "AI-driven edtech platform that personalizes learning experiences.",
      icon: <Brain size={32} className="text-portfolio-blue" />,
      achievements: [
        "Designed an AI-driven edtech platform that personalizes learning using NLP, reinforcement learning, and real-time analytics.",
        "Built key modules for adaptive learning paths, gamification, and student performance dashboards, ensuring GDPR/FERPA compliance."
      ],
      technologies: ["NLP", "Reinforcement Learning", "Real-time Analytics", "EdTech", "Data Privacy", "UI/UX"]
    },
    {
      title: "Inventory Management Database",
      description: "A MySQL-based inventory system to track materials, suppliers, and product stock.",
      icon: <Database size={32} className="text-portfolio-blue" />,
      achievements: [
        "Designed and implemented a MySQL-based inventory system to track materials, suppliers, and product stock.",
        "Reduced stock-out incidents by 30% through automated reorder level calculations and notifications.",
        "Developed a Power BI dashboard to track material costs, usage, and product output, aiding real-time decision-making."
      ],
      technologies: ["MySQL", "Power BI", "Database Design", "Data Modeling"]
    },
    {
      title: "Student Performance Prediction Model",
      description: "ML models to predict academic performance with up to 85% accuracy.",
      icon: <BookOpen size={32} className="text-portfolio-blue" />,
      achievements: [
        "Collected and cleaned student data from the in-house learning app, including attendance, quiz scores, and practice trends.",
        "Built and evaluated ML models (Logistic Regression, Random Forest, SVM) to predict academic performance with up to 85% accuracy.",
        "Visualised insights using Python (matplotlib, seaborn) to help faculty identify at-risk students early."
      ],
      technologies: ["Python", "Machine Learning", "Data Visualization", "Pandas", "Scikit-learn"]
    },
    {
      title: "E-Commerce Website",
      description: "A responsive pharmacy e-commerce frontend using React.",
      icon: <BarChart size={32} className="text-portfolio-blue" />,
      achievements: [
        "Built a responsive pharmacy e-commerce frontend using React, featuring dynamic cart management and smooth navigation.",
        "Designed and implemented product listing, filtering, and sorting functionalities to enhance the user experience.",
        "Optimised the website for mobile devices and cross-browser compatibility, achieving high performance and responsiveness."
      ],
      technologies: ["React", "JavaScript", "HTML/CSS", "Responsive Design", "UI/UX"]
    }
  ];

  return (
    <section id="projects" className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-portfolio-navy">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover overflow-hidden shadow-md">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold text-portfolio-navy mb-3 text-center">{project.title}</h3>
                <p className="text-portfolio-gray mb-4 text-center">{project.description}</p>
                <ul className="list-disc list-outside ml-5 text-portfolio-gray space-y-2 mb-4">
                  {project.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="bg-portfolio-light-gray border-none">
                      {tech}
                    </Badge>
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

export default Projects;
