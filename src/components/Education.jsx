import React from 'react';

const educationData = [
  {
    institution: 'Jain (Deemed to be University)',
    period: '2023 - 2027',
    degree: 'Bachelor of Technology in Computer Science and Engineering specialization in AIML'
  },
  {
    institution: 'The TVS School',
    period: '2009 — 2023',
    degree: 'A Pivotal Chapter in My Life.'
  }
];

const Education = () => {
  return (
    <article className="education" data-page="education">
      <header>
        <h2 className="h2 article-title">Education</h2>
      </header>

      <section className="timeline">
        {educationData.map((edu, index) => (
          <div className="timeline-item" key={index}>
            <div className="title-wrapper">
              <div className="icon-box">
                <ion-icon name="book-outline"></ion-icon>
              </div>
              <h3 className="h3">{edu.institution}</h3>
            </div>
            <h4 className="h4 timeline-item-title">{edu.degree}</h4>
            <span>{edu.period}</span>
          </div>
        ))}
      </section>
    </article>
  );
};

export default Education;
