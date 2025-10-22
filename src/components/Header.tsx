import { ShoppingCart, Heart, User, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
            <h1 className="text-2xl lg:text-3xl font-black text-primary tracking-tight">
              SPORTIFY<span className="text-secondary">.</span>
            </h1>
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
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 h-5 w-5 bg-destructive text-destructive-foreground rounded-full text-xs flex items-center justify-center font-bold">
                3
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 h-5 w-5 bg-secondary text-secondary-foreground rounded-full text-xs flex items-center justify-center font-bold">
                5
              </span>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex items-center justify-center gap-8 pb-4">
          {navItems.map((item) => (
            <button
              key={item}
              className="text-sm font-semibold uppercase tracking-wide text-foreground hover:text-primary transition-colors relative group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" />
            </button>
          ))}
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
            {navItems.map((item) => (
              <button
                key={item}
                className="text-left text-sm font-semibold uppercase tracking-wide text-foreground hover:text-primary transition-colors py-2 px-4 hover:bg-muted rounded"
              >
                {item}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
