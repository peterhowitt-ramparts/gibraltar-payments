import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Advantages from "@/components/Advantages";
import Members from "@/components/Members";
import Insights from "@/components/Insights";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Advantages />
      <Members />
      <Insights />
      <Footer />
    </div>
  );
};

export default Index;
