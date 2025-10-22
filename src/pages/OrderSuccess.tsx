import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Package, Home } from "lucide-react";

const OrderSuccess = () => {
  const orderId = "SPT" + Math.random().toString(36).substring(2, 9).toUpperCase();
  const expectedDelivery = "Jan 5, 2025";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-6 animate-zoom-in">
            <CheckCircle className="w-24 h-24 text-green-500 mx-auto animate-pulse-glow" />
          </div>
          
          <h1 className="text-4xl font-heading font-bold mb-4 animate-fade-in">
            Order Placed Successfully!
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in">
            Thank you for your purchase. Your order has been confirmed and will be delivered soon.
          </p>

          <div className="bg-card border rounded-lg p-8 mb-8 animate-slide-in-left">
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Order ID</p>
                <p className="text-lg font-bold font-mono">{orderId}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Expected Delivery</p>
                <p className="text-lg font-bold">{expectedDelivery}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/profile">
              <Button size="lg" className="athletic-hover glow-effect">
                <Package className="mr-2" />
                Track Order
              </Button>
            </Link>
            <Link to="/">
              <Button size="lg" variant="outline">
                <Home className="mr-2" />
                Continue Shopping
              </Button>
            </Link>
          </div>

          <div className="mt-12 p-6 bg-accent/30 rounded-lg animate-fade-in">
            <p className="text-sm text-muted-foreground">
              Order confirmation has been sent to your email. You can track your order anytime from your profile.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OrderSuccess;
