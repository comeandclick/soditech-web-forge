import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-industrial.jpg";

const Hero = () => {
  const achievements = [
    "45+ years of industrial expertise",
    "End-to-end solutions for powder handling & process",
    "High standards, smart engineering", 
    "Eco-conscious technologies"
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-industrial-gradient opacity-85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl">
          {/* Main headline */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Your Trusted Partner for the
              <span className="block text-accent">Environment & Process</span>
              <span className="block">Industry</span>
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
              Leading provider of industrial solutions for manutention, dosage, transfer, 
              and treatment in environmental, water treatment, and industrial process sectors.
            </p>
          </div>

          {/* Achievement highlights */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-white font-medium">{achievement}</span>
              </div>
            ))}
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-eco-dark text-white font-semibold px-8 shadow-eco hover-lift animate-scale-in"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 font-semibold px-8 backdrop-blur-sm animate-scale-in"
              onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Discover Our Solutions
            </Button>
          </div>

          {/* Trusted by indicator */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/70 text-sm font-medium mb-4">
              Exclusive MENA partnerships with leading European manufacturers
            </p>
            <div className="flex items-center space-x-6 text-white/60 text-sm font-mono">
              <span>Technilab.fr</span>
              <span>•</span>
              <span>Sodimate.com</span>
              <span>•</span>
              <span>Faureequip.com</span>
              <span>•</span>
              <span>FB-Procedes.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;