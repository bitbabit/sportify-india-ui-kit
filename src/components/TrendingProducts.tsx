import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Star } from "lucide-react";
import cricketGear from "@/assets/cricket-gear.jpg";
import footballGear from "@/assets/football-gear.jpg";
import runningShoes from "@/assets/running-shoes.jpg";
import tennisGear from "@/assets/tennis-gear.jpg";

const products = [
  {
    id: 1,
    name: "Pro Cricket Bat",
    brand: "SG",
    price: 4999,
    originalPrice: 6999,
    rating: 4.8,
    reviews: 156,
    image: cricketGear,
    discount: 29,
  },
  {
    id: 2,
    name: "Elite Football Boots",
    brand: "Adidas",
    price: 5499,
    originalPrice: 7999,
    rating: 4.9,
    reviews: 234,
    image: footballGear,
    discount: 31,
  },
  {
    id: 3,
    name: "Speed Running Shoes",
    brand: "Nike",
    price: 6999,
    originalPrice: 9999,
    rating: 4.7,
    reviews: 412,
    image: runningShoes,
    discount: 30,
  },
  {
    id: 4,
    name: "Pro Tennis Racket",
    brand: "Yonex",
    price: 8999,
    originalPrice: 12999,
    rating: 4.9,
    reviews: 189,
    image: tennisGear,
    discount: 31,
  },
];

const TrendingProducts = () => {
  return (
    <section className="py-12 lg:py-20 bg-gradient-to-b from-muted/30 via-background to-muted/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-2 inline-flex items-center gap-2 px-4 py-1 bg-secondary/10 rounded-full">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
            Hot Deals
          </p>
          <h2 className="text-3xl lg:text-5xl font-black text-foreground uppercase mt-4 mb-4">
            Trending Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Grab the hottest deals on premium sports equipment
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg athletic-hover animate-fade-in hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-500 border border-border hover:border-secondary/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-muted to-muted/50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-2 transition-all duration-700"
                />
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Discount Badge with Pulse */}
                <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-xs font-bold uppercase shadow-lg animate-pulse">
                  {product.discount}% OFF
                </div>
                
                {/* Wishlist Button with Better Animation */}
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-4 right-4 bg-background/90 backdrop-blur-md hover:bg-background hover:scale-110 transition-all duration-300 shadow-md"
                >
                  <Heart className="h-5 w-5 hover:fill-destructive hover:text-destructive transition-all duration-300" />
                </Button>

                {/* Quick View on Hover */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Button size="sm" className="w-full bg-secondary hover:bg-secondary/90 font-bold uppercase">
                    Quick View
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                  {product.brand}
                </p>
                <h3 className="text-lg font-bold text-card-foreground mb-2 line-clamp-1">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="text-sm font-bold text-foreground">
                      {product.rating}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-black text-foreground">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <span className="text-sm text-muted-foreground line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                </div>

                {/* Add to Cart Button */}
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wide h-11 rounded-full group/btn relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <span className="relative z-10 flex items-center justify-center">
                    <ShoppingCart className="h-4 w-4 mr-2 group-hover/btn:animate-bounce" />
                    Add to Cart
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 bg-[length:200%_100%] animate-shimmer" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products CTA */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold uppercase tracking-wide h-14 px-10 rounded-full athletic-hover shadow-lg hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 group"
          >
            View All Products 
            <span className="inline-block group-hover:translate-x-2 transition-transform duration-300 ml-2">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
