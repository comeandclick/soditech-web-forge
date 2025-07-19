import { ExternalLink, Star, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Partnerships = () => {
  const partners = [
    {
      name: "Technilab",
      url: "https://www.technilab.fr",
      specialty: "Laboratory & Process Equipment",
      description: "Leading French manufacturer of laboratory and process equipment for environmental analysis and quality control.",
      keyProducts: ["Analytical instruments", "Laboratory equipment", "Quality control systems"]
    },
    {
      name: "Sodimate",
      url: "https://www.sodimate.com", 
      specialty: "Powder Handling Solutions",
      description: "Global leader in powder and granular material handling systems with innovative storage and dosing technologies.",
      keyProducts: ["Powder storage silos", "Dosing systems", "Pneumatic conveyors"]
    },
    {
      name: "Faure Equipments",
      url: "https://www.faureequip.com",
      specialty: "Water Treatment Systems",
      description: "Specialized in water and wastewater treatment equipment with focus on membrane technologies and filtration.",
      keyProducts: ["Membrane systems", "Filtration equipment", "Water treatment plants"]
    },
    {
      name: "FB Procédés",
      url: "https://www.fb-procedes.com",
      specialty: "Process Engineering",
      description: "Expert in industrial process engineering and automation solutions for chemical and environmental industries.",
      keyProducts: ["Process automation", "Control systems", "Engineering services"]
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
                  <div className="text-4xl font-mono font-bold text-accent mb-2">4</div>
                  <div className="text-white/90">Exclusive Partnerships</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Partners grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {partners.map((partner, index) => (
            <Card key={index} className="hover-lift">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold">{partner.name}</CardTitle>
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
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {partner.description}
                </p>

                <div>
                  <h4 className="font-semibold mb-3">Key Products & Services:</h4>
                  <div className="space-y-2">
                    {partner.keyProducts.map((product, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        <span className="text-sm">{product}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
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