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
      className="absolute inset-0 w-full h-[100dvh] flex flex-col items-center overflow-y-auto bg-brand-light"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)', paddingTop: 'env(safe-area-inset-top)' }}
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
        className="fixed top-6 left-6 z-50 bg-white/80 backdrop-blur-md border border-[#380001]/20 text-[#380001] px-4 py-2 rounded-full font-bold shadow-lg hover:bg-[#380001] hover:text-white transition-all flex items-center gap-2 group"
      >
        <span className="group-hover:-translate-x-1 transition-transform">→</span>
        <span>رجوع</span>
      </button>

      {/* Top Title - Non-negotiable */}
      <div className="relative z-20 w-full text-center mt-5 mb-2 md:mt-6 md:mb-4 flex-shrink-0">
        <h2 className="text-xl md:text-2xl font-bold text-brand-dark tracking-wide">
          تصميم وارف الحصري
        </h2>
      </div>

      <div className="relative z-10 w-full flex-1 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center p-4 md:p-8 gap-4 md:gap-8 min-h-0">
        
        {/* Model Side */}
        <div className="w-full md:w-1/2 h-[35vh] md:h-[70vh] flex items-center justify-center order-1 md:order-1 flex-shrink-0">
          <div className="relative h-full w-auto aspect-[3/4] md:aspect-[2/3] border-[3px] border-[#380001] p-2 rounded-t-full rounded-b-sm shadow-xl bg-white/30 backdrop-blur-sm">
            <div className="absolute inset-0 rounded-t-full rounded-b-sm border border-brand-accent/10 m-1" />
            <img 
              src="https://b.top4top.io/p_3679j55am1.png" 
              alt="Warf Abaya Model" 
              className="w-full h-full object-cover rounded-t-full rounded-b-sm shadow-sm"
            />
          </div>
        </div>

        {/* Product Card Side */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-right order-2 md:order-2 flex-shrink min-h-0 pb-6 md:pb-0">
          <motion.div 
            className="bg-white/60 backdrop-blur-md border border-brand-accent/10 p-5 md:p-10 rounded-sm shadow-xl max-w-lg w-full flex flex-col justify-center"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            
            <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-2">عباية وارف</h2>
            <p className="text-xl md:text-2xl text-[#380001] mb-4 font-bold">199 ريال</p>
            
            <div className="max-w-md mx-auto md:mx-0">
              <p className="text-brand-dark/90 mb-6 leading-[1.8] text-sm md:text-base font-medium">
                عباية صُممت لتوازن بين الفخامة والراحة…<br/>
                قصة ناعمة تُبرز الأناقة بدون تكلّف، وتفاصيل هادئة تخلّي حضورك يسبقك.<br/>
                مثالية لطلّتك اليومية الراقية… وللمناسبات اللي تبغي فيها ستايل يبان من أول نظرة
              </p>
            </div>
            
            <div className="flex flex-col gap-3 w-full mb-4 md:mb-0">
              <a 
                href="https://wa.me/?text=مرحبا، أود طلب عباية وارف" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-[#380001] hover:bg-[#500002] text-white py-3 md:py-4 rounded-sm transition-all text-base md:text-lg flex items-center justify-center gap-2 border border-[#2a0001] shadow-md font-bold"
              >
                اطّلبيها الآن على واتساب
              </a>
              
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-transparent hover:bg-brand-accent/10 text-brand-dark border-2 border-brand-accent/40 hover:border-brand-accent py-3 rounded-sm transition-all font-semibold"
              >
                عرض مواصفات العباية
              </button>
              
              <button 
                onClick={onNext}
                className="w-full mt-3 bg-[#fdfaf1] hover:bg-[#f0eadd] text-[#380001] border border-[#380001]/20 py-3 rounded-sm transition-all font-bold shadow-sm flex items-center justify-center gap-2"
              >
                <span>حابة تشوفي اكثر من صور العباية؟</span>
                <span className="text-lg">←</span>
              </button>
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
