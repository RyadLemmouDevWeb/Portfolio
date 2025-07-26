import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaUser, FaEnvelope, FaComment, FaPaperPlane, FaCheck } from 'react-icons/fa';

export default function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm('service_snwdur8', 'template_z6azfxd', form.current, {
        publicKey: 'pjah6I72S5ifk95J5',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSubmitted(true);
          setFormData({ user_name: '', user_email: '', message: '' });
          setTimeout(() => {
            setIsSubmitted(false);
          }, 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <>
      <motion.div 
        id="Contact"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 id="contact">Contactez-moi</h2>
      </motion.div>
      
      <motion.div
        className="form-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.form 
          ref={form} 
          onSubmit={sendEmail} 
          className="modern-contact-form"
          variants={itemVariants}
        >
          <motion.div className="form-header" variants={itemVariants}>
            <h3>Parlons de votre projet</h3>
            <p>Décrivez-moi votre vision et transformons-la en réalité</p>
          </motion.div>

          <motion.div className="form-group" variants={itemVariants}>
            <div className="input-container">
              <FaUser className="input-icon" />
              <input
                type="text"
                name="user_name"
                placeholder="Votre nom complet"
                value={formData.user_name}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </div>
          </motion.div>

          <motion.div className="form-group" variants={itemVariants}>
            <div className="input-container">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                name="user_email"
                placeholder="votre.email@exemple.com"
                value={formData.user_email}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </div>
          </motion.div>

          <motion.div className="form-group" variants={itemVariants}>
            <div className="input-container">
              <FaComment className="input-icon message-icon" />
              <textarea
                name="message"
                placeholder="Décrivez votre projet en détail..."
                value={formData.message}
                onChange={handleInputChange}
                required
                className="form-textarea"
                rows="5"
              />
            </div>
          </motion.div>

          <motion.button
            type="submit"
            className="submit-button"
            disabled={isSubmitting || isSubmitted}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitted ? (
              <>
                <FaCheck className="button-icon" />
                Message envoyé !
              </>
            ) : isSubmitting ? (
              <>
                <div className="spinner" />
                Envoi en cours...
              </>
            ) : (
              <>
                <FaPaperPlane className="button-icon" />
                Envoyer le message
              </>
            )}
          </motion.button>

          {isSubmitted && (
            <motion.div
              className="success-message"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              ✨ Merci ! Votre message a été envoyé avec succès. Je vous répondrai dans les plus brefs délais.
            </motion.div>
          )}
        </motion.form>
      </motion.div>
    </>
  );
}
