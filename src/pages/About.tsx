import { Helmet } from "react-helmet-async";
import { CheckCircle, Users, Award, Target, Heart } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/shared/SectionHeader";
import CTAButtons from "@/components/shared/CTAButtons";
import FloatingCTA from "@/components/shared/FloatingCTA";

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
        <title>About Us - CoolCare AC & Appliance Services Mumbai</title>
        <meta 
          name="description" 
          content="Learn about CoolCare - Mumbai's trusted AC and home appliance repair company with 7+ years experience and 1000+ happy customers." 
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
                About CoolCare
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
                    CoolCare was founded with a simple mission: to provide honest, reliable, and 
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
              title="Ready to Experience the CoolCare Difference?"
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
