import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Twitter, Send, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/in/kelvin-amaniampong-kelvin/",
      color: "hover:text-blue-600"
    },

  ];

  return (
    <section id="contact" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="text-gold-500">Touch</span>
          </h2>
          <p className="text-lg text-navy-100 max-w-2xl mx-auto">
            Ready to collaborate? Let's discuss your next project or opportunity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="glass-hero rounded-2xl shadow-xl hover-lift border-gold-400/30 animate-scale-in">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">Send a Message</CardTitle>
              <CardDescription className="text-navy-100">
                Fill out the form below and I'll respond within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-white font-medium">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2 bg-white/10 border-white/30 text-white placeholder:text-navy-200 focus:border-gold-400"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-white font-medium">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2 bg-white/10 border-white/30 text-white placeholder:text-navy-200 focus:border-gold-400"
                    placeholder="kelvinamaniampong77@gmail.com"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-white font-medium">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="mt-2 bg-white/10 border-white/30 text-white placeholder:text-navy-200 focus:border-gold-400 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full btn-premium text-navy-800 font-bold py-4 text-lg rounded-xl hover-glow group"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            {/* Contact Details */}
            <Card className="glass-hero rounded-2xl shadow-lg hover-lift border-gold-400/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-gold-400 mr-4" />
                    <span className="text-navy-100">kelvinamaniampong77@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-gold-400 mr-4" />
                    <span className="text-navy-100">+233 55 9000 293</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-gold-400 mr-4" />
                    <span className="text-navy-100">Accra, Ghana</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="glass-hero rounded-2xl shadow-lg hover-lift border-gold-400/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-6">Connect With Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-white/10 rounded-lg border border-white/20 text-white transition-all duration-300 hover:scale-110 hover:bg-white/20 ${social.color}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Work Together?</h3>
              <p className="text-navy-100 mb-6">
                Let's create something amazing together. I'm always open to discussing new opportunities.
              </p>
              <Button 
                variant="outline"
                className="glass-hero border-2 border-gold-400/50 text-gold-300 hover:bg-gold-400 hover:text-navy-800 font-bold px-8 py-4 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-gold group"
              >
                <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                kelvinamaniampong77@gmail.com
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;