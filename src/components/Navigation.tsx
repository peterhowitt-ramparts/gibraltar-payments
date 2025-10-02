import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10 bg-gradient-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight">GEMA</span>
              <span className="text-xs text-muted-foreground leading-tight">Gibraltar E-Money & Payments</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-foreground hover:text-accent transition-colors font-medium">
              About
            </a>
            <a href="#advantages" className="text-foreground hover:text-accent transition-colors font-medium">
              Why Gibraltar
            </a>
            <a href="#members" className="text-foreground hover:text-accent transition-colors font-medium">
              Members
            </a>
            <a href="#insights" className="text-foreground hover:text-accent transition-colors font-medium">
              Insights
            </a>
            <Button variant="default" className="bg-primary hover:bg-primary/90">
              Join GEMPA
            </Button>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {isOpen && <div className="md:hidden py-4 space-y-4 border-t border-border animate-fade-in">
            <a href="#about" className="block text-foreground hover:text-accent transition-colors font-medium">
              About
            </a>
            <a href="#advantages" className="block text-foreground hover:text-accent transition-colors font-medium">
              Why Gibraltar
            </a>
            <a href="#members" className="block text-foreground hover:text-accent transition-colors font-medium">
              Members
            </a>
            <a href="#insights" className="block text-foreground hover:text-accent transition-colors font-medium">
              Insights
            </a>
            <Button variant="default" className="w-full bg-primary hover:bg-primary/90">
              Join GEMPA
            </Button>
          </div>}
      </div>
    </nav>;
};
export default Navigation;