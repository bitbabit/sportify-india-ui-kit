import { Button } from "@/components/ui/button";
import { Tag, Percent, Gift, Clock, Zap, Star } from "lucide-react";
import { useState, useEffect } from "react";

const offers = [
  {
    icon: Tag,
    title: "Mega Sports Sale",
    description: "Up to 50% off on selected items",
    color: "from-secondary/20 to-secondary/5 border-secondary",
    iconColor: "text-secondary",
    discount: "50%",
    timeLeft: "2 days left",
    popular: true
  },
  {
    icon: Percent,
    title: "Bundle Offers",
    description: "Buy 2 Get 1 Free on sports gear",
    color: "from-accent/20 to-accent/5 border-accent",
    iconColor: "text-accent",
    discount: "33%",
    timeLeft: "5 days left",
    popular: false
  },
  {
    icon: Gift,
    title: "New Customer Deal",
    description: "Flat ₹500 off on first purchase",
    color: "from-ring/20 to-ring/5 border-ring",
    iconColor: "text-ring",
    discount: "₹500",
    timeLeft: "Always available",
    popular: false
  },
];

const OffersSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 32,
    seconds: 15
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 lg:py-20 bg-gradient-to-br from-muted/30 via-background to-primary/5 relative overflow-hidden">

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <p className="text-ring font-bold text-sm uppercase tracking-widest mb-2 animate-fade-in">
            Limited Time
          </p>
          <h2 className="text-3xl lg:text-5xl font-black text-foreground uppercase animate-slide-in-left">
            Special Offers
          </h2>
          <p className="text-lg text-muted-foreground mt-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Don't miss out on these exclusive deals for champions
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="bg-card border rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-destructive" />
              <span className="text-sm font-semibold text-muted-foreground">Sale Ends In:</span>
            </div>
            <div className="flex justify-center gap-4">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="bg-primary text-primary-foreground text-2xl font-black px-3 py-2 rounded-lg min-w-[60px]">
                    {value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">
                    {unit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <div
                key={offer.title}
                className={`relative group overflow-hidden rounded-2xl bg-gradient-to-br ${offer.color} border-2 p-8 athletic-hover animate-zoom-in hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Popular Badge */}
                {offer.popular && (
                  <div className="absolute top-4 right-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    POPULAR
                  </div>
                )}

                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Icon className="w-full h-full" />
                </div>

                {/* Discount Badge */}
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-foreground">
                  {offer.discount} OFF
                </div>

                {/* Content */}
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-background mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <Icon className={`w-8 h-8 ${offer.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-black text-foreground mb-3 uppercase group-hover:text-primary transition-colors duration-300">
                    {offer.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 font-medium group-hover:text-foreground/80 transition-colors duration-300">
                    {offer.description}
                  </p>
                  
                  {/* Time Left */}
                  <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{offer.timeLeft}</span>
                  </div>

                  <Button
                    variant="outline"
                    className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-bold uppercase tracking-wide rounded-full group/btn relative overflow-hidden w-full"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Zap className="w-4 h-4 group-hover/btn:animate-pulse" />
                      Claim Now
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  </Button>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 blur-xl" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <p className="text-muted-foreground mb-4">
            Want to be the first to know about new offers?
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-3 rounded-full">
            Subscribe to Notifications
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
