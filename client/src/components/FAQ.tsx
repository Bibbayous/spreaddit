import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqItems = [
  {
    question: "When will RedditEnhanceAI be available?",
    answer: "We're currently in closed beta testing. Join our waitlist to be notified when we launch to the public. We're aiming for a full release in Q1 2023."
  },
  {
    question: "How does the AI determine content quality?",
    answer: "Our AI analyzes multiple factors including: content originality, complexity of discussion, engagement quality (not just quantity), informational value, and diversity of viewpoints. We've trained our models on thousands of human-rated posts to identify truly valuable content."
  },
  {
    question: "Is RedditEnhanceAI officially affiliated with Reddit?",
    answer: "No, RedditEnhanceAI is not officially affiliated with Reddit. We're a third-party enhancement tool that works with Reddit's public API in compliance with their terms of service."
  },
  {
    question: "Will RedditEnhanceAI be free to use?",
    answer: "We'll offer both free and premium tiers. The free version will include basic content filtering and quality scoring. Premium features will include advanced personalization, discussion summaries, and faster content processing."
  },
  {
    question: "How do you handle privacy and data collection?",
    answer: "We take privacy seriously. All content analysis happens locally on your device. We don't track your browsing habits or store your Reddit history. For the waitlist, we only collect your email address which we will use solely for product updates and launch notification."
  }
];

export function FAQ() {
  return (
    <section id="faqs" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-80">
            Everything you need to know about RedditEnhanceAI.
          </p>
        </div>
        
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-4 md:px-6 py-4 md:py-6 bg-white hover:bg-[#F6F7F8] transition-colors duration-200 text-left font-medium text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="p-4 md:p-6 bg-white border-t border-gray-100 text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
