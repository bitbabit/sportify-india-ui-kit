import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Professional Cricketer",
      image: "/placeholder.svg",
      rating: 5,
      text: "Sportify has been my go-to store for cricket equipment. The quality is exceptional and the service is outstanding. My performance has improved significantly since I started using their gear.",
      sport: "Cricket"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Marathon Runner",
      image: "/placeholder.svg",
      rating: 5,
      text: "The running shoes I bought from Sportify are absolutely amazing! Comfortable, durable, and stylish. I've completed 3 marathons with them and they still feel like new.",
      sport: "Running"
    },
    {
      id: 3,
      name: "Amit Singh",
      role: "Football Coach",
      image: "/placeholder.svg",
      rating: 5,
      text: "As a coach, I recommend Sportify to all my players. Their football equipment is top-notch and the prices are very competitive. The team loves the quality and variety available.",
      sport: "Football"
    },
    {
      id: 4,
      name: "Sneha Patel",
      role: "Tennis Player",
      image: "/placeholder.svg",
      rating: 5,
      text: "The tennis racket I purchased exceeded my expectations. The grip, balance, and power are perfect for my playing style. Sportify's customer service is also very helpful.",
      sport: "Tennis"
    },
    {
      id: 5,
      name: "Vikram Reddy",
      role: "Badminton Champion",
      image: "/placeholder.svg",
      rating: 5,
      text: "Sportify's badminton equipment helped me win the state championship. The shuttlecocks and rackets are of professional quality. Highly recommended for serious players.",
      sport: "Badminton"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-16 lg:py-24 bg-muted/30 relative overflow-hidden">

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-4 animate-fade-in">
            Customer Stories
          </p>
          <h2 className="text-3xl lg:text-5xl font-black text-foreground uppercase animate-slide-in-left">
            What Champions Say
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Real experiences from athletes who trust Sportify for their performance needs
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="relative">
            <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-lg border animate-fade-in">
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 text-accent/20">
                <Quote className="w-12 h-12" />
              </div>

              {/* Testimonial Content */}
              <div className="relative z-10">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-6 justify-center">
                  {Array.from({ length: testimonials[currentTestimonial].rating }, (_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Text */}
                <blockquote className="text-lg lg:text-xl text-foreground text-center mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                {/* Author */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mb-4 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h4 className="font-bold text-foreground text-lg">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {testimonials[currentTestimonial].role}
                  </p>
                  <div className="mt-2 px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                    {testimonials[currentTestimonial].sport}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background"
              onClick={nextTestimonial}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>

          {/* Auto-play Toggle */}
          <div className="text-center mt-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-muted-foreground hover:text-foreground"
            >
              {isAutoPlaying ? 'Pause' : 'Play'} Auto-rotation
            </Button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="text-center group">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🏆</span>
            </div>
            <h4 className="font-bold text-foreground mb-2">Quality Assured</h4>
            <p className="text-sm text-muted-foreground">Premium materials & craftsmanship</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🚚</span>
            </div>
            <h4 className="font-bold text-foreground mb-2">Fast Delivery</h4>
            <p className="text-sm text-muted-foreground">Quick & reliable shipping</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-ring/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">💬</span>
            </div>
            <h4 className="font-bold text-foreground mb-2">24/7 Support</h4>
            <p className="text-sm text-muted-foreground">Always here to help</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">↩️</span>
            </div>
            <h4 className="font-bold text-foreground mb-2">Easy Returns</h4>
            <p className="text-sm text-muted-foreground">30-day return policy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
