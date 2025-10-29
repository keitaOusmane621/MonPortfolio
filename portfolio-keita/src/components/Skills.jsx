import React, { useState, useRef, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

const SkillBar = ({ skill, isVisible }) => {
  return (
    <div className="skill-item">
      <div className="skill-header">
        <span>{skill.name}</span>
        <span>{skill.percentage}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress" 
          style={{ 
            width: isVisible ? `${skill.percentage}%` : '0%'
          }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);
  const { skills } = portfolioData;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="competences" className="section skills" ref={skillsRef}>
      <div className="container">
        <h2 className="section-title">Compétences</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend</h3>
            {skills.frontend.map((skill, index) => (
              <SkillBar key={index} skill={skill} isVisible={isVisible} />
            ))}
          </div>
          
          <div className="skill-category">
            <h3>Backend</h3>
            {skills.backend.map((skill, index) => (
              <SkillBar key={index} skill={skill} isVisible={isVisible} />
            ))}
          </div>
          
          <div className="skill-category">
            <h3>Desktop & Mobile</h3>
            {skills.desktop.map((skill, index) => (
              <SkillBar key={index} skill={skill} isVisible={isVisible} />
            ))}
          </div>
          
          <div className="skill-category">
            <h3>Design & Outils</h3>
            {skills.design.map((skill, index) => (
              <SkillBar key={index} skill={skill} isVisible={isVisible} />
            ))}
            {skills.tools.map((skill, index) => (
              <SkillBar key={index} skill={skill} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;