import { users, type User, type InsertUser, waitlistSubscribers, type WaitlistSubscriber, type InsertWaitlistSubscriber } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createWaitlistSubscriber(subscriber: InsertWaitlistSubscriber): Promise<WaitlistSubscriber>;
  getWaitlistSubscriberByEmail(email: string): Promise<WaitlistSubscriber | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private waitlistSubscribers: Map<number, WaitlistSubscriber>;
  private userCurrentId: number;
  private subscriberCurrentId: number;

  constructor() {
    this.users = new Map();
    this.waitlistSubscribers = new Map();
    this.userCurrentId = 1;
    this.subscriberCurrentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createWaitlistSubscriber(insertSubscriber: InsertWaitlistSubscriber): Promise<WaitlistSubscriber> {
    const id = this.subscriberCurrentId++;
    const subscriber: WaitlistSubscriber = { 
      ...insertSubscriber, 
      id, 
      createdAt: new Date().toISOString()
    };
    this.waitlistSubscribers.set(id, subscriber);
    return subscriber;
  }

  async getWaitlistSubscriberByEmail(email: string): Promise<WaitlistSubscriber | undefined> {
    return Array.from(this.waitlistSubscribers.values()).find(
      (subscriber) => subscriber.email === email,
    );
  }
}

export const storage = new MemStorage();
