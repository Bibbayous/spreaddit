import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PreviewDemo } from "@/components/PreviewDemo";
import { Features } from "@/components/Features";
import { FAQ } from "@/components/FAQ";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Footer } from "@/components/Footer";
import { PrivacyModal } from "@/components/PrivacyModal";
import { useState, useRef } from "react";

export default function Home() {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const waitlistRef = useRef<HTMLDivElement>(null);
  
  const scrollToWaitlist = () => {
    if (waitlistRef.current) {
      waitlistRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#222222] font-['IBM_Plex_Sans',sans-serif]">
      {/* Hero Section with background */}
      <header className="relative pt-6 pb-16 md:pb-24 overflow-hidden bg-gradient-to-b from-white to-[#F6F7F8]">
        <Navbar />
        <Hero onJoinWaitlist={scrollToWaitlist} />
      </header>
      
      {/* Main Content */}
      <main>
        <PreviewDemo />
        <Features />
        <FAQ />
        <div ref={waitlistRef}>
          <WaitlistForm 
            showPrivacyPolicy={() => setIsPrivacyModalOpen(true)} 
          />
        </div>
      </main>
      
      {/* Footer */}
      <Footer onPrivacyClick={() => setIsPrivacyModalOpen(true)} />
      
      {/* Privacy Policy Modal */}
      <PrivacyModal 
        isOpen={isPrivacyModalOpen} 
        onClose={() => setIsPrivacyModalOpen(false)} 
      />
    </div>
  );
}
