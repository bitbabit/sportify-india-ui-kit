import { Button } from "@/components/ui/button";
import { ChevronRight, Play, Star } from "lucide-react";
import heroRunner from "@/assets/hero-runner.jpg";
import cricketGear from "@/assets/cricket-gear.jpg";
import footballGear from "@/assets/football-gear.jpg";
import tennisGear from "@/assets/tennis-gear.jpg";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    {
      image: heroRunner,
      title: "Everything You Need to Play",
      subtitle: "New Season Collection",
      description: "One Sports Store for Every Champion. Gear up with the best athletic equipment.",
      cta: "Shop Now",
      ctaSecondary: "Explore Sports"
    },
    {
      image: cricketGear,
      title: "Champions Start Here",
      subtitle: "Elite Cricket Gear",
      description: "Professional-grade cricket equipment for players who demand excellence in every match.",
      cta: "Discover Cricket",
      ctaSecondary: "View Collection"
    },
    {
      image: footballGear,
      title: "Train Like a Pro",
      subtitle: "Premium Football Equipment",
      description: "Elevate your football game with our curated selection of professional gear.",
      cta: "Start Training",
      ctaSecondary: "Learn More"
    },
    {
      image: tennisGear,
      title: "Master Your Game",
      subtitle: "Tennis Excellence",
      description: "Professional tennis equipment for players who strive for perfection on the court.",
      cta: "Shop Tennis",
      ctaSecondary: "View Rackets"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <section className="relative w-full h-[500px] lg:h-[600px] overflow-hidden">
      {/* Background Images with Carousel */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={slide.image}
              alt="Athletic runner in action"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
          </div>
        ))}
      </div>


      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <div className="animate-fade-in">
            <p className="text-accent font-bold text-sm lg:text-base uppercase tracking-widest mb-4 animate-slide-in-left">
              {heroSlides[currentSlide].subtitle}
            </p>
            <h2 className="text-4xl lg:text-6xl xl:text-7xl font-black text-primary-foreground mb-4 lg:mb-6 leading-tight uppercase animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
              {heroSlides[currentSlide].title}
            </h2>
            <p className="text-lg lg:text-xl text-primary-foreground/90 mb-6 lg:mb-8 font-medium animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
              {heroSlides[currentSlide].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-base uppercase tracking-wide h-14 px-8 rounded-full athletic-hover group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  {heroSlides[currentSlide].cta}
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-bold text-base uppercase tracking-wide h-14 px-8 rounded-full athletic-hover group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                {heroSlides[currentSlide].ctaSecondary}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-primary-foreground scale-125' 
                : 'bg-primary-foreground/50 hover:bg-primary-foreground/75'
            }`}
          />
        ))}
      </div>

      {/* Animated Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default HeroSection;
