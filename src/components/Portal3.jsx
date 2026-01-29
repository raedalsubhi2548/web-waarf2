import React from 'react';
import { motion } from 'framer-motion';

const portalVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, scale: 1.05, transition: { duration: 0.3, ease: "easeIn" } }
};

const Portal3 = ({ onNext, onBack }) => {
  const images = [
    "https://b.top4top.io/p_3679j55am1.png",
    "https://b.top4top.io/p_3679j55am1.png",
    "https://b.top4top.io/p_3679j55am1.png",
    "https://b.top4top.io/p_3679j55am1.png",
    "https://b.top4top.io/p_3679j55am1.png",
    "https://b.top4top.io/p_3679j55am1.png"
  ];

  return (
    <motion.div 
      className="absolute inset-0 w-full h-[100dvh] flex flex-col bg-brand-light overflow-hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)', paddingTop: 'env(safe-area-inset-top)' }}
      variants={portalVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#380001 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

      {/* Header */}
      <div className="relative z-10 w-full p-6 flex items-center bg-white/50 backdrop-blur-sm border-b border-[#380001]/10">
        <div className="flex-1 flex justify-start">
           <button 
            onClick={onBack}
            className="flex items-center gap-2 text-[#380001] font-bold hover:opacity-70 transition-opacity"
          >
            <span className="text-xl">→</span>
            <span>رجوع</span>
          </button>
        </div>
        <h2 className="text-2xl font-bold text-[#380001] absolute left-1/2 transform -translate-x-1/2">معرض وارف</h2>
        <div className="flex-1"></div>
      </div>

      {/* Gallery Grid */}
      <div className="flex-1 overflow-y-auto p-4 md:p-8">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-4 max-w-6xl mx-auto">
          {images.map((img, index) => (
            <motion.div 
              key={index}
              className="relative aspect-square rounded-lg overflow-hidden shadow-sm border border-[#380001]/10 group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src={img} 
                alt={`Warf Gallery ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Portal3;