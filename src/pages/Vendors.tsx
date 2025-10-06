import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, MapPin, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import cateringImage from "@/assets/vendor-catering.jpg";
import decorationImage from "@/assets/vendor-decoration.jpg";

const allVendors = [
  {
    id: 1,
    name: "Jaipur Caterers",
    category: "Catering",
    rating: 4.8,
    reviews: 156,
    location: "Jaipur, Rajasthan",
    price: "₹800 per plate",
    priceRange: 50000,
    image: cateringImage,
    available: true,
  },
  {
    id: 2,
    name: "Mumbai Decorators",
    category: "Decoration",
    rating: 4.9,
    reviews: 203,
    location: "Mumbai, Maharashtra",
    price: "₹50,000 - ₹2L",
    priceRange: 125000,
    image: decorationImage,
    available: true,
  },
  {
    id: 3,
    name: "Delhi Banquet Hall",
    category: "Venue",
    rating: 4.7,
    reviews: 89,
    location: "Delhi NCR",
    price: "₹1L - ₹5L",
    priceRange: 300000,
    image: cateringImage,
    available: true,
  },
  {
    id: 4,
    name: "Bangalore Photographers",
    category: "Photography",
    rating: 4.9,
    reviews: 178,
    location: "Bangalore, Karnataka",
    price: "₹40,000 - ₹1L",
    priceRange: 70000,
    image: decorationImage,
    available: true,
  },
  {
    id: 5,
    name: "Chennai Music & DJ",
    category: "Entertainment",
    rating: 4.6,
    reviews: 92,
    location: "Chennai, Tamil Nadu",
    price: "₹25,000 - ₹75K",
    priceRange: 50000,
    image: cateringImage,
    available: false,
  },
];

export default function Vendors() {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [budgetFilter, setBudgetFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const filteredVendors = allVendors.filter((vendor) => {
    const matchesSearch = vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         vendor.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         vendor.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = locationFilter === "all" || vendor.location.includes(locationFilter);
    const matchesCategory = categoryFilter === "all" || vendor.category === categoryFilter;
    const matchesBudget = budgetFilter === "all" || 
      (budgetFilter === "low" && vendor.priceRange < 50000) ||
      (budgetFilter === "medium" && vendor.priceRange >= 50000 && vendor.priceRange <= 150000) ||
      (budgetFilter === "high" && vendor.priceRange > 150000);
    return matchesSearch && matchesLocation && matchesCategory && matchesBudget;
  });

  return (
    <div className="min-h-screen gradient-subtle">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            Find Your Perfect <span className="text-primary">Vendors</span>
          </h1>
          <p className="text-muted-foreground">
            Connect with trusted professionals for your special day
          </p>
        </div>

        {/* Search & Filters */}
        <Card className="p-6 mb-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search vendors by name, category, or location..." 
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" className="gap-2" onClick={() => setShowFilters(!showFilters)}>
                <Filter className="h-4 w-4" />
                Filters
              </Button>
            </div>

            {showFilters && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t">
                <div>
                  <Label className="text-sm font-medium mb-2 block">Location</Label>
                  <Select value={locationFilter} onValueChange={setLocationFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Locations" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      <SelectItem value="Jaipur">Jaipur</SelectItem>
                      <SelectItem value="Delhi">Delhi</SelectItem>
                      <SelectItem value="Mumbai">Mumbai</SelectItem>
                      <SelectItem value="Bangalore">Bangalore</SelectItem>
                      <SelectItem value="Chennai">Chennai</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-sm font-medium mb-2 block">Category</Label>
                  <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="Catering">Catering</SelectItem>
                      <SelectItem value="Decoration">Decoration</SelectItem>
                      <SelectItem value="Venue">Venue</SelectItem>
                      <SelectItem value="Photography">Photography</SelectItem>
                      <SelectItem value="Entertainment">Entertainment</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-sm font-medium mb-2 block">Budget Range</Label>
                  <Select value={budgetFilter} onValueChange={setBudgetFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Budgets" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Budgets</SelectItem>
                      <SelectItem value="low">Under ₹50,000</SelectItem>
                      <SelectItem value="medium">₹50,000 - ₹1,50,000</SelectItem>
                      <SelectItem value="high">Above ₹1,50,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
          </div>
        </Card>

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-muted-foreground">
            Showing {filteredVendors.length} vendor{filteredVendors.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Vendor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVendors.map((vendor) => (
            <Card key={vendor.id} className="overflow-hidden hover:shadow-elegant transition-smooth group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={vendor.image} 
                  alt={vendor.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                {vendor.available ? (
                  <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                    Available
                  </Badge>
                ) : (
                  <Badge variant="destructive" className="absolute top-4 right-4">
                    Booked
                  </Badge>
                )}
              </div>

              <div className="p-6">
                <div className="mb-3">
                  <Badge variant="outline" className="mb-2">{vendor.category}</Badge>
                  <h3 className="text-xl font-semibold mb-1">{vendor.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {vendor.location}
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="font-semibold">{vendor.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({vendor.reviews} reviews)
                  </span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="font-semibold text-primary">{vendor.price}</span>
                </div>

                <div className="flex gap-2">
                  <Link to={`/vendor-detail?id=${vendor.id}`} className="flex-1">
                    <Button variant="default" className="w-full">
                      View Details
                    </Button>
                  </Link>
                  <Link to={`/chat?vendor=${vendor.id}`}>
                    <Button variant="outline">
                      Chat
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            Load More Vendors
          </Button>
        </div>
      </main>
    </div>
  );
}
