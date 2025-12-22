import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/shared/SectionHeader";
import CTAButtons from "@/components/shared/CTAButtons";
import FloatingCTA from "@/components/shared/FloatingCTA";

// Import brand logos
import daikinLogo from "@/assets/brands/daikin.png";
import mitsubishiLogo from "@/assets/brands/mitsubishi.png";
import ogeneralLogo from "@/assets/brands/ogeneral.png";
import lgLogo from "@/assets/brands/lg.png";
import voltasLogo from "@/assets/brands/voltas.png";
import samsungLogo from "@/assets/brands/samsung.png";
import lloydLogo from "@/assets/brands/lloyd.png";
import hitachiLogo from "@/assets/brands/hitachi.png";
import whirlpoolLogo from "@/assets/brands/whirlpool.png";
import godrejLogo from "@/assets/brands/godrej.png";

const brands = [
  { name: "Daikin", logo: daikinLogo },
  { name: "Mitsubishi", logo: mitsubishiLogo },
  { name: "O General", logo: ogeneralLogo },
  { name: "LG", logo: lgLogo },
  { name: "Voltas", logo: voltasLogo },
  { name: "Samsung", logo: samsungLogo },
  { name: "Lloyd", logo: lloydLogo },
  { name: "Hitachi", logo: hitachiLogo },
  { name: "Whirlpool", logo: whirlpoolLogo },
  { name: "Godrej", logo: godrejLogo },
];

const expertise = [
  "Expert technicians trained on all major brands",
  "Genuine spare parts for lasting repairs",
  "Knowledge of latest models and technology",
  "Authorized service patterns followed",
  "Warranty-safe repair methods",
  "Brand-specific diagnostic tools",
];

const Products = () => {
  return (
    <>
      <Helmet>
        <title>AC Brands We Service - Daikin, LG, Samsung, Voltas & More | Mumbai</title>
        <meta 
          name="description" 
          content="We service all major AC brands - Daikin, Mitsubishi, O General, LG, Voltas, Samsung, Lloyd, Hitachi, Whirlpool, Godrej. Expert repair in Mumbai." 
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
                Brands We Service
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Expert Service for All Major AC Brands
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Our technicians are trained to service all leading AC brands with genuine parts and expert care.
              </p>
            </div>
          </div>
        </section>

        {/* Brands Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <SectionHeader
              badge="Our Expertise"
              title="Brands We Service"
              subtitle="From premium brands to popular choices, we handle them all with the same level of expertise."
            />

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {brands.map((brand, index) => (
                <div 
                  key={brand.name}
                  className="group bg-card rounded-2xl p-6 shadow-card border border-border/50 hover:border-primary/30 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="w-24 h-24 rounded-xl bg-secondary/50 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 p-3 overflow-hidden">
                    <img 
                      src={brand.logo} 
                      alt={`${brand.name} logo`}
                      className="w-full h-full object-contain filter dark:brightness-0 dark:invert"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{brand.name}</h3>
                  <span className="text-xs text-muted-foreground">AC Service</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="section-padding bg-secondary/50">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeader
                  badge="Why Trust Us"
                  title="Multi-Brand Expertise"
                  subtitle="Our technicians undergo continuous training to stay updated with the latest technologies."
                  centered={false}
                />
                <div className="space-y-3">
                  {expertise.map((item) => (
                    <div key={item} className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border/50">
                      <CheckCircle className="w-5 h-5 text-success shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <CTAButtons />
                </div>
              </div>
              
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  {brands.slice(0, 4).map((brand, index) => (
                    <div 
                      key={brand.name}
                      className="aspect-square rounded-2xl bg-card border border-border/50 p-6 flex items-center justify-center hover:scale-105 hover:shadow-lg transition-all duration-300 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <img 
                        src={brand.logo} 
                        alt={`${brand.name} logo`}
                        className="w-full h-full object-contain filter dark:brightness-0 dark:invert"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding gradient-dark">
          <div className="container-custom text-center">
            <SectionHeader
              title="Need Service for Your AC?"
              subtitle="Whatever the brand, we've got you covered. Contact us for expert repair and maintenance."
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

export default Products;
