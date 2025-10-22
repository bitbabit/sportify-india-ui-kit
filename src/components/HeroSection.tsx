import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import heroRunner from "@/assets/hero-runner.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[500px] lg:h-[600px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroRunner}
          alt="Athletic runner in action"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl animate-fade-in">
          <p className="text-accent font-bold text-sm lg:text-base uppercase tracking-widest mb-4">
            New Season Collection
          </p>
          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-black text-primary-foreground mb-4 lg:mb-6 leading-tight uppercase">
            Everything You Need to Play
          </h2>
          <p className="text-lg lg:text-xl text-primary-foreground/90 mb-6 lg:mb-8 font-medium">
            One Sports Store for Every Champion. Gear up with the best athletic equipment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-base uppercase tracking-wide h-14 px-8 rounded-full athletic-hover group"
            >
              Shop Now
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-bold text-base uppercase tracking-wide h-14 px-8 rounded-full athletic-hover"
            >
              Explore Sports
            </Button>
          </div>
        </div>
      </div>

      {/* Animated Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
