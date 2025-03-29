import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto mx-4">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold">Privacy Policy</DialogTitle>
        </DialogHeader>
        
        <div className="prose max-w-none">
          <h4>1. Introduction</h4>
          <p>This Privacy Policy explains how RedditEnhanceAI ("we," "our," or "us") collects, uses, and shares information about you when you use our services.</p>
          
          <h4>2. Information We Collect</h4>
          <p>We collect the following types of information:</p>
          <ul>
            <li><strong>Email Address:</strong> When you join our waitlist, we collect your email address.</li>
            <li><strong>Usage Data:</strong> We collect information about how you interact with our service to improve user experience.</li>
          </ul>
          
          <h4>3. How We Use Your Information</h4>
          <p>We use your information for the following purposes:</p>
          <ul>
            <li>To provide and maintain our service</li>
            <li>To notify you about changes to our service</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information so that we can improve our service</li>
          </ul>
          
          <h4>4. Data Security</h4>
          <p>We implement appropriate security measures to protect your personal information. All content filtering and analysis happens locally on your device.</p>
          
          <h4>5. Sharing Your Information</h4>
          <p>We do not sell, trade, or otherwise transfer your personal information to third parties.</p>
          
          <h4>6. Your Choices</h4>
          <p>You may opt out of receiving communications from us by following the unsubscribe instructions included in each email we send.</p>
          
          <h4>7. Contact Us</h4>
          <p>If you have any questions about this Privacy Policy, please contact us at privacy@redditenhanceai.com.</p>
        </div>
        
        <DialogFooter>
          <Button 
            onClick={onClose}
            className="bg-[#FF4500] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-all"
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
