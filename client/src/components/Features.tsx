import { motion } from "framer-motion";
import { useState } from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBgColor: string;
  iconColor: string;
  delay: number;
  demoContent: React.ReactNode;
}

const FeatureCard = ({ icon, title, description, iconBgColor, iconColor, delay, demoContent }: FeatureCardProps) => {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-[0_4px_14px_0_rgba(0,0,0,0.08)] p-6 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-shadow duration-300 relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
    >
      <div className={`w-12 h-12 ${iconBgColor} rounded-full flex items-center justify-center mb-4`}>
        <div className={iconColor}>{icon}</div>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
      
      {/* Demo popup on hover */}
      <motion.div 
        className={`absolute inset-0 bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.15)] p-4 z-10 overflow-hidden`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: isHovering ? 1 : 0,
          scale: isHovering ? 1 : 0.9,
          pointerEvents: isHovering ? 'auto' : 'none'
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="h-full w-full overflow-y-auto">
          <h3 className="text-xl font-bold mb-3 border-b pb-2 flex items-center">
            <div className={`w-8 h-8 ${iconBgColor} rounded-full flex items-center justify-center mr-2`}>
              <div className={iconColor} style={{ transform: 'scale(0.7)' }}>{icon}</div>
            </div>
            {title}
          </h3>
          {demoContent}
        </div>
      </motion.div>
    </motion.div>
  );
};

