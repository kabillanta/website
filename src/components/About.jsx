import React from 'react';

const About = () => {
  return (
    <article className="about" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>
      <section className="about-text">
        <p>
          Hi, I’m Kabillan! I’m a second-year B.Tech student specializing in Artificial Intelligence and Machine Learning at Jain University, Bangalore. 
          I’m passionate about exploring how AI can solve real-world problems and bring cool ideas to life. 
          I love diving into new technologies, learning, and building innovative projects. Let’s connect and brainstorm exciting ways to shape the future of tech!
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">Interested in !!</h3>
        <ul className="service-list">
          {[
            { src: './assets/images/ml.png', title: 'Machine Learning', text: 'Climbing the Ladder!' },
            { src: './assets/images/des.png', title: 'Designing', text: 'Passionate about design.' },
            { src: './assets/images/web.png', title: 'Web development', text: 'From design to code.' },
            { src: './assets/images/Tux.png', title: 'Linux', text: 'I use ig.' },
          ].map((item, index) => (
            <li className="service-item" key={index}>
              <div className="service-icon-box">
                <img src={item.src} alt={item.title} width="40" loading="lazy" />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">{item.title}</h4>
                <p className="service-item-text">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default About;
