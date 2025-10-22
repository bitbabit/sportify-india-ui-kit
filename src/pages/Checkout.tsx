import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { CreditCard, Wallet, Building, Shield, ArrowLeft } from "lucide-react";

const Checkout = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("card");

  const cartItems = [
    { id: 1, name: "Professional Cricket Bat", price: 8999, quantity: 1 },
    { id: 2, name: "Running Shoes", price: 12999, quantity: 2 },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  const handlePlaceOrder = () => {
    navigate("/order-success");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-6 animate-fade-in">
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
          <span className="text-muted-foreground">/</span>
          <Link to="/cart" className="text-muted-foreground hover:text-primary transition-colors">Cart</Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium">Checkout</span>
        </nav>

        {/* Steps Indicator */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="flex items-center gap-4">
            {[
              { num: 1, label: "Shipping" },
              { num: 2, label: "Payment" },
              { num: 3, label: "Confirm" },
            ].map((s, index) => (
              <div key={s.num} className="flex items-center">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                      step >= s.num
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {s.num}
                  </div>
                  <span className={step >= s.num ? "font-semibold" : "text-muted-foreground"}>
                    {s.label}
                  </span>
                </div>
                {index < 2 && (
                  <div
                    className={`w-16 h-0.5 mx-4 ${step > s.num ? "bg-primary" : "bg-muted"}`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Step 1: Shipping */}
            {step === 1 && (
              <div className="bg-card border rounded-lg p-6 animate-slide-in-left">
                <h2 className="text-2xl font-heading font-bold mb-6">Shipping Information</h2>
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="+91 98765 43210" />
                  </div>
                  <div>
                    <Label htmlFor="address">Address *</Label>
                    <Input id="address" placeholder="Street address" />
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input id="city" placeholder="Mumbai" />
                    </div>
                    <div>
                      <Label htmlFor="state">State *</Label>
                      <Input id="state" placeholder="Maharashtra" />
                    </div>
                    <div>
                      <Label htmlFor="pincode">Pincode *</Label>
                      <Input id="pincode" placeholder="400001" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="saveAddress" />
                    <label htmlFor="saveAddress" className="text-sm cursor-pointer">
                      Save this address for future orders
                    </label>
                  </div>
                </div>
                <div className="flex justify-between mt-6">
                  <Link to="/cart">
                    <Button variant="outline">
                      <ArrowLeft className="mr-2 w-4 h-4" />
                      Back to Cart
                    </Button>
                  </Link>
                  <Button onClick={() => setStep(2)} className="athletic-hover">
                    Continue to Payment
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Payment */}
            {step === 2 && (
              <div className="bg-card border rounded-lg p-6 animate-slide-in-left">
                <h2 className="text-2xl font-heading font-bold mb-6">Payment Method</h2>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:border-primary transition-colors">
                      <RadioGroupItem value="card" id="card" />
                      <label htmlFor="card" className="flex-1 cursor-pointer flex items-center gap-3">
                        <CreditCard className="w-5 h-5" />
                        <span className="font-medium">Credit / Debit Card</span>
                      </label>
                    </div>
                    <div className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:border-primary transition-colors">
                      <RadioGroupItem value="upi" id="upi" />
                      <label htmlFor="upi" className="flex-1 cursor-pointer flex items-center gap-3">
                        <Wallet className="w-5 h-5" />
                        <span className="font-medium">UPI / Wallets</span>
                      </label>
                    </div>
                    <div className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:border-primary transition-colors">
                      <RadioGroupItem value="cod" id="cod" />
                      <label htmlFor="cod" className="flex-1 cursor-pointer flex items-center gap-3">
                        <Building className="w-5 h-5" />
                        <span className="font-medium">Cash on Delivery</span>
                      </label>
                    </div>
                  </div>
                </RadioGroup>

                {paymentMethod === "card" && (
                  <div className="mt-6 space-y-4 animate-fade-in">
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" type="password" placeholder="123" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="cardName">Cardholder Name</Label>
                      <Input id="cardName" placeholder="John Doe" />
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-2 mt-6 p-4 bg-accent/30 rounded-lg">
                  <Shield className="w-5 h-5 text-primary" />
                  <p className="text-sm">Your payment information is secure and encrypted</p>
                </div>

                <div className="flex justify-between mt-6">
                  <Button variant="outline" onClick={() => setStep(1)}>
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Back
                  </Button>
                  <Button onClick={() => setStep(3)} className="athletic-hover">
                    Continue to Review
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Confirm */}
            {step === 3 && (
              <div className="bg-card border rounded-lg p-6 animate-slide-in-left">
                <h2 className="text-2xl font-heading font-bold mb-6">Review Your Order</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Shipping Address</h3>
                    <div className="text-sm text-muted-foreground">
                      <p>John Doe</p>
                      <p>123 Street Name, Mumbai</p>
                      <p>Maharashtra, 400001</p>
                      <p>+91 98765 43210</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Payment Method</h3>
                    <p className="text-sm text-muted-foreground">Credit Card ending in 3456</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Order Items</h3>
                    <div className="space-y-3">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex justify-between text-sm">
                          <span>
                            {item.name} x {item.quantity}
                          </span>
                          <span className="font-medium">₹{(item.price * item.quantity).toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-6">
                  <Button variant="outline" onClick={() => setStep(2)}>
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Back
                  </Button>
                  <Button onClick={handlePlaceOrder} className="athletic-hover glow-effect">
                    Place Order
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card border rounded-lg p-6 sticky top-4 animate-slide-in-right">
              <h3 className="text-xl font-heading font-bold mb-4">Order Summary</h3>
              
              <div className="space-y-3 mb-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {item.name} x {item.quantity}
                    </span>
                    <span className="font-medium">₹{(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 pt-4 border-t">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium text-green-600">FREE</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-2 border-t">
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
