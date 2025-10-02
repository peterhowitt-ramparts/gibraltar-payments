import { Building2 } from "lucide-react";

const Members = () => {
  const memberCategories = [
    {
      title: "E-Money Institutions",
      count: 45,
      description: "Leading electronic money issuers"
    },
    {
      title: "Payment Service Providers",
      count: 38,
      description: "Innovative payment processors"
    },
    {
      title: "DLT Providers",
      count: 27,
      description: "Blockchain and crypto firms"
    },
    {
      title: "Fintech Innovators",
      count: 32,
      description: "Emerging financial technology companies"
    }
  ];

  return (
    <section id="members" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Our Members
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            GEMPA represents a diverse community of licensed financial services firms, 
            from established institutions to innovative startups shaping the future of payments.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {memberCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-all hover:shadow-lg text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">
                {category.count}+
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {category.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {category.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-12 border border-border">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Become a GEMPA Member
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Join Gibraltar's premier association for e-money, payments, and digital finance firms. 
              Gain access to regulatory insights, networking opportunities, and collective advocacy.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="p-6 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">Advocacy</div>
                <p className="text-sm text-muted-foreground">Represent your interests with regulators and government</p>
              </div>
              <div className="p-6 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">Network</div>
                <p className="text-sm text-muted-foreground">Connect with industry leaders and innovators</p>
              </div>
              <div className="p-6 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">Insights</div>
                <p className="text-sm text-muted-foreground">Access regulatory updates and market intelligence</p>
              </div>
            </div>
            <button className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
              Apply for Membership
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Members;
