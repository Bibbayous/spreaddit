import { motion } from "framer-motion";

interface BubbleProps {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  delay: number;
  duration: number;
  color: string;
  icon: React.ReactNode;
}

const Bubble = ({ top, left, right, bottom, delay, duration, color, icon }: BubbleProps) => {
  return (
    <motion.div
      className="absolute hidden md:block opacity-80"
      style={{ top, left, right, bottom }}
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <div className={`bg-${color} bg-opacity-10 p-3 rounded-full`}>
        {icon}
      </div>
    </motion.div>
  );
};

interface HeroProps {
  onJoinWaitlist?: () => void;
}

export function Hero({ onJoinWaitlist }: HeroProps) {
  return (
    <div className="container mx-auto px-6 pt-16 md:pt-24 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Discover the <span className="text-[#FF4500]">Best of Reddit</span>,<br />
          Powered by AI
        </h1>
        <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto">
          Surface high-quality, diverse discussions and never see repetitive content again. Our AI technology enhances your Reddit experience.
        </p>
        <a 
          href="#join-waitlist"
          className="inline-block bg-[#FF4500] text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-opacity-90 transition-all hover:shadow-[0_0_15px_rgba(255,69,0,0.5)]"
        >
          Join the Waitlist
        </a>
      </div>
      
      {/* Floating elements/bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        <Bubble 
          top="15%" 
          left="10%" 
          delay={0.3}
          duration={3.5}
          color="[#FF4500]"
          icon={
            <svg className="w-6 h-6 text-[#FF4500]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          }
        />
        
        <Bubble 
          top="25%" 
          right="15%" 
          delay={0.6}
          duration={4}
          color="[#0079D3]"
          icon={
            <svg className="w-6 h-6 text-[#0079D3]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 14c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm10 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-5 4c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm5 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
            </svg>
          }
        />
        
        <Bubble 
          bottom="20%" 
          left="20%" 
          delay={0.9}
          duration={3}
          color="[#1A1A1B]"
          icon={
            <svg className="w-6 h-6 text-[#1A1A1B]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
            </svg>
          }
        />
        
        <Bubble 
          bottom="30%" 
          right="25%" 
          delay={1.2}
          duration={4.5}
          color="green-500"
          icon={
            <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
            </svg>
          }
        />
      </div>
      
      {/* Scroll indicator */}
      <div className="hidden md:flex justify-center mt-32">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg className="w-10 h-10 text-[#FF4500] opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
