import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'Javascript', 'Java', 'Dart'],
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['Scikit-learn', 'Streamlit', 'ReactJS', 'Langchain', 'Flutter'],
    },
    {
      title: 'Generative AI & Machine Learning',
      skills: ['Model development', 'Fine-tuning', 'Deployment'],
    },
    {
      title: 'Development Tools',
      skills: ['Git', 'Linux', 'Figma'],
    },
    {
      title: 'Cloud Platforms',
      skills: ['Fundamentals of Google Cloud Platform'],
    },
  ];

  return (
    <article className="skills" data-page="skills">
      <header>
        <h2 className="h2 article-title">Skills</h2>
      </header>

      {skillCategories.map((category, index) => (
        <section key={index}>
          <h3 className="h3 service-title" style={{ color: 'hsl(45, 100%, 72%)' }}>
            &#8227; {category.title}
          </h3>
          <ul className="service-list" style={{ color: 'white', margin: '20px', display: 'flex', flexWrap: 'wrap', gap: '25px' }}>
            {category.skills.map((skill, i) => (
              <li key={i}>• {skill}</li>
            ))}
          </ul>
        </section>
      ))}
    </article>
  );
};

export default Skills;
