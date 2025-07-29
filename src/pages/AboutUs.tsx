import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Target, Leaf, Users, Globe, Lightbulb } from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      icon: Award,
      title: "Century-Old Heritage",
      description: "Building on proven industrial expertise from European partners, some with over 150 years of experience"
    },
    {
      icon: Target,
      title: "Technical Integration",
      description: "Complete system solutions covering chemical preparation, dehydration, storage, transfer, and treatment"
    },
    {
      icon: Leaf,
      title: "Environmental Excellence",
      description: "Specialized in eco-conscious technologies for water treatment, waste valorization, and industrial utilities"
    },
    {
      icon: Users,
      title: "Exclusive Partnership",
      description: "Sole MENA representative for leading European manufacturers, ensuring unique market access"
    },
    {
      icon: Globe,
      title: "Regional Expertise",
      description: "Combining European quality and engineering with deep MENA market understanding and local responsiveness"
    },
    {
      icon: Lightbulb,
      title: "Complete Solutions",
      description: "From commercial promotion and technical support to full project implementation and commissioning"
    }
  ];

  const services = [
    {
      title: "Commercial Promotion",
      description: "Comprehensive market development and business promotion for our European partners across the MENA region"
    },
    {
      title: "Technical Support",
      description: "Local engineering expertise and technical assistance for system design, specification, and optimization"
    },
    {
      title: "Project Implementation",
      description: "Complete project management from tender support to final commissioning and handover"
    },
    {
      title: "System Integration",
      description: "Combining complementary technologies into complete, turnkey solutions tailored to client requirements"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Who We Are
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
              Founded in 2024, SODITECH consolidates century-old European expertise to serve as your 
              exclusive MENA gateway for proven industrial solutions in environmental and process sectors.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-scale-in">
              <div className="text-center">
                <div className="text-4xl font-mono font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Years Partner Heritage</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-mono font-bold text-accent">7</div>
                <div className="text-sm text-muted-foreground">Exclusive Partners</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-mono font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">MENA Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="bg-industrial-gradient text-white shadow-industrial hover-lift">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg leading-relaxed">
                  To serve as the exclusive MENA anchor point for leading European manufacturers, 
                  providing comprehensive technical solutions from commercial promotion to complete 
                  project implementation and commissioning.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-eco-gradient text-white shadow-eco hover-lift">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg leading-relaxed">
                  To become the definitive bridge between century-old European industrial excellence 
                  and the dynamic MENA market, facilitating sustainable industrial transformation 
                  through proven technologies and local expertise.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Genesis</h2>
            
            <div className="space-y-12">
              <Card className="hover-lift animate-fade-in">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                      1868
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">Heritage Foundation</h3>
                      <p className="text-muted-foreground">
                        Our partner FAURE Équipement established, beginning a legacy of industrial 
                        excellence that spans over 150 years. Multiple European companies develop 
                        specialized expertise in their respective domains.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift animate-fade-in">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
                      2024
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">Strategic Consolidation</h3>
                      <p className="text-muted-foreground">
                        SODITECH founded as a strategic consolidation, bringing together 
                        leading European manufacturers under one regional umbrella to serve 
                        the MENA market with unparalleled expertise.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift animate-fade-in">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                      Today
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">Exclusive MENA Gateway</h3>
                      <p className="text-muted-foreground">
                        Operating as the exclusive MENA representative, we provide complete 
                        solutions from commercial promotion and technical support to full 
                        project implementation and commissioning.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover-lift animate-fade-in group">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6 mx-auto group-hover:bg-accent/20 transition-colors duration-300">
                    <value.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift animate-fade-in">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold mb-4 text-primary">{service.title}</h4>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-industrial-gradient text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Collaborate?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover how our expertise can transform your industrial challenges 
            into sustainable growth opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              variant="secondary"
              className="hover:scale-105 transition-transform duration-300"
              onClick={() => window.location.href = '/#contact'}
            >
              Contact Us
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300"
              onClick={() => window.location.href = '/#solutions'}
            >
              Our Solutions
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;