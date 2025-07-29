import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MenaMap from "@/components/MenaMap";
import WebQuoteForm from "./WebQuoteForm";
import { useTranslation } from './TranslationProvider';

const Contact = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: Mail,
      title: t('contact.emailTitle'),
      value: "contact@soditech-ltd.com",
      description: t('contact.emailDesc'),
      action: () => window.open('mailto:contact@soditech-ltd.com', '_self')
    },
    {
      icon: Phone,
      title: t('contact.phone'),
      value: "+971 50 763 6248",
      description: t('contact.phoneDesc'),
      action: () => window.open('tel:+971507636248', '_self')
    },
    {
      icon: MapPin,
      title: t('contact.office'),
      value: "Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai – United Arab Emirates",
      description: t('contact.officeDesc'),
      action: () => window.open('https://maps.google.com/maps?q=Dubai+Digital+Park+Dubai+Silicon+Oasis', '_blank')
    }
  ];

  const menaCountries = [
    "United Arab Emirates", "Saudi Arabia", "Qatar", "Kuwait", "Oman", "Bahrain",
    "Egypt", "Morocco", "Algeria", "Tunisia", "Libya", "Jordan", "Lebanon"
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover-lift cursor-pointer transition-transform duration-300" onClick={info.action}>
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

            {/* MENA Regional Map */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">{t('contact.coverage')}</CardTitle>
              </CardHeader>
              <CardContent>
                <MenaMap className="h-48 mb-4" />
                <div className="flex flex-wrap gap-2">
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
            <WebQuoteForm />
          </div>
        </div>

        {/* Dubai Office Location Map */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">{t('contact.dubaiHq')}</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('contact.dubaiHqDesc')}
            </p>
          </div>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <MenaMap className="h-64" showDubaiOffice={true} />
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">{t('contact.address')}</h4>
                    <p className="text-muted-foreground">
                      Building A1, Dubai Digital Park<br />
                      Dubai Silicon Oasis<br />
                      Dubai – United Arab Emirates
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{t('contact.contact')}</h4>
                    <p className="text-muted-foreground">
                      <a href="mailto:contact@soditech-ltd.com" className="hover:text-primary transition-colors duration-300">
                        contact@soditech-ltd.com
                      </a><br />
                      <a href="tel:+971507636248" className="hover:text-primary transition-colors duration-300">
                        +971 50 763 6248
                      </a>
                    </p>
                  </div>
                  <Button 
                    onClick={() => window.open('https://maps.google.com/maps?q=Dubai+Digital+Park+Dubai+Silicon+Oasis', '_blank')}
                    className="hover:scale-105 transition-transform duration-300"
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    {t('contact.viewMaps')}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;