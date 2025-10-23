import { Facebook, Instagram, Twitter, Youtube, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const footerLinks = {
    company: ["About Us", "Careers", "Store Locator", "Contact Us"],
    help: ["Shipping Info", "Returns", "Size Guide", "Track Order"],
    shop: ["New Arrivals", "Best Sellers", "Sale", "Gift Cards"],
  };

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="max-w-2xl mx-auto text-center mb-16 relative">
          
          <div className="relative z-10">
            <h3 className="text-2xl lg:text-3xl font-black uppercase mb-4 animate-fade-in">
              Join The Team
            </h3>
            <p className="text-primary-foreground/80 mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Subscribe to get special offers, free giveaways, and exclusive deals.
            </p>
            <div className="flex gap-2 max-w-md mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 h-12 focus:ring-2 focus:ring-accent transition-all duration-300"
              />
              <Button
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold uppercase h-12 px-6 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Mail className="w-4 h-4 group-hover:animate-bounce" />
                  Subscribe
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </div>
            
            {/* Success Message (Hidden by default) */}
            <div className="mt-4 text-sm text-accent animate-fade-in hidden" id="newsletter-success">
              ✓ Thank you for subscribing! Check your email for confirmation.
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <h4 className="text-2xl font-black mb-4">
              SPORTIFY<span className="text-secondary">.</span>
            </h4>
            <p className="text-sm text-primary-foreground/70 mb-4">
              One Sports Store for Every Champion.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                <button
                  key={index}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors athletic-hover"
                >
                  <Icon className="h-5 w-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h5 className="font-bold uppercase tracking-wide mb-4">{title}</h5>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>© 2025 Sportify India. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
