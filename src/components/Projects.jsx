import React from 'react';

const projects = [
  {
    title: 'AutoEDA - AI-Powered Exploratory Data Analysis',
    description: 'An AI-powered tool designed to automate Exploratory Data Analysis (EDA) using Streamlit, LangChain, and Google GenAI. It intelligently suggests types of visualizations for each column.',
    link: 'https://github.com/kabillanta/auto.eda',
    isPrivate: false
  },
  {
    title: 'Trip Planner - Build and Blog Marathon',
    description: 'An intelligent trip planner developed using Python and Google Cloud, integrating AI for personalized travel recommendations. Built for the Build and Blog Marathon conducted by Google.',
    link: 'https://github.com/kabillanta/trip-planner-bnb',
    isPrivate: false
  },
  {
    title: 'SolaceAI - Indegene Hackathon',
    description: 'SolaceAI is a Flutter-based AI-powered mental health support app featuring guided meditations, chatbot therapy, mood tracking, and more.',
    link: 'https://github.com/kabillanta/solace_ai',
    isPrivate: true
  },
  {
    title: 'OvaCare - Hackfest\'25, ISB',
    description: 'Ovacare is a Flutter-based mobile application designed to assist individuals in managing PCOS using AI-powered health tracking, meal planning, and mental well-being tools.',
    link: 'https://github.com/kabillanta/ovacare/',
    isPrivate: true
  }
];

const Projects = () => {
  return (
    <article className="projects" data-page="projects">
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>

      <section className="projects-list">
        <ul className="service-list">
          {projects.map((project, index) => (
            <li className="service-item" key={index}>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">{project.title}</h4>
                <p className="service-item-text">{project.description}</p>
                {project.isPrivate && <p style={{ fontSize: 'small' }} className="service-item-text">( Private Repository )</p>}
                <a style={{ color: 'hsl(35, 100%, 68%)' }} href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Projects;
