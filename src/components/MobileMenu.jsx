import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Home, ShoppingBag, Image, Phone, FileText } from 'lucide-react';

const MobileMenu = ({ isOpen, onClose, onNavigate }) => {
  const links = [
    { id: 1, label: 'الرئيسية' },
    { id: 2, label: 'المنتج' },
    { id: 4, label: 'تواصل معنا' },
    { id: 'policy', label: 'سياسة الاستبدال' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#fdfaf1] z-[70] shadow-2xl flex flex-col"
          >
            {/* Header with Close Button and Logo */}
            <div className="relative h-40 flex flex-col items-center justify-center bg-[#fdfaf1] border-b border-[#380001]/5">
              <button
                onClick={onClose}
                className="absolute top-6 left-6 p-2 text-white bg-[#380001] hover:bg-[#500002] rounded-full transition-colors shadow-md z-50"
              >
                <X size={28} />
              </button>
              
              <img 
                src="https://k.top4top.io/p_3680h4ygv1.png" 
                alt="Warf Logo" 
                className="h-24 object-contain"
              />
            </div>

            {/* Links */}
            <div className="flex-1 flex flex-col py-10 px-6 gap-5 overflow-y-auto">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => { onNavigate(link.id); onClose(); }}
                  className="w-full py-5 px-6 rounded-sm bg-[#380001] text-[#fdfaf1] hover:bg-[#500002] transition-all shadow-lg text-xl font-bold text-center border border-[#2a0001]"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Footer decoration */}
            <div className="p-8 text-center text-[#380001]/40 text-sm font-tajawal">
              <p>تصميم وارف الحصري</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
