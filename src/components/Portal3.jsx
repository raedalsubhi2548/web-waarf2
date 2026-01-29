import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const portalVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, scale: 1.05, transition: { duration: 0.3, ease: "easeIn" } }
};

const Portal3 = ({ onNext, onBack }) => {
  const [selectedImage, setSelectedImage] = useState(null);

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
        <div className="flex-1"></div>
        <h2 className="text-2xl font-bold text-[#380001] absolute left-1/2 transform -translate-x-1/2">معرض وارف</h2>
        <div className="flex-1 flex justify-end">
           <button 
            onClick={onBack}
            className="flex items-center gap-2 text-[#380001] font-bold hover:opacity-70 transition-opacity"
          >
            <span>رجوع</span>
            <span className="text-xl">→</span>
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-4 pb-32">
        {/* Marketing Text */}
        <div className="max-w-6xl mx-auto mb-6 text-center mt-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/60 backdrop-blur-sm p-6 rounded-lg border border-[#380001]/10 shadow-sm"
          >
            <h3 className="text-xl font-bold text-[#380001] mb-2">أناقة تليق بك</h3>
            <p className="text-[#380001]/80 leading-relaxed text-sm md:text-base">
              تميزي بإطلالة ساحرة مع عباية وارف المصممة بعناية فائقة. نسيج فاخر ينساب بنعومة، وقصة عصرية تمنحك الراحة والثقة في كل خطوة. دقة في التفاصيل وجودة لا تضاهى لتكوني دائماً في أبهى حلة.
            </p>
          </motion.div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {images.map((img, index) => (
            <motion.div 
              key={index}
              className="relative aspect-[3/4] p-3 bg-white rounded-sm shadow-md border border-[#380001]/10 group cursor-pointer hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(img)}
            >
              <div className="w-full h-full border border-[#380001]/10 rounded-sm overflow-hidden relative">
                <div className="absolute inset-0 border-[3px] border-white/50 z-10 pointer-events-none"></div>
                <img 
                  src={img} 
                  alt={`Warf Gallery ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl border-2 border-white/10"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image? User said "Click on image opens it full screen nicely". Usually clicking outside closes it. Clicking image usually does nothing or zooms. I'll let click outside close it.
            />
            <button 
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-2"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Portal3;