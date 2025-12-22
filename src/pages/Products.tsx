import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/shared/SectionHeader";
import CTAButtons from "@/components/shared/CTAButtons";
import FloatingCTA from "@/components/shared/FloatingCTA";

const brands = [
  { name: "Daikin", logo: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=200&h=100&fit=crop&auto=format" },
  { name: "Mitsubishi", logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=100&fit=crop&auto=format" },
  { name: "O General", logo: "https://images.unsplash.com/photo-1631049552240-59c37f38802b?w=200&h=100&fit=crop&auto=format" },
  { name: "LG", logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=100&fit=crop&auto=format" },
  { name: "Voltas", logo: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=200&h=100&fit=crop&auto=format" },
  { name: "Samsung", logo: "https://images.unsplash.com/photo-1631049552240-59c37f38802b?w=200&h=100&fit=crop&auto=format" },
  { name: "Lloyd", logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=100&fit=crop&auto=format" },
  { name: "Hitachi", logo: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=200&h=100&fit=crop&auto=format" },
  { name: "Whirlpool", logo: "https://images.unsplash.com/photo-1631049552240-59c37f38802b?w=200&h=100&fit=crop&auto=format" },
  { name: "Godrej", logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=100&fit=crop&auto=format" },
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
                  className="group bg-card rounded-2xl p-6 shadow-card border border-border/50 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 text-center"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-primary">{brand.name.charAt(0)}</span>
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
                      className="aspect-square rounded-2xl gradient-hero p-6 flex items-center justify-center"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span className="text-4xl font-bold text-primary-foreground">{brand.name.charAt(0)}</span>
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
