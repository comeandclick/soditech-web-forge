import { useState } from "react";
import { Mail, Phone, MapPin, Upload, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    phone: "",
    projectType: "",
    message: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Sent",
      description: "Thank you for your interest. We'll contact you within 24 hours.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      country: "",
      phone: "",
      projectType: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "info@soditech-ltd.com",
      description: "Send us your project requirements"
    },
    {
      icon: Phone,
      title: "Phone & WhatsApp",
      value: "+971 XX XXX XXXX",
      description: "Direct line for urgent inquiries"
    },
    {
      icon: MapPin,
      title: "Regional Coverage",
      value: "MENA Region",
      description: "Serving across Middle East & North Africa"
    }
  ];

  const menaCountries = [
    "United Arab Emirates", "Saudi Arabia", "Qatar", "Kuwait", "Oman", "Bahrain",
    "Egypt", "Morocco", "Algeria", "Tunisia", "Libya", "Jordan", "Lebanon"
  ];

  const projectTypes = [
    "Powder Handling System",
    "Water Treatment Plant", 
    "Sludge Treatment",
    "Gas & Fume Treatment",
    "Complete Process Line",
    "Consultation & Engineering",
    "Maintenance & Service",
    "Other"
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get Your Quote Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your industrial project? Our engineering team is here to provide 
            expert guidance and customized solutions for your specific requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        <p className="text-primary font-medium mb-1">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Regional map placeholder */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Our Service Area</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-primary/5 h-40 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">MENA Region Coverage</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {menaCountries.slice(0, 6).map((country, idx) => (
                    <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      {country}
                    </span>
                  ))}
                  <span className="text-xs text-muted-foreground px-2 py-1">+7 more</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quote Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-industrial">
              <CardHeader>
                <CardTitle className="text-xl">Request Your Custom Quote</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and our engineering team will prepare a detailed proposal for your project.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Full Name *</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email Address *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@company.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Company Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Company Name</label>
                      <Input
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Country *</label>
                      <Select value={formData.country} onValueChange={(value) => handleInputChange('country', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                        <SelectContent>
                          {menaCountries.map((country) => (
                            <SelectItem key={country} value={country}>
                              {country}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Contact & Project */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Phone Number</label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+971 XX XXX XXXX"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Project Type *</label>
                      <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          {projectTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Project Details *</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Please describe your project requirements, capacity needs, timeline, and any specific technical requirements..."
                      rows={5}
                      required
                    />
                  </div>

                  {/* File Upload */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Technical Documents (Optional)</label>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground mb-2">
                        Upload technical specifications, drawings, or requirements
                      </p>
                      <Button variant="outline" size="sm" type="button">
                        Choose Files
                      </Button>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="bg-primary hover:bg-primary-variant flex-1 hover:scale-105 transition-transform duration-300"
                      onClick={(e) => {
                        e.preventDefault();
                        const form = e.currentTarget.closest('form') as HTMLFormElement;
                        const formData = new FormData(form);
                        const data = Object.fromEntries(formData);
                        console.log('Form data:', data);
                        toast({
                          title: "Quote Request Sent",
                          description: "Thank you for your interest. We'll contact you within 24 hours.",
                        });
                        form.reset();
                      }}
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Send Quote Request
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      type="button"
                      className="sm:w-auto hover:scale-105 transition-transform duration-300"
                      onClick={() => window.open('tel:+971XXXXXXXX', '_self')}
                    >
                      Call Now
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;