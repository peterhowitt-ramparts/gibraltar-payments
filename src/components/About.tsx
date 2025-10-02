import { Shield, Users, Globe, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Robust Regulation",
      description: "Gibraltar's Financial Services Commission provides world-class regulatory oversight with a risk-based, proportionate approach."
    },
    {
      icon: Users,
      title: "Industry Collaboration",
      description: "GEMPA brings together leading fintech firms, payment processors, and e-money institutions to drive innovation."
    },
    {
      icon: Globe,
      title: "Global Connectivity",
      description: "Strategic location bridging Europe, UK, and international markets with strong ties to major financial centers."
    },
    {
      icon: Award,
      title: "Excellence Standards",
      description: "Promoting best practices, compliance excellence, and ethical standards across the digital finance ecosystem."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            About GEMPA
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            The Gibraltar E-Money and Payments Association represents the voice of Gibraltar's 
            thriving digital finance sector, advocating for progressive regulation while maintaining 
            the highest standards of consumer protection and financial integrity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-xl p-8 border border-border hover:border-accent/50 transition-all hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
