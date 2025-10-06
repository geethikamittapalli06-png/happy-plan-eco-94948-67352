import { Button } from "@/components/ui/button";
import { Calendar, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-event.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Elegant event setup" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Smart & Sustainable Event Planning</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Create Memorable
            <br />
            Moments Together
          </h1>

          <p className="text-lg text-accent mb-4 font-medium">
            Celebrate Smart. Cherish Forever. Care for the Planet.
          </p>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            From weddings to birthdays, plan unforgettable events with real-time vendor collaboration, 
            smart budget tracking, and eco-friendly solutions — all in one beautiful platform.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/dashboard">
              <Button variant="hero" size="xl" className="gap-2">
                <Calendar className="h-5 w-5" />
                Start Planning
              </Button>
            </Link>
            <Link to="/vendors">
              <Button variant="outline" size="xl" className="gap-2">
                <Heart className="h-5 w-5" />
                Browse Vendors
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Trusted Vendors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">10K+</div>
              <div className="text-sm text-muted-foreground">Events Planned</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Eco-Friendly</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
