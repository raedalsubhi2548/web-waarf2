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
    { 
      id: 1, 
      label: 'الرئيسية',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
    },
    { 
      id: 2, 
      label: 'المنتج',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
    },
    { 
      id: 3, 
      label: 'المعرض',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
    },
    { 
      id: 4, 
      label: 'تواصل معنا',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.12 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
    },
    { 
      id: 'policy', 
      label: 'سياسة الاستبدال والاسترجاع',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay - Click closes menu ONLY */}
          <motion.div 
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />
          
          {/* Drawer */}
          <motion.div 
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#fdfaf1] z-[70] shadow-2xl flex flex-col overflow-hidden border-l border-brand-accent/10"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-brand-accent/10 relative h-24">
              <button 
                onClick={onClose} 
                className="p-2 text-[#380001] hover:opacity-70 transition-opacity z-20"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              
              {/* Logo Centered - Corrected URL, No Overlay */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 z-10">
                <img 
                  src="https://k.top4top.io/p_3680h4ygv1.png" 
                  alt="Warf Logo" 
                  className="w-32 md:w-40 object-contain"
                />
              </div>
            </div>

            {/* Links */}
            <div className="flex-1 flex flex-col py-6 px-6 gap-2 overflow-y-auto">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    onClose();
                  }}
                  className="flex items-center justify-end gap-4 w-full text-right p-3 rounded-lg text-[#380001] hover:bg-[#380001]/5 transition-all border border-transparent hover:border-[#380001]/10 group"
                >
                  <span className="text-lg font-bold">
                    {link.label}
                  </span>
                  <span className="text-[#380001] group-hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </span>
                </button>
              ))}
            </div>

            {/* Decor */}
            <div className="p-6 text-center border-t border-brand-accent/10">
              <p className="text-xs text-[#380001]/60 tracking-[0.3em] font-serif">WARFA ABAYA</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
