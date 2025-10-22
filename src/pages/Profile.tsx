import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { User, Package, MapPin, Heart, Settings, LogOut } from "lucide-react";

const Profile = () => {
  const orders = [
    {
      id: "SPT12345",
      date: "Dec 20, 2024",
      status: "delivered",
      total: 21998,
      items: 2,
    },
    {
      id: "SPT12344",
      date: "Dec 15, 2024",
      status: "in-transit",
      total: 8999,
      items: 1,
    },
    {
      id: "SPT12343",
      date: "Dec 10, 2024",
      status: "processing",
      total: 15499,
      items: 3,
    },
  ];

  const addresses = [
    {
      id: 1,
      type: "Home",
      name: "John Doe",
      address: "123 Street Name, Mumbai, Maharashtra, 400001",
      phone: "+91 98765 43210",
      isDefault: true,
    },
    {
      id: 2,
      type: "Office",
      name: "John Doe",
      address: "456 Office Building, Andheri, Mumbai, 400053",
      phone: "+91 98765 43210",
      isDefault: false,
    },
  ];

  const wishlistItems = [
    { id: 1, name: "Tennis Racket Pro", brand: "Yonex", price: 9999, image: "/placeholder.svg" },
    { id: 2, name: "Football - Official Size", brand: "Adidas", price: 2499, image: "/placeholder.svg" },
    { id: 3, name: "Gym Dumbbells Set", brand: "Puma", price: 4999, image: "/placeholder.svg" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-green-500/10 text-green-600";
      case "in-transit":
        return "bg-blue-500/10 text-blue-600";
      case "processing":
        return "bg-yellow-500/10 text-yellow-600";
      case "cancelled":
        return "bg-red-500/10 text-red-600";
      default:
        return "bg-gray-500/10 text-gray-600";
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-heading font-bold mb-8 animate-fade-in">My Account</h1>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 max-w-3xl">
            <TabsTrigger value="profile">
              <User className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Profile</span>
            </TabsTrigger>
            <TabsTrigger value="orders">
              <Package className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Orders</span>
            </TabsTrigger>
            <TabsTrigger value="addresses">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Addresses</span>
            </TabsTrigger>
            <TabsTrigger value="wishlist">
              <Heart className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Wishlist</span>
            </TabsTrigger>
            <TabsTrigger value="settings">
              <Settings className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Settings</span>
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <div className="bg-card border rounded-lg p-6 animate-fade-in">
              <h2 className="text-xl font-heading font-bold mb-6">Personal Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="John" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Doe" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john@example.com" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" defaultValue="+91 98765 43210" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input id="dob" type="date" defaultValue="1990-01-01" />
                </div>
              </div>
              <Button className="mt-6 athletic-hover">Save Changes</Button>
            </div>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders">
            <div className="space-y-4 animate-fade-in">
              {orders.map((order) => (
                <div key={order.id} className="bg-card border rounded-lg p-6 athletic-hover">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <div>
                      <p className="font-mono font-bold text-lg">{order.id}</p>
                      <p className="text-sm text-muted-foreground">{order.date}</p>
                    </div>
                    <Badge className={getStatusColor(order.status)}>
                      {order.status.replace("-", " ").toUpperCase()}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="text-sm text-muted-foreground">
                      <span>{order.items} items</span>
                      <span className="mx-2">•</span>
                      <span className="font-bold text-foreground">₹{order.total.toLocaleString()}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Track Order</Button>
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Addresses Tab */}
          <TabsContent value="addresses">
            <div className="space-y-4 animate-fade-in">
              {addresses.map((addr) => (
                <div key={addr.id} className="bg-card border rounded-lg p-6 athletic-hover">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{addr.type}</Badge>
                      {addr.isDefault && <Badge>Default</Badge>}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">Edit</Button>
                      <Button variant="ghost" size="sm" className="text-destructive">Delete</Button>
                    </div>
                  </div>
                  <p className="font-semibold mb-1">{addr.name}</p>
                  <p className="text-sm text-muted-foreground mb-1">{addr.address}</p>
                  <p className="text-sm text-muted-foreground">{addr.phone}</p>
                </div>
              ))}
              <Button variant="outline" className="w-full">+ Add New Address</Button>
            </div>
          </TabsContent>

          {/* Wishlist Tab */}
          <TabsContent value="wishlist">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              {wishlistItems.map((item) => (
                <div key={item.id} className="bg-card border rounded-lg overflow-hidden athletic-hover">
                  <div className="aspect-square bg-muted">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground mb-1">{item.brand}</p>
                    <h3 className="font-semibold mb-2">{item.name}</h3>
                    <p className="text-lg font-bold mb-3">₹{item.price.toLocaleString()}</p>
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1 athletic-hover">Move to Cart</Button>
                      <Button size="sm" variant="outline">Remove</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <div className="space-y-6 animate-fade-in">
              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-lg font-heading font-bold mb-4">Change Password</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div>
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div>
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                  <Button className="athletic-hover">Update Password</Button>
                </div>
              </div>

              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-lg font-heading font-bold mb-4">Notification Preferences</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-4 h-4" />
                    <span className="text-sm">Email notifications for orders</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-4 h-4" />
                    <span className="text-sm">Promotional emails and offers</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="text-sm">SMS notifications</span>
                  </label>
                </div>
              </div>

              <Button variant="destructive" className="w-full">
                <LogOut className="mr-2 w-4 h-4" />
                Logout
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
