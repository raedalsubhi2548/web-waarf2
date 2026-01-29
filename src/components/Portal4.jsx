import React from 'react';
import { motion } from 'framer-motion';

const portalVariants = {
  initial: { 
    opacity: 0, 
    scale: 1, 
  },
  animate: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    }
  },
  exit: { 
    opacity: 0, 
    scale: 1, 
    transition: { 
      duration: 0.3, 
      ease: "easeIn" 
    }
  }
};

const Portal4 = ({ onBack }) => {
  return (
    <motion.div 
      className="absolute inset-0 w-full h-[100dvh] flex flex-col items-center justify-center p-6 bg-brand-light overflow-hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)', paddingTop: 'env(safe-area-inset-top)' }}
      variants={portalVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.9),rgba(240,230,220,0.4))] pointer-events-none" />

      {/* Back Button */}
      <button 
        onClick={onBack}
        className="fixed top-6 left-6 z-50 bg-white/80 backdrop-blur-md border border-[#380001]/20 text-[#380001] px-4 py-2 rounded-full font-bold shadow-lg hover:bg-[#380001] hover:text-white transition-all flex items-center gap-2 group"
      >
        <span className="group-hover:-translate-x-1 transition-transform">→</span>
        <span>رجوع</span>
      </button>

      <div className="relative z-10 w-full max-w-md bg-white/60 backdrop-blur-md border border-brand-accent/10 p-8 rounded-sm shadow-xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">تواصل معنا</h2>
        <p className="text-brand-dark/80 text-lg font-medium mb-8">نحن موجودين في كل مكان لخدمتكم</p>
        
        <div className="flex flex-col gap-4">
          <a 
            href="https://www.tiktok.com/@waarfe" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full bg-[#380001] hover:bg-[#500002] text-white py-4 rounded-sm transition-all text-lg font-bold shadow-md border border-[#2a0001] flex items-center justify-center gap-3"
          >
            <span>زيارة تيك توك</span>
          </a>

          <a 
            href="https://wa.me/966555488045?text=%0A%0A" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full bg-[#380001] hover:bg-[#500002] text-white py-4 rounded-sm transition-all text-lg font-bold shadow-md border border-[#2a0001] flex items-center justify-center gap-3"
          >
            <span>التواصل عبر واتساب</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Portal4;
