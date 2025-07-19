import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const Footer = () => {
  const partners = [
    { name: "Technilab", url: "https://www.technilab.fr" },
    { name: "Sodimate", url: "https://www.sodimate.com" },
    { name: "Faure Equipments", url: "https://www.faureequip.com" },
    { name: "FB Procédés", url: "https://www.fb-procedes.com" }
  ];

  const solutions = [
    "Powder Handling",
    "Water Treatment", 
    "Sludge Processing",
    "Gas Treatment",
    "Process Lines",
    "Engineering Services"
  ];

  const regions = [
    "United Arab Emirates",
    "Saudi Arabia", 
    "Qatar",
    "Kuwait",
    "Egypt",
    "Morocco"
  ];

  return (
    <footer className="bg-industrial-dark text-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company info */}
            <div className="lg:col-span-1">
              <div className="font-mono font-bold text-2xl text-white mb-4">
                SODITECH
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                45+ years of industrial expertise delivering innovative solutions 
                for environment and process industries across the MENA region.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-accent" />
                  <span className="text-sm">info@soditech-ltd.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-accent" />
                  <span className="text-sm">+971 XX XXX XXXX</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span className="text-sm">MENA Region</span>
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="font-semibold text-white mb-6">Our Solutions</h3>
              <ul className="space-y-3">
                {solutions.map((solution, index) => (
                  <li key={index}>
                    <a 
                      href="#solutions" 
                      className="text-sm text-white/80 hover:text-accent transition-colors"
                    >
                      {solution}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Partners */}
            <div>
              <h3 className="font-semibold text-white mb-6">Our Partners</h3>
              <ul className="space-y-3">
                {partners.map((partner, index) => (
                  <li key={index}>
                    <a 
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/80 hover:text-accent transition-colors flex items-center gap-2"
                    >
                      {partner.name}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Areas */}
            <div>
              <h3 className="font-semibold text-white mb-6">Service Areas</h3>
              <ul className="space-y-3">
                {regions.map((region, index) => (
                  <li key={index}>
                    <span className="text-sm text-white/80">{region}</span>
                  </li>
                ))}
                <li>
                  <span className="text-sm text-accent">+ More MENA Countries</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-white/60">
              © 2024 SODITECH. All rights reserved. | Industrial Solutions for Environment & Process Industry
            </div>
            <div className="flex items-center gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;