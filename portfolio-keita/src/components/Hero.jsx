import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = ['Développeur Full Stack', 'Gestionnaire de Base de Données'];
  const currentText = texts[currentIndex];
  const typingSpeed = isDeleting ? 50 : 100;
  const pauseTime = 2000;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting && displayedText === currentText) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      } else {
        setDisplayedText(
          isDeleting 
            ? currentText.substring(0, displayedText.length - 1)
            : currentText.substring(0, displayedText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentText, currentIndex, texts.length]);

  return (
    <section id="accueil" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>{portfolioData.personalInfo.name}</h1>
            <h2 className="typing-text">
              Je suis <span className="orange-text">{displayedText}</span>
              <span className="cursor">|</span>
            </h2>
            <p>{portfolioData.personalInfo.description}</p>
            
            <div className="hero-buttons">
              <a href="#contact" className="cta-button primary">Me Contacter</a>
              <a 
                href={`${process.env.PUBLIC_URL}/CV_Ousmane.pdf`}
                download="CV_Ousmane.pdf"
                className="cta-button secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Télécharger mon CV
              </a>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="profile-wrapper">
              <img 
                src="keita.jpg" 
                alt="Keita Ousmane - Développeur Full Stack" 
                className="profile-circle"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;