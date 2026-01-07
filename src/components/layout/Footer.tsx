import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, MessageCircle, ChevronDown } from "lucide-react";
import logoImage from "@/assets/logo.png";
import { useIsMobile } from "@/hooks/use-mobile";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [quickLinksOpen, setQuickLinksOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const handleLinkClick = (href: string) => {
    navigate(href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Service Areas", href: "/areas" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    "AC Repair",
    "AC Installation",
    "AC Cleaning",
    "Fridge Service",
    "Washing Machine Repair",
    "AMC Services",
  ];

  return (
    <footer className="bg-foreground dark:bg-card text-background dark:text-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg overflow-hidden">
                <img src={logoImage} alt="ultimate cool care Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-lg font-bold">ultimate cool care</span>
                <span className="text-xs text-background/70 dark:text-muted-foreground block -mt-1">AC & Appliance Services</span>
              </div>
            </div>
            <p className="text-background/80 dark:text-muted-foreground text-sm leading-relaxed">
              Your trusted partner for AC repair, installation, and home appliance services in Mumbai. 
              7+ years of experience serving thousands of happy customers.
            </p>
          </div>

          {/* Quick Links - Accordion on Mobile */}
          <div>
            {isMobile ? (
              <div className="border-b border-background/20 dark:border-border pb-2">
                <button
                  onClick={() => setQuickLinksOpen(!quickLinksOpen)}
                  className="flex items-center justify-between w-full py-3 text-lg font-semibold"
                >
                  <span>Quick Links</span>
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform duration-300 ${quickLinksOpen ? 'rotate-180' : ''}`} 
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    quickLinksOpen ? 'max-h-60 opacity-100 pb-3' : 'max-h-0 opacity-0'
                  }`}
                >
                  <ul className="space-y-2 pl-1">
                    {quickLinks.map((link) => (
                      <li key={link.name}>
                        <button
                          onClick={() => handleLinkClick(link.href)}
                          className="text-background/70 dark:text-muted-foreground hover:text-background dark:hover:text-foreground transition-colors text-sm text-left py-1"
                        >
                          {link.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => handleLinkClick(link.href)}
                        className="text-background/70 dark:text-muted-foreground hover:text-background dark:hover:text-foreground transition-colors text-sm text-left"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          {/* Services - Accordion on Mobile */}
          <div>
            {isMobile ? (
              <div className="border-b border-background/20 dark:border-border pb-2">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full py-3 text-lg font-semibold"
                >
                  <span>Our Services</span>
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} 
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    servicesOpen ? 'max-h-60 opacity-100 pb-3' : 'max-h-0 opacity-0'
                  }`}
                >
                  <ul className="space-y-2 pl-1">
                    {services.map((service) => (
                      <li key={service}>
                        <button
                          onClick={() => handleLinkClick("/services")}
                          className="text-background/70 dark:text-muted-foreground hover:text-background dark:hover:text-foreground transition-colors text-sm text-left py-1"
                        >
                          {service}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <>
                <h3 className="text-lg font-semibold mb-4">Our Services</h3>
                <ul className="space-y-2">
                  {services.map((service) => (
                    <li key={service}>
                      <button
                        onClick={() => handleLinkClick("/services")}
                        className="text-background/70 dark:text-muted-foreground hover:text-background dark:hover:text-foreground transition-colors text-sm text-left"
                      >
                        {service}
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 text-accent" />
                <div className="text-sm">
                  <a href="tel:7250770449" className="text-background dark:text-foreground hover:text-accent transition-colors block">
                    7250770449
                  </a>
                  <a href="tel:9004300667" className="text-background dark:text-foreground hover:text-accent transition-colors block">
                    9004300667
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 text-accent" />
                <a
                  href="mailto:ultimatecoolcare00@gmail.com"
                  className="text-background/70 dark:text-muted-foreground hover:text-background dark:hover:text-foreground transition-colors text-sm"
                >
                  ultimatecoolcare00@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 mt-0.5 text-accent" />
                <a
                  href="https://wa.me/917250770449"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 dark:text-muted-foreground hover:text-background dark:hover:text-foreground transition-colors text-sm"
                >
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-accent" />
                <span className="text-background/70 dark:text-muted-foreground text-sm">Mumbai, Maharashtra, India</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-0.5 text-accent" />
                <div className="text-background/70 dark:text-muted-foreground text-sm">
                  <span className="block">Mon - Sun: 9:30 AM - 9:00 PM</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10 dark:border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/60 dark:text-muted-foreground text-sm text-center md:text-left">
            © {currentYear} ultimate cool care. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <span className="text-background/60 dark:text-muted-foreground">Mumbai's Trusted AC & Appliance Services</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;