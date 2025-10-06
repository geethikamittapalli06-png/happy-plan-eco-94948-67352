import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, Recycle, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import ecoImage from "@/assets/eco-friendly.jpg";

export const EcoSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
              <Leaf className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">100% Eco-Friendly</span>
            </div>

            <h2 className="text-4xl font-bold mb-6">
              Celebrate Sustainably with{" "}
              <span className="gradient-eco bg-clip-text text-transparent">Zero Waste</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              Make your special moments even more meaningful. Our eco-friendly portal connects you 
              with partners who responsibly handle event waste — from composting flowers to 
              donating excess food.
            </p>

            <div className="space-y-4 mb-8">
              <Card className="p-4 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Recycle className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Smart Waste Management</h3>
                  <p className="text-sm text-muted-foreground">
                    Flowers to compost, food to shelters — we handle it all responsibly.
                  </p>
                </div>
              </Card>

              <Card className="p-4 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Give Back to Community</h3>
                  <p className="text-sm text-muted-foreground">
                    Excess food and materials are donated to those in need.
                  </p>
                </div>
              </Card>
            </div>

            <Link to="/eco">
              <Button variant="secondary" size="lg">
                Learn More About Our Eco Initiative
              </Button>
            </Link>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={ecoImage} 
                alt="Eco-friendly waste management" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-elegant">
              <div className="text-3xl font-bold text-secondary mb-1">85%</div>
              <div className="text-sm text-muted-foreground">Waste Reduction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
