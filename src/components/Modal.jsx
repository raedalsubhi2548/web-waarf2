import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  },
  exit: { 
    opacity: 0, 
    scale: 0.9,
    transition: { duration: 0.3, ease: "easeIn" }
  }
};

const Modal = ({ isOpen, onClose, title, children, maxWidth = "max-w-4xl" }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          <motion.div 
            className={`relative z-10 w-full ${maxWidth} bg-brand-light border border-brand-accent/30 shadow-2xl overflow-hidden rounded-sm`}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-brand-accent/10 bg-brand-light">
              <h2 className="text-2xl font-bold text-brand-dark">{title}</h2>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-brand-accent/10 rounded-full transition-colors text-brand-dark"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Content */}
            <div className="p-6 md:p-8">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
