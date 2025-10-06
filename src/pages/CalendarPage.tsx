import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const vendorAvailability = [
  { vendor: "Jaipur Caterers", dates: ["2025-12-12", "2025-12-13", "2025-12-14", "2025-12-15", "2025-12-16", "2025-12-17", "2025-12-18"], color: "bg-orange-500" },
  { vendor: "Mumbai Decorators", dates: ["2025-12-14", "2025-12-15", "2025-12-16", "2025-12-17", "2025-12-18", "2025-12-19", "2025-12-20"], color: "bg-pink-500" },
  { vendor: "Delhi Banquet Hall", dates: ["2025-12-15", "2025-12-16"], color: "bg-blue-500" },
  { vendor: "Bangalore Photographers", dates: ["2025-12-13", "2025-12-14", "2025-12-15", "2025-12-16", "2025-12-17"], color: "bg-purple-500" },
];

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const getDaysInMonth = () => {
    const days = [];
    for (let i = 1; i <= 31; i++) {
      days.push(i);
    }
    return days;
  };

  const getVendorsForDate = (day: number) => {
    const dateStr = `2025-12-${day.toString().padStart(2, "0")}`;
    return vendorAvailability.filter(v => v.dates.includes(dateStr));
  };

  const handleBookDate = () => {
    if (selectedDate) {
      toast.success(`Date ${selectedDate} booked successfully!`);
      setSelectedDate(null);
    }
  };

  return (
    <div className="min-h-screen gradient-subtle">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            Vendor <span className="gradient-primary bg-clip-text text-transparent">Availability</span>
          </h1>
          <p className="text-muted-foreground">
            Check real-time availability and book your preferred dates
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <Card className="lg:col-span-3 p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">December 2025</h2>
              <p className="text-sm text-muted-foreground">Click on a date to see available vendors</p>
            </div>

            <div className="grid grid-cols-7 gap-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="text-center font-semibold text-sm p-2">
                  {day}
                </div>
              ))}
              
              {getDaysInMonth().map((day) => {
                const vendors = getVendorsForDate(day);
                const dateStr = `2025-12-${day.toString().padStart(2, "0")}`;
                const isSelected = selectedDate === dateStr;
                
                return (
                  <button
                    key={day}
                    onClick={() => setSelectedDate(dateStr)}
                    className={`p-3 rounded-lg border-2 transition-smooth hover:shadow-md ${
                      isSelected ? "border-primary bg-primary/10" : "border-border"
                    }`}
                  >
                    <div className="text-center font-semibold mb-1">{day}</div>
                    <div className="flex gap-1 justify-center">
                      {vendors.slice(0, 3).map((vendor, idx) => (
                        <div
                          key={idx}
                          className={`w-2 h-2 rounded-full ${vendor.color}`}
                          title={vendor.vendor}
                        />
                      ))}
                    </div>
                  </button>
                );
              })}
            </div>
          </Card>

          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Vendor Legend
              </h3>
              <div className="space-y-3">
                {vendorAvailability.map((vendor) => (
                  <div key={vendor.vendor} className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${vendor.color}`} />
                    <span className="text-sm">{vendor.vendor}</span>
                  </div>
                ))}
              </div>
            </Card>

            {selectedDate && (
              <Card className="p-6">
                <h3 className="font-semibold mb-4">Available on {selectedDate}</h3>
                <div className="space-y-2 mb-4">
                  {getVendorsForDate(parseInt(selectedDate.split("-")[2])).map((vendor) => (
                    <Badge key={vendor.vendor} variant="outline" className="w-full justify-start">
                      <Check className="h-3 w-3 mr-2" />
                      {vendor.vendor}
                    </Badge>
                  ))}
                </div>
                <Button className="w-full" onClick={handleBookDate}>
                  Book This Date
                </Button>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
