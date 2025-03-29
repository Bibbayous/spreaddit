import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBgColor: string;
  iconColor: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, iconBgColor, iconColor, delay }: FeatureCardProps) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-[0_4px_14px_0_rgba(0,0,0,0.08)] p-6 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className={`w-12 h-12 ${iconBgColor} rounded-full flex items-center justify-center mb-4`}>
        <div className={iconColor}>{icon}</div>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export function Features() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-[#F6F7F8]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Key Features</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-80">
            Our AI technology transforms your Reddit browsing experience with these powerful features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureCard 
            icon={
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
              </svg>
            }
            title="Smart Content Filtering"
            description="Our AI analyzes posts for quality, relevance, and originality to ensure you only see the best content."
            iconBgColor="bg-[#FF4500] bg-opacity-10"
            iconColor="text-[#FF4500]"
            delay={0.1}
          />
          
          <FeatureCard 
            icon={
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
              </svg>
            }
            title="Community Insights"
            description="Discover hidden gems in niche communities with our AI-powered recommendation engine."
            iconBgColor="bg-[#0079D3] bg-opacity-10"
            iconColor="text-[#0079D3]"
            delay={0.2}
          />
          
          <FeatureCard 
            icon={
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd"></path>
              </svg>
            }
            title="Personalized Feed"
            description="Your feed evolves with your interests while ensuring diverse viewpoints and high-quality discussions."
            iconBgColor="bg-green-500 bg-opacity-10"
            iconColor="text-green-500"
            delay={0.3}
          />
          
          <FeatureCard 
            icon={
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z"></path>
              </svg>
            }
            title="Fast-Forward Mode"
            description="Skip repetitive content and jump straight to novel discussions you haven't seen before."
            iconBgColor="bg-purple-500 bg-opacity-10"
            iconColor="text-purple-500"
            delay={0.4}
          />
          
          <FeatureCard 
            icon={
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd"></path>
              </svg>
            }
            title="Discussion Summaries"
            description="Get AI-generated summaries of long threads to quickly grasp the key points and diverse opinions."
            iconBgColor="bg-yellow-500 bg-opacity-10"
            iconColor="text-yellow-500"
            delay={0.5}
          />
          
          <FeatureCard 
            icon={
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
              </svg>
            }
            title="Privacy-Focused"
            description="All analysis happens locally on your device. We don't store your browsing history or personal preferences."
            iconBgColor="bg-[#FF4500] bg-opacity-10"
            iconColor="text-[#FF4500]"
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
}
