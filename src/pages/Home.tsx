import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import {
  Cog,
  Bot,
  Factory,
  Brain,
  TrendingUp,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const keyServices = [
    {
      title: "Process Automation",
      description: "Streamline your workflows with intelligent automation solutions that reduce manual effort and increase efficiency.",
      icon: Cog,
      link: "/services/process-automation",
    },
    {
      title: "RPA",
      description: "Deploy software robots to automate repetitive tasks and free your team for strategic work.",
      icon: Bot,
      link: "/services/rpa",
    },
    {
      title: "Industrial Automation",
      description: "Transform manufacturing with smart automation systems that optimize production and quality.",
      icon: Factory,
      link: "/services/industrial-automation",
    },
    {
      title: "AI/ML Integration",
      description: "Harness the power of artificial intelligence and machine learning to drive data-driven decisions.",
      icon: Brain,
      link: "/services/ai-ml-integration",
    },
    {
      title: "Smart Factory Solutions",
      description: "Build the factory of the future with IoT, AI, and advanced analytics for complete operational visibility.",
      icon: TrendingUp,
      link: "/services/smart-factory",
    },
  ];

  const testimonials = [
    {
      quote: "Solinnovate transformed our manufacturing process with their AI automation solutions. Productivity increased by 40% within the first quarter.",
      author: "Sarah Johnson",
      role: "Operations Director, TechManufacturing Inc.",
    },
    {
      quote: "The RPA implementation exceeded our expectations. We've automated 80% of our repetitive tasks and our team is now focused on strategic initiatives.",
      author: "Michael Chen",
      role: "CTO, Global Logistics Corp",
    },
    {
      quote: "Their AI/ML training program equipped our team with cutting-edge skills. The hands-on approach made complex concepts accessible and practical.",
      author: "Emily Rodriguez",
      role: "Head of Innovation, DataTech Solutions",
    },
  ];

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="gradient-hero py-20 md:py-32 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Transform Your Business with{" "}
              <span className="gradient-primary bg-clip-text text-transparent">
                AI Automation & Education
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Solinnovate delivers cutting-edge automation solutions and comprehensive AI education to help
              your organization thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/education">View Training Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive automation and AI solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {keyServices.map((service, index) => (
              <div key={service.title} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/services">View All 15 Services →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground">Real results from real partnerships</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-border shadow-lg">
              <CardContent className="p-8 md:p-12">
                <Quote className="h-10 w-10 text-primary mb-6" />
                <p className="text-lg md:text-xl mb-6 leading-relaxed">
                  "{testimonials[testimonialIndex].quote}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{testimonials[testimonialIndex].author}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[testimonialIndex].role}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={prevTestimonial}
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={nextTestimonial}
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="gradient-primary text-primary-foreground border-0 shadow-glow">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Let's discuss how our automation solutions and AI training can drive your success.
              </p>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contact">Get Started Today</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
