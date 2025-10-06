import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Phone, Mail, Calendar, MessageCircle } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import cateringImage from "@/assets/vendor-catering.jpg";

export default function VendorDetail() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const vendorId = searchParams.get("id") || "1";

  const vendor = {
    id: vendorId,
    name: "Jaipur Caterers",
    category: "Catering",
    rating: 4.8,
    reviews: 156,
    location: "Jaipur, Rajasthan",
    price: "₹800 per plate",
    image: cateringImage,
    available: true,
    phone: "+91 98765 43210",
    email: "contact@jaipurcaterers.com",
    description: "Premium catering services with traditional Rajasthani and contemporary cuisine. We specialize in royal wedding feasts and corporate events.",
    specialties: ["North Indian", "Rajasthani", "Continental", "Chinese"],
    minGuests: 50,
    maxGuests: 1000,
  };

  const handleBooking = () => {
    toast.success("Booking request sent to vendor!");
    setTimeout(() => navigate("/dashboard"), 1500);
  };

  return (
    <div className="min-h-screen gradient-subtle">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <Button variant="outline" onClick={() => navigate("/vendors")} className="mb-6">
          ← Back to Vendors
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="overflow-hidden">
              <img 
                src={vendor.image} 
                alt={vendor.name}
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <Badge variant="outline" className="mb-2">{vendor.category}</Badge>
                    <h1 className="text-3xl font-bold mb-2">{vendor.name}</h1>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {vendor.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-accent text-accent" />
                        <span className="font-semibold">{vendor.rating}</span>
                        <span>({vendor.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  {vendor.available ? (
                    <Badge className="bg-secondary text-secondary-foreground">Available</Badge>
                  ) : (
                    <Badge variant="destructive">Booked</Badge>
                  )}
                </div>

                <div className="border-t pt-6">
                  <h2 className="text-xl font-semibold mb-3">About</h2>
                  <p className="text-muted-foreground">{vendor.description}</p>
                </div>

                <div className="border-t pt-6 mt-6">
                  <h2 className="text-xl font-semibold mb-3">Specialties</h2>
                  <div className="flex flex-wrap gap-2">
                    {vendor.specialties.map((specialty) => (
                      <Badge key={specialty} variant="outline">{specialty}</Badge>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-6 mt-6">
                  <h2 className="text-xl font-semibold mb-3">Capacity</h2>
                  <p className="text-muted-foreground">
                    Minimum: {vendor.minGuests} guests | Maximum: {vendor.maxGuests} guests
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-8">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-primary mb-2">{vendor.price}</div>
                <p className="text-sm text-muted-foreground">Starting price</p>
              </div>

              <div className="space-y-3 mb-6">
                <Button className="w-full" onClick={handleBooking}>
                  <Calendar className="h-4 w-4 mr-2" />
                  Request Booking
                </Button>
                <Button variant="outline" className="w-full" onClick={() => navigate("/chat?vendor=" + vendor.id)}>
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Chat with Vendor
                </Button>
              </div>

              <div className="space-y-3 border-t pt-6">
                <h3 className="font-semibold mb-3">Contact Information</h3>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{vendor.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="break-all">{vendor.email}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
