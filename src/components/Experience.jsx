import React from 'react';

const experiences = [
  {
    organization: 'GDSC - FET Jain University',
    roles: [
      {
        title: 'Co-Lead',
        period: 'Sep 2024 - Present',
        description: 'Helping students learn and grow through tech events at Google Developer Groups on Campus.'
      },
      {
        title: 'Graphic Designer',
        period: 'Aug 2023 - Sep 2024',
        description: 'Designed and promoted visual content, increasing social media impressions by 25%. Played a key role in organizing Google AI Campus Fest. Strengthened creative, leadership, and event management skills.'
      }
    ]
  },
  {
    organization: 'GDG Bangalore',
    roles: [
      {
        title: 'Volunteer',
        period: 'Dec 2024 - Present',
        description: 'Volunteering.'
      }
    ]
  }
];

const Experience = () => {
  return (
    <article className="experience" data-page="experience">
      <header>
        <h2 className="h2 article-title">Experience</h2>
      </header>

      {experiences.map((exp, index) => (
        <section className="timeline" key={index}>
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>
            <h3 className="h3">{exp.organization}</h3>
          </div>

          <ol className="timeline-list">
            {exp.roles.map((role, i) => (
              <li className="timeline-item" key={i}>
                <h4 className="h4 timeline-item-title">{role.title}</h4>
                <span>{role.period}</span>
                <p className="timeline-text">{role.description}</p>
              </li>
            ))}
          </ol>
        </section>
      ))}
    </article>
  );
};

export default Experience;
