import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  UtensilsCrossed, 
  Flower2, 
  Building2, 
  Camera, 
  Music, 
  Palette,
  Car,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  { name: "Catering", icon: UtensilsCrossed, color: "text-orange-500" },
  { name: "Decoration", icon: Flower2, color: "text-pink-500" },
  { name: "Venues", icon: Building2, color: "text-blue-500" },
  { name: "Photography", icon: Camera, color: "text-purple-500" },
  { name: "Music & DJ", icon: Music, color: "text-green-500" },
  { name: "Styling", icon: Palette, color: "text-yellow-500" },
  { name: "Transport", icon: Car, color: "text-indigo-500" },
  { name: "Florists", icon: Sparkles, color: "text-rose-500" },
];

export const VendorCategories = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Find Your Perfect <span className="gradient-primary bg-clip-text text-transparent">Vendors</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with trusted professionals across all event categories. Real-time availability, instant booking.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.name}
                className="p-6 hover:shadow-elegant transition-smooth cursor-pointer group"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4 group-hover:scale-110 transition-smooth">
                    <Icon className={`h-8 w-8 ${category.color}`} />
                  </div>
                  <h3 className="font-semibold">{category.name}</h3>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Link to="/vendors">
            <Button variant="default" size="lg">
              View All Vendors
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
