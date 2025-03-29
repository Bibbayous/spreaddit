import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  consentToPrivacyPolicy: z.boolean().refine(val => val === true, {
    message: "You must agree to the privacy policy to join the waitlist",
  }),
});

type FormValues = z.infer<typeof formSchema>;

interface WaitlistFormProps {
  showPrivacyPolicy: () => void;
}

export function WaitlistForm({ showPrivacyPolicy }: WaitlistFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      consentToPrivacyPolicy: false,
    },
  });
  
  const waitlistMutation = useMutation({
    mutationFn: async (data: FormValues) => {
      const response = await apiRequest('POST', '/api/waitlist/subscribe', data);
      return response.json();
    },
    onSuccess: (data) => {
      if (data.success) {
        setIsSubmitted(true);
        toast({
          title: "Success!",
          description: "You've been added to our waitlist. We'll notify you when we launch.",
        });
      } else {
        toast({
          title: "Error",
          description: data.message || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
      console.error(error);
    },
  });
  
  const onSubmit = (data: FormValues) => {
    waitlistMutation.mutate(data);
  };
  
  return (
    <section id="join-waitlist" className="py-16 md:py-24 bg-[#1A1A1B] text-white" tabIndex={-1}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Waitlist</h2>
          <p className="text-lg md:text-xl opacity-80 max-w-3xl mx-auto">
            Be among the first to experience a better Reddit browsing experience. Sign up now and we'll notify you when we're ready to launch.
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          {!isSubmitted ? (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium opacity-90">Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="youremail@example.com" 
                          {...field} 
                          className="w-full px-4 py-3 bg-[#1A1A1B] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4500] focus:border-transparent text-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="consentToPrivacyPolicy"
                  render={({ field }) => (
                    <FormItem className="flex items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox 
                          checked={field.value} 
                          onCheckedChange={field.onChange}
                          className="h-4 w-4 bg-[#1A1A1B] border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-[#FF4500]"
                        />
                      </FormControl>
                      <div className="text-sm opacity-80 space-y-1 leading-none">
                        <FormLabel className="cursor-pointer">
                          I agree to the{" "}
                          <button 
                            type="button"
                            className="text-[#FF4500] hover:underline"
                            onClick={showPrivacyPolicy}
                          >
                            Privacy Policy
                          </button>{" "}
                          and consent to receiving emails about Spreadit.
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-[#FF4500] text-white font-medium py-3 px-4 rounded-md hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF4500] hover:shadow-[0_0_15px_rgba(255,69,0,0.5)]"
                  disabled={waitlistMutation.isPending}
                >
                  {waitlistMutation.isPending ? "Processing..." : "Join the Waitlist"}
                </Button>
              </form>
            </Form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-6 p-4 bg-green-100 border border-green-200 rounded-md"
            >
              <div className="flex">
                <svg className="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-green-800">Success!</h3>
                  <div className="mt-2 text-sm text-green-700">
                    <p>You've been added to our waitlist. We'll notify you when Spreadit is ready to launch.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
        
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <p className="text-sm opacity-70">
            By joining our waitlist, you'll be the first to know when we launch. No spam, ever. We respect your privacy and will never share your information with third parties.
          </p>
        </div>
      </div>
    </section>
  );
}
