import { Helmet } from "react-helmet-async";
import { 
  Snowflake, 
  ThermometerSnowflake, 
  WashingMachine, 
  Refrigerator, 
  Flame,
  Shield,
  Clock,
  Award,
  Users,
  Wrench,
  Building
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTAButtons from "@/components/shared/CTAButtons";
import ServiceCard from "@/components/shared/ServiceCard";
import StatCard from "@/components/shared/StatCard";
import SectionHeader from "@/components/shared/SectionHeader";
import FloatingCTA from "@/components/shared/FloatingCTA";

const services = [
  {
    title: "AC Repair",
    description: "Expert AC repair services for all brands. Quick diagnosis and reliable fixes.",
    icon: ThermometerSnowflake,
  },
  {
    title: "Fridge Service",
    description: "Complete refrigerator maintenance and repair for optimal cooling performance.",
    icon: Refrigerator,
  },
  {
    title: "Washing Machine",
    description: "Professional washing machine repair for all types and brands.",
    icon: WashingMachine,
  },
  {
    title: "Oven & Geyser",
    description: "Safe and reliable oven and geyser repair services at your doorstep.",
    icon: Flame,
  },
];

const stats = [
  { value: "7", label: "Years Experience", suffix: "+" },
  { value: "5", label: "Skilled Technicians", suffix: "+" },
  { value: "1000", label: "Happy Customers", suffix: "+" },
  { value: "3000", label: "Overall Services", suffix: "+" },
  { value: "2000", label: "AC Installations", suffix: "+" },
  { value: "120", label: "Piping Projects", suffix: "+" },
];

const features = [
  { icon: Shield, title: "Trusted Service", description: "Reliable and honest work guaranteed" },
  { icon: Clock, title: "Quick Response", description: "Same-day service availability" },
  { icon: Award, title: "Expert Technicians", description: "Certified and experienced team" },
  { icon: Users, title: "Customer First", description: "100% satisfaction commitment" },
];

const Index = () => {
  return (
    <>
      <Helmet>
        <title>CoolCare - Trusted AC & Home Appliance Repair Services in Mumbai</title>
        <meta 
          name="description" 
          content="Professional AC repair, installation, cleaning & home appliance services in Mumbai. 7+ years experience, 1000+ happy customers. Call now for same-day service!" 
        />
        <meta name="keywords" content="AC repair Mumbai, AC service Mumbai, appliance repair, refrigerator repair, washing machine repair" />
        <link rel="canonical" href="https://coolcare.in" />
      </Helmet>

      <Header />
      <FloatingCTA />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary-foreground/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
            
            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-primary-foreground/20 rounded-full animate-float"
                style={{
                  left: `${15 + i * 15}%`,
                  top: `${20 + (i % 3) * 25}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${4 + i}s`
                }}
              />
            ))}
          </div>
          
          <div className="container-custom relative z-10 pt-24 pb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-primary-foreground space-y-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-sm font-medium animate-fade-in border border-primary-foreground/20">
                  <Snowflake className="w-4 h-4 animate-spin" style={{ animationDuration: "8s" }} />
                  Mumbai's Trusted Service Provider
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  Trusted AC & Home Appliance{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 text-accent">Repair Services</span>
                    <span className="absolute bottom-2 left-0 w-full h-3 bg-accent/30 -skew-x-6" />
                  </span>
                  {" "}in Mumbai
                </h1>
                <p className="text-xl text-primary-foreground/90 max-w-lg animate-fade-in" style={{ animationDelay: "0.4s" }}>
                  AC Repair, Installation, Cleaning & Home Appliance Services at Your Doorstep. 
                  Fast, reliable, and affordable!
                </p>
                <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
                  <CTAButtons variant="hero" />
                </div>
                
                {/* Trust Badges */}
                <div className="flex flex-wrap gap-6 pt-4 animate-fade-in" style={{ animationDelay: "0.8s" }}>
                  {features.slice(0, 3).map((feature, index) => (
                    <div 
                      key={feature.title} 
                      className="flex items-center gap-2 opacity-0 animate-fade-in hover:scale-105 transition-transform cursor-default"
                      style={{ animationDelay: `${1 + index * 0.1}s` }}
                    >
                      <div className="p-1.5 rounded-full bg-accent/20">
                        <feature.icon className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-sm font-medium">{feature.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden lg:block relative">
                <div className="relative animate-fade-in" style={{ animationDelay: "0.5s" }}>
                  <div className="absolute -inset-4 bg-primary-foreground/10 rounded-3xl blur-2xl animate-pulse-slow" />
                  <div className="relative bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8 border border-primary-foreground/20 hover:border-primary-foreground/40 transition-colors duration-500">
                    <div className="grid grid-cols-2 gap-4">
                      {features.map((feature, index) => (
                        <div 
                          key={feature.title}
                          className="group bg-primary-foreground/10 rounded-xl p-4 text-center hover:bg-primary-foreground/20 transition-all duration-500 hover:scale-105 cursor-pointer opacity-0 animate-scale-in"
                          style={{ animationDelay: `${0.8 + index * 0.15}s` }}
                        >
                          <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-accent/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-accent/30 transition-all duration-300">
                            <feature.icon className="w-6 h-6 text-accent" />
                          </div>
                          <h3 className="font-semibold text-sm">{feature.title}</h3>
                          <p className="text-xs text-primary-foreground/70 mt-1">{feature.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Wave Divider */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" className="w-full">
              <path 
                d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
                fill="hsl(var(--background))"
              />
            </svg>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <SectionHeader
              badge="Our Services"
              title="Professional Appliance Services"
              subtitle="From AC repair to washing machine maintenance, we handle all your home appliance needs with expertise."
            />
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div 
                  key={service.title} 
                  className="opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
                >
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-secondary/50">
          <div className="container-custom">
            <SectionHeader
              badge="Our Track Record"
              title="Numbers That Speak Quality"
              subtitle="Years of dedicated service have made us Mumbai's trusted appliance repair partner."
            />
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-background overflow-hidden">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeader
                  badge="Why Choose Us"
                  title="Experience You Can Trust"
                  subtitle="We're not just technicians – we're your neighbors committed to keeping your home comfortable."
                  centered={false}
                />
                <div className="space-y-4">
                  {[
                    { icon: Wrench, text: "Expert technicians with 7+ years experience" },
                    { icon: Clock, text: "Same-day service across Mumbai" },
                    { icon: Shield, text: "Genuine spare parts with warranty" },
                    { icon: Building, text: "Residential & commercial services" },
                  ].map((item, index) => (
                    <div 
                      key={item.text} 
                      className="group flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-500 hover:-translate-x-2 cursor-default opacity-0 animate-slide-in-left"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md">
                        <item.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">{item.text}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <CTAButtons />
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square rounded-3xl gradient-hero p-8 flex items-center justify-center relative overflow-hidden group">
                  {/* Animated circles */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 border-2 border-primary-foreground/20 rounded-full animate-ping" style={{ animationDuration: "3s" }} />
                    <div className="absolute w-64 h-64 border-2 border-primary-foreground/10 rounded-full animate-ping" style={{ animationDuration: "4s" }} />
                  </div>
                  
                  <div className="text-center text-primary-foreground relative z-10">
                    <div className="relative">
                      <Snowflake className="w-24 h-24 mx-auto mb-6 animate-float-rotate" />
                      <div className="absolute inset-0 bg-primary-foreground/20 blur-2xl rounded-full" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Available 7 Days</h3>
                    <p className="text-primary-foreground/80">8:00 AM - 9:00 PM</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground rounded-2xl px-6 py-4 shadow-xl animate-bounce-subtle">
                  <span className="text-2xl font-bold">24/7</span>
                  <span className="text-sm block">Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding gradient-dark relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
          </div>
          
          <div className="container-custom text-center relative z-10">
            <SectionHeader
              title="Need AC or Appliance Service?"
              subtitle="Get expert help from Mumbai's most trusted technicians. Same-day service available!"
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

export default Index;
