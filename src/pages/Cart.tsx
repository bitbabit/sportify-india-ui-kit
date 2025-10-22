import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Professional Cricket Bat",
      brand: "SG",
      price: 8999,
      quantity: 1,
      image: "/placeholder.svg",
      inStock: true
    },
    {
      id: 2,
      name: "Running Shoes - Air Max",
      brand: "Nike",
      price: 12999,
      quantity: 2,
      image: "/placeholder.svg",
      inStock: true
    }
  ]);

  const [couponCode, setCouponCode] = useState("");

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = 500;
  const shipping = subtotal > 999 ? 0 : 99;
  const total = subtotal - discount + shipping;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-6 animate-fade-in">
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium">Shopping Cart</span>
        </nav>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
            <ShoppingBag className="w-24 h-24 text-muted-foreground mb-4" />
            <h2 className="text-2xl font-heading font-bold mb-2">Your Cart is Empty</h2>
            <p className="text-muted-foreground mb-6">Add some gear to get started!</p>
            <Link to="/products">
              <Button size="lg" className="athletic-hover">
                Start Shopping <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <h1 className="text-3xl font-heading font-bold mb-6 animate-slide-in-left">
                Shopping Cart ({cartItems.length} items)
              </h1>

              {cartItems.map((item, index) => (
                <div
                  key={item.id}
                  className="bg-card border rounded-lg p-4 flex gap-4 animate-fade-in athletic-hover"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-heading font-semibold text-lg">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">{item.brand}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-destructive hover:text-destructive/80 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-3 border rounded-lg p-1">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 hover:bg-accent rounded transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 hover:bg-accent rounded transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <p className="text-xl font-bold">₹{(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card border rounded-lg p-6 sticky top-4 animate-slide-in-right">
                <h2 className="text-xl font-heading font-bold mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>-₹{discount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium">{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>₹{total.toLocaleString()}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <Button variant="outline">Apply</Button>
                  </div>
                </div>

                <Link to="/checkout">
                  <Button className="w-full athletic-hover glow-effect" size="lg">
                    Proceed to Checkout <ArrowRight className="ml-2" />
                  </Button>
                </Link>

                {shipping > 0 && (
                  <p className="text-sm text-muted-foreground text-center mt-3">
                    Add ₹{(1000 - subtotal).toLocaleString()} more for FREE shipping
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
