import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MobileMenu = ({ isOpen, onClose, onNavigate }) => {
  const menuVariants = {
    hidden: { x: '100%' },
    visible: { 
      x: 0,
      transition: { type: 'spring', damping: 25, stiffness: 200 }
    },
    exit: { 
      x: '100%',
      transition: { duration: 0.3 }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const links = [
    { id: 1, label: 'الرئيسية' },
    { id: 2, label: 'المنتج' },
    { id: 3, label: 'المعرض' },
    { id: 4, label: 'تواصل معنا' },
    { id: 'policy', label: 'سياسة الاستبدال والاسترجاع' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay - Click closes menu ONLY */}
          <motion.div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />
          
          {/* Drawer */}
          <motion.div 
            className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-brand-light z-[70] shadow-2xl flex flex-col overflow-hidden border-l border-brand-accent/10"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside drawer
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-brand-accent/10 relative">
              <button 
                onClick={onClose} 
                className="p-2 text-[#380001] hover:opacity-70 transition-opacity z-20"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              
              {/* Logo Centered */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-4">
                <img 
                  src="https://k.top4top.io/p_3680h4ygv1.png" 
                  alt="Warf Logo" 
                  className="w-32 md:w-40 object-contain"
                />
              </div>
            </div>

            {/* Links */}
            <div className="flex-1 flex flex-col items-center justify-center gap-6 p-6">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    onClose();
                  }}
                  className="text-xl font-bold text-brand-dark hover:text-[#380001] transition-colors w-full text-center py-2 border-b border-transparent hover:border-brand-accent/10"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Decor */}
            <div className="p-6 text-center">
              <p className="text-xs text-brand-accent tracking-[0.3em]">WARFA ABAYA</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
