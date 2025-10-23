import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import cricketGear from "@/assets/cricket-gear.jpg";
import footballGear from "@/assets/football-gear.jpg";
import runningShoes from "@/assets/running-shoes.jpg";
import tennisGear from "@/assets/tennis-gear.jpg";

const categories = [
  {
    title: "Cricket",
    image: cricketGear,
    color: "from-accent/20 to-accent/5",
    link: "/products?category=cricket",
  },
  {
    title: "Football",
    image: footballGear,
    color: "from-secondary/20 to-secondary/5",
    link: "/products?category=football",
  },
  {
    title: "Running",
    image: runningShoes,
    color: "from-ring/20 to-ring/5",
    link: "/products?category=running",
  },
  {
    title: "Tennis",
    image: tennisGear,
    color: "from-destructive/20 to-destructive/5",
    link: "/products?category=tennis",
  },
];

const FeaturedCategories = () => {
  return (
    <section className="py-12 lg:py-20 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-bounce-slow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-accent font-bold text-sm uppercase tracking-widest mb-2 inline-block px-4 py-1 bg-accent/10 rounded-full">
            Popular Sports
          </p>
          <h2 className="text-3xl lg:text-5xl font-black text-foreground uppercase mt-4 mb-4">
            Shop By Sport
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover top-quality equipment for your favorite sports
          </p>
        </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {categories.map((category, index) => (
                <Link
                  key={category.title}
                  to={category.link}
                  className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer athletic-hover animate-zoom-in shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color}`} />

              {/* Image */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-2 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent group-hover:from-primary/95 transition-all duration-300" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6 transform group-hover:translate-y-[-8px] transition-transform duration-300">
                <h3 className="text-2xl lg:text-3xl font-black text-primary-foreground uppercase mb-2 group-hover:text-accent transition-colors duration-300">
                  {category.title}
                </h3>
                <div className="flex items-center text-primary-foreground font-semibold text-sm gap-1 group-hover:gap-3 transition-all duration-300">
                  <span className="group-hover:underline">Shop Now</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-accent/30 via-transparent to-transparent blur-xl" />
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-accent/20 to-transparent" />
              </div>

                  {/* Border Glow on Hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/50 rounded-2xl transition-all duration-300" />
                </Link>
              ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
