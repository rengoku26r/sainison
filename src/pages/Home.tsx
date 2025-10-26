import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tractor, Users, Clock, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-farm.jpg";
import machineryImage from "@/assets/farm-machinery.jpg";
import growthImage from "@/assets/soil-growth.jpg";

const Home = () => {
  const features = [
    {
      icon: Tractor,
      title: "Modern Machinery",
      description: "State-of-the-art tractors and equipment for efficient farming",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Professional and experienced agricultural specialists",
    },
    {
      icon: Clock,
      title: "Fast Response",
      description: "Quick service delivery to meet your farming schedule",
    },
    {
      icon: Award,
      title: "Reliable Service",
      description: "Trusted by farmers across Jhunjhunu district",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                The Path to Progress to{" "}
                <span className="text-primary">Every Farm</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Professional agricultural services with modern machinery in Jhunjhunu, Rajasthan. 
                Making farming easier, faster, and more productive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  <Link to="/contact">Get Started</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
                >
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <img
                src={heroImage}
                alt="Modern farming with tractors in Rajasthan"
                className="relative rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Summary Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={machineryImage}
                alt="Agricultural machinery at work"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                About <span className="text-primary">Saini Son</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Located in Village Budania (333025), Jhunjhunu, Rajasthan, Saini Son is a modern 
                agricultural center dedicated to providing professional assistance to farmers across the region.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We specialize in sowing, planting, plowing, harvesting, seeding, and other essential 
                agricultural tasks using our fleet of modern tractors and advanced machinery. Our mission 
                is to help farmers realize the full potential of their farms through efficient, reliable service.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                <Link to="/about">Read Full Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose <span className="text-primary">Saini Son</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine modern technology with agricultural expertise to deliver exceptional results
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="border-2 hover:border-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src={growthImage}
            alt="Agricultural growth"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Farm?
            </h2>
            <p className="text-lg opacity-90">
              Contact us today to discuss how we can help make your farming operations more efficient and productive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-card text-foreground hover:bg-card/90 font-semibold"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
              {/* <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold"
              >
                <a
                  href="https://wa.me/919636525991"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Us
                </a>
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
