import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Home, ShoppingBag, Image, Phone, FileText } from 'lucide-react';

const MobileMenu = ({ isOpen, onClose, onNavigate }) => {
  const links = [
    { id: 1, label: 'الرئيسية', icon: <Home size={20} /> },
    { id: 2, label: 'المنتج', icon: <ShoppingBag size={20} /> },
    { id: 3, label: 'المعرض', icon: <Image size={20} /> },
    { id: 4, label: 'تواصل معنا', icon: <Phone size={20} /> },
    { id: 'policy', label: 'سياسة الاستبدال', icon: <FileText size={20} /> },
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
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]"
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-[#fdfaf1] z-[70] shadow-2xl flex flex-col border-l border-[#380001]/10"
          >
            {/* Header with Close Button and Logo */}
            <div className="relative h-40 flex items-center justify-center border-b border-[#380001]/5 bg-white/50">
              <button
                onClick={onClose}
                className="absolute top-5 left-5 p-2 text-[#380001] hover:bg-[#380001]/5 rounded-full transition-colors"
              >
                <X size={28} />
              </button>
              
              <img 
                src="https://k.top4top.io/p_3680h4ygv1.png" 
                alt="Warf Logo" 
                className="h-24 object-contain mt-4"
              />
            </div>

            {/* Links */}
            <div className="flex-1 flex flex-col py-6 px-6 gap-4 overflow-y-auto">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => { onNavigate(link.id); onClose(); }}
                  className="flex items-center w-full p-4 rounded-sm bg-[#fdfaf1] border border-[#380001]/20 text-[#380001] hover:bg-[#380001] hover:text-[#fdfaf1] transition-all shadow-sm group gap-4"
                >
                  <span className="text-[#380001] group-hover:text-[#fdfaf1] transition-colors bg-[#380001]/5 group-hover:bg-white/10 p-2 rounded-md">
                    {link.icon}
                  </span>
                  <span className="text-lg font-bold">{link.label}</span>
                </button>
              ))}
            </div>

            {/* Footer decoration */}
            <div className="p-6 text-center text-[#380001]/40 text-xs font-tajawal">
              <p>تصميم وارف الحصري</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
