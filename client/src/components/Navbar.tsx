import { useState } from "react";
import { Link } from "wouter";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <nav className="container mx-auto px-6 relative z-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <svg className="w-8 h-8 md:w-10 md:h-10 text-[#FF4500]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
          </svg>
          <span className="ml-2 text-xl md:text-2xl font-bold"><span className="text-black">Spread</span><span className="text-[#FF4500]">dit</span></span>
        </div>
        
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#features" className="text-[#222222] hover:text-[#FF4500] transition-colors">Features</a>
          <a href="#how-it-works" className="text-[#222222] hover:text-[#FF4500] transition-colors">How it Works</a>
          <a href="#faqs" className="text-[#222222] hover:text-[#FF4500] transition-colors">FAQs</a>
          <a href="#join-waitlist" className="bg-[#FF4500] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-all hover:shadow-[0_0_15px_rgba(255,69,0,0.5)]">Join Waitlist</a>
        </div>
        
        <button 
          className="md:hidden focus:outline-none" 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden absolute w-full mt-2 py-2 bg-white rounded-lg shadow-[0_4px_14px_0_rgba(0,0,0,0.08)] z-20 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 text-[#222222] hover:bg-[#DAE0E6]">Features</a>
        <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 text-[#222222] hover:bg-[#DAE0E6]">How it Works</a>
        <a href="#faqs" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 text-[#222222] hover:bg-[#DAE0E6]">FAQs</a>
        <a href="#join-waitlist" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 text-[#FF4500] font-semibold">Join Waitlist</a>
      </div>
    </nav>
  );
}
