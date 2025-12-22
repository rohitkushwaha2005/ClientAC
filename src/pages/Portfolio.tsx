import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/shared/SectionHeader";
import CTAButtons from "@/components/shared/CTAButtons";
import FloatingCTA from "@/components/shared/FloatingCTA";

const projects = [
  {
    title: "Residential AC Installation",
    location: "Andheri West",
    description: "Complete AC installation with concealed piping for a 3BHK flat",
    image: "https://images.unsplash.com/photo-1631049552240-59c37f38802b?w=600&h=400&fit=crop&auto=format",
    tags: ["Installation", "Piping", "Residential"],
  },
  {
    title: "Commercial AC Project",
    location: "Goregaon East",
    description: "Multi-unit AC installation for a corporate office space",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=400&fit=crop&auto=format",
    tags: ["Commercial", "Installation", "Office"],
  },
  {
    title: "Shop AC Piping",
    location: "Malad West",
    description: "Professional piping work for a retail showroom",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&auto=format",
    tags: ["Piping", "Commercial", "Retail"],
  },
  {
    title: "Flat AC Setup",
    location: "Kandivali East",
    description: "Complete AC setup for a new 2BHK apartment",
    image: "https://images.unsplash.com/photo-1631049552240-59c37f38802b?w=600&h=400&fit=crop&auto=format",
    tags: ["Installation", "Residential", "New Setup"],
  },
  {
    title: "Restaurant Cooling Solution",
    location: "Borivali West",
    description: "Custom cooling solution for a restaurant with multiple units",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=400&fit=crop&auto=format",
    tags: ["Commercial", "Restaurant", "Multi-unit"],
  },
  {
    title: "Home AC Overhaul",
    location: "Dahisar East",
    description: "Complete service and maintenance for all home ACs",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&auto=format",
    tags: ["Service", "Maintenance", "Residential"],
  },
];

const achievements = [
  { number: "2000+", label: "AC Installations" },
  { number: "120+", label: "Piping Projects" },
  { number: "1000+", label: "Happy Customers" },
  { number: "3000+", label: "Service Calls" },
];

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio - AC Installation & Piping Projects Mumbai | CoolCare</title>
        <meta 
          name="description" 
          content="View our portfolio of AC installation, piping, and repair projects across Mumbai. 2000+ installations, 120+ piping projects completed." 
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
                Our Portfolio
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Projects That Speak Quality
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Explore our completed AC installation, piping, and service projects across Mumbai.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-card border-b border-border/50">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{item.number}</div>
                  <div className="text-muted-foreground text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <SectionHeader
              badge="Featured Work"
              title="Our Recent Projects"
              subtitle="A showcase of our best work in AC installation, piping, and maintenance."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={project.title}
                  className="group bg-card rounded-2xl overflow-hidden shadow-card border border-border/50 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      {project.location}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
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
              title="Start Your Project With Us"
              subtitle="From simple repairs to complex installations, we deliver excellence every time."
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

export default Portfolio;
