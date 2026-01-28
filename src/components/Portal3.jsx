import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from './Modal';

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

// Using the same model image with different crop strategies
const galleryItems = [
  { id: 1, src: "https://b.top4top.io/p_3679j55am1.png", position: "object-center", label: "نظرة عامة" },
  { id: 2, src: "https://b.top4top.io/p_3679j55am1.png", position: "object-top", label: "تفاصيل القماش" },
  { id: 3, src: "https://b.top4top.io/p_3679j55am1.png", position: "object-[50%_40%]", label: "انسيابية التصميم" },
  { id: 4, src: "https://b.top4top.io/p_3679j55am1.png", position: "object-bottom", label: "فخامة الحواف" }
];

const Portal3 = ({ onBack }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <motion.div 
      className="absolute inset-0 w-full h-[100dvh] flex flex-col items-center bg-brand-light overflow-hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)', paddingTop: 'env(safe-area-inset-top)' }}
      variants={portalVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.9),rgba(245,240,235,0.6))] pointer-events-none" />
      
      {/* Header */}
      <div className="relative z-10 w-full text-center mt-6 md:mt-10 mb-4 flex-shrink-0 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-2 tracking-wide">
          معرض وارف
        </h2>
        <p className="text-brand-dark/70 text-base md:text-lg font-medium">
          زوايا مختلفة تحكي قصة الأناقة
        </p>
      </div>

      {/* Boutique Wall Grid */}
      <div className="relative z-10 flex-1 w-full max-w-4xl mx-auto p-4 md:p-8 min-h-0 flex flex-col justify-center">
        <div className="grid grid-cols-2 gap-4 md:gap-8 w-full h-full max-h-[60vh] md:max-h-[70vh]">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative w-full h-full bg-white p-2 md:p-3 shadow-lg rounded-sm border border-[#380001]/10 cursor-pointer overflow-hidden group"
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedItem(item)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (index * 0.1) }}
            >
              <div className="w-full h-full overflow-hidden relative border border-brand-accent/5">
                <img 
                  src={item.src} 
                  alt={`Warf Gallery ${index + 1}`} 
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${item.position}`}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer / Back Button */}
      <div className="relative z-10 w-full p-6 md:p-8 text-center flex-shrink-0">
        <button 
          onClick={onBack}
          className="bg-[#380001] hover:bg-[#500002] text-white px-8 py-3 rounded-sm transition-all duration-300 shadow-md border border-[#2a0001] font-bold text-lg inline-flex items-center gap-2"
        >
          <span>العودة للمنتج</span>
        </button>
      </div>

      {/* Image Modal */}
      <Modal 
        isOpen={!!selectedItem} 
        onClose={() => setSelectedItem(null)} 
        title="معرض وارف"
        maxWidth="max-w-2xl"
      >
        <div className="flex flex-col gap-4">
          <div className="w-full aspect-[3/4] md:aspect-[2/3] bg-gray-50 rounded-sm overflow-hidden relative border border-brand-accent/10">
            {selectedItem && (
              <img 
                src={selectedItem.src} 
                alt="Selected View" 
                className={`w-full h-full object-cover ${selectedItem.position}`}
              />
            )}
          </div>
          
          <div className="flex flex-col items-center gap-3 pt-2">
            <h3 className="text-xl font-bold text-brand-dark">
              {selectedItem?.label}
            </h3>
            <a 
              href="https://wa.me/?text=مرحبا، أود الاستفسار عن عباية وارف" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-[#380001] text-white py-3 rounded-sm text-center hover:bg-[#500002] transition-colors text-lg font-bold shadow-md"
            >
              اطلبيها الآن على واتساب
            </a>
          </div>
        </div>
      </Modal>
    </motion.div>
  );
};

export default Portal3;
