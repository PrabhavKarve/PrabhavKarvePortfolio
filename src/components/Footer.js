import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import '../styles/footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="social-icons">
            <a href="https://www.linkedin.com/in/prabhav-karve-11300a145/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
            </a>
            <a href="https://github.com/PrabhavKarve?tab=repositories" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
            </a>
            <p>&copy; 2023 Prabhav Karve</p>
        </div>
        
    </footer>
  );
}

export default Footer;