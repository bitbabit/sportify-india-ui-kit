import { Shield, Truck, RotateCcw, Headphones, Award, Zap } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "100% authentic products with manufacturer warranty",
      color: "text-accent",
      bgColor: "bg-accent/10",
      delay: "0ms"
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Free delivery on orders above ₹999 across India",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      delay: "100ms"
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description: "30-day hassle-free return and exchange policy",
      color: "text-ring",
      bgColor: "bg-ring/10",
      delay: "200ms"
    },
    {
      icon: Headphones,
      title: "Expert Support",
      description: "24/7 customer support from sports experts",
      color: "text-destructive",
      bgColor: "bg-destructive/10",
      delay: "300ms"
    },
    {
      icon: Award,
      title: "Pro Selection",
      description: "Curated by professional athletes and coaches",
      color: "text-accent",
      bgColor: "bg-accent/10",
      delay: "400ms"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Same-day dispatch for orders placed before 2 PM",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      delay: "500ms"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background relative overflow-hidden">

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <p className="text-ring font-bold text-sm uppercase tracking-widest mb-4 animate-fade-in">
            Why Choose Sportify
          </p>
          <h2 className="text-3xl lg:text-5xl font-black text-foreground uppercase animate-slide-in-left">
            Built for Champions
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Experience the difference with our commitment to quality, service, and your success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group text-center p-8 rounded-2xl bg-card border hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 athletic-hover animate-fade-in"
                style={{ animationDelay: feature.delay }}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${feature.bgColor} mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <Icon className={`w-8 h-8 ${feature.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-black text-foreground mb-4">
                Ready to Elevate Your Game?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of athletes who trust Sportify for their performance needs. 
                Experience the difference today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Start Shopping Now
                </button>
                <button className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
