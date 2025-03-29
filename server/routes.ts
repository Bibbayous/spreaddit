import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSubscriberSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for waitlist signup
  app.post("/api/waitlist/subscribe", async (req, res) => {
    try {
      const validatedData = insertWaitlistSubscriberSchema.parse(req.body);
      
      // Check if email already exists
      const existingSubscriber = await storage.getWaitlistSubscriberByEmail(validatedData.email);
      if (existingSubscriber) {
        return res.status(409).json({ 
          success: false,
          message: "This email is already on our waitlist." 
        });
      }
      
      // Create new waitlist subscriber
      const subscriber = await storage.createWaitlistSubscriber(validatedData);
      return res.status(201).json({ 
        success: true,
        message: "Successfully added to waitlist",
        email: subscriber.email
      });
    } catch (error) {
      // Handle Zod validation errors
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false,
          message: validationError.message 
        });
      }
      
      // Generic error handling
      return res.status(500).json({ 
        success: false,
        message: "An error occurred while processing your request." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
