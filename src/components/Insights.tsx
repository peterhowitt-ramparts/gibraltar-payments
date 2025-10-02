import { Calendar, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const Insights = () => {
  const insights = [
    {
      category: "Regulatory Update",
      title: "New DLT Framework Amendments Announced",
      date: "March 15, 2025",
      excerpt: "Gibraltar Financial Services Commission announces enhanced provisions for distributed ledger technology providers..."
    },
    {
      category: "Industry News",
      title: "Gibraltar Fintech Forum 2025 Registration Open",
      date: "March 10, 2025",
      excerpt: "Join leading industry figures discussing the future of payments, e-money, and digital assets in Gibraltar..."
    },
    {
      category: "Member Spotlight",
      title: "Success Story: How Three Members Scaled Globally",
      date: "March 5, 2025",
      excerpt: "Explore case studies of GEMA members who leveraged Gibraltar's regulatory framework to expand internationally..."
    }
  ];

  return (
    <section id="insights" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Latest Insights
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Stay informed with the latest regulatory updates, industry news, and insights 
            from Gibraltar's digital finance ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {insights.map((item, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-semibold rounded-full">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  {item.date}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {item.excerpt}
                </p>
                <div className="flex items-center text-accent font-semibold group-hover:translate-x-2 transition-transform">
                  Read more
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-colors">
            View All Insights
          </button>
        </div>
      </div>
    </section>
  );
};

export default Insights;
