import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaUser, FaEnvelope, FaComment, FaPaperPlane, FaCheck } from 'react-icons/fa';
import MaskedText from '../animations/MaskedText';

export default function Contact() {
  const form = useRef();
  const cardRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    company: '',
    message: '',
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs.sendForm('service_snwdur8', 'template_z6azfxd', form.current, { publicKey: 'pjah6I72S5ifk95J5' })
      .then(() => {
          setIsSubmitted(true);
          setFormData({
            user_name: '',
            user_email: '',
            company: '',
            message: '',
          });
          setTimeout(() => setIsSubmitted(false), 3000);
        })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div id="contact" style={{ padding: '2.5rem 1rem 2.3rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <MaskedText>
        <h2 style={{ fontSize: '3rem', marginBottom: '0.75rem', color: '#d4a373' }}>Contactez-moi</h2>
      </MaskedText>
      <MaskedText>
        <p style={{ marginBottom: '2.5rem', fontSize: '1.2rem', opacity: 0.8 }}>
          Vous avez une offre d'alternance ou des questions sur mon profil ? Discutons-en.
        </p>
      </MaskedText>
      
      <motion.div
        className="form-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ width: '100%', maxWidth: '650px', perspective: '1000px' }}
      >
        <motion.div
          ref={cardRef}
          className="modern-contact-form card-3d"
          style={{ rotateX, rotateY }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="corner-accent corner-top-left"></div>
          <div className="corner-accent corner-top-right"></div>
          <div className="corner-accent corner-bottom-left"></div>
          <div className="corner-accent corner-bottom-right"></div>

          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <div className="input-container">
                <FaUser className="input-icon" />
                <input type="text" name="user_name" placeholder="Votre nom" value={formData.user_name} onChange={handleInputChange} required className="form-input" />
              </div>
            </div>

            <div className="form-group">
              <div className="input-container">
                <FaEnvelope className="input-icon" />
                <input type="email" name="user_email" placeholder="Email" value={formData.user_email} onChange={handleInputChange} required className="form-input" />
              </div>
            </div>

            <div className="form-group">
              <div className="input-container">
                <FaUser className="input-icon" />
                <input type="text" name="company" placeholder="Nom de l'entreprise" value={formData.company} onChange={handleInputChange} className="form-input" />
              </div>
            </div>

            <div className="form-group">
              <div className="input-container">
                <FaComment className="input-icon message-icon" />
                <textarea name="message" placeholder="Votre message ou détails sur l'offre d'alternance..." value={formData.message} onChange={handleInputChange} required className="form-textarea" rows="5" />
              </div>
            </div>

            <motion.button
              type="submit"
              className="submit-button"
              disabled={isSubmitting || isSubmitted}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ marginTop: '0.75rem' }}
            >
              {isSubmitted ? <> <FaCheck /> Envoyé ! </> : isSubmitting ? "Envoi..." : <> <FaPaperPlane /> Envoyer </>}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}