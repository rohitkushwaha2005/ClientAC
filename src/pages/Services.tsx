import { Helmet } from "react-helmet-async";
import { 
  ThermometerSnowflake, 
  Droplets, 
  ArrowDownUp, 
  FileText, 
  Wrench, 
  Refrigerator,
  WashingMachine,
  Flame
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/shared/SectionHeader";
import CTAButtons from "@/components/shared/CTAButtons";
import FloatingCTA from "@/components/shared/FloatingCTA";

const services = [
  {
    icon: ThermometerSnowflake,
    title: "AC Repair",
    description: "Expert diagnosis and repair for all AC brands. We fix cooling issues, gas leakage, compressor problems, and more. Quick service with genuine spare parts.",
    features: ["All brand repair", "Gas refilling", "Compressor repair", "PCB repair"],
  },
  {
    icon: Droplets,
    title: "AC Dry / Deep Cleaning",
    description: "Professional AC cleaning to improve efficiency and air quality. Our deep cleaning removes dust, mold, and bacteria for healthier cooling.",
    features: ["Filter cleaning", "Coil cleaning", "Deep sanitization", "Odor removal"],
  },
  {
    icon: ArrowDownUp,
    title: "AC Installation & Uninstallation",
    description: "Professional AC installation and safe uninstallation services. We ensure proper mounting, wiring, and optimal placement.",
    features: ["Wall mounting", "Copper piping", "Electrical work", "Safe removal"],
  },
  {
    icon: FileText,
    title: "AMC Services",
    description: "Annual Maintenance Contracts for worry-free AC care. Regular servicing, priority support, and discounted repairs included.",
    features: ["Quarterly service", "Priority support", "Discounted repairs", "Parts warranty"],
  },
  {
    icon: Wrench,
    title: "AC Piping Work",
    description: "Expert copper piping installation for new AC setups. We handle complex piping projects for homes, flats, and commercial spaces.",
    features: ["Copper piping", "Drain piping", "Concealed work", "Commercial projects"],
  },
  {
    icon: Refrigerator,
    title: "Fridge Service & Maintenance",
    description: "Complete refrigerator repair and maintenance. From cooling issues to compressor replacement, we service all fridge types and brands.",
    features: ["All brands", "Gas charging", "Thermostat repair", "Door seal replacement"],
  },
  {
    icon: WashingMachine,
    title: "Washing Machine Repair",
    description: "Expert washing machine repair for top-load, front-load, and semi-automatic machines. Quick fixes for all common issues.",
    features: ["All types", "Motor repair", "Drum issues", "Control panel"],
  },
  {
    icon: Flame,
    title: "Oven & Geyser Repair",
    description: "Safe and reliable oven and geyser repair services. We fix heating issues, electrical problems, and ensure safe operation.",
    features: ["Electric/gas oven", "Water heater", "Safety checks", "Element replacement"],
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services - AC Repair, Fridge, Washing Machine Service Mumbai</title>
        <meta 
          name="description" 
          content="Professional AC repair, installation, cleaning, fridge service, washing machine repair in Mumbai. Expert technicians, genuine parts, same-day service." 
        />
      </Helmet>

      <Header />
      <FloatingCTA />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding gradient-hero text-primary-foreground">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-sm font-medium mb-4">
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Complete Home Appliance Solutions
              </h1>
              <p className="text-xl text-primary-foreground/90">
                From AC repair to washing machine maintenance, we provide expert services for all your home appliance needs.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div 
                  key={service.title}
                  className="group bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border/50 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.features.map((feature) => (
                          <span 
                            key={feature}
                            className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <CTAButtons variant="compact" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding gradient-dark">
          <div className="container-custom text-center">
            <SectionHeader
              title="Need Service? We're Just a Call Away!"
              subtitle="Get expert help from certified technicians. Same-day service available across Mumbai."
              light
            />
            <CTAButtons variant="hero" className="justify-center" />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Services;
