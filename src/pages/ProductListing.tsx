import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { 
  Heart, 
  ShoppingCart, 
  Star, 
  SlidersHorizontal, 
  Grid3X3, 
  List, 
  Filter,
  X,
  ChevronDown,
  Search,
  SortAsc,
  SortDesc
} from "lucide-react";

const ProductListing = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('popularity');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Get category from URL params
  const category = searchParams.get('category') || 'all';
  const subcategory = searchParams.get('subcategory') || '';
  const product = searchParams.get('product') || '';

  const products = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    name: `Premium Sports Product ${i + 1}`,
    brand: ["Nike", "Adidas", "Puma", "SG", "Yonex", "Wilson", "Head", "Babolat"][i % 8],
    price: Math.floor(Math.random() * 20000) + 2000,
    originalPrice: Math.floor(Math.random() * 25000) + 3000,
    rating: (Math.random() * 2 + 3).toFixed(1),
    reviews: Math.floor(Math.random() * 500) + 50,
    image: "/placeholder.svg",
    discount: Math.floor(Math.random() * 40) + 10,
    inStock: Math.random() > 0.1,
    isNew: Math.random() > 0.7,
    isBestSeller: Math.random() > 0.8,
    category: ["Cricket", "Football", "Running", "Tennis", "Badminton", "Basketball"][i % 6],
    description: "High-quality sports equipment designed for professional athletes and enthusiasts alike.",
  }));

  const brands = ["Nike", "Adidas", "Puma", "SG", "Yonex", "Wilson", "Head", "Babolat"];
  const categories = ["Cricket", "Football", "Running", "Tennis", "Badminton", "Basketball"];
  const ratings = [4, 3, 2, 1];

  // Filter products based on selected filters
  const filteredProducts = products.filter(product => {
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchesRating = selectedRatings.length === 0 || selectedRatings.some(rating => parseFloat(product.rating) >= rating);
    const matchesSearch = searchQuery === '' || product.name.toLowerCase().includes(searchQuery.toLowerCase()) || product.brand.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesPrice && matchesBrand && matchesCategory && matchesRating && matchesSearch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return parseFloat(b.rating) - parseFloat(a.rating);
      case 'newest':
        return b.id - a.id;
      default:
        return 0;
    }
  });

  const handleBrandToggle = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleRatingToggle = (rating: number) => {
    setSelectedRatings(prev => 
      prev.includes(rating) 
        ? prev.filter(r => r !== rating)
        : [...prev, rating]
    );
  };

  const clearAllFilters = () => {
    setSelectedBrands([]);
    setSelectedCategories([]);
    setSelectedRatings([]);
    setPriceRange([0, 50000]);
    setSearchQuery('');
  };

  const activeFiltersCount = selectedBrands.length + selectedCategories.length + selectedRatings.length + (priceRange[0] > 0 || priceRange[1] < 50000 ? 1 : 0);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-6 animate-fade-in">
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
          <span className="text-muted-foreground">/</span>
          <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">Products</Link>
          {category !== 'all' && (
            <>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground font-medium capitalize">{category}</span>
            </>
          )}
        </nav>

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl lg:text-4xl font-black text-foreground uppercase mb-2 animate-slide-in-left">
              {category === 'all' ? 'All Products' : category.charAt(0).toUpperCase() + category.slice(1)} Equipment
            </h1>
            <p className="text-muted-foreground text-lg">
              {filteredProducts.length} products found
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            {/* Search Bar */}
            <div className="relative flex-1 sm:max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'bg-background hover:bg-muted'}`}
              >
                <Grid3X3 className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'bg-background hover:bg-muted'}`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>

            {/* Sort Dropdown */}
            <Select value={sortBy} onValueChange={setSortBy}>
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

            {/* Mobile Filter Button */}
            <Sheet open={showFilters} onOpenChange={setShowFilters}>
              <SheetTrigger asChild>
                <Button variant="outline" className="lg:hidden">
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                  {activeFiltersCount > 0 && (
                    <Badge variant="destructive" className="ml-2 h-5 w-5 flex items-center justify-center text-xs">
                      {activeFiltersCount}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                  <SheetDescription>
                    Refine your search to find exactly what you're looking for.
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6 space-y-6">
                  {/* Mobile Filter Content - Same as Desktop */}
                  <FilterContent
                    brands={brands}
                    categories={categories}
                    ratings={ratings}
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                    selectedBrands={selectedBrands}
                    selectedCategories={selectedCategories}
                    selectedRatings={selectedRatings}
                    handleBrandToggle={handleBrandToggle}
                    handleCategoryToggle={handleCategoryToggle}
                    handleRatingToggle={handleRatingToggle}
                    clearAllFilters={clearAllFilters}
                  />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Active Filters */}
        {activeFiltersCount > 0 && (
          <div className="flex flex-wrap gap-2 mb-6 animate-fade-in">
            <span className="text-sm font-medium text-muted-foreground">Active filters:</span>
            {selectedBrands.map(brand => (
              <Badge key={brand} variant="secondary" className="gap-1">
                {brand}
                <button onClick={() => handleBrandToggle(brand)}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
            {selectedCategories.map(category => (
              <Badge key={category} variant="secondary" className="gap-1">
                {category}
                <button onClick={() => handleCategoryToggle(category)}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
            {selectedRatings.map(rating => (
              <Badge key={rating} variant="secondary" className="gap-1">
                {rating}+ Stars
                <button onClick={() => handleRatingToggle(rating)}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
            {(priceRange[0] > 0 || priceRange[1] < 50000) && (
              <Badge variant="secondary" className="gap-1">
                ₹{priceRange[0]} - ₹{priceRange[1]}
                <button onClick={() => setPriceRange([0, 50000])}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            <Button variant="ghost" size="sm" onClick={clearAllFilters} className="text-destructive">
              Clear All
            </Button>
          </div>
        )}

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Desktop Filters Sidebar */}
          <aside className="hidden lg:block space-y-6 animate-slide-in-left">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-lg">Filters</h3>
                  {activeFiltersCount > 0 && (
                    <Button variant="ghost" size="sm" onClick={clearAllFilters} className="text-destructive">
                      Clear All
                    </Button>
                  )}
                </div>

                <FilterContent
                  brands={brands}
                  categories={categories}
                  ratings={ratings}
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                  selectedBrands={selectedBrands}
                  selectedCategories={selectedCategories}
                  selectedRatings={selectedRatings}
                  handleBrandToggle={handleBrandToggle}
                  handleCategoryToggle={handleCategoryToggle}
                  handleRatingToggle={handleRatingToggle}
                  clearAllFilters={clearAllFilters}
                />
              </CardContent>
            </Card>
          </aside>

          {/* Product Grid/List */}
          <div className="lg:col-span-3">
            {sortedProducts.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-24 h-24 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
                  <Search className="w-12 h-12 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                <p className="text-muted-foreground mb-4">Try adjusting your filters or search terms</p>
                <Button onClick={clearAllFilters}>Clear All Filters</Button>
              </div>
            ) : (
              <div className={viewMode === 'grid' 
                ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-6" 
                : "space-y-4"
              }>
                {sortedProducts.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    viewMode={viewMode}
                    index={index}
                  />
                ))}
              </div>
            )}

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>Previous</Button>
                <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <span className="px-3 py-1 text-sm text-muted-foreground">...</span>
                <Button variant="outline" size="sm">10</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

// Filter Content Component
const FilterContent = ({
  brands,
  categories,
  ratings,
  priceRange,
  setPriceRange,
  selectedBrands,
  selectedCategories,
  selectedRatings,
  handleBrandToggle,
  handleCategoryToggle,
  handleRatingToggle,
  clearAllFilters
}: any) => (
  <div className="space-y-6">
    {/* Categories */}
    <div>
      <h4 className="font-semibold mb-3 flex items-center gap-2">
        Categories
        <ChevronDown className="w-4 h-4" />
      </h4>
      <div className="space-y-2 max-h-48 overflow-y-auto">
        {categories.map((category: string) => (
          <label key={category} className="flex items-center gap-2 cursor-pointer hover:bg-muted/50 p-2 rounded">
            <Checkbox 
              checked={selectedCategories.includes(category)}
              onCheckedChange={() => handleCategoryToggle(category)}
            />
            <span className="text-sm">{category}</span>
          </label>
        ))}
      </div>
    </div>

    {/* Brands */}
    <div>
      <h4 className="font-semibold mb-3 flex items-center gap-2">
        Brands
        <ChevronDown className="w-4 h-4" />
      </h4>
      <div className="space-y-2 max-h-48 overflow-y-auto">
        {brands.map((brand: string) => (
          <label key={brand} className="flex items-center gap-2 cursor-pointer hover:bg-muted/50 p-2 rounded">
            <Checkbox 
              checked={selectedBrands.includes(brand)}
              onCheckedChange={() => handleBrandToggle(brand)}
            />
            <span className="text-sm">{brand}</span>
          </label>
        ))}
      </div>
    </div>

    {/* Price Range */}
    <div>
      <h4 className="font-semibold mb-3">Price Range</h4>
      <Slider
        value={priceRange}
        onValueChange={setPriceRange}
        max={50000}
        step={500}
        className="mb-3"
      />
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>₹{priceRange[0].toLocaleString()}</span>
        <span>₹{priceRange[1].toLocaleString()}</span>
      </div>
    </div>

    {/* Rating */}
    <div>
      <h4 className="font-semibold mb-3 flex items-center gap-2">
        Rating
        <ChevronDown className="w-4 h-4" />
      </h4>
      <div className="space-y-2">
        {ratings.map((rating: number) => (
          <label key={rating} className="flex items-center gap-2 cursor-pointer hover:bg-muted/50 p-2 rounded">
            <Checkbox 
              checked={selectedRatings.includes(rating)}
              onCheckedChange={() => handleRatingToggle(rating)}
            />
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
);

// Product Card Component
const ProductCard = ({ product, viewMode, index }: any) => (
  <Card className={`group athletic-hover animate-fade-in hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 ${
    viewMode === 'list' ? 'flex' : ''
  }`} style={{ animationDelay: `${index * 50}ms` }}>
    <Link to={`/product/${product.id}`} className={viewMode === 'list' ? 'flex w-full' : 'block'}>
      <div className={viewMode === 'list' ? 'w-48 h-48' : 'aspect-square'}>
        <div className="relative w-full h-full overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {product.discount > 0 && (
            <Badge className="absolute top-3 left-3 bg-destructive text-destructive-foreground">
              {product.discount}% OFF
            </Badge>
          )}
          {product.isNew && (
            <Badge className="absolute top-3 right-3 bg-green-500 text-white">
              NEW
            </Badge>
          )}
          {product.isBestSeller && (
            <Badge className="absolute top-12 right-3 bg-orange-500 text-white">
              BESTSELLER
            </Badge>
          )}
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-3 right-3 bg-background/80 backdrop-blur-md hover:bg-background hover:scale-110 transition-all duration-300 shadow-md opacity-0 group-hover:opacity-100"
          >
            <Heart className="h-5 w-5 hover:fill-destructive hover:text-destructive transition-all duration-300" />
          </Button>
        </div>
      </div>

      <div className={viewMode === 'list' ? 'flex-1 p-6' : 'p-4'}>
        <div className="flex items-start justify-between mb-2">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
            {product.brand}
          </p>
          {!product.inStock && (
            <Badge variant="destructive" className="text-xs">Out of Stock</Badge>
          )}
        </div>
        
        <h3 className="font-semibold mb-2 line-clamp-2 hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center gap-1 mb-3">
          <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
          <span className="text-sm font-medium">{product.rating}</span>
          <span className="text-sm text-muted-foreground">({product.reviews})</span>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl font-bold">₹{product.price.toLocaleString()}</span>
          {product.originalPrice > product.price && (
            <span className="text-sm text-muted-foreground line-through">
              ₹{product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        <Button 
          className="w-full athletic-hover" 
          size="sm"
          disabled={!product.inStock}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </Button>
      </div>
    </Link>
  </Card>
);

export default ProductListing;