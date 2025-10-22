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
    <section className="py-12 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-2">
            Hot Deals
          </p>
          <h2 className="text-3xl lg:text-5xl font-black text-foreground uppercase">
            Trending Products
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-md athletic-hover animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Discount Badge */}
                <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-xs font-bold uppercase">
                  {product.discount}% OFF
                </div>
                {/* Wishlist Button */}
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm hover:bg-background"
                >
                  <Heart className="h-5 w-5" />
                </Button>
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
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wide h-11 rounded-full group/btn">
                  <ShoppingCart className="h-4 w-4 mr-2 group-hover/btn:animate-pulse" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold uppercase tracking-wide h-14 px-10 rounded-full athletic-hover"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
