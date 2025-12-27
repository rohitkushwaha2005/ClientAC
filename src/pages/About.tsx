import { Helmet } from "react-helmet-async";
import { CheckCircle, Users, Award, Target, Heart } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/shared/SectionHeader";
import CTAButtons from "@/components/shared/CTAButtons";
import FloatingCTA from "@/components/shared/FloatingCTA";
import csmtImage from "@/assets/csmt-station.jpg";

const values = [
  {
    icon: Target,
    title: "Quality First",
    description: "We never compromise on the quality of our work or parts used.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Your satisfaction is our top priority in every service call.",
  },
  {
    icon: Award,
    title: "Expertise",
    description: "Certified technicians with years of hands-on experience.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Honest pricing and transparent service you can trust.",
  },
];

const highlights = [
  "7+ years of trusted service in Mumbai",
  "Team of 5+ skilled and certified technicians",
  "1000+ satisfied customers across the city",
  "Expert in all major AC and appliance brands",
  "Same-day service availability",
  "Genuine spare parts with warranty",
  "Residential and commercial services",
  "Transparent and competitive pricing",
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Ultimate Cool Care AC & Appliance Services Mumbai</title>
        <meta 
          name="description" 
          content="Learn about Ultimate Cool Care - Mumbai's trusted AC and home appliance repair company with 7+ years experience and 1000+ happy customers." 
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
                About Ultimate Cool Care
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Mumbai's Trusted AC & Appliance Service Partner
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Dedicated to keeping your home comfortable with reliable, professional, and affordable appliance services.
              </p>
            </div>
          </div>
        </section>

        {/* Mumbai Trust Section with CSMT Image */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={csmtImage} 
              alt="CSMT Station Mumbai"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-2xl text-primary-foreground">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Mumbai's Trusted AC & Appliance Service
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-6">
                Serving the heart of Mumbai with pride. From Andheri to Borivali, from Malad to Mira Road, 
                we've been keeping Mumbai homes cool and comfortable for over 7 years.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-primary-foreground/20">
                  <span className="font-semibold">1000+</span> Happy Customers
                </div>
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-primary-foreground/20">
                  <span className="font-semibold">7+</span> Years of Service
                </div>
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-primary-foreground/20">
                  <span className="font-semibold">All</span> Mumbai Areas
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <SectionHeader
                  badge="Our Story"
                  title="7+ Years of Excellence"
                  centered={false}
                />
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Ultimate Cool Care was founded with a simple mission: to provide honest, reliable, and 
                    affordable home appliance services to Mumbai residents. What started as a small 
                    team of passionate technicians has grown into one of the city's most trusted 
                    service providers.
                  </p>
                  <p>
                    With over 7 years of experience, we've helped more than 1000 families keep 
                    their homes comfortable. Our team of 5+ skilled technicians brings expertise 
                    in servicing all major AC and appliance brands.
                  </p>
                  <p>
                    From Andheri to Borivali, from Malad to Mira Road, we've built our reputation 
                    on quality work, transparent pricing, and customer satisfaction. Whether it's 
                    a simple AC cleaning or a complex piping project, we treat every job with the 
                    same level of dedication.
                  </p>
                </div>
                <CTAButtons />
              </div>

              <div className="bg-card rounded-3xl p-8 shadow-card border border-border/50">
                <h3 className="text-xl font-bold text-foreground mb-6">Why Customers Choose Us</h3>
                <div className="space-y-3">
                  {highlights.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-secondary/50">
          <div className="container-custom">
            <SectionHeader
              badge="Our Values"
              title="What Drives Us"
              subtitle="These core values guide everything we do and shape how we serve you."
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div 
                  key={value.title}
                  className="bg-card rounded-2xl p-6 shadow-card border border-border/50 text-center hover:-translate-y-1 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding gradient-dark">
          <div className="container-custom text-center">
            <SectionHeader
              title="Ready to Experience the Ultimate Cool Care Difference?"
              subtitle="Join our family of 1000+ satisfied customers. Contact us today!"
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

export default About;