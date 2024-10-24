// src/pages/Contact/ContactForm.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Add your form submission logic here
  };

  return (
    <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-0">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white">Send us a message</CardTitle>
        <CardDescription className="text-gray-300">
          We'll get back to you within 24 hours
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Input
                placeholder="Name"
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email"
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>
          </div>
          <Textarea
            placeholder="Your message"
            className="bg-gray-800 border-gray-700 text-white"
            rows={4}
          />
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700"
          >
            Send Message
          </Button>
        </form>
      </CardContent>
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Alert className="m-4 bg-green-500/20 border-green-500/50">
              <AlertTitle>Success!</AlertTitle>
              <AlertDescription>
                Your message has been sent. We'll get back to you soon.
              </AlertDescription>
            </Alert>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};

export default ContactForm;
