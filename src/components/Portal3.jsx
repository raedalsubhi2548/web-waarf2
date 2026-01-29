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
      <div className="relative z-10 w-full p-6 flex justify-between items-center bg-white/50 backdrop-blur-sm border-b border-[#380001]/10">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-[#380001] font-bold hover:opacity-70 transition-opacity"
        >
          <span className="text-xl">→</span>
          <span>رجوع</span>
        </button>
        <h2 className="text-2xl font-bold text-[#380001]">معرض وارف</h2>
        <div className="w-16"></div> {/* Spacer for centering */}
      </div>

      {/* Gallery Grid */}
      <div className="flex-1 overflow-y-auto p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {images.map((img, index) => (
            <motion.div 
              key={index}
              className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg border border-[#380001]/10 group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src={img} 
                alt={`Warf Gallery ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <span className="text-white font-bold tracking-wider">تفاصيل العباية</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Next Button Area */}
      <div className="p-6 bg-white/80 backdrop-blur-md border-t border-[#380001]/10 flex justify-center">
        <button 
          onClick={onNext}
          className="bg-[#380001] text-white px-8 py-3 rounded-sm font-bold shadow-lg hover:bg-[#500002] transition-colors flex items-center gap-3 text-lg"
        >
          <span>تواصل معنا</span>
          <span>←</span>
        </button>
      </div>
    </motion.div>
  );
};

export default Portal3;