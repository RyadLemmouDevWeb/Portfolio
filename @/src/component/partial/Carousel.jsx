import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

export default function Carousel({ images, projectName }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (!images || images.length === 0) {
    return <div className="carousel-placeholder">Aucune image disponible</div>;
  }

  return (
    <motion.div 
      className="carousel-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="carousel-wrapper">
        <motion.button 
          className="carousel-button prev" 
          onClick={prevSlide}
          aria-label="Image précédente"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <AiOutlineArrowLeft size={24} />
        </motion.button>
        
        <div className="carousel-image-container">
          <AnimatePresence mode="wait">
            <motion.img 
              key={currentIndex}
              src={images[currentIndex]} 
              alt={`${projectName} - Image ${currentIndex + 1}`}
              className="carousel-image"
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>
        
        <motion.button 
          className="carousel-button next" 
          onClick={nextSlide}
          aria-label="Image suivante"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <AiOutlineArrowRight size={24} />
        </motion.button>
      </div>
      
      <motion.div 
        className="carousel-indicators"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        {images.map((_, index) => (
          <motion.button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Aller à l'image ${index + 1}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            animate={{ 
              scale: index === currentIndex ? 1.3 : 1,
              backgroundColor: index === currentIndex ? '#d4a373' : '#ddd'
            }}
            transition={{ duration: 0.2 }}
          />
        ))}
      </motion.div>
      
      <motion.div 
        className="carousel-counter"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        {currentIndex + 1} / {images.length}
      </motion.div>
    </motion.div>
  );
}
