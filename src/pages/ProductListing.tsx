import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Heart, ShoppingCart, Star, SlidersHorizontal } from "lucide-react";

const ProductListing = () => {
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [showFilters, setShowFilters] = useState(false);

  const products = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Premium Sports Product ${i + 1}`,
    brand: ["Nike", "Adidas", "Puma", "SG", "Yonex"][i % 5],
    price: Math.floor(Math.random() * 20000) + 2000,
    originalPrice: Math.floor(Math.random() * 25000) + 3000,
    rating: (Math.random() * 2 + 3).toFixed(1),
    reviews: Math.floor(Math.random() * 500) + 50,
    image: "/placeholder.svg",
    discount: Math.floor(Math.random() * 40) + 10,
  }));

  const brands = ["Nike", "Adidas", "Puma", "SG", "Yonex"];
  const categories = ["Cricket", "Football", "Running", "Tennis", "Badminton"];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-6 animate-fade-in">
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium">All Products</span>
        </nav>

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-heading font-bold animate-slide-in-left">
            Sports Equipment
          </h1>
          
          <div className="flex gap-3 items-center">
            <Button
              variant="outline"
              size="sm"
              className="lg:hidden"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filters
            </Button>
            
            <Select defaultValue="popularity">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popularity">Popularity</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <aside className={`lg:block ${showFilters ? 'block' : 'hidden'} space-y-6 animate-slide-in-left`}>
            <div className="bg-card border rounded-lg p-6 sticky top-4">
              <h3 className="font-heading font-bold text-lg mb-4">Filters</h3>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Categories</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center gap-2 cursor-pointer">
                      <Checkbox />
                      <span className="text-sm">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Brands</h4>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <label key={brand} className="flex items-center gap-2 cursor-pointer">
                      <Checkbox />
                      <span className="text-sm">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Price Range</h4>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={50000}
                  step={500}
                  className="mb-3"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>₹{priceRange[0]}</span>
                  <span>₹{priceRange[1]}</span>
                </div>
              </div>

              {/* Rating */}
              <div>
                <h4 className="font-semibold mb-3">Rating</h4>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map((rating) => (
                    <label key={rating} className="flex items-center gap-2 cursor-pointer">
                      <Checkbox />
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < rating ? 'fill-yellow-500 text-yellow-500' : 'text-gray-300'}`}
                          />
                        ))}
                        <span className="text-sm ml-1">& up</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="lg:col-span-3">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className="bg-card border rounded-lg overflow-hidden group athletic-hover animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Link to={`/product/${product.id}`} className="block relative">
                    <div className="aspect-square overflow-hidden bg-muted">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <span className="absolute top-3 left-3 bg-destructive text-destructive-foreground px-2 py-1 rounded text-sm font-semibold">
                      {product.discount}% OFF
                    </span>
                    <button className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur rounded-full hover:bg-background transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                  </Link>

                  <div className="p-4">
                    <p className="text-sm text-muted-foreground mb-1">{product.brand}</p>
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-semibold mb-2 line-clamp-2 hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-sm text-muted-foreground">({product.reviews})</span>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl font-bold">₹{product.price.toLocaleString()}</span>
                      <span className="text-sm text-muted-foreground line-through">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                    </div>

                    <Button className="w-full athletic-hover" size="sm">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination would go here */}
            <div className="mt-8 flex justify-center">
              <p className="text-muted-foreground text-sm">Showing 12 of 156 products</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductListing;
