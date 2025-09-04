import { Button } from "@/components/ui/button";
import { Download, Mail, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero-overlay"></div>
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-glow opacity-30 animate-pulse"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-gold-400 rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-32 w-1 h-1 bg-gold-300 rounded-full animate-float opacity-80" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-gold-500 rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 right-20 w-1 h-1 bg-gold-400 rounded-full animate-float opacity-70" style={{ animationDelay: '0.5s' }}></div>
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          {/* Enhanced Name Display */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-black leading-none mb-4">
              <span className="block text-gold-100 drop-shadow-2xl font-extrabold stroke-text-gold">Kelvin</span>
              <span className="block text-gradient animate-glow">Amaniampong</span>
            </h1>
            <div className="flex items-center justify-center gap-2 mt-4">
              <Sparkles className="w-5 h-5 text-gold-400 animate-pulse" />
              <span className="text-gold-200 text-sm font-medium tracking-widest uppercase">Premium Portfolio</span>
              <Sparkles className="w-5 h-5 text-gold-400 animate-pulse" />
            </div>
          </div>
          
          {/* Enhanced Tagline */}
          <div className="glass-hero rounded-2xl p-8 max-w-5xl mx-auto mb-12 hover-lift">
            <p className="text-xl md:text-2xl text-navy-50 leading-relaxed font-light">
              <span className="text-gold-300 font-semibold">Digital Communications & Media Professional</span>
              <span className="mx-3 text-gold-400">|</span>
              <span className="text-gold-300 font-semibold">Writer</span>
              <span className="mx-3 text-gold-400">|</span>
              <span className="text-gold-300 font-semibold">Web Developer</span>
            </p>
          </div>
          
          {/* Premium CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up">
            <Button 
              size="lg"
              className="btn-premium text-navy-800 font-bold px-10 py-5 rounded-xl text-lg shadow-gold-lg hover-glow group relative overflow-hidden"
            >
              <div className="flex items-center relative z-10">
                <Download className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                Download CV
              </div>
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              onClick={scrollToContact}
              className="glass-hero border-2 border-gold-400/50 text-gold-100 hover:text-navy-800 hover:bg-gold-400 font-bold px-10 py-5 rounded-xl text-lg transition-all duration-500 hover:scale-105 hover:shadow-gold group"
            >
              <Mail className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-gold-300 text-xs font-medium tracking-wide uppercase">Scroll Down</span>
          <div className="w-6 h-12 border-2 border-gold-400/60 rounded-full flex justify-center animate-pulse hover:border-gold-300 transition-colors cursor-pointer">
            <div className="w-1.5 h-4 bg-gradient-accent rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold-400/30 rounded-full animate-shimmer"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;