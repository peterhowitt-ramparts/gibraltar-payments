import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import heroImage from "@/assets/gibraltar-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-32 mt-20">
        <div className="max-w-4xl animate-fade-in">
          <div className="flex items-center space-x-2 mb-6">
            <MapPin className="h-5 w-5 text-accent" />
            <span className="text-accent font-semibold">Gibraltar, British Overseas Territory</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Europe's Premier
            <span className="block text-gold">Fintech Jurisdiction</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            The Gibraltar E-Money and Payments Association champions innovation in digital finance, 
            positioning Gibraltar as the gateway between traditional finance and the digital economy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6"
            >
              Become a Member
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6"
            >
              Discover Gibraltar
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
            <div>
              <div className="text-4xl font-bold text-gold mb-2">250+</div>
              <div className="text-white/80">Licensed Firms</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">£5B+</div>
              <div className="text-white/80">Assets Under Management</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">30+</div>
              <div className="text-white/80">Years Regulation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
