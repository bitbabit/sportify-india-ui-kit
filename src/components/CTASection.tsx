import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Trophy, Target } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary/95 to-accent relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-foreground/10 rounded-full blur-2xl animate-bounce-slow" />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Trophy className="absolute top-20 left-10 w-12 h-12 text-primary-foreground/20 animate-float" style={{ animationDelay: '0s' }} />
        <Zap className="absolute bottom-32 right-20 w-16 h-16 text-primary-foreground/20 animate-bounce-slow" style={{ animationDelay: '1s' }} />
        <Target className="absolute top-40 right-32 w-10 h-10 text-primary-foreground/20 animate-wiggle" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full mb-6 animate-fade-in">
            <Zap className="w-4 h-4 text-primary-foreground animate-pulse" />
            <span className="text-primary-foreground font-bold text-sm uppercase tracking-widest">
              Limited Time Offer
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl lg:text-6xl font-black text-primary-foreground uppercase mb-6 animate-slide-in-left leading-tight" style={{ animationDelay: '0.1s' }}>
            Ready to Level Up Your Game?
          </h2>

          {/* Subheading */}
          <p className="text-lg lg:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto font-medium animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Join thousands of athletes who trust Sportify for their sports equipment needs. Get exclusive deals, expert advice, and premium quality guaranteed.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-10 animate-zoom-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-black text-primary-foreground mb-1">50K+</div>
              <div className="text-sm text-primary-foreground/80 uppercase tracking-wide">Happy Customers</div>
            </div>
            <div className="text-center border-x border-primary-foreground/20">
              <div className="text-3xl lg:text-4xl font-black text-primary-foreground mb-1">10K+</div>
              <div className="text-sm text-primary-foreground/80 uppercase tracking-wide">Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-black text-primary-foreground mb-1">150+</div>
              <div className="text-sm text-primary-foreground/80 uppercase tracking-wide">Top Brands</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
            <Link to="/products">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold uppercase tracking-wide h-14 px-10 rounded-full athletic-hover shadow-2xl group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </Link>
            
            <Link to="/offers">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-bold uppercase tracking-wide h-14 px-10 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                View Offers
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
              </svg>
              <span className="text-sm font-semibold">Free Shipping</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span className="text-sm font-semibold">100% Authentic</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd"/>
              </svg>
              <span className="text-sm font-semibold">Easy Returns</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

