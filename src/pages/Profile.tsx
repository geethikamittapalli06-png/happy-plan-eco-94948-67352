import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award, Heart } from "lucide-react";

const pastEvents = [
  { id: 1, name: "Sister's Wedding", date: "March 15, 2024", type: "Wedding", location: "Jaipur", rating: 5 },
  { id: 2, name: "Dad's 60th Birthday", date: "January 20, 2024", type: "Birthday", location: "Mumbai", rating: 5 },
];

const savedVendors = [
  { id: 1, name: "Jaipur Caterers", category: "Catering" },
  { id: 2, name: "Mumbai Decorators", category: "Decoration" },
  { id: 3, name: "Bangalore Photographers", category: "Photography" },
];

export default function Profile() {
  return (
    <div className="min-h-screen gradient-subtle">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6 text-center">
              <Avatar className="w-24 h-24 mx-auto mb-4">
                <AvatarFallback className="text-2xl">UA</AvatarFallback>
              </Avatar>
              <h2 className="text-2xl font-bold mb-1">User Account</h2>
              <p className="text-muted-foreground mb-4">user@eterna.com</p>
              <Button className="w-full mb-2">Edit Profile</Button>
              <Button variant="outline" className="w-full">Settings</Button>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-secondary" />
                Green Score
              </h3>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-eco bg-clip-text text-transparent mb-2">
                  85/100
                </div>
                <Badge className="bg-secondary">Eco Champion</Badge>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Past Events</h2>
              <div className="space-y-4">
                {pastEvents.map((event) => (
                  <Card key={event.id} className="p-4 hover:shadow-md transition-smooth">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold">{event.name}</h3>
                          <Badge variant="outline">{event.type}</Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {event.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {event.location}
                          </span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Heart className="h-6 w-6 text-primary" />
                Saved Vendors
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {savedVendors.map((vendor) => (
                  <Card key={vendor.id} className="p-4 hover:shadow-md transition-smooth">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold mb-1">{vendor.name}</h3>
                        <Badge variant="outline">{vendor.category}</Badge>
                      </div>
                      <Button variant="ghost" size="sm">View</Button>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
