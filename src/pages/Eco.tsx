import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, Recycle, Heart, TreePine, Droplet, Award } from "lucide-react";
import { Link } from "react-router-dom";
import ecoImage from "@/assets/eco-friendly.jpg";

const ecoFeatures = [
  {
    icon: Recycle,
    title: "Flower Composting",
    description: "Transform event flowers into nutrient-rich compost for local farms and gardens.",
  },
  {
    icon: Heart,
    title: "Food Donation",
    description: "Excess food is donated to animal shelters and NGOs serving those in need.",
  },
  {
    icon: TreePine,
    title: "Carbon Offset",
    description: "We plant trees to offset the carbon footprint of your celebration.",
  },
  {
    icon: Droplet,
    title: "Water Conservation",
    description: "Partner venues implement water-saving practices and recycling systems.",
  },
];

const impactStats = [
  { value: "2.5K", label: "Tons Composted", color: "text-secondary" },
  { value: "10K", label: "Meals Donated", color: "text-primary" },
  { value: "5K", label: "Trees Planted", color: "text-accent" },
  { value: "85%", label: "Waste Reduced", color: "text-secondary" },
];

export default function Eco() {
  return (
    <div className="min-h-screen gradient-subtle">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden mb-12 shadow-elegant">
          <img 
            src={ecoImage} 
            alt="Eco-friendly event planning" 
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent flex items-center">
            <div className="container mx-auto px-8">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                  <Leaf className="h-4 w-4 text-secondary" />
                  <span className="text-sm font-medium text-secondary">Certified Eco-Friendly</span>
                </div>
                <h1 className="text-5xl font-bold mb-4">
                  Celebrate with <span className="text-secondary">Purpose</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Make your special moments meaningful while protecting our planet. 
                  Every event planned through Eterna contributes to a greener tomorrow.
                </p>
                <Link to="/create-event">
                  <Button variant="secondary" size="lg">
                    Start Your Eco Event
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {impactStats.map((stat) => (
            <Card key={stat.label} className="p-6 text-center hover:shadow-elegant transition-smooth">
              <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            How We Make Events <span className="text-secondary">Sustainable</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ecoFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="p-6 hover:shadow-elegant transition-smooth">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full gradient-eco flex items-center justify-center flex-shrink-0">
                      <Icon className="h-7 w-7 text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Green Score Section */}
        <Card className="p-8 gradient-eco text-secondary-foreground mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 rounded-full bg-secondary-foreground/10 flex items-center justify-center flex-shrink-0">
              <Award className="h-16 w-16" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-3">Earn Your Green Score</h2>
              <p className="text-lg text-secondary-foreground/90 mb-4">
                Track your environmental impact with our Green Score system. 
                Each sustainable choice adds to your score and shows your commitment to the planet.
              </p>
              <Button variant="outline" size="lg" className="bg-secondary-foreground/10 border-secondary-foreground/20">
                Calculate Your Score
              </Button>
            </div>
          </div>
        </Card>

        {/* Partner Network */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Our Eco <span className="text-secondary">Partners</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We work with certified organizations and local communities to ensure 
            every aspect of waste management is handled responsibly and ethically.
          </p>
          <Button variant="default" size="lg">
            View Partner Network
          </Button>
        </div>
      </main>
    </div>
  );
}
