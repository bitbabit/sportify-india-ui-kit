import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";

const CategoryNavigation = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);

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

  const renderCategoryTree = (categories: any, level = 0) => {
    return Object.entries(categories).map(([category, subcategories]) => (
      <div key={category} className="space-y-2">
        <div 
          className={`flex items-center justify-between p-2 rounded-lg cursor-pointer hover:bg-accent/10 transition-colors ${
            activeCategory === category ? 'bg-accent/20' : ''
          }`}
          onClick={() => setActiveCategory(activeCategory === category ? null : category)}
        >
          <span className={`font-medium ${level === 0 ? 'text-foreground' : 'text-muted-foreground'}`}>
            {category}
          </span>
          {typeof subcategories === 'object' && !Array.isArray(subcategories) && (
            <ChevronRight 
              className={`w-4 h-4 transition-transform ${
                activeCategory === category ? 'rotate-90' : ''
              }`} 
            />
          )}
        </div>
        
        {activeCategory === category && typeof subcategories === 'object' && !Array.isArray(subcategories) && (
          <div className="ml-4 space-y-1">
            {renderCategoryTree(subcategories, level + 1)}
          </div>
        )}
        
        {Array.isArray(subcategories) && activeCategory === category && (
          <div className="ml-4 space-y-1">
            {subcategories.map((item) => (
              <Link
                key={item}
                to={`/products?category=${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="block p-2 text-sm text-muted-foreground hover:text-primary transition-colors rounded hover:bg-accent/5"
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="bg-card border rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-bold text-foreground mb-4">Browse Categories</h3>
      <div className="space-y-1">
        {renderCategoryTree(categoryTree)}
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

export default CategoryNavigation;
