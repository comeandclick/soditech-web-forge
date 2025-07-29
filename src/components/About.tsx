import { Award, Target, Leaf, Building2, Users, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "European Excellence",
      description: "Building on century-old European expertise and proven industrial technologies"
    },
    {
      icon: Target,
      title: "Technical Integration",
      description: "Complete system solutions, from design to turnkey implementation"
    },
    {
      icon: Leaf,
      title: "Environmental Focus",
      description: "Specialized in eco-conscious technologies for sustainable industrial practices"
    },
    {
      icon: Building2,
      title: "Exclusive Partnership",
      description: "Sole MENA representative for leading European manufacturers"
    },
    {
      icon: Users,
      title: "Local Expertise",
      description: "Regional market understanding with international technical standards"
    },
    {
      icon: Globe,
      title: "Complete Solutions",
      description: "From commercial promotion to project implementation and commissioning"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About SODITECH
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your exclusive MENA gateway to century-old European expertise in 
            environmental and process industry solutions.
          </p>
        </div>

        {/* Mission statement */}
        <div className="mb-16">
          <Card className="bg-industrial-gradient text-white shadow-industrial">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-lg leading-relaxed">
                    To serve as the exclusive MENA anchor point for leading European manufacturers, 
                    delivering proven technical expertise and complete industrial solutions while 
                    fostering sustainable development across the region.
                  </p>
                </div>
                <div className="text-center lg:text-right">
                  <div className="text-4xl font-mono font-bold text-accent mb-2">100+</div>
                  <div className="text-white/90">Years Partner Heritage</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* What makes us unique */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">What Makes Us Unique</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="hover-lift">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold mb-4 text-primary">Strategic Positioning</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Founded in 2024 as a strategic consolidation of established European companies, 
                  SODITECH brings together century-old expertise under one regional umbrella. 
                  Our partners include companies like FAURE Équipement (founded 1868) with over 
                  150 years of industrial excellence.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold mb-4 text-primary">Complete Integration</h4>
                <p className="text-muted-foreground leading-relaxed">
                  We don't just sell equipment - we deliver complete systems. From chemical 
                  preparation and sludge dehydration to bulk storage, pneumatic transfer, 
                  and dust treatment, our complementary expertise covers the full technical scope.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>


        {/* Core Strengths */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12">Our Core Strengths</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover-lift group">
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
      </div>
    </section>
  );
};

export default About;