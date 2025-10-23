import { Button } from "@/components/ui/button";
import { ChevronRight, Play, Star, Zap, Trophy, Target, Flame } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import allSportsBanner from "@/assets/all-sports-banner.png";
import badmintonBanner from "@/assets/badiminton-banner.png";
import basketballBanner from "@/assets/basketball-banner.png";
import cricketBanner from "@/assets/cricket-banner.png";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    {
      id: 1,
      title: "Fall Fitness Fest",
      subtitle: "Gear Up for a New Season",
      description: "Buy 2 Get 1 Free on All Apparel & Shoes. Experience the ultimate sports collection for every athlete.",
      cta: "Shop All Now",
      ctaLink: "/products",
      ctaSecondary: "View Deals",
      ctaSecondaryLink: "/offers",
      image: allSportsBanner,
      icon: Zap,
      stats: "Buy 2 Get 1 Free",
      accent: "bg-gradient-to-r from-green-400 to-blue-500"
    },
    {
      id: 2,
      title: "Shuttle Into Savings",
      subtitle: "Big Smash Sale",
      description: "Up to 40% OFF on All Rackets & Shoes. Master the court with premium badminton equipment.",
      cta: "Shop Badminton",
      ctaLink: "/products?category=badminton",
      ctaSecondary: "Shop All Deals",
      ctaSecondaryLink: "/offers",
      image: badmintonBanner,
      icon: Trophy,
      stats: "40% OFF",
      accent: "bg-gradient-to-r from-blue-400 to-cyan-500"
    },
    {
      id: 3,
      title: "Slam Dunk Deals",
      subtitle: "Score Big",
      description: "Up to 50% OFF on All Hoops Gear & Shoes. Own the court with professional basketball equipment.",
      cta: "Shop Basketball",
      ctaLink: "/products?category=basketball",
      ctaSecondary: "Shop All Deals",
      ctaSecondaryLink: "/offers",
      image: basketballBanner,
      icon: Target,
      stats: "50% OFF",
      accent: "bg-gradient-to-r from-orange-400 to-red-500"
    },
    {
      id: 4,
      title: "Champions Start Here",
      subtitle: "Elite Cricket Gear",
      description: "Professional-grade cricket equipment for players who demand excellence in every match.",
      cta: "Discover Cricket",
      ctaLink: "/products?category=cricket",
      ctaSecondary: "View Collection",
      ctaSecondaryLink: "/products?category=cricket",
      image: cricketBanner,
      icon: Flame,
      stats: "Premium Quality",
      accent: "bg-gradient-to-r from-yellow-400 to-amber-500"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <section className="relative w-full h-[600px] lg:h-[700px] overflow-hidden">
      {/* Dynamic Background with Banner Images */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => {
          const Icon = slide.icon;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-1000 ${
                index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
            >
              {/* Banner Image Background */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40" />
                {/* Gradient overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
              </div>
              
              {/* Animated Geometric Shapes */}
              <div className="absolute inset-0">
                <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float" />
                <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/5 rounded-full blur-lg animate-bounce-slow" />
                <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/15 rounded-full blur-md animate-pulse" />
                <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-white/8 rounded-full blur-lg animate-float" />
                <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-white/20 rounded-full blur-sm animate-particle-float" />
                <div className="absolute bottom-1/4 right-1/3 w-8 h-8 bg-white/15 rounded-full blur-sm animate-particle-float" style={{ animationDelay: '1s' }} />
                <div className="absolute top-2/3 left-1/2 w-6 h-6 bg-white/25 rounded-full blur-sm animate-particle-float" style={{ animationDelay: '2s' }} />
              </div>

              {/* Decorative Elements */}
              <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-2 h-32 bg-white/20 rounded-full animate-pulse" />
                <div className="absolute bottom-32 right-16 w-1 h-24 bg-white/15 rounded-full animate-bounce-slow" />
                <div className="absolute top-1/3 right-20 w-3 h-3 bg-white/30 rounded-full animate-ping" />
                <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-white/25 rounded-full animate-pulse" />
              </div>

              {/* Icon Overlay */}
              <div className="absolute top-20 right-20 opacity-20 animate-hero-glow">
                <Icon className="w-32 h-32 text-white animate-float" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl w-full">
          <div className="animate-fade-in">
            {/* Stats Badge */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-6 animate-slide-in-left">
              <div className={`px-3 sm:px-4 py-2 rounded-full ${heroSlides[currentSlide].accent} text-white font-bold text-xs sm:text-sm shadow-lg`}>
                {heroSlides[currentSlide].stats}
              </div>
              <div className="flex items-center gap-1 text-white/80">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                <span className="ml-1 sm:ml-2 text-xs sm:text-sm font-medium">4.9/5 Rating</span>
              </div>
            </div>

            <p className="text-white/90 font-bold text-sm lg:text-base uppercase tracking-widest mb-4 animate-slide-in-left">
              {heroSlides[currentSlide].subtitle}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black text-white mb-4 sm:mb-6 lg:mb-8 leading-tight uppercase animate-slide-in-left drop-shadow-2xl" style={{ animationDelay: '0.2s' }}>
              {heroSlides[currentSlide].title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 lg:mb-10 font-medium animate-slide-in-left leading-relaxed max-w-2xl" style={{ animationDelay: '0.4s' }}>
              {heroSlides[currentSlide].description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
              <Link to={heroSlides[currentSlide].ctaLink} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-white hover:bg-white/90 text-gray-900 font-bold text-sm sm:text-base lg:text-lg uppercase tracking-wide h-10 sm:h-12 lg:h-14 px-4 sm:px-6 lg:px-8 rounded-full shadow-2xl hover:shadow-3xl group relative overflow-hidden transition-all duration-300 hover:scale-105 w-full"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {heroSlides[currentSlide].cta}
                    <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </Link>
              <Link to={heroSlides[currentSlide].ctaSecondaryLink} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 font-bold text-sm sm:text-base lg:text-lg uppercase tracking-wide h-10 sm:h-12 lg:h-14 px-4 sm:px-6 lg:px-8 rounded-full shadow-xl hover:shadow-2xl group transition-all duration-300 hover:scale-105 w-full"
                >
                  <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform duration-300" />
                  {heroSlides[currentSlide].ctaSecondary}
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 lg:gap-6 mt-6 sm:mt-8 animate-fade-in drop-shadow-lg" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center gap-2 sm:gap-3 bg-black/40 backdrop-blur-lg px-3 sm:px-4 lg:px-5 py-2 sm:py-3 rounded-full border border-white/30 shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse shadow-lg" />
                <span className="text-xs sm:text-sm font-semibold text-white drop-shadow-md">Free Delivery</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 bg-black/40 backdrop-blur-lg px-3 sm:px-4 lg:px-5 py-2 sm:py-3 rounded-full border border-white/30 shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full animate-pulse shadow-lg" />
                <span className="text-xs sm:text-sm font-semibold text-white drop-shadow-md">Easy Returns</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 bg-black/40 backdrop-blur-lg px-3 sm:px-4 lg:px-5 py-2 sm:py-3 rounded-full border border-white/30 shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-400 rounded-full animate-pulse shadow-lg" />
                <span className="text-xs sm:text-sm font-semibold text-white drop-shadow-md">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125 shadow-lg'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Enhanced Bottom Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/95 to-transparent">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />
        <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        {/* Additional overlay for better contrast */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-background/60" />
        {/* Subtle pattern overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background/80 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
