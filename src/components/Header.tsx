import { ShoppingCart, Heart, User, Search, Menu, MapPin, Truck, CreditCard, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const categoryTree = {
    Sports: {
      Cricket: {
        "Cricket Bats": ["Professional Bats", "Junior Bats", "Training Bats", "English Willow", "Kashmir Willow"],
        "Cricket Balls": ["Leather Balls", "Tennis Balls", "Practice Balls", "Wind Balls", "Season Balls"],
        "Cricket Gear": ["Pads", "Gloves", "Helmets", "Thigh Guards", "Arm Guards", "Chest Guards"],
        "Cricket Accessories": ["Kit Bags", "Grips", "Shoe Spikes", "Stumps", "Scoreboards"]
      },
      Football: {
        "Football Boots": ["Professional Boots", "Training Boots", "Indoor Boots", "Turf Shoes", "Kids Boots"],
        "Football Accessories": ["Shin Guards", "Socks", "Jerseys", "Goalkeeper Gloves", "Captain Bands"],
        "Football Equipment": ["Goal Posts", "Cones", "Training Equipment", "Agility Poles", "Footballs"],
        "Goalkeeper Gear": ["Gloves", "Jerseys", "Pants", "Training Vests"]
      },
      Tennis: {
        "Tennis Rackets": ["Professional Rackets", "Beginner Rackets", "Junior Rackets", "Power Rackets", "Control Rackets"],
        "Tennis Balls": ["Professional Balls", "Practice Balls", "Pressureless Balls", "Training Balls"],
        "Tennis Accessories": ["Grips", "Strings", "Overgrips", "Dampeners", "Bags"],
        "Tennis Apparel": ["Shorts", "Skirts", "Shirts", "Shoes", "Visors"]
      },
      Badminton: {
        "Badminton Rackets": ["Professional Rackets", "Beginner Rackets", "Junior Rackets", "Attack Rackets", "Defense Rackets"],
        "Shuttlecocks": ["Feather Shuttlecocks", "Synthetic Shuttlecocks", "Tournament Grade", "Practice Grade"],
        "Badminton Accessories": ["Grips", "Strings", "Shoes", "Bags", "Nets"],
        "Court Equipment": ["Posts", "Nets", "Floor Mats", "Score Boards"]
      },
      Basketball: {
        "Basketball Shoes": ["High-Top", "Low-Top", "Mid-Top", "Performance", "Lifestyle"],
        "Basketballs": ["Indoor Balls", "Outdoor Balls", "Training Balls", "Youth Balls", "Mini Balls"],
        "Basketball Accessories": ["Jerseys", "Shorts", "Knee Pads", "Elbow Sleeves", "Headbands"],
        "Basketball Equipment": ["Hoops", "Backboards", "Nets", "Ball Pumps", "Training Cones"]
      },
      Volleyball: {
        "Volleyballs": ["Indoor Balls", "Beach Balls", "Training Balls", "Youth Balls"],
        "Volleyball Gear": ["Knee Pads", "Shoes", "Jerseys", "Shorts", "Ankle Braces"],
        "Volleyball Equipment": ["Nets", "Posts", "Antennas", "Ball Carts", "Training Equipment"]
      },
      Swimming: {
        "Swimwear": ["Competition Suits", "Training Suits", "Jammers", "Board Shorts", "Caps"],
        "Swimming Accessories": ["Goggles", "Fins", "Paddles", "Kickboards", "Pull Buoys"],
        "Swimming Equipment": ["Training Equipment", "Pool Accessories", "Bags", "Towels"]
      },
      Boxing: {
        "Boxing Gloves": ["Training Gloves", "Sparring Gloves", "Competition Gloves", "Bag Gloves"],
        "Boxing Equipment": ["Punching Bags", "Speed Bags", "Focus Mitts", "Hand Wraps", "Mouthguards"],
        "Boxing Apparel": ["Shorts", "Shoes", "Robes", "Headgear"]
      },
      Hockey: {
        "Hockey Sticks": ["Field Hockey", "Ice Hockey", "Indoor Hockey", "Junior Sticks"],
        "Hockey Equipment": ["Balls", "Pucks", "Shin Guards", "Gloves", "Helmets"],
        "Hockey Accessories": ["Bags", "Stick Tape", "Grips", "Protective Gear"]
      }
    },
    Equipment: {
      "Gym Equipment": {
        "Weights": ["Dumbbells", "Barbells", "Kettlebells", "Weight Plates", "Weight Sets", "Adjustable Weights"],
        "Mats": ["Yoga Mats", "Exercise Mats", "Gym Flooring", "Puzzle Mats", "Anti-Fatigue Mats"],
        "Resistance Bands": ["Light Bands", "Medium Bands", "Heavy Bands", "Loop Bands", "Tube Bands", "Mini Bands"],
        "Cardio Equipment": ["Treadmills", "Exercise Bikes", "Ellipticals", "Rowing Machines", "Steppers", "Air Bikes"],
        "Benches & Racks": ["Weight Benches", "Power Racks", "Squat Stands", "Dip Stations", "Pull-up Bars"]
      },
      "Training Equipment": {
        "Agility Equipment": ["Agility Ladders", "Speed Cones", "Hurdles", "Reaction Balls", "Speed Parachutes", "Agility Poles"],
        "Strength Training": ["Pull-up Bars", "Dip Bars", "Suspension Trainers", "Battle Ropes", "Medicine Balls", "Slam Balls"],
        "Recovery Tools": ["Foam Rollers", "Massage Balls", "Stretching Straps", "Massage Guns", "Trigger Point Tools"],
        "Functional Training": ["Sandbags", "Bulgarian Bags", "Plyo Boxes", "Balance Boards", "Core Sliders"]
      },
      "Protective Gear": {
        "Mouth Guards": ["Boxing Mouth Guards", "Rugby Mouth Guards", "Custom Mouth Guards", "Multi-Sport Guards"],
        "Knee Pads": ["Volleyball Knee Pads", "Basketball Knee Pads", "Cycling Knee Pads", "Wrestling Knee Pads"],
        "Elbow Pads": ["Skateboarding Elbow Pads", "Cycling Elbow Pads", "Volleyball Elbow Pads"],
        "Wrist Guards": ["Skateboarding Wrist Guards", "Weightlifting Wrist Guards", "Snowboarding Wrist Guards"],
        "Ankle Support": ["Ankle Braces", "Ankle Wraps", "Compression Sleeves", "Ankle Guards"]
      },
      "Fitness Accessories": {
        "Water Bottles": ["Sports Bottles", "Insulated Bottles", "Hydration Packs", "Shaker Bottles", "Gallon Bottles"],
        "Towels": ["Gym Towels", "Microfiber Towels", "Yoga Towels", "Cooling Towels", "Sweat Towels"],
        "Gym Bags": ["Duffle Bags", "Backpacks", "Equipment Bags", "Shoe Bags", "Kit Bags"],
        "Heart Rate Monitors": ["Chest Straps", "Wrist Monitors", "Smart Watches", "Fitness Trackers"],
        "Training Aids": ["Jump Ropes", "Gloves", "Straps", "Grips", "Chalk", "Timers"]
      },
      "Yoga & Pilates": {
        "Yoga Mats": ["Standard Mats", "Extra Thick Mats", "Travel Mats", "Eco-Friendly Mats"],
        "Yoga Props": ["Blocks", "Straps", "Bolsters", "Blankets", "Wheels"],
        "Pilates Equipment": ["Reformers", "Rings", "Balls", "Bands", "Mats"]
      }
    },
    Clothing: {
      "Sports Apparel": {
        "Jerseys": ["Cricket Jerseys", "Football Jerseys", "Basketball Jerseys"],
        "Shorts": ["Running Shorts", "Basketball Shorts", "Training Shorts"],
        "Tracksuits": ["Full Tracksuits", "Track Pants", "Track Jackets"],
        "Compression Wear": ["Compression Shirts", "Compression Shorts", "Compression Tights"]
      },
      "Activewear": {
        "T-Shirts": ["Cotton T-Shirts", "Moisture-Wicking T-Shirts", "Tank Tops"],
        "Leggings": ["Yoga Leggings", "Running Leggings", "Training Leggings"],
        "Sports Bras": ["Low Impact", "Medium Impact", "High Impact"],
        "Hoodies": ["Pullover Hoodies", "Zip-up Hoodies", "Fleece Hoodies"]
      },
      "Outdoor Clothing": {
        "Jackets": ["Rain Jackets", "Windbreakers", "Insulated Jackets"],
        "Hoodies": ["Fleece Hoodies", "Cotton Hoodies", "Performance Hoodies"],
        "Rain Gear": ["Rain Coats", "Rain Pants", "Waterproof Jackets"],
        "Windbreakers": ["Light Windbreakers", "Heavy Windbreakers", "Packable Windbreakers"]
      },
      "Team Uniforms": {
        "Cricket Uniforms": ["Professional Kits", "Club Kits", "School Kits"],
        "Football Kits": ["Home Kits", "Away Kits", "Training Kits"],
        "Basketball Uniforms": ["Jerseys", "Shorts", "Complete Sets"]
      }
    },
    Footwear: {
      "Running Shoes": {
        "Road Running": ["Cushioned Shoes", "Minimalist Shoes", "Stability Shoes"],
        "Trail Running": ["Trail Runners", "Hiking Shoes", "All-Terrain Shoes"],
        "Racing Shoes": ["Marathon Shoes", "Sprint Shoes", "Track Shoes"],
        "Marathon Shoes": ["Long Distance", "Ultra Marathon", "Recovery Shoes"]
      },
      "Sports Shoes": {
        "Basketball": ["High-Top Basketball", "Low-Top Basketball", "Mid-Top Basketball"],
        "Football": ["Firm Ground", "Soft Ground", "Artificial Ground"],
        "Tennis": ["Clay Court", "Hard Court", "Grass Court"],
        "Badminton": ["Indoor Court", "Outdoor Court", "Training Shoes"]
      },
      "Casual Sports": {
        "Lifestyle": ["Athletic Lifestyle", "Street Style", "Retro Style"],
        "Training": ["Cross Training", "Weight Training", "Functional Training"],
        "Walking": ["Comfort Walking", "Performance Walking", "Orthopedic Walking"],
        "Cross Training": ["Versatile Training", "HIIT Training", "Circuit Training"]
      },
      "Specialized Footwear": {
        "Cricket Shoes": ["Spiked Shoes", "Rubber Sole", "Indoor Cricket"],
        "Golf Shoes": ["Spiked Golf", "Spikeless Golf", "Waterproof Golf"],
        "Cycling Shoes": ["Road Cycling", "Mountain Biking", "Indoor Cycling"]
      }
    },
    Brands: {
      "Premium Brands": {
        "Nike": ["Air Max", "Air Force", "Jordan", "React"],
        "Adidas": ["Ultraboost", "Stan Smith", "NMD", "Yeezy"],
        "Puma": ["Suede", "Clyde", "RS-X", "Thunder"],
        "Under Armour": ["Curry", "HOVR", "Charged", "Micro G"],
        "Reebok": ["Classic", "Nano", "CrossFit", "Zig"]
      },
      "Cricket Brands": {
        "SG": ["Cricket Bats", "Cricket Balls", "Cricket Gear"],
        "Kookaburra": ["Professional Bats", "Cricket Balls", "Cricket Equipment"],
        "Gray Nicolls": ["Cricket Bats", "Cricket Gear", "Cricket Accessories"],
        "MRF": ["Cricket Bats", "Cricket Balls", "Cricket Equipment"],
        "SS": ["Cricket Bats", "Cricket Balls", "Cricket Gear"]
      },
      "Indian Brands": {
        "Yonex": ["Badminton Rackets", "Tennis Rackets", "Badminton Accessories"],
        "Cosco": ["Sports Equipment", "Training Equipment", "Fitness Accessories"],
        "Nivia": ["Cricket Balls", "Football Balls", "Sports Equipment"],
        "Spartan": ["Cricket Bats", "Cricket Balls", "Cricket Gear"],
        "Vector X": ["Cricket Bats", "Cricket Balls", "Cricket Equipment"]
      },
      "International Brands": {
        "Wilson": ["Tennis Rackets", "Tennis Balls", "Tennis Accessories"],
        "Head": ["Tennis Rackets", "Tennis Balls", "Tennis Gear"],
        "Babolat": ["Tennis Rackets", "Tennis Strings", "Tennis Accessories"],
        "Dunlop": ["Tennis Rackets", "Tennis Balls", "Tennis Equipment"],
        "Prince": ["Tennis Rackets", "Tennis Balls", "Tennis Gear"]
      }
    },
    Accessories: {
      "Sports Accessories": {
        "Bags & Backpacks": ["Sports Bags", "Gym Bags", "Backpacks", "Duffle Bags", "Equipment Bags"],
        "Watches & Trackers": ["Sports Watches", "Fitness Trackers", "Smart Watches", "Heart Rate Monitors"],
        "Sunglasses": ["Sports Sunglasses", "Running Sunglasses", "Cycling Glasses", "Polarized Glasses"],
        "Headwear": ["Caps", "Headbands", "Bandanas", "Beanies", "Visors"]
      },
      "Tech & Gadgets": {
        "Fitness Tech": ["Smart Bands", "GPS Watches", "Activity Trackers", "Step Counters"],
        "Audio Gear": ["Sports Earphones", "Wireless Headphones", "Bluetooth Speakers"],
        "Cameras": ["Action Cameras", "Sports Cameras", "Mounts & Accessories"]
      },
      "Health & Nutrition": {
        "Supplements": ["Protein Powders", "Pre-Workout", "BCAAs", "Vitamins", "Energy Bars"],
        "Bottles & Shakers": ["Protein Shakers", "Water Bottles", "Infuser Bottles", "Hydration Packs"],
        "Recovery": ["Ice Packs", "Heat Packs", "Compression Gear", "Massage Tools"]
      },
      "Personal Care": {
        "Hygiene": ["Sports Towels", "Shower Gels", "Deodorants", "Wipes"],
        "Protection": ["Sunscreen", "Lip Balm", "Hand Sanitizers", "First Aid Kits"],
        "Grooming": ["Hair Bands", "Headbands", "Sweatbands", "Face Masks"]
      }
    },
    Kids: {
      "Kids Sports": {
        "Cricket for Kids": ["Junior Bats", "Kids Balls", "Youth Gear", "Training Equipment"],
        "Football for Kids": ["Youth Boots", "Training Balls", "Kids Jerseys", "Shin Guards"],
        "Basketball for Kids": ["Youth Balls", "Mini Hoops", "Kids Shoes", "Training Gear"],
        "Tennis for Kids": ["Junior Rackets", "Training Balls", "Kids Shoes", "Youth Accessories"]
      },
      "Kids Footwear": {
        "Running Shoes": ["Youth Running", "Training Shoes", "Casual Sports"],
        "Sports Shoes": ["Football Boots", "Basketball Shoes", "Tennis Shoes"],
        "Casual Shoes": ["Lifestyle", "School Sports", "Multi-Purpose"]
      },
      "Kids Clothing": {
        "Activewear": ["T-Shirts", "Shorts", "Track Pants", "Hoodies"],
        "Team Jerseys": ["Cricket", "Football", "Basketball", "School Uniforms"],
        "Accessories": ["Caps", "Socks", "Bags", "Water Bottles"]
      },
      "Kids Equipment": {
        "Training Gear": ["Cones", "Markers", "Agility Equipment", "Practice Balls"],
        "Protective Gear": ["Knee Pads", "Elbow Pads", "Helmets", "Guards"],
        "Fun & Games": ["Play Equipment", "Outdoor Toys", "Activity Sets"]
      }
    },
    "Sale & Deals": {
      "Clearance Sale": {
        "Sports Equipment": ["Discounted Bats", "Sale Balls", "Clearance Gear"],
        "Footwear Sale": ["Shoes Under 2000", "Clearance Boots", "Sale Sneakers"],
        "Clothing Sale": ["Discounted Apparel", "Clearance Jerseys", "Sale Activewear"],
        "Accessories Sale": ["Bags on Sale", "Discounted Gear", "Clearance Items"]
      },
      "Special Offers": {
        "Buy 1 Get 1": ["BOGO Deals", "Combo Offers", "Bundle Packs"],
        "Flat Discounts": ["Upto 50% Off", "Extra 25% Off", "Mega Savings"],
        "Limited Time": ["Flash Sale", "Today's Deals", "Hot Offers"],
        "Seasonal Sale": ["Winter Sale", "Summer Sale", "Festival Offers"]
      },
      "Outlet": {
        "Last Season": ["Previous Collection", "Outlet Store", "End of Season"],
        "Refurbished": ["Open Box", "Display Items", "Factory Seconds"],
        "Bulk Orders": ["Team Orders", "School Orders", "Corporate Gifts"]
      }
    }
  };

  const navItems = [
    { name: "Sports", hasDropdown: true, categories: categoryTree.Sports },
    { name: "Equipment", hasDropdown: true, categories: categoryTree.Equipment },
    { name: "Clothing", hasDropdown: true, categories: categoryTree.Clothing },
    { name: "Footwear", hasDropdown: true, categories: categoryTree.Footwear },
    { name: "Accessories", hasDropdown: true, categories: categoryTree.Accessories },
    { name: "Brands", hasDropdown: true, categories: categoryTree.Brands },
    { name: "Kids", hasDropdown: true, categories: categoryTree.Kids },
    // { name: "Sale & Deals", hasDropdown: true, categories: categoryTree["Sale & Deals"] },
    { name: "Offers", hasDropdown: false }
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      {showAnnouncement && (
        <div className="bg-primary text-primary-foreground py-2 relative">
          <div className="container mx-auto px-4">
            {/* Mobile Layout */}
            <div className="lg:hidden">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm">🏆 25% OFF SPORTS GEAR</span>
                  <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs font-bold">SAVE25</span>
                </div>
                <button
                  onClick={() => setShowAnnouncement(false)}
                  className="hover:bg-primary-foreground/20 p-1 rounded"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1">
                  <Truck className="w-3 h-3" />
                  <span className="hidden xs:inline">Free Delivery Above ₹999</span>
                  <span className="xs:hidden">Free Delivery</span>
                </div>
                <div className="flex items-center gap-1">
                  <CreditCard className="w-3 h-3" />
                  <span>Easy Returns</span>
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="w-3 h-3" />
                  <span className="hidden xs:inline">24/7 Support</span>
                  <span className="xs:hidden">Support</span>
                </div>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:flex items-center justify-between text-sm">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="font-bold">🏆 25% OFF SPORTS GEAR</span>
                  <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs font-bold">SAVE25</span>
                </div>
                <div className="flex items-center gap-1">
                  <Truck className="w-4 h-4" />
                  <span>Free Delivery Above ₹999</span>
                </div>
                <div className="flex items-center gap-1">
                  <CreditCard className="w-4 h-4" />
                  <span>Easy Returns</span>
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  <span>24/7 Support</span>
                </div>
              </div>
              <button
                onClick={() => setShowAnnouncement(false)}
                className="hover:bg-primary-foreground/20 p-1 rounded"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-md border-b border-border shadow-lg">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden hover:bg-accent/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
            <Link to="/" className="group">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-primary-foreground font-black text-lg">S</span>
                </div>
                <h1 className="text-2xl lg:text-3xl font-black text-primary tracking-tight cursor-pointer group-hover:text-accent transition-colors duration-300">
                  SPORTIFY<span className="text-secondary group-hover:scale-110 transition-transform duration-300 inline-block">.</span>
              </h1>
              </div>
            </Link>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
              <Input
                type="search"
                placeholder="Search for sports gear, equipment, clothing..."
                className="pl-10 pr-4 h-12 rounded-full border-2 focus:border-ring hover:border-accent transition-all duration-300 shadow-sm hover:shadow-md focus:shadow-lg"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <kbd className="px-2 py-1 text-xs font-semibold text-muted-foreground bg-muted border border-border rounded">⌘K</kbd>
              </div>
            </div>
          </div>

           {/* Right Icons & Info */}
          <div className="flex items-center gap-2 lg:gap-4">
             {/* Store Locator */}
             <div className="hidden lg:flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
               <MapPin className="w-4 h-4" />
               <span>Store Locator</span>
             </div>
             
             {/* Contact Info */}
             <div className="hidden lg:flex items-center gap-1 text-sm text-muted-foreground">
               <Phone className="w-4 h-4" />
               <span>+91 9876543210</span>
             </div>
           </div>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex items-center justify-between pb-4">
          {/* Left Side - Navigation Links */}
          <div className="flex items-center gap-8 flex-1 justify-center">
            {navItems.map((item, index) => (
              <div 
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  to={item.name === "Offers" ? "/offers" : "/products"} 
                  className="text-sm font-semibold uppercase tracking-wide text-foreground hover:text-primary transition-all duration-300 relative py-3 px-4 rounded-lg hover:bg-accent/5 flex items-center gap-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative z-10">{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                  )}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-secondary to-accent group-hover:w-full transition-all duration-300" />
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

              {/* Dropdown Menu */}
              {item.hasDropdown && activeDropdown === item.name && (
                <div className="absolute top-full left-0 pt-2 w-96 z-50">
                  {/* Invisible bridge to prevent gap */}
                  <div className="h-2 -mt-2" />
                  <div className="bg-background border border-border rounded-lg shadow-lg animate-fade-in">
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-6">
                      {Object.entries(item.categories).map(([category, subcategories]) => (
                        <div key={category} className="space-y-3">
                          <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide border-b border-border pb-2">
                            {category}
                          </h4>
                          <ul className="space-y-2">
                            {Object.entries(subcategories).map(([subcategory, items]) => (
                              <li key={subcategory}>
                                <Link 
                                  to={`/products?category=${subcategory.toLowerCase().replace(/\s+/g, '-')}`}
                                  className="text-sm text-muted-foreground hover:text-primary transition-colors block py-1"
                                >
                                  {subcategory}
          </Link>
                                
                                {/* Handle nested structure */}
                                {typeof items === 'object' && !Array.isArray(items) && (
                                  <ul className="ml-4 mt-1 space-y-1">
                                    {Object.entries(items).map(([subSubcategory, subItems]) => (
                                      <li key={`${subcategory}-${subSubcategory}`}>
                                        <Link 
                                          to={`/products?subcategory=${subSubcategory.toLowerCase().replace(/\s+/g, '-')}`}
                                          className="text-xs text-muted-foreground/70 hover:text-accent transition-colors block py-1"
                                        >
                                          {subSubcategory}
          </Link>
                                        {Array.isArray(subItems) && (
                                          <ul className="ml-4 mt-1 space-y-1">
                                            {subItems.map((productName, itemIndex) => (
                                              <li key={`${subSubcategory}-${itemIndex}`}>
                                                <Link 
                                                  to={`/products?product=${productName.toLowerCase().replace(/\s+/g, '-')}`}
                                                  className="text-xs text-muted-foreground/50 hover:text-accent transition-colors block py-0.5"
                                                >
                                                  {productName}
          </Link>
                                              </li>
                                            ))}
                                          </ul>
                                        )}
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-border">
                      <Link 
                        to={`/products?category=${item.name.toLowerCase()}`}
                        className="text-sm font-semibold text-primary hover:text-accent transition-colors flex items-center gap-2"
                      >
                        View All {item.name} →
          </Link>
                    </div>
                  </div>
                  </div>
                </div>
              )}
              </div>
            ))}
          </div>

          {/* Right Side - Wishlist, Cart, Profile */}
          <div className="flex items-center gap-4">
            {/* Wishlist */}
            <Link to="/profile">
              <Button variant="ghost" size="icon" className="relative hover:bg-accent/10 group h-10 w-10">
                <Heart className="h-5 w-5 group-hover:fill-destructive group-hover:text-destructive transition-all duration-300" />
                <span className="absolute -top-0.5 -right-0.5 h-4 w-4 bg-destructive text-destructive-foreground rounded-full text-[10px] flex items-center justify-center font-bold">
                  3
                </span>
              </Button>
            </Link>
            
            {/* Cart with total */}
            <Link to="/cart" className="flex items-center gap-2 hover:bg-accent/10 px-3 py-2 rounded-lg transition-colors group">
              <div className="relative h-5 w-5">
                <ShoppingCart className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="absolute -top-1.5 -right-1.5 h-4 w-4 bg-secondary text-secondary-foreground rounded-full text-[10px] flex items-center justify-center font-bold">
                  5
                </span>
              </div>
              <div className="text-xs">
                <div className="font-bold">₹2,499</div>
                <div className="text-[10px] text-muted-foreground">5 items</div>
              </div>
            </Link>
            
            {/* User Account */}
            <Link to="/profile">
              <Button variant="ghost" size="icon" className="hover:bg-accent/10 group h-10 w-10">
                <User className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </nav>

        {/* Search Bar - Mobile */}
        <div className="lg:hidden pb-4">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-10 pr-4 h-11 rounded-full border-2 focus:border-ring hover:border-accent transition-all duration-300 shadow-sm hover:shadow-md focus:shadow-lg"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden flex flex-col gap-2 pb-4 animate-fade-in bg-muted/30 rounded-lg p-4">
            {navItems.map((item, index) => (
              <Link 
                key={item.name}
                to={item.name === "Offers" ? "/offers" : "/products"} 
                className="text-left text-sm font-semibold uppercase tracking-wide text-foreground hover:text-primary transition-all duration-300 py-3 px-4 hover:bg-accent/10 rounded-lg group relative flex items-center justify-between"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="relative z-10">{item.name}</span>
                {item.hasDropdown && (
                  <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-secondary to-accent group-hover:h-full transition-all duration-300 rounded-r" />
            </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
    </>
  );
};

export default Header;
