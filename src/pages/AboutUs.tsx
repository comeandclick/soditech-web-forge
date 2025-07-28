import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Target, Leaf, Users, Globe, Lightbulb } from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      icon: Award,
      title: "Reliability",
      description: "45+ years of proven industrial expertise and consistent delivery across complex projects"
    },
    {
      icon: Target,
      title: "Precision",
      description: "High standards and smart engineering in every solution, ensuring optimal performance"
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Committed to eco-conscious technologies and environmental responsibility in all our operations"
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Building long-term relationships with clients and exclusive partnerships with leading manufacturers"
    },
    {
      icon: Globe,
      title: "Regional Excellence",
      description: "Deep understanding of MENA market requirements and local industrial challenges"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously adopting cutting-edge technologies and innovative approaches to industrial solutions"
    }
  ];

  const team = [
    {
      role: "Executive Leadership",
      description: "Seasoned professionals with decades of experience in industrial solutions and regional market development"
    },
    {
      role: "Technical Experts",
      description: "Specialized engineers and technicians ensuring optimal system design, installation, and maintenance"
    },
    {
      role: "Sales & Support",
      description: "Dedicated team providing comprehensive customer support from initial consultation to after-sales service"
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
              Qui Sommes Nous ?
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
              Depuis 1979, SODITECH est votre partenaire de confiance pour les solutions industrielles 
              innovantes dans les secteurs de l'environnement et des procédés industriels.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-scale-in">
              <div className="text-center">
                <div className="text-4xl font-mono font-bold text-primary">45+</div>
                <div className="text-sm text-muted-foreground">Années d'Expertise</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-mono font-bold text-accent">7</div>
                <div className="text-sm text-muted-foreground">Partenaires Exclusifs</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-mono font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Pays MENA</div>
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
                <h3 className="text-2xl font-bold mb-4">Notre Mission</h3>
                <p className="text-lg leading-relaxed">
                  Fournir des solutions industrielles de pointe qui allient excellence technique 
                  et responsabilité environnementale, en soutenant la transition de la région 
                  vers des pratiques industrielles durables.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-eco-gradient text-white shadow-eco hover-lift">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Notre Vision</h3>
                <p className="text-lg leading-relaxed">
                  Être le leader régional des solutions industrielles éco-responsables, 
                  contribuant activement aux objectifs environnementaux globaux et à la 
                  transformation durable de l'industrie MENA.
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
            <h2 className="text-3xl font-bold text-center mb-12">Notre Histoire</h2>
            
            <div className="space-y-12">
              <Card className="hover-lift animate-fade-in">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                      1979
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">Fondation de SODITECH</h3>
                      <p className="text-muted-foreground">
                        Création de l'entreprise avec pour vision de devenir un acteur majeur 
                        des solutions industrielles dans la région MENA.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift animate-fade-in">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
                      1990s
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">Expansion Régionale</h3>
                      <p className="text-muted-foreground">
                        Extension des opérations à travers la région MENA, établissement 
                        de relations clients durables et développement de l'expertise technique.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift animate-fade-in">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                      2000s
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">Partenariats Technologiques</h3>
                      <p className="text-muted-foreground">
                        Établissement de partenariats exclusifs avec des fabricants européens 
                        de premier plan, garantissant l'accès aux technologies les plus avancées.
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
                      <h3 className="text-xl font-bold mb-3">Focus Environnemental</h3>
                      <p className="text-muted-foreground">
                        Leadership dans la transition vers des solutions industrielles 
                        éco-responsables, contribution active aux objectifs de développement durable.
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
          <h2 className="text-3xl font-bold text-center mb-12">Nos Valeurs</h2>
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

      {/* Team */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Notre Équipe</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover-lift animate-fade-in">
                <CardContent className="p-8 text-center">
                  <h4 className="text-xl font-bold mb-4 text-primary">{member.role}</h4>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-industrial-gradient text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à Collaborer ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Découvrez comment notre expertise peut transformer vos défis industriels 
            en opportunités de croissance durable.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              variant="secondary"
              className="hover:scale-105 transition-transform duration-300"
              onClick={() => window.location.href = '#contact'}
            >
              Contactez-nous
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300"
              onClick={() => window.location.href = '#solutions'}
            >
              Nos Solutions
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;