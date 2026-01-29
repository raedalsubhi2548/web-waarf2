import React from 'react';

const MobileFooter = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-14 bg-[#fdfaf1]/95 backdrop-blur-md border-t border-[#380001]/10 z-40 md:hidden flex items-center justify-between px-6 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]"
         style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      
      {/* Contact Icons */}
      <div className="flex items-center gap-4">
        <a href="https://www.tiktok.com/@waarfe" target="_blank" rel="noopener noreferrer" className="text-[#380001] hover:opacity-80 transition-opacity">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
        </a>
        <a href="https://wa.me/966555488045" target="_blank" rel="noopener noreferrer" className="text-[#380001] hover:opacity-80 transition-opacity">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
        </a>
      </div>

      {/* Payment Icons - Official SVGs/PNGs */}
      <div className="flex items-center gap-3 opacity-100 flex-row">
        {/* Mada - Inline SVG for reliability */}
        <div className="h-5 w-auto flex items-center">
            <svg viewBox="0 0 50 16.7" className="h-full w-auto" xmlns="http://www.w3.org/2000/svg">
              <path fill="#005d67" d="M12.4 6.9c0 1.9-1.2 3.1-3 3.1h-.9V3.8h.9c1.8 0 3 1.2 3 3.1zm-3.9 4.3v4.4H6.3V1.6h2.2c3 0 5.2 1.9 5.2 5.3 0 3.3-2.2 5.2-5.2 5.2H8.5zM22.2 10l-.4-1.2h-3.4l-.4 1.2h-2.3l3-8.4h2.9l3 8.4h-2.4zm-1.1-3.2l-1-2.9-1 2.9h2zM33.6 1.6v8.4c0 3.3-2.2 5.3-5.2 5.3h-2.2V1.6h2.2c3 0 5.2 1.9 5.2 5.3 0 3.3-2.2 5.2-5.2 5.2H28.4V1.6h5.2zm-2.2 8.4c1.8 0 3-1.2 3-3.1 0-1.9-1.2-3.1-3-3.1h-.9v6.2h.9zM42.9 10l-.4-1.2h-3.4l-.4 1.2h-2.3l3-8.4h2.9l3 8.4h-2.4zm-1.1-3.2l-1-2.9-1 2.9h2z"/>
              <path fill="#8e9193" d="M47.8 0c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2 2.2-1 2.2-2.2-1-2.2-2.2-2.2zm0 3.8c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6 1.6.7 1.6 1.6-.7 1.6-1.6 1.6z"/>
            </svg>
        </div>
        
        {/* Visa */}
        <div className="h-4 w-auto flex items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/320px-Visa_Inc._logo.svg.png" alt="Visa" className="h-full w-auto object-contain" />
        </div>

        {/* MasterCard */}
        <div className="h-6 w-auto flex items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/320px-Mastercard-logo.svg.png" alt="Mastercard" className="h-full w-auto object-contain" />
        </div>

        {/* Apple Pay */}
        <div className="h-6 w-auto flex items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Apple_Pay_logo.svg/320px-Apple_Pay_logo.svg.png" alt="Apple Pay" className="h-full w-auto object-contain" />
        </div>
      </div>


    </div>
  );
};

export default MobileFooter;