import { useState } from "react";
import { motion } from "framer-motion";

interface ContentCardProps {
  voteCount: number;
  qualityLabel: string;
  qualityColor: string;
  username: string;
  timePosted: string;
  title: string;
  content: string;
  commentCount: number;
  isLowQuality?: boolean;
}

const ContentCard = ({ 
  voteCount, 
  qualityLabel, 
  qualityColor, 
  username, 
  timePosted, 
  title, 
  content, 
  commentCount, 
  isLowQuality = false
}: ContentCardProps) => {
  return (
    <motion.div 
      className={`p-4 border border-gray-100 rounded-lg shadow-sm hover:shadow-[0_4px_14px_0_rgba(0,0,0,0.08)] transition-all duration-300 ${isLowQuality ? 'opacity-50 hover:opacity-100' : ''}`}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
    >
      <div className="flex items-start">
        <div className="mr-4 flex flex-col items-center space-y-1">
          <button className="text-gray-400 hover:text-[#FF4500]">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a.75.75 0 01.75.75v8.5a.75.75 0 01-1.5 0v-8.5A.75.75 0 0110 2zm0 15a1 1 0 100-2 1 1 0 000 2z"></path>
            </svg>
          </button>
          <span className="font-medium">{voteCount}</span>
          <button className="text-gray-400 hover:text-blue-600">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a.75.75 0 01-.75-.75v-8.5a.75.75 0 011.5 0v8.5A.75.75 0 0110 18zm0-15a1 1 0 100 2 1 1 0 000-2z"></path>
            </svg>
          </button>
        </div>
        <div className="flex-1">
          <div className="flex items-center mb-1">
            <motion.div 
              className={`bg-${qualityColor}-100 px-2 py-0.5 rounded text-xs font-medium text-${qualityColor}-700 mr-2`}
              whileHover={{ scale: 1.1 }}
            >
              {qualityLabel}
            </motion.div>
            <span className="text-xs text-gray-500">Posted by u/{username} • {timePosted}</span>
          </div>
          <h3 className="text-lg font-medium mb-2">{title}</h3>
          <p className="text-gray-700 mb-3">{content}</p>
          <div className="flex items-center text-gray-500 text-sm">
            <div className="flex items-center mr-4">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"></path>
              </svg>
              <span>{commentCount} comments</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path>
              </svg>
              <span>Share</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export function PreviewDemo() {
  const [filterValue, setFilterValue] = useState(80); // 0-100 scale for filter slider

  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How Spreadit Works</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-80">
            Our AI analyzes millions of Reddit posts to surface high-quality content and filter out the noise.
          </p>
        </div>
        
        {/* Interactive Visualization */}
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-[0_4px_14px_0_rgba(0,0,0,0.08)] overflow-hidden mb-16">
          <div className="p-6 md:p-8 bg-[#F6F7F8] border-b border-gray-200">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <div className="flex-1 text-center">
                <span className="font-medium">Spreadit AI Enhancement</span>
              </div>
            </div>
          </div>
          
          <div className="p-6 md:p-8">
            {/* Filter UI */}
            <div className="mb-6 flex items-center justify-between transition-all duration-500">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[#FF4500] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd"></path>
                </svg>
                <span className="font-medium">Content Quality Filter</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-sm opacity-70">Low</span>
                <div className="w-40 h-6 bg-gray-200 rounded-full p-1 flex">
                  <motion.div 
                    className="w-6 h-4 bg-[#FF4500] rounded-full" 
                    style={{ translateX: filterValue / 100 * 125 }}
                    animate={{ x: filterValue / 100 * 125 }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                </div>
                <span className="ml-2 text-sm opacity-70">High</span>
              </div>
            </div>
            
            {/* Content Cards */}
            <div className="space-y-4">
              <ContentCard 
                voteCount={426}
                qualityLabel="High Quality"
                qualityColor="green"
                username="innovator_42"
                timePosted="3 hours ago"
                title="Comprehensive review of AI tools for content creation in 2023"
                content="I've tested 15 different AI writing tools over the past 3 months and compiled my results into this detailed comparison. Includes pricing, features, quality analysis, and use cases..."
                commentCount={168}
              />
              
              <ContentCard 
                voteCount={327}
                qualityLabel="High Quality"
                qualityColor="green"
                username="tech_enthusiast"
                timePosted="6 hours ago"
                title="How I built a custom search engine to find undervalued products"
                content="I developed a Python tool that scrapes multiple marketplaces and identifies pricing discrepancies. Here's my methodology, code snippets, and results after 3 months..."
                commentCount={134}
              />
              
              <ContentCard 
                voteCount={12}
                qualityLabel="Low Quality"
                qualityColor="yellow"
                username="randomuser123"
                timePosted="4 hours ago"
                title="Has anyone seen this movie?"
                content="I forgot the name of this movie I watched a few years ago. It had actors in it and there was a scene with something happening. Thanks!"
                commentCount={3}
                isLowQuality={true}
              />
            </div>
            
            <div className="mt-6 flex items-center justify-center opacity-70">
              <svg className="w-6 h-6 text-[#FF4500] animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd"></path>
              </svg>
              <span className="ml-2 text-sm font-medium">AI is filtering and ranking content based on quality</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
