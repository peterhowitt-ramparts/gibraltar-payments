import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";

const Advantages = () => {
  const advantages = [
    {
      category: "Regulatory Excellence",
      items: [
        "E-money and Payment Services licensing (including DLT regulatory framework)",
        "Crypto asset-friendly jurisdiction",
        "Fast-track licensing procedures",
        "Proactive regulatory engagement"
      ]
    },
    {
      category: "Business Environment",
      items: [
        "Competitive tax regime (15% corporate tax)",
        "Access to skilled workforce",
        "English common law jurisdiction",
        "Political and economic stability"
      ]
    },
    {
      category: "Market Access",
      items: [
        "Gateway to EU markets",
        "Strong UK relationships post-Brexit",
        "International banking connectivity",
        "Passport rights across Europe"
      ]
    },
    {
      category: "Innovation Support",
      items: [
        "Innovation-friendly legislation",
        "Fintech sandbox programs",
        "Government backing for digital economy",
        "Regulatory sandbox for testing"
      ]
    }
  ];

  return (
    <section id="advantages" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Why Choose Gibraltar?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Gibraltar offers a unique combination of regulatory certainty, business-friendly 
            environment, and strategic positioning that makes it the ideal jurisdiction for 
            digital finance innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {advantages.map((section, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-xl transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 pb-4 border-b border-border">
                {section.category}
              </h3>
              <ul className="space-y-4">
                {section.items.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-accent rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Establish Your Fintech in Gibraltar?
          </h3>
          <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
            Join the growing ecosystem of innovative financial services firms choosing Gibraltar 
            as their regulatory home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-accent font-semibold rounded-lg hover:bg-white/90 transition-colors"
            >
              Get Started
            </a>
            <a 
              href="#members" 
              className="inline-flex items-center justify-center px-8 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
            >
              View Members
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
