import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Wallet, MapPin, Phone, Mail } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface ViewDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  event: {
    id: number;
    name: string;
    date: string;
    type: string;
    status: string;
    budget: string;
    spent: string;
    progress: number;
  };
}

export function ViewDetailsDialog({ open, onOpenChange, event }: ViewDetailsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">{event.name}</DialogTitle>
          <DialogDescription>Complete event details and information</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Event Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <div className="text-sm text-muted-foreground">Event Type</div>
              <Badge variant="outline">{event.type}</Badge>
            </div>
            <div className="space-y-1">
              <div className="text-sm text-muted-foreground">Status</div>
              <Badge className="bg-accent">{event.status}</Badge>
            </div>
          </div>

          {/* Date & Location */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <div>
                <div className="text-sm text-muted-foreground">Event Date</div>
                <div className="font-medium">{event.date}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <div>
                <div className="text-sm text-muted-foreground">Venue</div>
                <div className="font-medium">Grand Ballroom, Taj Palace</div>
              </div>
            </div>
          </div>

          {/* Budget Details */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Wallet className="h-4 w-4 text-muted-foreground" />
                <span className="font-semibold">Budget Progress</span>
              </div>
              <span className="text-sm font-medium">{event.spent} / {event.budget}</span>
            </div>
            <Progress value={event.progress} className="h-2" />
          </div>

          {/* Guest Count */}
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <div>
              <div className="text-sm text-muted-foreground">Expected Guests</div>
              <div className="font-medium">250 people</div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-3 pt-4 border-t">
            <h4 className="font-semibold">Event Coordinator</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>coordinator@eterna.com</span>
              </div>
            </div>
          </div>

          {/* Booked Vendors */}
          <div className="space-y-3 pt-4 border-t">
            <h4 className="font-semibold">Booked Vendors</h4>
            <div className="grid grid-cols-2 gap-2">
              <Badge variant="outline">Jaipur Caterers</Badge>
              <Badge variant="outline">Mumbai Decorators</Badge>
              <Badge variant="outline">Bangalore Photographers</Badge>
              <Badge variant="outline">Delhi Banquet Hall</Badge>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
