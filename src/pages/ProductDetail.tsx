import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Heart,
  ShoppingCart,
  Star,
  Truck,
  RotateCcw,
  Shield,
  Share2,
  Minus,
  Plus,
} from "lucide-react";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    id: 1,
    name: "Professional Cricket Bat - English Willow",
    brand: "SG",
    price: 8999,
    originalPrice: 12999,
    rating: 4.5,
    reviews: 234,
    inStock: true,
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    discount: 31,
  };

  const reviews = [
    { id: 1, name: "Rahul Sharma", rating: 5, date: "2 weeks ago", comment: "Excellent bat! Perfect balance and pickup. Great for all types of shots." },
    { id: 2, name: "Priya Singh", rating: 4, date: "1 month ago", comment: "Good quality bat. The willow quality is premium. Slightly heavy but great for power hitting." },
    { id: 3, name: "Vikram Patel", rating: 5, date: "2 months ago", comment: "Best purchase ever! Used it in 5 matches already. Superb performance." },
  ];

  const relatedProducts = Array.from({ length: 4 }, (_, i) => ({
    id: i + 2,
    name: `Cricket Equipment ${i + 1}`,
    brand: "SG",
    price: Math.floor(Math.random() * 5000) + 1000,
    image: "/placeholder.svg",
    rating: (Math.random() * 2 + 3).toFixed(1),
  }));

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-6 animate-fade-in">
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
          <span className="text-muted-foreground">/</span>
          <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">Cricket</Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium">Bats</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Image Gallery */}
          <div className="animate-slide-in-left">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="animate-slide-in-right">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-muted-foreground mb-1">{product.brand}</p>
                <h1 className="text-3xl font-heading font-bold mb-2">{product.name}</h1>
              </div>
              <button className="p-2 hover:bg-accent rounded-full transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                <span className="font-semibold">{product.rating}</span>
              </div>
              <span className="text-muted-foreground">({product.reviews} reviews)</span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                product.inStock ? 'bg-green-500/10 text-green-600' : 'bg-red-500/10 text-red-600'
              }`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl font-bold">₹{product.price.toLocaleString()}</span>
              <span className="text-xl text-muted-foreground line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
              <span className="bg-destructive text-destructive-foreground px-3 py-1 rounded font-semibold">
                {product.discount}% OFF
              </span>
            </div>

            <div className="space-y-4 mb-6 p-4 bg-accent/30 rounded-lg">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-primary" />
                <span className="text-sm">Free delivery on orders above ₹999</span>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="w-5 h-5 text-primary" />
                <span className="text-sm">7 days easy return policy</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm">1 year warranty</span>
              </div>
            </div>

            <div className="flex gap-4 mb-6">
              <div className="flex items-center gap-3 border rounded-lg p-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1 hover:bg-accent rounded transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1 hover:bg-accent rounded transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex gap-3 mb-6">
              <Button className="flex-1 athletic-hover glow-effect" size="lg">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline" size="lg">
                <Heart className="w-5 h-5" />
              </Button>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Check Delivery</h3>
              <div className="flex gap-2">
                <Input placeholder="Enter pincode" />
                <Button variant="outline">Check</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="overview" className="mb-12">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="specs">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="qa">Q&A</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="prose max-w-none">
              <h3 className="font-heading font-bold text-xl mb-3">Product Description</h3>
              <p className="text-muted-foreground mb-4">
                The SG Professional Cricket Bat is crafted from premium English Willow, offering exceptional
                performance and durability. Designed for serious cricketers, this bat provides perfect balance
                and pickup, making it ideal for all types of shots.
              </p>
              <h4 className="font-semibold mb-2">Key Features:</h4>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Premium English Willow construction</li>
                <li>Perfect balance and weight distribution</li>
                <li>Large sweet spot for powerful hitting</li>
                <li>Professional grip included</li>
                <li>Lightweight design for better control</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="specs" className="mt-6">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { label: "Material", value: "English Willow" },
                { label: "Weight", value: "1100-1200g" },
                { label: "Size", value: "Short Handle" },
                { label: "Grade", value: "Grade 1" },
                { label: "Brand", value: "SG" },
                { label: "Warranty", value: "1 Year" },
              ].map((spec) => (
                <div key={spec.label} className="flex justify-between p-4 bg-card border rounded-lg">
                  <span className="font-semibold">{spec.label}</span>
                  <span className="text-muted-foreground">{spec.value}</span>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border-b pb-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-sm text-muted-foreground">{review.date}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating ? 'fill-yellow-500 text-yellow-500' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground">{review.comment}</p>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="qa" className="mt-6">
            <p className="text-muted-foreground">No questions yet. Be the first to ask!</p>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-heading font-bold mb-6">You May Also Like</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="bg-card border rounded-lg overflow-hidden athletic-hover"
              >
                <div className="aspect-square bg-muted">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground mb-1">{product.brand}</p>
                  <h3 className="font-semibold mb-2 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    <span className="text-sm">{product.rating}</span>
                  </div>
                  <p className="text-lg font-bold mt-2">₹{product.price.toLocaleString()}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
