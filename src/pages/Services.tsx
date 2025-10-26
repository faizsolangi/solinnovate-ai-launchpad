import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import {
  Cog,
  Bot,
  Factory,
  Brain,
  GitMerge,
  TrendingUp,
  Wrench,
  Network,
  Zap,
  Shield,
  BarChart3,
  Eye,
  MessageSquare,
  Repeat,
  Globe,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Process Automation",
      description: "Streamline business processes with intelligent workflow automation, reducing manual tasks and improving operational efficiency across your organization.",
      icon: Cog,
      link: "/services/process-automation",
    },
    {
      title: "Robotic Process Automation (RPA)",
      description: "Deploy software robots to handle repetitive tasks, data entry, and rule-based processes, freeing your team for higher-value work.",
      icon: Bot,
      link: "/services/rpa",
    },
    {
      title: "Industrial Automation",
      description: "Transform manufacturing with automated systems, robotics, and control solutions that optimize production lines and ensure quality.",
      icon: Factory,
      link: "/services/industrial-automation",
    },
    {
      title: "AI and ML Integration",
      description: "Integrate cutting-edge AI and machine learning models into your systems for predictive analytics, natural language processing, and intelligent decision-making.",
      icon: Brain,
      link: "/services/ai-ml-integration",
    },
    {
      title: "Robot Integration",
      description: "Seamlessly integrate collaborative robots (cobots) and industrial robots into your existing workflows for enhanced productivity and safety.",
      icon: GitMerge,
      link: "/services/robot-integration",
    },
    {
      title: "Smart Factory Solutions",
      description: "Build Industry 4.0 smart factories with IoT sensors, real-time analytics, and AI-driven optimization for complete operational visibility.",
      icon: TrendingUp,
      link: "/services/smart-factory",
    },
    {
      title: "Predictive Maintenance",
      description: "Prevent equipment failures and reduce downtime with AI-powered predictive maintenance systems that analyze patterns and predict issues before they occur.",
      icon: Wrench,
      link: "/services/predictive-maintenance",
    },
    {
      title: "Supply Chain Optimization",
      description: "Optimize inventory, logistics, and procurement with AI-driven insights and automation that reduce costs and improve delivery times.",
      icon: Network,
      link: "/services/supply-chain",
    },
    {
      title: "Customized Automation Solutions",
      description: "Tailored automation strategies designed specifically for your unique business challenges, workflows, and industry requirements.",
      icon: Zap,
      link: "/services/custom-automation",
    },
    {
      title: "Cybersecurity Automation",
      description: "Automate threat detection, incident response, and security monitoring to protect your digital assets with AI-powered security systems.",
      icon: Shield,
      link: "/services/cybersecurity-automation",
    },
    {
      title: "Data Analytics Automation",
      description: "Automate data collection, processing, and visualization to generate real-time insights and actionable business intelligence.",
      icon: BarChart3,
      link: "/services/data-analytics",
    },
    {
      title: "Real-time Monitoring",
      description: "Implement comprehensive monitoring systems with dashboards and alerts that provide instant visibility into operations and performance.",
      icon: Eye,
      link: "/services/real-time-monitoring",
    },
    {
      title: "Personalized GPT Systems",
      description: "Develop custom GPT-based solutions tailored to your business needs for customer service, content generation, and knowledge management.",
      icon: MessageSquare,
      link: "/services/personalized-gpt",
    },
    {
      title: "Content Repurposing Services Using AI",
      description: "Transform existing content across multiple formats and platforms using AI-powered repurposing tools for maximum reach and engagement.",
      icon: Repeat,
      link: "/services/content-repurposing",
    },
    {
      title: "Web Development",
      description: "Build modern, scalable web applications and platforms that integrate seamlessly with your automation and AI infrastructure.",
      icon: Globe,
      link: "/services/web-development",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Comprehensive automation and AI solutions to transform your business operations and drive innovation
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={service.title} className="animate-slide-up" style={{ animationDelay: `${index * 50}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
