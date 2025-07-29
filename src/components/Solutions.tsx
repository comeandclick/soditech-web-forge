import { Cog, Droplets, Wind, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import solution1Image from "@/assets/solution-1.jpg";
import solution2Image from "@/assets/solution-2.jpg";
import solution3Image from "@/assets/solution-3.jpg";
import { useTranslation } from './TranslationProvider';

const Solutions = () => {
  const { t } = useTranslation();
  
  const solutions = [
    {
      icon: Cog,
      title: t('solutions.powder.title'),
      subtitle: t('solutions.powder.subtitle'),
      image: solution1Image,
      description: "Comprehensive solutions for powder and granular material handling including silos, screw conveyors, big bag stations, feeders, and pneumatic transport systems.",
      features: [
        "Storage silos & hoppers",
        "Screw & belt conveyors", 
        "Big bag stations",
        "Dosing & feeding systems",
        "Pneumatic transport",
        "Dust collection"
      ],
      applications: ["Chemical industry", "Food processing", "Pharmaceuticals", "Mining"]
    },
    {
      icon: Droplets,
      title: "Water & Sludge Treatment",
      subtitle: "Advanced treatment technologies",
      image: waterTreatmentImage,
      description: "State-of-the-art water and sludge treatment solutions including lime dosing, polymer preparation, sludge stabilization, and complete treatment lines.",
      features: [
        "Lime slaking & dosing",
        "Polymer preparation",
        "Sludge dewatering",
        "Biological treatment",
        "Membrane systems",
        "Process automation"
      ],
      applications: ["Municipal water", "Industrial wastewater", "Desalination", "Sewage treatment"]
    },
    {
      icon: Wind,
      title: "Gas & Fume Treatment", 
      subtitle: "Clean air solutions",
      image: gasTreatmentImage,
      description: "Comprehensive gas and fume treatment systems including scrubbers, filters, and emission control technologies for environmental compliance.",
      features: [
        "Wet scrubbing systems",
        "Dry filtration",
        "Activated carbon",
        "Emission monitoring",
        "Stack systems",
        "Odor control"
      ],
      applications: ["Industrial emissions", "Wastewater treatment", "Chemical processing", "Power generation"]
    }
  ];

  return (
    <section id="solutions" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete industrial solutions designed for efficiency, reliability, and environmental compliance. 
            From concept to commissioning, we deliver integrated systems that meet your exact requirements.
          </p>
        </div>

        {/* Solutions grid */}
        <div className="space-y-16">
          {solutions.map((solution, index) => (
            <Card key={index} className="overflow-hidden shadow-industrial hover-lift">
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Image */}
                <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className="p-8 lg:p-12">
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                        <solution.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{solution.title}</CardTitle>
                        <p className="text-primary font-medium">{solution.subtitle}</p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-0">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {solution.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {solution.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Applications */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Applications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.applications.map((app, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex gap-3">
                      <Button className="bg-primary hover:bg-primary-variant">
                        Learn More
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Technical Sheet
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Complete lines CTA */}
        <div className="mt-16">
          <Card className="bg-eco-gradient text-white text-center shadow-eco">
            <CardContent className="p-12">
              <h3 className="text-2xl font-bold mb-4">Complete Process Lines</h3>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                Need a complete integrated solution? We design and deliver end-to-end process lines 
                combining multiple technologies for optimal performance and efficiency.
              </p>
              <Button size="lg" className="bg-white text-eco-primary hover:bg-white/90 font-semibold">
                Request Custom Solution
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Solutions;