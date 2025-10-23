import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedCategories from "@/components/FeaturedCategories";
import TrendingProducts from "@/components/TrendingProducts";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FeaturesSection from "@/components/FeaturesSection";
import BrandStrip from "@/components/BrandStrip";
import OffersSection from "@/components/OffersSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturedCategories />
        <TrendingProducts />
        <CTASection />
        <StatsSection />
        <TestimonialsSection />
        <FeaturesSection />
        <BrandStrip />
        <OffersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
