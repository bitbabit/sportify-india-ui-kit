import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
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
  CheckCircle,
  Clock,
  Award,
  Zap,
  Users,
  ThumbsUp,
  MessageCircle,
  ChevronRight,
  Package,
  CreditCard,
  Headphones,
  MapPin,
  Calendar,
  Tag,
  TrendingUp,
  Eye,
  Bookmark,
  Download,
  ExternalLink
} from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const product = {
    id: id || 1,
    name: "Professional Cricket Bat - English Willow",
    brand: "SG",
    price: 8999,
    originalPrice: 12999,
    rating: 4.5,
    reviews: 234,
    inStock: true,
    stockCount: 15,
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    discount: 31,
    isNew: true,
    isBestSeller: true,
    isFeatured: true,
    category: "Cricket",
    subcategory: "Bats",
    description: "The SG Professional Cricket Bat is crafted from premium English Willow, offering exceptional performance and durability. Designed for serious cricketers, this bat provides perfect balance and pickup, making it ideal for all types of shots.",
    features: [
      "Premium English Willow construction",
      "Perfect balance and weight distribution", 
      "Large sweet spot for powerful hitting",
      "Professional grip included",
      "Lightweight design for better control",
      "Handcrafted by skilled artisans"
    ],
    specifications: {
      "Material": "English Willow",
      "Weight": "1100-1200g",
      "Size": "Short Handle",
      "Grade": "Grade 1",
      "Brand": "SG",
      "Warranty": "1 Year",
      "Country of Origin": "India",
      "Care Instructions": "Store in dry place, avoid extreme temperatures"
    },
    shipping: {
      freeDelivery: true,
      estimatedDelivery: "2-3 business days",
      returnPolicy: "7 days easy return",
      warranty: "1 year manufacturer warranty"
    },
    ratingBreakdown: {
      5: 180,
      4: 45,
      3: 7,
      2: 2,
      1: 0
    }
  };

  const reviews = [
    { 
      id: 1, 
      name: "Rahul Sharma", 
      rating: 5, 
      date: "2 weeks ago", 
      verified: true,
      comment: "Excellent bat! Perfect balance and pickup. Great for all types of shots. The willow quality is premium and the bat feels solid in hand.",
      helpful: 12,
      images: ["/placeholder.svg"]
    },
    { 
      id: 2, 
      name: "Priya Singh", 
      rating: 4, 
      date: "1 month ago", 
      verified: true,
      comment: "Good quality bat. The willow quality is premium. Slightly heavy but great for power hitting. Would recommend for serious players.",
      helpful: 8,
      images: []
    },
    { 
      id: 3, 
      name: "Vikram Patel", 
      rating: 5, 
      date: "2 months ago", 
      verified: false,
      comment: "Best purchase ever! Used it in 5 matches already. Superb performance. The sweet spot is huge and the bat feels amazing.",
      helpful: 15,
      images: []
    },
  ];

  const relatedProducts = Array.from({ length: 4 }, (_, i) => ({
    id: i + 2,
    name: `Cricket Equipment ${i + 1}`,
    brand: "SG",
    price: Math.floor(Math.random() * 5000) + 1000,
    originalPrice: Math.floor(Math.random() * 7000) + 2000,
    image: "/placeholder.svg",
    rating: (Math.random() * 2 + 3).toFixed(1),
    discount: Math.floor(Math.random() * 30) + 10,
    inStock: Math.random() > 0.1,
  }));

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const colors = [
    { name: "Black", value: "black", class: "bg-black" },
    { name: "White", value: "white", class: "bg-white border" },
    { name: "Red", value: "red", class: "bg-red-500" },
    { name: "Blue", value: "blue", class: "bg-blue-500" },
  ];

  const totalReviews = Object.values(product.ratingBreakdown).reduce((sum, count) => sum + count, 0);
  const averageRating = (Object.entries(product.ratingBreakdown).reduce((sum, [rating, count]) => sum + (parseInt(rating) * count), 0) / totalReviews).toFixed(1);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-6 animate-fade-in">
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
          <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">Products</Link>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
          <Link to="/products?category=cricket" className="text-muted-foreground hover:text-primary transition-colors">Cricket</Link>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
          <span className="text-foreground font-medium">Bats</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <div className="animate-slide-in-left">
            <div className="aspect-square bg-muted rounded-2xl overflow-hidden mb-6 shadow-lg">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all hover:scale-105 ${
                    selectedImage === index ? 'border-primary shadow-md' : 'border-transparent hover:border-muted-foreground'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="animate-slide-in-right space-y-6">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="secondary" className="text-xs">{product.brand}</Badge>
                  {product.isNew && <Badge className="bg-green-500 text-white text-xs">NEW</Badge>}
                  {product.isBestSeller && <Badge className="bg-orange-500 text-white text-xs">BESTSELLER</Badge>}
                  {product.isFeatured && <Badge className="bg-purple-500 text-white text-xs">FEATURED</Badge>}
                </div>
                <h1 className="text-3xl lg:text-4xl font-black text-foreground mb-3 leading-tight">
                  {product.name}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={isWishlisted ? 'bg-destructive text-destructive-foreground' : ''}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Rating & Reviews */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  <span className="text-xl font-bold">{averageRating}</span>
                </div>
                <span className="text-muted-foreground">({product.reviews} reviews)</span>
              </div>
              <Separator orientation="vertical" className="h-6" />
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium">Verified Purchase</span>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-4xl font-black text-foreground">₹{product.price.toLocaleString()}</span>
              <span className="text-xl text-muted-foreground line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
              <Badge className="bg-destructive text-destructive-foreground text-sm px-3 py-1">
                {product.discount}% OFF
              </Badge>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
                <span className="font-medium">
                  {product.inStock ? `In Stock (${product.stockCount} available)` : 'Out of Stock'}
                </span>
              </div>
              {product.inStock && product.stockCount < 5 && (
                <Badge variant="destructive" className="text-xs">Only {product.stockCount} left!</Badge>
              )}
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-semibold mb-3">Size</h3>
              <div className="flex gap-2 flex-wrap">
                {sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedSize(size)}
                    className="min-w-[50px]"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="font-semibold mb-3">Color</h3>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setSelectedColor(color.value)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      selectedColor === color.value ? 'border-primary scale-110' : 'border-muted-foreground hover:scale-105'
                    } ${color.class}`}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-semibold mb-3">Quantity</h3>
              <div className="flex items-center gap-3 border rounded-lg p-2 w-fit">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="h-8 w-8"
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  className="h-8 w-8"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button 
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg h-14 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                disabled={!product.inStock}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 h-14 rounded-xl border-2"
              >
                <Heart className="w-5 h-5 mr-2" />
                Wishlist
              </Button>
            </div>

            {/* Shipping Info */}
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Truck className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-medium">Free delivery on orders above ₹999</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className="text-sm">Estimated delivery: {product.shipping.estimatedDelivery}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <RotateCcw className="w-5 h-5 text-purple-600" />
                    <span className="text-sm">{product.shipping.returnPolicy}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-orange-600" />
                    <span className="text-sm">{product.shipping.warranty}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Check Delivery */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Check Delivery
                </h3>
                <div className="flex gap-2">
                  <Input placeholder="Enter pincode" className="flex-1" />
                  <Button variant="outline">Check</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-16">
          <TabsList className="grid w-full grid-cols-5 max-w-3xl mb-8">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="specs" className="flex items-center gap-2">
              <Package className="w-4 h-4" />
              Specifications
            </TabsTrigger>
            <TabsTrigger value="reviews" className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              Reviews ({product.reviews})
            </TabsTrigger>
            <TabsTrigger value="shipping" className="flex items-center gap-2">
              <Truck className="w-4 h-4" />
              Shipping
            </TabsTrigger>
            <TabsTrigger value="qa" className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Q&A
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Product Description
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
                <div>
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specs" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Technical Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between p-4 bg-muted/50 rounded-lg">
                      <span className="font-semibold">{key}</span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-8">
            {/* Rating Summary */}
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-5xl font-black text-foreground mb-2">{averageRating}</div>
                    <div className="flex items-center justify-center gap-1 mb-2">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(parseFloat(averageRating))
                              ? 'fill-yellow-500 text-yellow-500'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground">Based on {product.reviews} reviews</p>
                  </div>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => {
                      const count = product.ratingBreakdown[rating] || 0;
                      const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
                      return (
                        <div key={rating} className="flex items-center gap-3">
                          <span className="text-sm font-medium w-8">{rating}★</span>
                          <Progress value={percentage} className="flex-1 h-2" />
                          <span className="text-sm text-muted-foreground w-8">{count}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Individual Reviews */}
            <div className="space-y-6">
              {reviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="font-semibold text-primary">
                            {review.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-semibold">{review.name}</p>
                            {review.verified && (
                              <Badge variant="secondary" className="text-xs">
                                <CheckCircle className="w-3 h-3 mr-1" />
                                Verified
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{review.date}</p>
                        </div>
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
                    <p className="text-muted-foreground mb-4 leading-relaxed">{review.comment}</p>
                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="sm" className="text-muted-foreground">
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        Helpful ({review.helpful})
                      </Button>
                      <Button variant="ghost" size="sm" className="text-muted-foreground">
                        Reply
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="shipping" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="w-5 h-5" />
                    Delivery Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Free delivery on orders above ₹999</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-blue-500" />
                    <span>Estimated delivery: {product.shipping.estimatedDelivery}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-purple-500" />
                    <span>Delivery to most locations in India</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <RotateCcw className="w-5 h-5" />
                    Return Policy
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>{product.shipping.returnPolicy}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-orange-500" />
                    <span>{product.shipping.warranty}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-blue-500" />
                    <span>Easy refund process</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="qa" className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <div className="text-center py-12">
                  <MessageCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No questions yet</h3>
                  <p className="text-muted-foreground mb-6">
                    Be the first to ask a question about this product.
                  </p>
                  <Button>Ask a Question</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl lg:text-3xl font-black text-foreground">You May Also Like</h2>
            <Link to="/products?category=cricket">
              <Button variant="outline" className="flex items-center gap-2">
                View All
                <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group"
              >
                <Card className="athletic-hover hover:shadow-xl transition-all duration-300">
                  <div className="aspect-square overflow-hidden rounded-t-lg">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                    {product.discount > 0 && (
                      <Badge className="absolute top-3 left-3 bg-destructive text-destructive-foreground">
                        {product.discount}% OFF
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground mb-1">{product.brand}</p>
                    <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      <span className="text-sm">{product.rating}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold">₹{product.price.toLocaleString()}</span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-muted-foreground line-through">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
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