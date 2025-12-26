import React from 'react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  return (
    <section id="apropos" className="section about">
      <div className="container">
        <h2 className="section-title">À Propos</h2>
        <div className="about-content">
          <p>
             
             Je suis Keita Ousmane
             diplômé en ingénierie informatique à l'Institut Supérieur de Technologie de Mamou.
             Passionné par le numériques en général et Développement Web en particulier, basé à Conakry (Guinée) {portfolioData.personalInfo.location}  
              spécialisé dans la création d’applications web modernes, 
              performantes et intuitives.
              Grâce à une solide maîtrise du frontend et du backend,
              je conçois des solutions digitales sur mesure qui allient esthétique,
               performance et fiabilité.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Toujours curieux et à l’écoute des évolutions technologiques,
             je m’efforce d’adopter les meilleures pratiques du développement web afin de garantir un code propre
              optimisé et une expérience utilisateur exceptionnelle.
            Mon objectif : transformer vos idées en produits numériques concrets et impactants.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;