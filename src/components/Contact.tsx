
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // In a real application, you would send this data to a server
    // For now, we'll just show a toast notification
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-portfolio-navy">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-portfolio-navy">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-portfolio-light-blue flex items-center justify-center flex-shrink-0">
                  <Mail className="text-portfolio-blue" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-portfolio-navy">Email</h4>
                  <a 
                    href="mailto:luckskyaarora@gmail.com" 
                    className="text-portfolio-gray hover:text-portfolio-blue transition"
                  >
                    luckskyaarora@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-portfolio-light-blue flex items-center justify-center flex-shrink-0">
                  <Phone className="text-portfolio-blue" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-portfolio-navy">Phone</h4>
                  <a 
                    href="tel:+916396089078" 
                    className="text-portfolio-gray hover:text-portfolio-blue transition"
                  >
                    +91 6396089078
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-portfolio-light-blue flex items-center justify-center flex-shrink-0">
                  <Linkedin className="text-portfolio-blue" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-portfolio-navy">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/luckskyaarora" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-portfolio-gray hover:text-portfolio-blue transition"
                  >
                    linkedin.com/in/luckskyaarora
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-portfolio-light-blue flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-portfolio-blue" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-portfolio-navy">Location</h4>
                  <p className="text-portfolio-gray">Gurugram, Haryana, India</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <Card className="border border-portfolio-light-blue shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6 text-portfolio-navy">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-portfolio-gray mb-2">Name</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full border-portfolio-light-blue focus:border-portfolio-blue"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-portfolio-gray mb-2">Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border-portfolio-light-blue focus:border-portfolio-blue"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-portfolio-gray mb-2">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full border-portfolio-light-blue focus:border-portfolio-blue"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-portfolio-blue hover:bg-portfolio-dark-blue text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
