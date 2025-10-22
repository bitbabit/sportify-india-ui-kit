import { ArrowRight } from "lucide-react";
import cricketGear from "@/assets/cricket-gear.jpg";
import footballGear from "@/assets/football-gear.jpg";
import runningShoes from "@/assets/running-shoes.jpg";
import tennisGear from "@/assets/tennis-gear.jpg";

const categories = [
  {
    title: "Cricket",
    image: cricketGear,
    color: "from-accent/20 to-accent/5",
  },
  {
    title: "Football",
    image: footballGear,
    color: "from-secondary/20 to-secondary/5",
  },
  {
    title: "Running",
    image: runningShoes,
    color: "from-ring/20 to-ring/5",
  },
  {
    title: "Tennis",
    image: tennisGear,
    color: "from-destructive/20 to-destructive/5",
  },
];

const FeaturedCategories = () => {
  return (
    <section className="py-12 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent font-bold text-sm uppercase tracking-widest mb-2">
            Popular Sports
          </p>
          <h2 className="text-3xl lg:text-5xl font-black text-foreground uppercase">
            Shop By Sport
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer athletic-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color}`} />

              {/* Image */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6">
                <h3 className="text-2xl lg:text-3xl font-black text-primary-foreground uppercase mb-2">
                  {category.title}
                </h3>
                <div className="flex items-center text-primary-foreground font-semibold text-sm group-hover:gap-2 transition-all">
                  <span>Shop Now</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-accent/10 blur-xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
