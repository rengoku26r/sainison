import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Sparkles } from "lucide-react";
import machineryImage from "@/assets/farm-machinery.jpg";
import growthImage from "@/assets/soil-growth.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To make farming easier, faster, and more productive by providing modern agricultural solutions and professional services to farmers across Rajasthan.",
    },
    {
      icon: Heart,
      title: "Our Commitment",
      description:
        "We are dedicated to supporting the farming community with reliable service, fair pricing, and a genuine commitment to their success and prosperity.",
    },
    {
      icon: Sparkles,
      title: "Our Vision",
      description:
        "To be the leading agricultural service provider in the region, helping every farm realize its full potential through innovation and expertise.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              About <span className="text-primary">Saini Son</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A modern agricultural center dedicated to serving farmers with professional expertise and advanced machinery
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our <span className="text-primary">Story</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Saini Son was established with a clear vision: to bridge the gap between traditional farming 
                practices and modern agricultural technology. Located in the heart of Village Budania (333025), 
                Jhunjhunu, Rajasthan, we have become a trusted partner for farmers seeking to enhance their 
                productivity and efficiency.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our journey began with a simple observation—many farmers in our region lacked access to modern 
                machinery and professional agricultural services. This gap often resulted in lower yields, increased 
                labor costs, and missed opportunities for growth.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we proudly serve the farming community with a fleet of modern tractors and advanced equipment, 
                providing comprehensive services including sowing, planting, plowing, harvesting, and seeding. Our 
                team of experienced professionals works closely with farmers to understand their unique needs and 
                deliver customized solutions.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <img
                src={machineryImage}
                alt="Modern agricultural machinery"
                className="relative rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and commitment to the farming community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-2 hover:border-primary hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src={growthImage}
                alt="Agricultural growth and progress"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                What We <span className="text-primary">Offer</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our comprehensive agricultural services are designed to meet the diverse needs of modern farming:
              </p>
              <ul className="space-y-4">
                {[
                  "Professional sowing and planting services with precision equipment",
                  "Efficient plowing and land preparation using modern tractors",
                  "Timely harvesting services to maximize crop quality",
                  "Advanced seeding techniques for optimal germination",
                  "Custom agricultural solutions tailored to your farm's needs",
                  "Ongoing support and consultation for farming best practices",
                ].map((service, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
