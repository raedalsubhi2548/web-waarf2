import React from 'react';
import { motion } from 'framer-motion';

const policyVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } }
};

const PolicyScreen = ({ onBack }) => {
  return (
    <motion.div 
      className="absolute inset-0 w-full h-[100dvh] bg-brand-light flex flex-col items-center justify-center p-6 overflow-hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)', paddingTop: 'env(safe-area-inset-top)' }}
      variants={policyVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="fixed top-6 left-6 z-50 bg-white/80 backdrop-blur-md border border-[#380001]/20 text-[#380001] px-4 py-2 rounded-full font-bold shadow-lg hover:bg-[#380001] hover:text-white transition-all flex items-center gap-2 group"
      >
        <span className="group-hover:-translate-x-1 transition-transform">→</span>
        <span>رجوع</span>
      </button>

      <div className="relative w-full max-w-2xl bg-white/60 backdrop-blur-md p-6 md:p-10 rounded-sm shadow-xl border border-brand-accent/20 max-h-[85vh] overflow-y-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8 text-center">
          سياسة الاستبدال والاسترجاع
        </h2>
        
        <div className="space-y-4 text-right">
          <div className="bg-white p-4 rounded-sm border border-[#380001]/10 shadow-sm hover:border-[#380001]/30 transition-colors">
            <h3 className="font-bold text-[#380001] mb-2 text-lg">المدة الزمنية</h3>
            <p className="text-brand-dark/90 text-sm md:text-base">الاستبدال والاسترجاع متاح خلال <strong>3 أيام</strong> من استلام الطلب.</p>
          </div>

          <div className="bg-white p-4 rounded-sm border border-[#380001]/10 shadow-sm hover:border-[#380001]/30 transition-colors">
            <h3 className="font-bold text-[#380001] mb-2 text-lg">حالة المنتج</h3>
            <p className="text-brand-dark/90 text-sm md:text-base">يشترط أن يكون المنتج بحالته الأصلية، غير مستخدم، وبكامل ملحقاته وتغليفه.</p>
          </div>

          <div className="bg-white p-4 rounded-sm border border-[#380001]/10 shadow-sm hover:border-[#380001]/30 transition-colors">
            <h3 className="font-bold text-[#380001] mb-2 text-lg">المنتجات المستثناة</h3>
            <p className="text-brand-dark/90 text-sm md:text-base">لا يشمل الاسترجاع المنتجات المعدلة حسب الطلب أو التي تم إزالة ملصقاتها.</p>
          </div>

          <div className="bg-white p-4 rounded-sm border border-[#380001]/10 shadow-sm hover:border-[#380001]/30 transition-colors">
            <h3 className="font-bold text-[#380001] mb-2 text-lg">آلية التواصل</h3>
            <p className="text-brand-dark/90 text-sm md:text-base">يتم التواصل عبر واتساب لترتيب عملية الاسترجاع أو الاستبدال.</p>
          </div>

          <div className="bg-white p-4 rounded-sm border border-[#380001]/10 shadow-sm hover:border-[#380001]/30 transition-colors">
            <h3 className="font-bold text-[#380001] mb-2 text-lg">رسوم الشحن</h3>
            <p className="text-brand-dark/90 text-sm md:text-base">يتحمل العميل رسوم الشحن للاسترجاع (إلا في حال وجود عيب مصنعي).</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PolicyScreen;
