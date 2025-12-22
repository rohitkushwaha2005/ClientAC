import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Snowflake, Clock, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-dark text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                <Snowflake className="w-6 h-6" />
              </div>
              <div>
                <span className="text-lg font-bold">CoolCare</span>
                <span className="text-xs text-primary-foreground/70 block -mt-1">AC & Appliance Services</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your trusted partner for AC repair, installation, and home appliance services in Mumbai. 
              7+ years of experience serving thousands of happy customers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Service Areas", href: "/areas" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                "AC Repair",
                "AC Installation",
                "AC Cleaning",
                "Fridge Service",
                "Washing Machine Repair",
                "AMC Services",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 text-accent" />
                <div className="text-sm">
                  <a href="tel:7250770449" className="text-primary-foreground hover:text-accent transition-colors block">
                    7250770449
                  </a>
                  <a href="tel:9004300667" className="text-primary-foreground hover:text-accent transition-colors block">
                    9004300667
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 mt-0.5 text-accent" />
                <a
                  href="https://wa.me/917250770449"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-accent" />
                <span className="text-primary-foreground/70 text-sm">Mumbai, Maharashtra, India</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-0.5 text-accent" />
                <span className="text-primary-foreground/70 text-sm">Mon - Sun: 8:00 AM - 9:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm text-center md:text-left">
            © {currentYear} CoolCare Services. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <span className="text-primary-foreground/60">Trusted AC & Appliance Services in Mumbai</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
