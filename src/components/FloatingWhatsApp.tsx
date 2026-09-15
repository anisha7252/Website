import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/917439375724" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 bg-[#FF003C] text-white rounded-full shadow-[0_0_20px_rgba(255,0,60,0.6)] hover:scale-110 hover:shadow-[0_0_30px_rgba(255,0,60,0.8)] transition-all duration-300 animate-pulse group"
    >
      <MessageCircle className="w-8 h-8 group-hover:animate-none" />
    </a>
  );
};
