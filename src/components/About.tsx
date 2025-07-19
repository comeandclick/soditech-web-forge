import { Calendar, Award, Target, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const milestones = [
    {
      year: "1979",
      title: "Company Founded",
      description: "SODITECH established as an industrial solutions provider"
    },
    {
      year: "1990s",
      title: "Regional Expansion",
      description: "Extended operations across MENA region"
    },
    {
      year: "2000s",
      title: "Technology Partnerships",
      description: "Secured exclusive partnerships with European manufacturers"
    },
    {
      year: "2020+",
      title: "Environmental Focus",
      description: "Leading the transition to eco-conscious industrial solutions"
    }
  ];

  const values = [
    {
      icon: Award,
      title: "Reliability",
      description: "45+ years of proven industrial expertise and consistent delivery"
    },
    {
      icon: Target,
      title: "Precision",
      description: "High standards and smart engineering in every solution"
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Committed to eco-conscious technologies and environmental responsibility"
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
            Four decades of engineering excellence, driving industrial innovation 
            and environmental responsibility across the MENA region.
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
                    To provide cutting-edge industrial solutions that combine technical excellence 
                    with environmental stewardship, supporting the region's transition toward 
                    sustainable industrial practices and contributing to global environmental goals.
                  </p>
                </div>
                <div className="text-center lg:text-right">
                  <div className="text-4xl font-mono font-bold text-accent mb-2">45+</div>
                  <div className="text-white/90">Years of Excellence</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Company timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12">Our Journey</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full text-white font-mono font-bold mb-4 mx-auto">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                  <h4 className="font-semibold mb-2">{milestone.title}</h4>
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12">Our Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6 mx-auto">
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