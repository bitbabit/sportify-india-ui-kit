import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gift, Zap, Clock, Tag, TrendingUp, Percent } from "lucide-react";

const Offers = () => {
  const featuredOffers = [
    {
      id: 1,
      title: "Mega Sports Sale",
      description: "Up to 60% off on all sports equipment",
      discount: "60% OFF",
      validUntil: "31 Dec 2025",
      icon: Zap,
      gradient: "from-orange-500 to-red-600",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Cricket Season Special",
      description: "Exclusive deals on cricket gear",
      discount: "50% OFF",
      validUntil: "15 Jan 2025",
      icon: Gift,
      gradient: "from-green-500 to-emerald-600",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Flash Deal",
      description: "Limited time offers on running shoes",
      discount: "40% OFF",
      validUntil: "48 Hours",
      icon: Clock,
      gradient: "from-blue-500 to-indigo-600",
      image: "/placeholder.svg",
    },
  ];

  const categoryOffers = [
    { category: "Cricket", discount: "Up to 50% OFF", items: 234, color: "bg-green-500" },
    { category: "Football", discount: "Up to 45% OFF", items: 189, color: "bg-orange-500" },
    { category: "Running", discount: "Up to 55% OFF", items: 312, color: "bg-blue-500" },
    { category: "Tennis", discount: "Up to 40% OFF", items: 156, color: "bg-yellow-500" },
    { category: "Badminton", discount: "Up to 35% OFF", items: 98, color: "bg-purple-500" },
    { category: "Gym Equipment", discount: "Up to 60% OFF", items: 267, color: "bg-red-500" },
  ];

  const coupons = [
    { code: "SPORTS100", discount: "₹100 OFF", minOrder: "₹999", icon: Tag },
    { code: "MEGA500", discount: "₹500 OFF", minOrder: "₹4999", icon: TrendingUp },
    { code: "FIRST50", discount: "50% OFF", minOrder: "First Order", icon: Gift },
    { code: "SAVE20", discount: "20% OFF", minOrder: "₹1999", icon: Percent },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-energy text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10 animate-fade-in">
            <h1 className="text-5xl font-heading font-bold mb-4 animate-zoom-in">
              🎉 Exclusive Sports Deals
            </h1>
            <p className="text-xl opacity-90 max-w-2xl">
              Grab amazing discounts on top sports brands and equipment. Limited time offers!
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          {/* Featured Offers */}
          <section className="mb-16">
            <h2 className="text-3xl font-heading font-bold mb-8 animate-slide-in-left">
              Featured Offers
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredOffers.map((offer, index) => {
                const Icon = offer.icon;
                return (
                  <div
                    key={offer.id}
                    className="relative overflow-hidden rounded-xl bg-card border athletic-hover animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${offer.gradient} opacity-10`}></div>
                    <div className="relative p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${offer.gradient} text-white`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <Badge variant="destructive" className="text-lg font-bold px-3 py-1">
                          {offer.discount}
                        </Badge>
                      </div>
                      <h3 className="text-2xl font-heading font-bold mb-2">{offer.title}</h3>
                      <p className="text-muted-foreground mb-4">{offer.description}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <Clock className="w-4 h-4" />
                        <span>Valid until {offer.validUntil}</span>
                      </div>
                      <Link to="/products">
                        <Button className="w-full athletic-hover glow-effect">
                          Shop Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Category Offers */}
          <section className="mb-16">
            <h2 className="text-3xl font-heading font-bold mb-8 animate-slide-in-left">
              Deals by Category
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryOffers.map((offer, index) => (
                <Link
                  key={offer.category}
                  to="/products"
                  className="group bg-card border rounded-xl p-6 athletic-hover animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-heading font-bold mb-2">{offer.category}</h3>
                      <p className="text-2xl font-bold text-primary">{offer.discount}</p>
                    </div>
                    <div className={`w-12 h-12 ${offer.color} rounded-full opacity-20`}></div>
                  </div>
                  <p className="text-sm text-muted-foreground">{offer.items} products on sale</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Coupon Codes */}
          <section className="mb-16">
            <h2 className="text-3xl font-heading font-bold mb-8 animate-slide-in-left">
              Coupon Codes
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {coupons.map((coupon, index) => {
                const Icon = coupon.icon;
                return (
                  <div
                    key={coupon.code}
                    className="bg-card border-2 border-dashed border-primary/30 rounded-xl p-6 athletic-hover animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="text-center mb-3">
                      <div className="text-2xl font-bold text-primary mb-1">{coupon.discount}</div>
                      <div className="text-sm text-muted-foreground">on orders above {coupon.minOrder}</div>
                    </div>
                    <div className="bg-muted rounded-lg p-3 text-center">
                      <code className="text-sm font-mono font-bold">{coupon.code}</code>
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-3">
                      Copy Code
                    </Button>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Call to Action */}
          <section className="gradient-neon rounded-2xl p-12 text-center text-white animate-fade-in">
            <h2 className="text-4xl font-heading font-bold mb-4">
              Don't Miss Out!
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get exclusive access to deals and early-bird offers.
            </p>
            <Link to="/products">
              <Button size="lg" variant="secondary" className="athletic-hover">
                Explore All Deals
              </Button>
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Offers;
