import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="social-icons">
            {/* Replace # with the actual links to your social media profiles */}
            <a href="https://www.facebook.com/ChaletbytheBroadsNorfolk" className="social-icon"><i class="fa-brands fa-facebook"></i></a>
            <a href="https://www.instagram.com/chalet_by_the_broads/" className="social-icon"><i class="fa-brands fa-instagram"></i></a>
          </div>
        </div>
        <div className="back-to-top" onClick={scrollToTop}>
          <span>&uarr;</span>
        </div>
      </div>
      <div className="developer">
        <a href='https://www.linkedin.com/in/steven-dunne1/'>Developed by Steven Dunne Development</a>
      </div>
    </footer>
  );
};

export default Footer;
