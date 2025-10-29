import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = ['Développeur Full Stack', 'Gestionnaire de Base de Données', 'Créateur de Solutions Digitales'];
  const currentText = texts[currentIndex];
  const typingSpeed = isDeleting ? 50 : 100;
  const pauseTime = 2000;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting && displayedText === currentText) {
        // Pause avant de supprimer
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayedText === '') {
        // Passer au texte suivant
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      } else {
        // Typing ou deleting
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
                href={`${process.env.PUBLIC_URL}/MonCV.pdf`}
                download="MonCV.pdf"
                className="cta-button secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Télécharger mon CV
              </a>
            </div>
          </div>
          
          <div className="hero-image">
            <img 
              src="ousto.jpg" 
              alt="Keita Ousmane - Développeur Full Stack" 
              className="full-body-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;