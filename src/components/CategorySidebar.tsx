import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";

const CategorySidebar = () => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [expandedSubcategories, setExpandedSubcategories] = useState<string[]>([]);

  const categoryTree = {
    Sports: {
      Cricket: {
        "Cricket Bats": ["Professional Bats", "Junior Bats", "Training Bats", "English Willow", "Kashmir Willow"],
        "Cricket Balls": ["Leather Balls", "Tennis Balls", "Practice Balls", "Red Balls", "White Balls"],
        "Cricket Gear": ["Pads", "Gloves", "Helmets", "Thigh Guards", "Abdominal Guards", "Chest Guards"],
        "Cricket Accessories": ["Bat Grips", "Bat Covers", "Stumps", "Bails", "Sight Screens"]
      },
      Football: {
        "Football Boots": ["Professional Boots", "Training Boots", "Indoor Boots", "Turf Boots", "Futsal Boots"],
        "Football Accessories": ["Shin Guards", "Socks", "Jerseys", "Shorts", "Goalkeeper Gloves"],
        "Football Equipment": ["Goal Posts", "Cones", "Training Equipment", "Agility Ladders", "Speed Ladders"],
        "Football Balls": ["Match Balls", "Training Balls", "Futsal Balls", "Indoor Balls"]
      },
      Tennis: {
        "Tennis Rackets": ["Professional Rackets", "Beginner Rackets", "Junior Rackets", "Graphite Rackets", "Aluminum Rackets"],
        "Tennis Balls": ["Professional Balls", "Practice Balls", "Pressureless Balls", "Championship Balls"],
        "Tennis Accessories": ["Grips", "Strings", "Overgrips", "Dampeners", "Vibration Dampeners"],
        "Tennis Apparel": ["Tennis Shirts", "Tennis Shorts", "Tennis Skirts", "Tennis Dresses"]
      },
      Badminton: {
        "Badminton Rackets": ["Professional Rackets", "Beginner Rackets", "Junior Rackets", "Carbon Rackets", "Aluminum Rackets"],
        "Shuttlecocks": ["Feather Shuttlecocks", "Synthetic Shuttlecocks", "Training Shuttlecocks", "Championship Shuttlecocks"],
        "Badminton Accessories": ["Grips", "Strings", "Shoes", "Racket Covers", "Shuttlecock Tubes"],
        "Badminton Apparel": ["Badminton Shirts", "Badminton Shorts", "Badminton Skirts"]
      },
      Basketball: {
        "Basketball Shoes": ["High-Top", "Low-Top", "Mid-Top", "Professional Shoes", "Training Shoes"],
        "Basketballs": ["Indoor Balls", "Outdoor Balls", "Training Balls", "Professional Balls", "Youth Balls"],
        "Basketball Accessories": ["Jerseys", "Shorts", "Knee Pads", "Ankle Braces", "Compression Gear"],
        "Basketball Equipment": ["Hoops", "Backboards", "Training Aids", "Rebounders"]
      },
      "Table Tennis": {
        "Ping Pong Paddles": ["Professional Paddles", "Beginner Paddles", "Training Paddles", "Competition Paddles"],
        "Table Tennis Balls": ["3-Star Balls", "2-Star Balls", "Training Balls", "Practice Balls"],
        "Table Tennis Tables": ["Indoor Tables", "Outdoor Tables", "Foldable Tables", "Competition Tables"],
        "Table Tennis Accessories": ["Nets", "Posts", "Paddle Cases", "Ball Cases"]
      }
    },
    Equipment: {
      "Gym Equipment": ["Weights", "Mats", "Resistance Bands", "Dumbbells", "Barbells", "Kettlebells"],
      "Training Equipment": ["Agility Ladders", "Cones", "Stopwatches", "Speed Chutes", "Plyometric Boxes"],
      "Protective Gear": ["Mouth Guards", "Knee Pads", "Elbow Pads", "Wrist Guards", "Ankle Braces"],
      "Fitness Accessories": ["Water Bottles", "Towels", "Gym Bags", "Heart Rate Monitors", "Fitness Trackers"]
    },
    Clothing: {
      "Sports Apparel": ["Jerseys", "Shorts", "Tracksuits", "Compression Wear", "Base Layers"],
      "Activewear": ["T-Shirts", "Tank Tops", "Leggings", "Sports Bras", "Athletic Shorts"],
      "Outdoor Clothing": ["Jackets", "Hoodies", "Rain Gear", "Windbreakers", "Thermal Wear"],
      "Team Uniforms": ["Cricket Uniforms", "Football Kits", "Basketball Uniforms", "Tennis Outfits"]
    },
    Footwear: {
      "Running Shoes": ["Road Running", "Trail Running", "Racing Shoes", "Marathon Shoes", "Sprint Shoes"],
      "Sports Shoes": ["Basketball", "Football", "Tennis", "Badminton", "Table Tennis"],
      "Casual Sports": ["Lifestyle", "Training", "Walking", "Cross Training", "Athletic Casual"],
      "Specialized Footwear": ["Cricket Shoes", "Golf Shoes", "Cycling Shoes", "Weightlifting Shoes"]
    },
    Brands: {
      "Premium Brands": ["Nike", "Adidas", "Puma", "Under Armour", "Reebok", "New Balance"],
      "Cricket Brands": ["SG", "Kookaburra", "Gray Nicolls", "MRF", "SS", "New Balance"],
      "Indian Brands": ["Yonex", "Cosco", "Nivia", "Spartan", "Vector X", "Baseline"],
      "International Brands": ["Wilson", "Head", "Babolat", "Dunlop", "Prince", "Volkl"]
    }
  };

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleSubcategory = (subcategory: string) => {
    setExpandedSubcategories(prev => 
      prev.includes(subcategory) 
        ? prev.filter(c => c !== subcategory)
        : [...prev, subcategory]
    );
  };

  return (
    <div className="bg-card border rounded-lg p-4 shadow-sm">
      <h3 className="text-lg font-bold text-foreground mb-4">Categories</h3>
      
      <div className="space-y-2">
        {Object.entries(categoryTree).map(([mainCategory, subcategories]) => (
          <div key={mainCategory} className="space-y-1">
            <button
              onClick={() => toggleCategory(mainCategory)}
              className="w-full flex items-center justify-between p-2 text-left hover:bg-accent/10 rounded-lg transition-colors"
            >
              <span className="font-semibold text-foreground">{mainCategory}</span>
              <ChevronDown 
                className={`w-4 h-4 transition-transform ${
                  expandedCategories.includes(mainCategory) ? 'rotate-180' : ''
                }`} 
              />
            </button>
            
            {expandedCategories.includes(mainCategory) && (
              <div className="ml-4 space-y-1">
                {Object.entries(subcategories).map(([subcategory, items]) => (
                  <div key={subcategory} className="space-y-1">
                    <button
                      onClick={() => toggleSubcategory(subcategory)}
                      className="w-full flex items-center justify-between p-2 text-left hover:bg-accent/5 rounded transition-colors"
                    >
                      <span className="text-sm text-muted-foreground">{subcategory}</span>
                      {Array.isArray(items) && items.length > 0 && (
                        <ChevronRight 
                          className={`w-3 h-3 transition-transform ${
                            expandedSubcategories.includes(subcategory) ? 'rotate-90' : ''
                          }`} 
                        />
                      )}
                    </button>
                    
                    {expandedSubcategories.includes(subcategory) && Array.isArray(items) && (
                      <div className="ml-4 space-y-1">
                        {items.map((item) => (
                          <Link
                            key={item}
                            to={`/products?category=${item.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block p-1 text-xs text-muted-foreground hover:text-primary transition-colors rounded"
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-border">
        <Link 
          to="/products"
          className="text-sm font-semibold text-primary hover:text-accent transition-colors flex items-center gap-2"
        >
          View All Products →
        </Link>
      </div>
    </div>
  );
};

export default CategorySidebar;
