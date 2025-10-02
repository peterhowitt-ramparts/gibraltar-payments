import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";
const Footer = () => {
  return <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-10 w-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">GEMA</span>
                <span className="text-xs text-primary-foreground/70 leading-tight">Gibraltar E-Money & Payments</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed">
              The voice of Gibraltar's digital finance sector, championing innovation and excellence.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-primary-foreground/70 hover:text-accent transition-colors">About GEMPA</a></li>
              <li><a href="#advantages" className="text-primary-foreground/70 hover:text-accent transition-colors">Why Gibraltar</a></li>
              <li><a href="#members" className="text-primary-foreground/70 hover:text-accent transition-colors">Membership</a></li>
              <li><a href="#insights" className="text-primary-foreground/70 hover:text-accent transition-colors">Insights</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Regulatory Framework</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Industry Reports</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Events Calendar</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70">Suit</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="mailto:info@gempa.gi" className="text-primary-foreground/70 hover:text-accent transition-colors">info@gema.gi</a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="tel:+35020012345" className="text-primary-foreground/70 hover:text-accent transition-colors">+350 200 12345</a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="h-10 w-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-primary-foreground/70">
            © 2025 Gibraltar E-Money and Payments Association. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;