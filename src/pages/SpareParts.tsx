import { Helmet } from "react-helmet-async";
import { MessageCircle } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import FloatingCTA from "@/components/shared/FloatingCTA";
import fridgeStandImage from "@/assets/fridge-stand.jpg";
import acRemoteImage from "@/assets/ac-remote.jpg";
import blowerAccessoriesImage from "@/assets/blower-accessories.jpg";

const spareParts = [
  {
    name: "AC Remote",
    description: "Universal and brand-specific AC remotes available",
    image: acRemoteImage,
  },
  {
    name: "Fridge Stand",
    description: "Heavy-duty stands for all fridge sizes",
    image: fridgeStandImage,
  },
  {
    name: "Washing Machine Stand",
    description: "Anti-vibration stands with wheels",
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400&h=300&fit=crop&auto=format",
  },
  {
    name: "AC Accessories / Blower",
    description: "Blowers, filters, and essential AC parts",
    image: blowerAccessoriesImage,
  },
  {
    name: "Second-Hand Spare Parts",
    description: "Quality tested used parts at affordable prices",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&auto=format",
  },
];

const SpareParts = () => {
  return (
    <>
      <Helmet>
        <title>Spare Parts - New & Second Hand AC Available | ultimate cool care Mumbai</title>
        <meta 
          name="description" 
          content="Buy AC remotes, fridge stands, washing machine stands, and appliance spare parts in Mumbai. New & Second Hand AC Available. Quality parts at affordable prices. WhatsApp to order." 
        />
      </Helmet>

      <Header />
      <FloatingCTA />

      <main className="pt-28">
        {/* Hero Section */}
        <section className="section-padding gradient-hero text-primary-foreground">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-sm font-medium mb-4">
                Spare Parts & AC Sales
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                New & Second Hand AC Available
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Quality spare parts & AC units at competitive prices. New and pre-owned options available. Order on WhatsApp!
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <SectionHeader
              badge="Spare Parts"
              title="Available Parts"
              subtitle="Quality parts at competitive prices. Contact us on WhatsApp to order."
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {spareParts.map((part, index) => (
                <div 
                  key={part.name}
                  className="group bg-card rounded-2xl overflow-hidden shadow-card border border-border/50 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-48 bg-secondary overflow-hidden">
                    <img
                      src={part.image}
                      alt={part.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{part.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{part.description}</p>
                    <Button variant="whatsapp" className="w-full" asChild>
                      <a
                        href={`https://wa.me/917250770449?text=Hi! I'm interested in buying ${part.name}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Buy on WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Info Section */}
        <section className="section-padding bg-secondary/50">
          <div className="container-custom">
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card border border-border/50 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Need a Specific Part?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                Can't find what you're looking for? We source parts for all major brands. 
                Just message us on WhatsApp with your requirement, and we'll help you find it!
              </p>
              <Button variant="whatsapp" size="lg" asChild>
                <a
                  href="https://wa.me/917250770449?text=Hi! I need a specific spare part for my appliance."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us Your Requirement
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding gradient-dark">
          <div className="container-custom text-center">
            <SectionHeader
              title="Installation Service Available"
              subtitle="Need help installing your spare part or new AC? Our technicians can help!"
              light
            />
            <Button variant="hero" size="xl" asChild>
              <a href="tel:7250770449">
                Book Installation Service
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default SpareParts;