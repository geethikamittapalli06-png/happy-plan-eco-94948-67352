import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Plus, Users, Wallet, CheckCircle2, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ViewDetailsDialog } from "@/components/ViewDetailsDialog";

const upcomingEvents = [
  {
    id: 1,
    name: "Sarah & John's Wedding",
    date: "June 15, 2025",
    type: "Wedding",
    status: "In Progress",
    budget: "₹2,00,000",
    spent: "₹1,50,000",
    progress: 75,
  },
  {
    id: 2,
    name: "Mom's 60th Birthday",
    date: "July 22, 2025",
    type: "Birthday",
    status: "Planning",
    budget: "₹50,000",
    spent: "₹10,000",
    progress: 20,
  },
];

export default function Dashboard() {
  const [selectedEvent, setSelectedEvent] = useState<typeof upcomingEvents[0] | null>(null);
  const [showDetailsDialog, setShowDetailsDialog] = useState(false);

  const handleViewDetails = (event: typeof upcomingEvents[0]) => {
    setSelectedEvent(event);
    setShowDetailsDialog(true);
  };

  return (
    <div className="min-h-screen gradient-subtle">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Welcome Back to <span className="text-primary">Eterna</span></h1>
            <p className="text-muted-foreground">Celebrate Smart. Cherish Forever. Care for the Planet.</p>
          </div>
          <Link to="/create-event">
            <Button variant="hero" size="lg" className="gap-2">
              <Plus className="h-5 w-5" />
              Create Event
            </Button>
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                <Calendar className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <div className="text-2xl font-bold">2</div>
                <div className="text-sm text-muted-foreground">Active Events</div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full gradient-eco flex items-center justify-center">
                <Users className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div>
                <div className="text-2xl font-bold">12</div>
                <div className="text-sm text-muted-foreground">Booked Vendors</div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center">
                <Wallet className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <div className="text-2xl font-bold">₹2.5L</div>
                <div className="text-sm text-muted-foreground">Total Budget</div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">8</div>
                <div className="text-sm text-muted-foreground">Tasks Done</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Upcoming Events */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="p-6 hover:shadow-elegant transition-smooth">
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {event.date}
                          </span>
                          <span className="px-2 py-1 rounded-full bg-muted text-xs font-medium">
                            {event.type}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="font-medium">{event.status}</span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Budget Progress</span>
                        <span className="font-medium">{event.spent} / {event.budget}</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full gradient-primary transition-smooth" 
                          style={{ width: `${event.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex md:flex-col gap-2">
                    <Button variant="default" size="sm" onClick={() => handleViewDetails(event)}>
                      View Details
                    </Button>
                    <Link to="/edit-event">
                      <Button variant="outline" size="sm">Edit Event</Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 hover:shadow-elegant transition-smooth cursor-pointer">
            <h3 className="font-semibold mb-2">Find Vendors</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Browse and book trusted vendors for your event
            </p>
            <Link to="/vendors">
              <Button variant="ghost" size="sm">Explore →</Button>
            </Link>
          </Card>

          <Card className="p-6 hover:shadow-elegant transition-smooth cursor-pointer">
            <h3 className="font-semibold mb-2">Track Budget</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Manage expenses and stay within your budget
            </p>
            <Link to="/budget">
              <Button variant="ghost" size="sm">View Budget →</Button>
            </Link>
          </Card>

          <Card className="p-6 hover:shadow-elegant transition-smooth cursor-pointer gradient-eco">
            <h3 className="font-semibold mb-2 text-secondary-foreground">Go Eco-Friendly</h3>
            <p className="text-sm text-secondary-foreground/80 mb-4">
              Plan a sustainable, zero-waste celebration
            </p>
            <Link to="/eco">
              <Button variant="outline" size="sm">Learn More →</Button>
            </Link>
          </Card>
        </div>
      </main>

      {selectedEvent && (
        <ViewDetailsDialog
          open={showDetailsDialog}
          onOpenChange={setShowDetailsDialog}
          event={selectedEvent}
        />
      )}
    </div>
  );
}
