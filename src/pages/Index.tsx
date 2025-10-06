import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { VendorCategories } from "@/components/VendorCategories";
import { EcoSection } from "@/components/EcoSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Wallet, Leaf, CheckCircle2, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Calendar,
    title: "Smart Event Planning",
    description: "Create and manage multiple events with intelligent scheduling and reminders.",
  },
  {
    icon: Users,
    title: "Vendor Marketplace",
    description: "Connect with 500+ verified vendors across all categories in real-time.",
  },
  {
    icon: Wallet,
    title: "Budget Tracking",
    description: "Visual dashboards to track every expense and stay within budget.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Solutions",
    description: "Sustainable waste management and zero-waste event planning.",
  },
];

const steps = [
  {
    number: "01",
    title: "Create Your Event",
    description: "Set your date, budget, and event type. Our system helps you plan every detail.",
  },
  {
    number: "02",
    title: "Find Vendors",
    description: "Browse and book from our curated list of trusted vendors matched to your needs.",
  },
  {
    number: "03",
    title: "Track Everything",
    description: "Manage budgets, tasks, and guest lists all in one beautiful dashboard.",
  },
  {
    number: "04",
    title: "Celebrate Sustainably",
    description: "Enjoy your event knowing we'll handle waste responsibly and eco-friendly.",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Everything You Need in <span className="gradient-primary bg-clip-text text-transparent">One Platform</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From planning to execution, manage every aspect of your event with our comprehensive tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="p-6 text-center hover:shadow-elegant transition-smooth">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <VendorCategories />
      
      {/* How It Works */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              How It <span className="gradient-primary bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four simple steps to create the perfect event
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary text-primary-foreground text-2xl font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <EcoSection />

      {/* CTA Section */}
      <section className="py-24 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Create Magic?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of happy users who've planned their dream events with Eterna
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/dashboard">
              <Button variant="outline" size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Start Planning Now
              </Button>
            </Link>
            <Button variant="ghost" size="xl" className="text-primary-foreground border border-primary-foreground/20 hover:bg-primary-foreground/10">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Calendar className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Eterna</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Celebrate Smart. Cherish Forever. Care for the Planet.
            </p>
            <p className="text-sm text-muted-foreground">
              © 2025 Eterna. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
