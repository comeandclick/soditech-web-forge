import { ExternalLink, Star, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Partnerships = () => {
  const environmentalPartners = [
    {
      name: "SODIMATE",
      url: "https://www.sodimate.com",
      specialty: "Dry Chemical Solutions",
      description: "World leader in dry chemical handling, dosing and injection systems",
      keyProducts: ["Lime dosing systems", "Polymer preparation", "Chemical injection", "Silo storage"],
      sectors: ["Water Treatment", "Waste Management", "Desalination"]
    },
    {
      name: "FAURE Équipements",
      url: "https://www.faureequip.com",
      specialty: "Liquid & Sludge Treatment",
      description: "Innovative solutions for liquid treatment and sludge management",
      keyProducts: ["Sludge stabilization", "Liquid dosing", "Mixing systems", "Storage tanks"],
      sectors: ["Municipal Water", "Industrial Wastewater", "Oil & Gas"]
    },
    {
      name: "FB Procédés",
      url: "https://www.fb-procedes.com",
      specialty: "Gas & Fume Treatment",
      description: "Advanced air pollution control and fume treatment technologies",
      keyProducts: ["Scrubbers", "Biofilters", "Thermal oxidizers", "Dust collectors"],
      sectors: ["Chemical Industry", "Waste Management", "Oil & Gas"]
    }
  ];

  const processIndustryPartners = [
    {
      name: "TECHNILAB",
      url: "https://www.technilab.fr",
      specialty: "Powder Handling Systems",
      description: "Premium solutions for powder conveying, dosing and storage systems",
      keyProducts: ["Pneumatic conveyors", "Big bag stations", "Screw feeders", "Silos"],
      sectors: ["Pharmaceutical", "Food Processing", "Chemical"]
    },
    {
      name: "Valve Engineering",
      url: "https://www.valvengineering.com",
      specialty: "Industrial Valves & Controls",
      description: "High-performance valve solutions for critical industrial applications",
      keyProducts: ["Control valves", "Safety valves", "Ball valves", "Butterfly valves"],
      sectors: ["Pharmaceutical", "Chemical", "Food Processing"]
    },
    {
      name: "Parimix",
      url: "https://parimix.com",
      specialty: "Mixing & Blending Solutions",
      description: "Advanced mixing technology for powder and liquid applications",
      keyProducts: ["Industrial mixers", "Blending systems", "Agitators", "Custom solutions"],
      sectors: ["Chemical", "Pharmaceutical", "Food & Beverage"]
    },
    {
      name: "Transitube",
      url: "https://transitube.com",
      specialty: "Pneumatic Conveying",
      description: "Specialized pneumatic conveying systems for bulk materials",
      keyProducts: ["Dense phase systems", "Dilute phase systems", "Vacuum conveyors", "Pressure vessels"],
      sectors: ["Pharmaceutical", "Food Processing", "Chemical"]
    }
  ];

  return (
    <section id="partnerships" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in">
            Exclusive MENA Partnerships
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Exclusive distributor partnerships across MENA with <span className="text-accent font-semibold">7 leading European manufacturers</span>, 
            ensuring access to cutting-edge technologies and comprehensive industrial solutions.
          </p>
        </div>

        {/* Partnership value proposition */}
        <div className="mb-16">
          <Card className="bg-industrial-gradient text-white shadow-industrial hover-lift animate-scale-in">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold mb-4">Why Our Partnerships Matter</h3>
                  <p className="text-lg leading-relaxed mb-6">
                    As the exclusive MENA distributor for these renowned European manufacturers, 
                    SODITECH brings you direct access to proven technologies, comprehensive support, 
                    and the reliability that comes with established industrial partnerships.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-accent" />
                      <span className="font-medium">Quality Guaranteed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-accent" />
                      <span className="font-medium">Local Support</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-mono font-bold text-accent mb-2">7</div>
                  <div className="text-white/90">Exclusive Partnerships</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Environmental Treatment Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center animate-fade-in">Environmental Treatment Partners</h3>
          <p className="text-muted-foreground text-center mb-12 max-w-3xl mx-auto animate-fade-in">
            Leading technologies for water treatment, wastewater management, sludge processing, and air pollution control in municipal and industrial applications.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {environmentalPartners.map((partner, index) => (
              <Card key={index} className="hover-lift group animate-fade-in">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                      {partner.name}
                    </h4>
                    <a 
                      href={partner.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent hover:text-primary transition-colors duration-300 hover:scale-110 transform"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                  <div className="mb-4">
                    <Badge variant="secondary" className="mb-3 animate-scale-in">{partner.specialty}</Badge>
                    <p className="text-muted-foreground mb-4">{partner.description}</p>
                  </div>
                  <div className="mb-4">
                    <h5 className="font-semibold mb-2 text-sm">Key Sectors:</h5>
                    <div className="flex flex-wrap gap-2">
                      {partner.sectors.map((sector, i) => (
                        <Badge key={i} variant="outline" className="text-xs hover:bg-accent/10 transition-colors">{sector}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2 text-sm">Key Products:</h5>
                    <div className="flex flex-wrap gap-2">
                      {partner.keyProducts.map((product, i) => (
                        <Badge key={i} variant="secondary" className="text-xs bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-colors">{product}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Process Industry Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center animate-fade-in">Process Industry Partners</h3>
          <p className="text-muted-foreground text-center mb-12 max-w-3xl mx-auto animate-fade-in">
            Specialized solutions for pharmaceutical, food processing, and chemical industries requiring precise powder handling, mixing, and conveying systems.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {processIndustryPartners.map((partner, index) => (
              <Card key={index} className="hover-lift group animate-fade-in">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                      {partner.name}
                    </h4>
                    <a 
                      href={partner.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent hover:text-primary transition-colors duration-300 hover:scale-110 transform"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                  <div className="mb-4">
                    <Badge variant="secondary" className="mb-3 animate-scale-in">{partner.specialty}</Badge>
                    <p className="text-muted-foreground mb-4">{partner.description}</p>
                  </div>
                  <div className="mb-4">
                    <h5 className="font-semibold mb-2 text-sm">Key Sectors:</h5>
                    <div className="flex flex-wrap gap-2">
                      {partner.sectors.map((sector, i) => (
                        <Badge key={i} variant="outline" className="text-xs hover:bg-accent/10 transition-colors">{sector}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2 text-sm">Key Products:</h5>
                    <div className="flex flex-wrap gap-2">
                      {partner.keyProducts.map((product, i) => (
                        <Badge key={i} variant="secondary" className="text-xs bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-colors">{product}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Regional coverage */}
        <div className="mt-16">
          <Card className="text-center hover-lift animate-fade-in">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">MENA Regional Coverage</h3>
              <p className="text-muted-foreground mb-6">
                Our exclusive partnerships cover the entire Middle East and North Africa region, 
                providing comprehensive support and service across all markets.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors">UAE</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors">Saudi Arabia</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors">Qatar</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors">Kuwait</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors">Oman</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors">Egypt</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors">Morocco</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors">Algeria</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;