import React, { useState } from 'react';
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('sending');

    // Simulation d'envoi - À remplacer par votre service d'emails
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Ici vous intégrerez EmailJS, Formspree, ou votre backend
      console.log('Données du formulaire:', formData);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Réinitialiser le statut après 5 secondes
      setTimeout(() => setSubmitStatus(''), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(''), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        
        <div className="contact-content">
          {/* Informations de contact */}
          <div className="contact-info">
            <div className="contact-item">
              <h3>📧 Email</h3>
              <p>{portfolioData.personalInfo.email}</p>
              <a href={`mailto:${portfolioData.personalInfo.email}`} className="contact-link">
                Envoyer un email
              </a>
            </div>
            
            <div className="contact-item">
              <h3>📞 Téléphone</h3>
              <p>{portfolioData.personalInfo.phone}</p>
              <a href={`tel:${portfolioData.personalInfo.phone}`} className="contact-link">
                Appeler
              </a>
            </div>
            
            <div className="contact-item">
              <h3>📍 Localisation</h3>
              <p>{portfolioData.personalInfo.location}</p>
              <span className="contact-link">Disponible pour remote</span>
            </div>

            {/* Section réseaux sociaux */}
            <div className="social-section">
              
              <div className="contact-social-links">
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nom complet *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  placeholder="Votre nom complet"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  placeholder="votre@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Sujet *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Ex: Collaboration sur projet React"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Dites-moi en plus sur votre projet, vos idées, ou toute collaboration potentielle..."
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Envoi en cours...
                  </>
                ) : (
                  'Envoyer le message'
                )}
              </button>

              {/* Messages de statut */}
              {submitStatus === 'success' && (
                <div className="status-message success">
                  ✅ Message envoyé avec succès ! Je vous répondrai rapidement.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="status-message error">
                  ❌ Une erreur est survenue. Veuillez réessayer ou me contacter directement par email.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;