import { ShoppingCart, Heart, User, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["Sports", "Equipment", "Clothing", "Footwear", "Brands", "Offers"];

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border shadow-md">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
            <Link to="/">
              <h1 className="text-2xl lg:text-3xl font-black text-primary tracking-tight cursor-pointer">
                SPORTIFY<span className="text-secondary">.</span>
              </h1>
            </Link>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for sports gear, equipment, clothing..."
                className="pl-10 pr-4 h-12 rounded-full border-2 focus:border-ring"
              />
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-2 lg:gap-4">
            <Link to="/profile">
              <Button variant="ghost" size="icon" className="relative">
                <Heart className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-destructive text-destructive-foreground rounded-full text-xs flex items-center justify-center font-bold">
                  3
                </span>
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-secondary text-secondary-foreground rounded-full text-xs flex items-center justify-center font-bold">
                  5
                </span>
              </Button>
            </Link>
            <Link to="/profile">
              <Button variant="ghost" size="icon">
                <User className="h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex items-center justify-center gap-8 pb-4">
          <Link to="/products" className="text-sm font-semibold uppercase tracking-wide text-foreground hover:text-primary transition-colors relative group">
            Sports
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" />
          </Link>
          <Link to="/products" className="text-sm font-semibold uppercase tracking-wide text-foreground hover:text-primary transition-colors relative group">
            Equipment
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" />
          </Link>
          <Link to="/products" className="text-sm font-semibold uppercase tracking-wide text-foreground hover:text-primary transition-colors relative group">
            Clothing
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" />
          </Link>
          <Link to="/products" className="text-sm font-semibold uppercase tracking-wide text-foreground hover:text-primary transition-colors relative group">
            Footwear
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" />
          </Link>
          <Link to="/products" className="text-sm font-semibold uppercase tracking-wide text-foreground hover:text-primary transition-colors relative group">
            Brands
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" />
          </Link>
          <Link to="/offers" className="text-sm font-semibold uppercase tracking-wide text-foreground hover:text-primary transition-colors relative group">
            Offers
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" />
          </Link>
        </nav>

        {/* Search Bar - Mobile */}
        <div className="lg:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-10 pr-4 h-11 rounded-full border-2"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden flex flex-col gap-4 pb-4 animate-fade-in">
            <Link to="/products" className="text-left text-sm font-semibold uppercase tracking-wide text-foreground hover:text-primary transition-colors py-2 px-4 hover:bg-muted rounded">
              Sports
            </Link>
            <Link to="/products" className="text-left text-sm font-semibold uppercase tracking-wide text-foreground hover:text-primary transition-colors py-2 px-4 hover:bg-muted rounded">
              Equipment
            </Link>
            <Link to="/products" className="text-left text-sm font-semibold uppercase tracking-wide text-foreground hover:text-primary transition-colors py-2 px-4 hover:bg-muted rounded">
              Clothing
            </Link>
            <Link to="/products" className="text-left text-sm font-semibold uppercase tracking-wide text-foreground hover:text-primary transition-colors py-2 px-4 hover:bg-muted rounded">
              Footwear
            </Link>
            <Link to="/products" className="text-left text-sm font-semibold uppercase tracking-wide text-foreground hover:text-primary transition-colors py-2 px-4 hover:bg-muted rounded">
              Brands
            </Link>
            <Link to="/offers" className="text-left text-sm font-semibold uppercase tracking-wide text-foreground hover:text-primary transition-colors py-2 px-4 hover:bg-muted rounded">
              Offers
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
