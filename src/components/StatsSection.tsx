import { useEffect, useState } from "react";
import { Trophy, Users, Package, Star } from "lucide-react";

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    customers: 0,
    products: 0,
    orders: 0,
    rating: 0
  });

  const stats = [
    {
      icon: Users,
      value: 50000,
      label: "Happy Customers",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Package,
      value: 10000,
      label: "Products Sold",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Trophy,
      value: 150,
      label: "Sports Categories",
      color: "text-ring",
      bgColor: "bg-ring/10"
    },
    {
      icon: Star,
      value: 4.9,
      label: "Average Rating",
      color: "text-destructive",
      bgColor: "bg-destructive/10",
      isDecimal: true
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      stats.forEach((stat, index) => {
        const targetValue = stat.value;
        const increment = targetValue / steps;
        let currentValue = 0;

        const timer = setInterval(() => {
          currentValue += increment;
          if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(timer);
          }

          setCounts(prev => ({
            ...prev,
            [index === 0 ? 'customers' : index === 1 ? 'products' : index === 2 ? 'orders' : 'rating']: 
              stat.isDecimal ? parseFloat(currentValue.toFixed(1)) : Math.floor(currentValue)
          }));
        }, stepDuration + (index * 100));
      });
    }
  }, [isVisible, stats]);

  return (
    <section id="stats-section" className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <p className="text-accent font-bold text-sm uppercase tracking-widest mb-4 animate-fade-in">
            Trusted by Champions
          </p>
          <h2 className="text-3xl lg:text-5xl font-black text-foreground uppercase animate-slide-in-left">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Join thousands of athletes who trust Sportify for their performance needs
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const currentValue = index === 0 ? counts.customers : 
                               index === 1 ? counts.products : 
                               index === 2 ? counts.orders : counts.rating;

            return (
              <div
                key={stat.label}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${stat.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-10 h-10 ${stat.color}`} />
                </div>
                <div className="text-4xl lg:text-5xl font-black text-foreground mb-2 group-hover:scale-105 transition-transform duration-300">
                  {currentValue.toLocaleString()}{stat.isDecimal ? '' : '+'}
                </div>
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Animated Progress Bar */}
        <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="bg-muted rounded-full h-2 overflow-hidden">
            <div className="bg-gradient-to-r from-accent via-secondary to-ring h-full rounded-full animate-pulse-glow" 
                 style={{ 
                   width: '100%',
                   animation: 'progress-fill 3s ease-out forwards'
                 }} />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Growing stronger every day with our community
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
