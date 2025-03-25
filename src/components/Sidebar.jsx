import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="./assets/images/kab.png" alt="Kabillan T A" width="80" style={{ borderRadius: '30px' }} loading="lazy" />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Kabillan T A">Kabillan T A</h1>
          <p className="title">ML Engineer</p>
          <a href="./assets/docs/Kabillan_CV.pdf" target="_blank" className="title" style={{ marginTop: '10px', marginBottom: '10px', textDecoration: 'none' }} download>
            View CV
          </a>
        </div>
        <button className="info_more-btn">
          <span>Get Connected</span>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:kabillan1905@gmail.com" className="contact-link">kabillan1905@gmail.com</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+919342047578" className="contact-link">+91 9342047578</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Bengaluru, KA, IN</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>
        <ul className="social-list">
          <li className="social-item">
            <a href="https://www.linkedin.com/in/kabillan" className="social-link" target="_blank" rel="noopener noreferrer">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a href="https://github.com/kabillanta" className="social-link" target="_blank" rel="noopener noreferrer">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a href="https://x.com/Kabillanta" className="social-link" target="_blank" rel="noopener noreferrer">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a href="https://www.instagram.com/kabillan.ta/" className="social-link" target="_blank" rel="noopener noreferrer">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