// Demo content components
const FilteringDemo = () => (
  <div className="space-y-3">
    <div className="flex items-center justify-between">
      <div className="text-sm font-medium">Quality Score Threshold</div>
      <div className="bg-gray-200 h-4 w-40 rounded-full overflow-hidden">
        <motion.div 
          className="bg-[#FF4500] h-full" 
          initial={{ width: '20%' }}
          animate={{ width: '70%' }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>
    </div>
    
    <div className="border border-gray-200 rounded-md p-3 bg-green-50 border-green-200">
      <div className="flex items-center text-sm text-green-800">
        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
        </svg>
        High-Quality Post (Score: 89/100)
      </div>
      <div className="mt-2 text-sm">Detailed analysis of semiconductor industry trends with data</div>
    </div>
    
    <div className="border border-gray-200 rounded-md p-3 bg-red-50 border-red-200 opacity-50">
      <div className="flex items-center text-sm text-red-800">
        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
        </svg>
        Low-Quality Post (Score: 23/100)
      </div>
      <div className="mt-2 text-sm">Repost of "What movie should I watch?" with no context</div>
    </div>
  </div>
);

const CommunityInsightsDemo = () => (
  <div className="space-y-3">
    <div className="bg-[#F6F7F8] rounded-md p-3">
      <div className="font-medium text-sm mb-1">Recommended Communities</div>
      <div className="space-y-2">
        <div className="flex items-center">
          <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs mr-2">r/</div>
          <div className="text-sm font-medium">NicheProgramming</div>
          <div className="ml-auto text-xs bg-green-100 text-green-800 px-2 rounded-full">94% match</div>
        </div>
        <div className="flex items-center">
          <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs mr-2">r/</div>
          <div className="text-sm font-medium">ObscureTech</div>
          <div className="ml-auto text-xs bg-green-100 text-green-800 px-2 rounded-full">87% match</div>
        </div>
      </div>
    </div>
    
    <motion.div 
      className="p-3 border border-gray-200 rounded-md"
      animate={{ boxShadow: ['0 0 0 rgba(0,0,0,0)', '0 0 10px rgba(0,121,211,0.5)', '0 0 0 rgba(0,0,0,0)'] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <div className="text-sm font-medium mb-1">Community Growth Prediction</div>
      <div className="h-16 flex items-end space-x-1">
        {[20, 25, 35, 30, 45, 60, 80].map((height, index) => (
          <motion.div 
            key={index}
            className="bg-[#0079D3] rounded-t w-5"
            initial={{ height: 0 }}
            animate={{ height: `${height}%` }}
            transition={{ delay: index * 0.1, duration: 1 }}
          />
        ))}
      </div>
      <div className="text-xs text-gray-500 mt-1">Projected 300% growth in next 3 months</div>
    </motion.div>
  </div>
);

const PersonalizedFeedDemo = () => (
  <div className="space-y-3">
    <div className="border border-gray-200 rounded-md p-3">
      <div className="flex items-center justify-between mb-2">
        <div className="text-sm font-medium">Your Interest Profile</div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center">
          <div className="text-sm">Technology</div>
          <div className="ml-2 bg-gray-200 h-2 rounded-full flex-1">
            <motion.div 
              className="bg-[#FF4500] h-full rounded-full" 
              initial={{ width: '0%' }}
              animate={{ width: '85%' }}
              transition={{ duration: 1 }}
            />
          </div>
          <div className="ml-2 text-xs">85%</div>
        </div>
        <div className="flex items-center">
          <div className="text-sm">Science</div>
          <div className="ml-2 bg-gray-200 h-2 rounded-full flex-1">
            <motion.div 
              className="bg-[#FF4500] h-full rounded-full" 
              initial={{ width: '0%' }}
              animate={{ width: '72%' }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </div>
          <div className="ml-2 text-xs">72%</div>
        </div>
        <div className="flex items-center">
          <div className="text-sm">Gaming</div>
          <div className="ml-2 bg-gray-200 h-2 rounded-full flex-1">
            <motion.div 
              className="bg-[#FF4500] h-full rounded-full" 
              initial={{ width: '0%' }}
              animate={{ width: '65%' }}
              transition={{ duration: 1, delay: 0.4 }}
            />
          </div>
          <div className="ml-2 text-xs">65%</div>
        </div>
      </div>
    </div>
    
    <div className="text-xs text-gray-600 italic">
      Based on your interests, we're showing more high-quality technology posts while filtering out repetitive gaming content
    </div>
    
    <motion.div 
      className="border border-gray-200 rounded-md p-3 flex items-center"
      animate={{ 
        backgroundColor: ['rgba(255,69,0,0.05)', 'rgba(255,69,0,0.15)', 'rgba(255,69,0,0.05)'] 
      }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      <svg className="w-5 h-5 text-[#FF4500] mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
      </svg>
      <div className="text-sm">Your feed is optimized for discovery, balanced with quality content</div>
    </motion.div>
  </div>
);

const FastForwardDemo = () => (
  <div className="space-y-3">
    <div className="border border-gray-200 rounded-md p-3">
      <div className="flex items-center mb-2">
        <svg className="w-5 h-5 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z"></path>
        </svg>
        <div className="text-sm font-medium">Fast-Forward Status</div>
      </div>
      
      <div className="flex items-center space-x-1 mb-2">
        <div className="h-1 bg-gray-200 rounded-full flex-1"></div>
        <div className="h-1 bg-gray-200 rounded-full flex-1"></div>
        <div className="h-1 bg-purple-500 rounded-full flex-1"></div>
        <div className="h-1 bg-gray-200 rounded-full flex-1"></div>
        <div className="h-1 bg-gray-200 rounded-full flex-1"></div>
      </div>
      
      <div className="text-xs text-gray-600">
        <span className="text-purple-600 font-medium">23 repetitive posts</span> skipped in your feed today
      </div>
    </div>
    
    <div className="flex border border-red-200 rounded-md p-2 bg-red-50 mb-2 items-center opacity-50">
      <div className="text-xs line-through">Yet another "I switched from iPhone to Android" post</div>
      <div className="ml-auto bg-red-200 text-red-800 text-xs px-1 rounded">Skip</div>
    </div>
    
    <motion.div 
      className="border border-green-200 rounded-md p-3 bg-green-50"
      animate={{ 
        y: [0, -5, 0],
        boxShadow: ['0 0 0 rgba(0,0,0,0)', '0 5px 15px rgba(0,0,0,0.1)', '0 0 0 rgba(0,0,0,0)'] 
      }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <div className="text-sm font-medium text-green-800">Fresh Content Detected</div>
      <div className="text-xs mt-1">Novel discussion on emerging technology trends with unique insights</div>
    </motion.div>
  </div>
);

const SummaryDemo = () => (
  <div className="space-y-3">
    <div className="border border-gray-200 rounded-md p-3 bg-yellow-50">
      <div className="flex items-center mb-2">
        <svg className="w-5 h-5 text-yellow-700 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path>
        </svg>
        <div className="text-sm font-medium">Thread Summary</div>
      </div>
      
      <div className="text-xs space-y-2">
        <p className="font-medium">Key points from 143 comments:</p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-start"
        >
          <div className="w-2 h-2 rounded-full bg-yellow-600 mt-1.5 mr-2"></div>
          <p>The majority (63%) believe AI will create more jobs than it eliminates</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-start"
        >
          <div className="w-2 h-2 rounded-full bg-yellow-600 mt-1.5 mr-2"></div>
          <p>Counter-argument from 27% focuses on historical displacement patterns</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-start"
        >
          <div className="w-2 h-2 rounded-full bg-yellow-600 mt-1.5 mr-2"></div>
          <p>Most nuanced take: job quality may matter more than quantity</p>
        </motion.div>
      </div>
    </div>
    
    <div className="text-xs text-gray-500 italic px-2">
      Summarized from a 32-minute discussion with 143 comments
    </div>
    
    <div className="flex justify-between text-sm px-2">
      <button className="text-[#FF4500] hover:underline">View full thread</button>
      <motion.button 
        className="text-blue-600"
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Generate new summary
      </motion.button>
    </div>
  </div>
);

const PrivacyDemo = () => (
  <div className="space-y-3">
    <div className="border border-gray-200 rounded-md p-3">
      <div className="flex items-center mb-2">
        <svg className="w-5 h-5 text-[#FF4500] mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
        </svg>
        <div className="text-sm font-medium">Privacy Status</div>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex items-center">
          <svg className="w-4 h-4 text-green-600 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
          </svg>
          <span>Local processing active</span>
        </div>
        
        <div className="flex items-center">
          <svg className="w-4 h-4 text-green-600 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
          </svg>
          <span>No browsing history stored</span>
        </div>
        
        <div className="flex items-center">
          <svg className="w-4 h-4 text-green-600 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
          </svg>
          <span>Fully encrypted connection</span>
        </div>
      </div>
    </div>
    
    <motion.div 
      className="border border-gray-200 rounded-md p-3 flex items-start"
      animate={{ 
        boxShadow: ['0 0 0 rgba(0,0,0,0)', '0 0 10px rgba(255,69,0,0.3)', '0 0 0 rgba(0,0,0,0)'] 
      }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <div className="p-1.5 rounded-full bg-[#FF4500] bg-opacity-10 mr-2">
        <svg className="w-4 h-4 text-[#FF4500]" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
        </svg>
      </div>
      <div className="text-xs">
        <p className="font-medium mb-1">Your privacy is protected</p>
        <p>All AI processing happens on your device. We never track your browsing habits or store personal data on our servers.</p>
      </div>
    </motion.div>
    
    <div className="text-center mt-2">
      <div className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
        <div className="flex items-center">
          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
          </svg>
          <span>Privacy Certified</span>
        </div>
      </div>
    </div>
  </div>
);

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
            demoContent={<FilteringDemo />}
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
            demoContent={<CommunityInsightsDemo />}
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
            demoContent={<PersonalizedFeedDemo />}
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
            demoContent={<FastForwardDemo />}
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
            demoContent={<SummaryDemo />}
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
            demoContent={<PrivacyDemo />}
          />
        </div>
      </div>
    </section>
  );
}
