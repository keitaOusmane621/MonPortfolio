import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  FaLinkedin, 
  FaGithub, 
  FaFacebook, 
  FaTelegram, 
  FaInstagram,
  FaTwitter,
  FaWhatsapp
} from 'react-icons/fa';

const Footer = () => {
  const { socialLinks } = portfolioData;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            
          </div>
          
          <div className="social-links-container">
            <h4>Suivez-moi sur les réseaux</h4>
            <div className="social-links">
              {socialLinks.linkedin && (
                <a 
                  href={socialLinks.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </a>
              )}
              
              {socialLinks.github && (
                <a 
                  href={socialLinks.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>
              )}
              
              {socialLinks.facebook && (
                <a 
                  href={socialLinks.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                  <span>Facebook</span>
                </a>
              )}
              
              {socialLinks.telegram && (
                <a 
                  href={socialLinks.telegram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Telegram"
                >
                  <FaTelegram />
                  <span>Telegram</span>
                </a>
              )}
              
              {socialLinks.instagram && (
                <a 
                  href={socialLinks.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                  <span>Instagram</span>
                </a>
              )}
              
              {socialLinks.twitter && (
                <a 
                  href={socialLinks.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                  <span>Twitter</span>
                </a>
              )}
              
              {socialLinks.whatsapp && (
                <a 
                  href={socialLinks.whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                  <span>WhatsApp</span>
                </a>
              )}
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 {portfolioData.personalInfo.name}. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;