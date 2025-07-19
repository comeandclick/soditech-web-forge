import { ExternalLink, Star, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Partnerships = () => {
  const processIndustryPartners = [
    {
      name: "Sodimate",
      url: "https://www.sodimate.com", 
      specialty: "Powder Handling Solutions",
      description: "Global leader in powder and granular material handling systems for pharmaceutical, food, and chemical industries.",
      keyProducts: ["Powder storage silos", "Dosing systems", "Pneumatic conveyors"],
      sectors: ["Pharmaceutical", "Food & Beverage", "Chemical"]
    },
    {
      name: "Valve Engineering",
      url: "https://www.valvengineering.com",
      specialty: "Process Valves & Control",
      description: "Specialized in high-performance valves and control systems for process industries.",
      keyProducts: ["Process valves", "Control systems", "Automation solutions"],
      sectors: ["Pharmaceutical", "Chemical", "Food Processing"]
    },
    {
      name: "Parimix",
      url: "https://parimix.com",
      specialty: "Mixing & Processing Equipment",
      description: "Advanced mixing and processing solutions for various industrial applications.",
      keyProducts: ["Industrial mixers", "Processing equipment", "Custom solutions"],
      sectors: ["Chemical", "Food & Beverage", "Pharmaceutical"]
    },
    {
      name: "Transitube",
      url: "https://transitube.com",
      specialty: "Pneumatic Conveying",
      description: "Innovative pneumatic conveying systems for bulk material handling.",
      keyProducts: ["Pneumatic conveyors", "Material handling", "Bulk systems"],
      sectors: ["Food Processing", "Pharmaceutical", "Chemical"]
    }
  ];

  const environmentalPartners = [
    {
      name: "Technilab",
      url: "https://www.technilab.fr",
      specialty: "Environmental Analysis Equipment",
      description: "Leading manufacturer of laboratory and environmental analysis equipment for water and air quality monitoring.",
      keyProducts: ["Water analysis", "Air monitoring", "Quality control systems"],
      sectors: ["Water Treatment", "Environmental Monitoring", "Desalination"]
    },
    {
      name: "Faure Equipments",
      url: "https://www.faureequip.com",
      specialty: "Water & Wastewater Treatment",
      description: "Specialized in water treatment, desalination, and wastewater management systems.",
      keyProducts: ["Membrane systems", "Filtration equipment", "Desalination plants"],
      sectors: ["Potable Water", "Desalination", "Wastewater"]
    },
    {
      name: "FB Procédés",
      url: "https://www.fb-procedes.com",
      specialty: "Environmental Process Engineering",
      description: "Expert in environmental process engineering for gas treatment, sludge processing, and Oil & Gas applications.",
      keyProducts: ["Gas treatment", "Sludge processing", "Environmental automation"],
      sectors: ["Gas Treatment", "Sludge Processing", "Oil & Gas"]
    },
    {
      name: "APIA",
      url: "https://www.apia-sa.com/en/",
      specialty: "Air Pollution Control",
      description: "Advanced solutions for air pollution control and gas treatment in industrial environments.",
      keyProducts: ["Air filtration", "Gas scrubbers", "Emission control"],
      sectors: ["Air Treatment", "Gas Processing", "Oil & Gas"]
    }
  ];

  return (
    <section id="partnerships" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Exclusive MENA Partnerships
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strategic partnerships with leading European manufacturers, providing our clients 
            access to cutting-edge technologies and world-class industrial solutions.
          </p>
        </div>

        {/* Partnership value proposition */}
        <div className="mb-16">
          <Card className="bg-tech-gradient text-white shadow-industrial">
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
                  <div className="text-4xl font-mono font-bold text-accent mb-2">8</div>
                  <div className="text-white/90">Exclusive Partnerships</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Process Industry Partners */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Process Industry Partners
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Serving pharmaceutical, food & beverage, and chemical industries with advanced process solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {processIndustryPartners.map((partner, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-bold">{partner.name}</CardTitle>
                    <Button variant="outline" size="sm" asChild>
                      <a 
                        href={partner.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        Visit Site
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                  <p className="text-primary font-medium">{partner.specialty}</p>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {partner.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm">Industry Sectors:</h4>
                    <div className="flex flex-wrap gap-2">
                      {partner.sectors.map((sector, idx) => (
                        <span key={idx} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                          {sector}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Key Products:</h4>
                    <div className="space-y-1">
                      {partner.keyProducts.map((product, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                          <span className="text-xs">{product}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Environmental Treatment Partners */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Environmental Treatment Partners
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for water treatment, desalination, wastewater, gas treatment, and Oil & Gas industries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {environmentalPartners.map((partner, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-bold">{partner.name}</CardTitle>
                    <Button variant="outline" size="sm" asChild>
                      <a 
                        href={partner.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        Visit Site
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                  <p className="text-primary font-medium">{partner.specialty}</p>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {partner.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm">Industry Sectors:</h4>
                    <div className="flex flex-wrap gap-2">
                      {partner.sectors.map((sector, idx) => (
                        <span key={idx} className="px-2 py-1 bg-accent/10 text-accent rounded text-xs">
                          {sector}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Key Products:</h4>
                    <div className="space-y-1">
                      {partner.keyProducts.map((product, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                          <span className="text-xs">{product}</span>
                        </div>
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
          <Card className="text-center">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">MENA Regional Coverage</h3>
              <p className="text-muted-foreground mb-6">
                Our exclusive partnerships cover the entire Middle East and North Africa region, 
                providing comprehensive support and service across all markets.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">UAE</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">Saudi Arabia</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">Qatar</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">Kuwait</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">Oman</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">Egypt</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">Morocco</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">Algeria</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;