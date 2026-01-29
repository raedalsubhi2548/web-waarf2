import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from './Modal';

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

const Portal2 = ({ onNext, onBack }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <motion.div 
      className="absolute inset-0 w-full h-[100dvh] flex flex-col items-center overflow-hidden bg-brand-light"
      style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 3.5rem)', paddingTop: 'env(safe-area-inset-top)' }}
      variants={portalVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Background Decor - Subtle Light Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.8),_rgba(240,230,220,0.4)_70%)] opacity-60" />

      {/* Back Button */}
      <button 
        onClick={onBack}
        className="fixed top-4 left-4 z-50 bg-white/80 backdrop-blur-md border border-[#380001]/20 text-[#380001] px-3 py-1.5 rounded-full font-bold shadow-md hover:bg-[#380001] hover:text-white transition-all flex items-center gap-2 group text-sm"
      >
        <span className="group-hover:-translate-x-1 transition-transform">→</span>
        <span>رجوع</span>
      </button>

      {/* Top Title - Non-negotiable */}
      <div className="relative z-20 w-full text-center mt-0.5 flex-shrink-0">
        <h2 className="text-[10px] md:text-xl font-bold text-brand-dark tracking-wide">
          تصميم وارف الحصري
        </h2>
      </div>

      <div className="relative z-10 w-full flex-1 max-w-lg mx-auto flex flex-col items-center justify-center gap-0 p-0.5 min-h-0">
        
        {/* Model Side - Significantly reduced height */}
        <div className="w-full flex items-center justify-center flex-shrink-1 h-[28vh]">
          <div className="relative h-full w-auto aspect-[3/4] border-[1px] border-[#380001] p-0.5 rounded-t-[1.5rem] rounded-b-sm shadow-sm bg-white/30 backdrop-blur-sm">
            <div className="absolute inset-0 rounded-t-[1.5rem] rounded-b-sm border border-brand-accent/10 m-0.5" />
            <img 
              src="https://b.top4top.io/p_3679j55am1.png" 
              alt="Warf Abaya Model" 
              className="w-full h-full object-cover rounded-t-[1.5rem] rounded-b-sm shadow-sm"
            />
          </div>
        </div>

        {/* Product Card Side */}
        <div className="w-full flex flex-col items-center text-center flex-shrink-0">
          <motion.div 
            className="bg-white/60 backdrop-blur-md border border-brand-accent/10 px-2 py-1 rounded-sm shadow-sm w-full flex flex-col justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            
            <div className="flex items-baseline justify-center gap-1.5 mb-0">
              <h2 className="text-xs font-bold text-brand-dark">عباية وارف</h2>
              <p className="text-[10px] text-[#380001] font-bold">199 ريال</p>
            </div>
            
            <div className="max-w-xs mx-auto mb-0.5">
              <p className="text-brand-dark/90 leading-tight text-[7px] font-medium">
                عباية صُممت لتوازن بين الفخامة والراحة… قصة ناعمة تُبرز الأناقة بدون تكلّف.
              </p>
            </div>
            
            <div className="flex flex-col gap-0.5 w-full">
              <a 
                href="https://wa.me/?text=مرحبا، أود طلب عباية وارف" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-[#380001] hover:bg-[#500002] text-white py-0.5 rounded-sm transition-all text-[9px] flex items-center justify-center gap-1 border border-[#2a0001] shadow-sm font-bold"
              >
                اطّلبيها الآن على واتساب
              </a>
              
              <div className="flex gap-0.5">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="flex-1 bg-transparent hover:bg-brand-accent/5 text-brand-dark border border-brand-accent/30 hover:border-brand-accent py-0.5 rounded-sm transition-all font-semibold text-[8px]"
                >
                  عرض المواصفات
                </button>
                
                <button 
                  onClick={onNext}
                  className="flex-1 bg-[#fdfaf1] hover:bg-[#f0eadd] text-[#380001] border border-[#380001]/20 py-0.5 rounded-sm transition-all font-bold shadow-sm flex items-center justify-center gap-0.5 text-[8px]"
                >
                  <span>صور العباية</span>
                  <span>←</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>


      {/* Specs Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="مواصفات عباية وارف"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right">
          <div className="space-y-4">
            <div>
              <h3 className="text-brand-accent font-bold mb-1 text-lg">الخامة والقماش</h3>
              <p className="text-brand-dark font-medium text-sm">قماش ناعم بملمس مخملي… مناسب للاستخدام اليومي والمناسبات.</p>
            </div>
            <div>
              <h3 className="text-brand-accent font-bold mb-1 text-lg">القَصّة والتفصيل</h3>
              <p className="text-brand-dark font-medium text-sm">قصة انسيابية تناسب كل الأجسام… وسقوط جميل يعطي أناقة ثابتة.</p>
            </div>
            <div>
              <h3 className="text-brand-accent font-bold mb-1 text-lg">التفاصيل</h3>
              <p className="text-brand-dark font-medium text-sm">لمسات فاخرة على الأكمام والحواف… تصميم هادئ وفخم.</p>
            </div>
          </div>
          
          <div className="space-y-4">
             <div>
              <h3 className="text-brand-accent font-bold mb-1 text-lg">المناسبات</h3>
              <p className="text-brand-dark font-medium text-sm">يومي راقي، رسمي، مناسبات، جلسات تصوير.</p>
            </div>
            <div>
              <h3 className="text-brand-accent font-bold mb-1 text-lg">العناية</h3>
              <p className="text-brand-dark font-medium text-sm">غسيل لطيف… تجفيف هوائي… كوي خفيف من الداخل.</p>
            </div>
            <div className="flex justify-between">
               <div>
                  <h3 className="text-brand-accent font-bold mb-1 text-lg">المقاسات</h3>
                  <p className="text-brand-dark font-medium text-sm">متوفرة S / M / L</p>
               </div>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-2 mt-4 pt-4 border-t border-brand-accent/10">
            <h3 className="text-brand-accent font-bold mb-1 text-lg">ليش عباية وارف؟</h3>
            <p className="text-brand-dark font-medium text-sm">فخامة هادئة… قصة راقية… تفاصيل ذكية… مريحة طوال اليوم.</p>
          </div>
        </div>
      </Modal>
    </motion.div>
  );
};

export default Portal2;
