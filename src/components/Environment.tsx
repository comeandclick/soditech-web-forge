import { Leaf, Recycle, Zap, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Environment = () => {
  const commitments = [
    {
      icon: Leaf,
      title: "Eco-Designed Technologies",
      description: "All our solutions are designed with environmental impact in mind, using sustainable materials and energy-efficient processes.",
      impact: "30% reduction in environmental footprint"
    },
    {
      icon: Recycle,
      title: "Circular Economy",
      description: "Supporting the transition to circular economy with waste-to-resource technologies and material recovery systems.",
      impact: "85% material recovery rate"
    },
    {
      icon: Zap,
      title: "Energy Efficiency",
      description: "Low-energy systems that minimize power consumption while maximizing performance and operational efficiency.",
      impact: "40% energy savings vs. conventional systems"
    },
    {
      icon: Target,
      title: "Vision 2030 Alignment",
      description: "Contributing to regional sustainability goals and environmental targets across the MENA region.",
      impact: "Aligned with UN SDGs"
    }
  ];

  const innovations = [
    {
      title: "Smart Dosing Systems",
      description: "Precision chemical dosing that reduces waste and optimizes treatment efficiency",
      progress: 95
    },
    {
      title: "Energy Recovery Solutions",
      description: "Heat and energy recovery systems for industrial processes",
      progress: 88
    },
    {
      title: "Emission Reduction",
      description: "Advanced filtration and scrubbing technologies for cleaner air",
      progress: 92
    },
    {
      title: "Water Conservation",
      description: "Closed-loop systems and water recycling technologies",
      progress: 90
    }
  ];

  return (
    <section id="environment" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Environmental Commitment
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading the industrial transition towards sustainable practices through innovative 
            eco-conscious technologies and environmental stewardship.
          </p>
        </div>

        {/* Mission statement */}
        <div className="mb-16">
          <Card className="bg-eco-gradient text-white shadow-eco">
            <CardContent className="p-8 lg:p-12 text-center">
              <h3 className="text-2xl font-bold mb-6">Our Environmental Mission</h3>
              <p className="text-lg leading-relaxed max-w-4xl mx-auto">
                At SODITECH, we believe that industrial progress and environmental protection go hand in hand. 
                Our mission is to provide technologies that not only meet today's industrial needs but also 
                safeguard tomorrow's environment for future generations.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Environmental commitments */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12">Our Environmental Initiatives</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commitments.map((commitment, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardHeader>
                  <div className="flex items-center justify-center w-16 h-16 bg-eco-light rounded-full mb-4 mx-auto">
                    <commitment.icon className="h-8 w-8 text-eco-primary" />
                  </div>
                  <CardTitle className="text-lg">{commitment.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {commitment.description}
                  </p>
                  <div className="bg-eco-light text-eco-dark text-xs font-semibold px-3 py-1 rounded-full">
                    {commitment.impact}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Innovation progress */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12">Innovation Progress</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {innovations.map((innovation, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold">{innovation.title}</h4>
                    <span className="text-sm font-mono text-primary">{innovation.progress}%</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {innovation.description}
                  </p>
                  <Progress value={innovation.progress} className="h-2" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications & Standards */}
        <div>
          <Card className="bg-gradient-to-r from-primary/5 to-eco-primary/5 border-eco-primary/20">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Certifications & Standards</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Our commitment to environmental excellence is validated through rigorous 
                    certifications and adherence to international environmental standards.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-eco-primary rounded-full"></div>
                      <span>ISO 14001 Environmental Management</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-eco-primary rounded-full"></div>
                      <span>EU Environmental Standards</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-eco-primary rounded-full"></div>
                      <span>Carbon Footprint Reduction</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-eco-primary rounded-full"></div>
                      <span>Sustainable Manufacturing</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-mono font-bold text-eco-primary mb-2">100%</div>
                  <div className="text-muted-foreground">Environmental Compliance</div>
                  <div className="mt-6">
                    <div className="text-2xl font-mono font-bold text-primary mb-1">-40%</div>
                    <div className="text-sm text-muted-foreground">CO₂ Emissions Reduction</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Environment;