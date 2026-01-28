import React from 'react';
import { motion } from 'framer-motion';

const portalVariants = {
  initial: { 
    opacity: 0, 
    scale: 1.1, 
    filter: "blur(10px)" 
  },
  animate: { 
    opacity: 1, 
    scale: 1, 
    filter: "blur(0px)",
    transition: { 
      duration: 1.5, 
      ease: [0.22, 1, 0.36, 1] 
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.95, 
    filter: "blur(10px)",
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] 
    }
  }
};

const Portal1 = ({ onNext }) => {
  return (
    <motion.div 
      className="absolute inset-0 w-full h-[100dvh] flex items-center justify-center p-6 overflow-hidden"
      variants={portalVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0 opacity-40"
        style={{ backgroundImage: "url('https://i.top4top.io/p_3680wy70r1.jpg')" }}
      />
      
      {/* Overlay for better text readability if needed */}
      <div className="absolute inset-0 bg-brand-light/30 z-0 mix-blend-overlay" />

      {/* Content Card */}
      <motion.div 
        className="relative z-10 max-w-lg w-full bg-brand-light/90 backdrop-blur-md border border-brand-accent/30 p-8 md:p-12 text-center shadow-2xl rounded-sm"
        style={{ transform: "translateY(-32px)" }}
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: -32, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-brand-dark mb-8 leading-[1.4] drop-shadow-sm">
          أهلًا وسهلًا يا جميلة
        </h1>
        
        <div className="w-20 h-0.5 bg-brand-accent/60 mx-auto mb-8" />
        
        <div className="max-w-md mx-auto">
          <p className="text-xl md:text-2xl text-brand-dark font-medium mb-10 leading-[1.8] tracking-wide">
            في وارف نؤمن إن العباية مو بس قطعة… هي حضور.<br/>
            هنا تبدأ رحلتك مع عباية وارف — تصميم فاخر، قصة أنيقة، ولمسة تُشبهك.
          </p>
        </div>
        
        <p className="text-base text-brand-accent font-semibold mb-12 tracking-[0.2em] uppercase">
          لمسة فخامة… تبدأ من هنا
        </p>
        
        <button 
          onClick={onNext}
          className="bg-brand-accent text-brand-light px-10 py-5 text-xl md:text-2xl rounded-sm hover:bg-brand-dark transition-all duration-300 transform hover:scale-105 shadow-xl border border-brand-accent font-bold"
        >
          ابدئي الرحلة
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Portal1;
