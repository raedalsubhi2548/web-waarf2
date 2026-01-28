import React from 'react';
import { motion } from 'framer-motion';

const policyVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: 50, transition: { duration: 0.3 } }
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
      <div className="relative w-full max-w-lg bg-white p-6 md:p-10 rounded-sm shadow-xl border border-brand-accent/20">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6 text-center border-b border-brand-accent/10 pb-4">
          سياسة الاستبدال والاسترجاع
        </h2>
        
        <ul className="space-y-4 text-right text-brand-dark/90 font-medium text-sm md:text-base leading-relaxed">
          <li className="flex items-start gap-2">
            <span className="text-[#380001] font-bold text-lg">•</span>
            <span>الاستبدال والاسترجاع متاح خلال <strong>3 أيام</strong> من استلام الطلب.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#380001] font-bold text-lg">•</span>
            <span>يشترط أن يكون المنتج بحالته الأصلية، غير مستخدم، وبكامل ملحقاته وتغليفه.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#380001] font-bold text-lg">•</span>
            <span>لا يشمل الاسترجاع المنتجات المعدلة حسب الطلب أو التي تم إزالة ملصقاتها.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#380001] font-bold text-lg">•</span>
            <span>يتم التواصل عبر واتساب لترتيب عملية الاسترجاع أو الاستبدال.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#380001] font-bold text-lg">•</span>
            <span>يتحمل العميل رسوم الشحن للاسترجاع (إلا في حال وجود عيب مصنعي).</span>
          </li>
        </ul>

        <div className="mt-8 pt-4 border-t border-brand-accent/10 text-center">
          <button 
            onClick={onBack}
            className="bg-[#380001] text-white px-8 py-3 rounded-sm font-bold shadow-md hover:bg-[#500002] transition-colors"
          >
            رجوع
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PolicyScreen;
