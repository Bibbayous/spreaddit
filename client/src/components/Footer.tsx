interface FooterProps {
  onPrivacyClick: () => void;
}

export function Footer({ onPrivacyClick }: FooterProps) {
  return (
    <footer className="py-12 bg-[#1A1A1B] border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <svg className="w-8 h-8 text-[#FF4500]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
            </svg>
            <span className="ml-2 text-xl font-bold text-white">Spread<span className="text-[#FF4500]">it</span></span>
          </div>
          
          <div className="flex flex-wrap justify-center space-x-6 text-sm text-gray-400">
            <button 
              onClick={onPrivacyClick}
              className="hover:text-white transition-colors mb-2"
            >
              Privacy Policy
            </button>
            <button className="hover:text-white transition-colors mb-2">
              Terms of Service
            </button>
            <a 
              href="mailto:info@redditenhanceai.com" 
              className="hover:text-white transition-colors mb-2"
            >
              Contact Us
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Spreadit. All rights reserved.</p>
          <p className="mt-2 text-xs">Not affiliated with Reddit, Inc.</p>
        </div>
      </div>
    </footer>
  );
}
