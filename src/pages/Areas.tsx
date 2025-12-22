import { Helmet } from "react-helmet-async";
import { MapPin, CheckCircle, Building } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/shared/SectionHeader";
import CTAButtons from "@/components/shared/CTAButtons";
import FloatingCTA from "@/components/shared/FloatingCTA";

const areas = [
  { name: "Andheri", description: "East & West areas covered" },
  { name: "Goregaon", description: "Complete coverage" },
  { name: "Malad", description: "East & West areas covered" },
  { name: "Kandivali", description: "Full area service" },
  { name: "Borivali", description: "East & West areas covered" },
  { name: "Dahisar", description: "Complete coverage" },
  { name: "Mira Road", description: "Full area service" },
];

const Areas = () => {
  return (
    <>
      <Helmet>
        <title>Service Areas - AC Repair & Appliance Services in Mumbai</title>
        <meta 
          name="description" 
          content="CoolCare provides AC repair and appliance services across Mumbai - Andheri, Goregaon, Malad, Kandivali, Borivali, Dahisar, Mira Road and more." 
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
                Service Areas
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Serving Across Mumbai
              </h1>
              <p className="text-xl text-primary-foreground/90">
                We provide doorstep AC and appliance services across major Mumbai areas.
              </p>
            </div>
          </div>
        </section>

        {/* Areas Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <SectionHeader
              badge="Regular Service Areas"
              title="Where We Serve"
              subtitle="Quick response and same-day service available in these areas."
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {areas.map((area, index) => (
                <div 
                  key={area.name}
                  className="bg-card rounded-2xl p-6 shadow-card border border-border/50 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{area.name}</h3>
                      <p className="text-muted-foreground text-sm">{area.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Special Note */}
        <section className="section-padding bg-secondary/50">
          <div className="container-custom">
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card border border-border/50">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-4">
                    <Building className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    AC Piping & Installation Projects
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    For AC piping work and large installation projects, we serve 
                    <span className="text-primary font-semibold"> all areas of Mumbai</span>. 
                    Whether it's a new residential flat, office, or commercial space, 
                    our expert team handles projects across the city.
                  </p>
                  <div className="space-y-3">
                    {[
                      "120+ piping projects completed",
                      "Residential & commercial installations",
                      "Concealed piping specialists",
                      "All Mumbai areas covered",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-success shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <CTAButtons />
                  </div>
                </div>
                
                <div className="relative">
                  <div className="aspect-square rounded-3xl gradient-hero p-8 flex items-center justify-center">
                    <div className="text-center text-primary-foreground">
                      <span className="text-6xl md:text-7xl font-bold block mb-2">120+</span>
                      <span className="text-xl">Piping Projects</span>
                      <span className="text-primary-foreground/70 block mt-2">Across Mumbai</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <SectionHeader
              title="Find Us in Mumbai"
              subtitle="We're your local service provider, always just a call away."
            />
            
            <div className="rounded-2xl overflow-hidden shadow-card border border-border/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995!3d19.08219865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1703312345678!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mumbai Service Area Map"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding gradient-dark">
          <div className="container-custom text-center">
            <SectionHeader
              title="Need Service in Your Area?"
              subtitle="Contact us to check availability. We're expanding our service areas!"
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

export default Areas;
