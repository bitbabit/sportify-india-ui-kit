import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedCategories from "@/components/FeaturedCategories";
import TrendingProducts from "@/components/TrendingProducts";
import BrandStrip from "@/components/BrandStrip";
import OffersSection from "@/components/OffersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturedCategories />
        <TrendingProducts />
        <BrandStrip />
        <OffersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
