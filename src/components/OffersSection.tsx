import { Button } from "@/components/ui/button";
import { Tag, Percent, Gift } from "lucide-react";

const offers = [
  {
    icon: Tag,
    title: "Mega Sports Sale",
    description: "Up to 50% off on selected items",
    color: "from-secondary/20 to-secondary/5 border-secondary",
    iconColor: "text-secondary",
  },
  {
    icon: Percent,
    title: "Bundle Offers",
    description: "Buy 2 Get 1 Free on sports gear",
    color: "from-accent/20 to-accent/5 border-accent",
    iconColor: "text-accent",
  },
  {
    icon: Gift,
    title: "New Customer Deal",
    description: "Flat ₹500 off on first purchase",
    color: "from-ring/20 to-ring/5 border-ring",
    iconColor: "text-ring",
  },
];

const OffersSection = () => {
  return (
    <section className="py-12 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-ring font-bold text-sm uppercase tracking-widest mb-2">
            Limited Time
          </p>
          <h2 className="text-3xl lg:text-5xl font-black text-foreground uppercase">
            Special Offers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <div
                key={offer.title}
                className={`relative group overflow-hidden rounded-2xl bg-gradient-to-br ${offer.color} border-2 p-8 athletic-hover animate-zoom-in`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <Icon className="w-full h-full" />
                </div>

                {/* Content */}
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-background mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${offer.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-black text-foreground mb-3 uppercase">
                    {offer.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 font-medium">
                    {offer.description}
                  </p>
                  <Button
                    variant="outline"
                    className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-bold uppercase tracking-wide rounded-full"
                  >
                    Claim Now
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
