import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Members = () => {
  const members = [
    "Metropolitan Global Finance Limited",
    "Pay Perform (Gibraltar) Limited",
    "Ribbon plc",
    "Spayex Technology Limited",
    "Transact Payments Limited",
    "Just Bank plc",
    "Ramparts.gi"
  ];

  return <section id="members" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Our Members
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">GEMA represents a diverse community of licensed financial services firms, from established institutions to innovative startups shaping the future of payments.</p>
        </div>

        <div className="mb-16 max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {members.map((member, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-4">
                    <div className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-all hover:shadow-lg flex items-center justify-center h-32 animate-fade-in" style={{
                      animationDelay: `${index * 0.05}s`
                    }}>
                      <h3 className="text-lg font-semibold text-foreground text-center">
                        {member}
                      </h3>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="bg-card rounded-2xl p-12 border border-border">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-foreground mb-4">Become a GEMA Member</h3>
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
    </section>;
};
export default Members;