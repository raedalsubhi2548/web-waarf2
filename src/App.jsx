import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Portal1 from './components/Portal1';
import Portal2 from './components/Portal2';
import Portal4 from './components/Portal4';
import PolicyScreen from './components/PolicyScreen';
import MobileMenu from './components/MobileMenu';
import MobileFooter from './components/MobileFooter';

function App() {
  const [currentPortal, setCurrentPortal] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Track previous portal for back functionality from Policy/Portal4 if needed
  const [historyStack, setHistoryStack] = useState([1]);

  const goToPortal = (portalId) => {
    setHistoryStack(prev => [...prev, portalId]);
    setCurrentPortal(portalId);
    setIsMenuOpen(false);
  };

  const goBack = () => {
    if (historyStack.length > 1) {
      const newStack = [...historyStack];
      newStack.pop(); // Remove current
      const prev = newStack[newStack.length - 1];
      setHistoryStack(newStack);
      setCurrentPortal(prev);
    } else {
      // Default fallbacks if stack is empty (shouldn't happen)
      if (currentPortal === 'policy') setCurrentPortal(1);
      else if (currentPortal === 4) setCurrentPortal(3);
      else if (currentPortal === 3) setCurrentPortal(2);
      else if (currentPortal === 2) setCurrentPortal(1);
    }
  };

  const renderPortal = () => {
    switch (currentPortal) {
      case 1:
        return <Portal1 key="portal1" onNext={() => goToPortal(2)} />;
      case 2:
        return <Portal2 key="portal2" onNext={() => goToPortal(3)} onBack={() => goToPortal(1)} />;
      case 3:
        return <Portal3 key="portal3" onNext={() => goToPortal(4)} onBack={() => goToPortal(2)} />;
      case 4:
        return <Portal4 key="portal4" onBack={() => goToPortal(3)} />;
      case 'policy':
        return <PolicyScreen key="policy" onBack={() => goBack()} />;
      default:
        return <Portal1 key="portal1" onNext={() => goToPortal(2)} />;
    }
  };

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden bg-brand-light">
      <div className="grain-overlay" />
      <div className="vignette" />
      
      {/* Hamburger Menu Trigger - Mobile Only */}
      <button 
        onClick={() => setIsMenuOpen(true)}
        className="fixed top-5 right-5 z-[50] w-12 h-12 flex items-center justify-center text-[#380001] md:hidden hover:opacity-70 transition-opacity cursor-pointer pointer-events-auto"
        style={{ touchAction: 'manipulation' }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        onNavigate={goToPortal} 
      />

      <AnimatePresence mode="wait">
        {renderPortal()}
      </AnimatePresence>

      {/* Mobile Footer */}
      <MobileFooter />
    </div>
  );
}

export default App;
