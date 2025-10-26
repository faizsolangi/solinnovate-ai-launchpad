import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Lightbulb, Rocket, CheckCircle2, Quote } from "lucide-react";

const Education = () => {
  const testimonials = [
    {
      quote: "The AI/ML course gave me practical skills I use daily. The hands-on projects were invaluable.",
      author: "David Martinez",
      role: "Data Scientist",
    },
    {
      quote: "Best GenAI workshop I've attended. The instructors were knowledgeable and the content was cutting-edge.",
      author: "Lisa Wong",
      role: "Product Manager",
    },
    {
      quote: "The Agentic AI workshop transformed how I think about automation. Highly recommend!",
      author: "James Anderson",
      role: "Software Engineer",
    },
  ];

  const faqs = [
    {
      question: "Are the courses available online or in-person?",
      answer: "We offer both online and in-person training options. Online courses provide flexible, self-paced learning with live instructor support, while in-person workshops offer immersive, hands-on experiences at our training centers.",
    },
    {
      question: "What are the prerequisites for AI/ML courses?",
      answer: "Basic programming knowledge (preferably Python) and fundamental understanding of mathematics (algebra and statistics) are recommended. However, we offer introductory modules for beginners to get up to speed.",
    },
    {
      question: "Do you provide certification upon completion?",
      answer: "Yes, all our courses come with industry-recognized certificates upon successful completion. These certificates validate your skills and can enhance your professional profile.",
    },
    {
      question: "What is the typical duration of your training programs?",
      answer: "Course duration varies by program. Our AI/ML courses range from 8-12 weeks, GenAI workshops are typically 2-3 days, and Agentic AI workshops span 3-5 days. We also offer customized training schedules for corporate clients.",
    },
    {
      question: "Do you offer corporate training packages?",
      answer: "Absolutely! We provide tailored corporate training packages with on-site delivery options, customized curriculum based on your team's needs, and flexible scheduling to minimize disruption to business operations.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">AI & ML Education</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Empower your team with cutting-edge AI and machine learning skills through our comprehensive training programs
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-12">
            {/* AI/ML Courses */}
            <section className="animate-fade-in">
              <Card className="border-border shadow-lg">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center shadow-md">
                      <BookOpen className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-2xl">AI/ML Courses</CardTitle>
                        <Badge variant="secondary">Popular</Badge>
                      </div>
                      <CardDescription>
                        Comprehensive training in artificial intelligence and machine learning fundamentals
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    Our AI/ML courses provide a deep dive into the world of artificial intelligence and machine learning.
                    From neural networks to deep learning, you'll gain practical experience building and deploying AI models
                    that solve real-world problems.
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Key Benefits:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Hands-on projects with real datasets</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Industry-relevant skills and tools</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Expert instructors from leading companies</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Career guidance and job placement support</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Course Topics:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Machine Learning Fundamentals</li>
                      <li>• Deep Learning & Neural Networks</li>
                      <li>• Natural Language Processing</li>
                      <li>• Computer Vision</li>
                      <li>• Model Deployment & MLOps</li>
                    </ul>
                  </div>

                  <Button variant="hero" className="w-full md:w-auto">
                    Register for AI/ML Courses
                  </Button>
                </CardContent>
              </Card>
            </section>

            {/* GenAI Workshops */}
            <section className="animate-fade-in" style={{ animationDelay: "100ms" }}>
              <Card className="border-border shadow-lg">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center shadow-md">
                      <Lightbulb className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-2xl">GenAI Workshops</CardTitle>
                        <Badge>New</Badge>
                      </div>
                      <CardDescription>
                        Master generative AI technologies and large language models
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    Dive into the exciting world of Generative AI. Learn to work with large language models like GPT,
                    create AI-powered applications, and understand the latest advances in generative technologies.
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Key Benefits:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Build applications with GPT and other LLMs</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Prompt engineering mastery</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Fine-tuning and customization techniques</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Ethical AI and responsible deployment</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Workshop Schedule:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Day 1: Introduction to GenAI & LLMs</li>
                      <li>• Day 2: Building AI Applications</li>
                      <li>• Day 3: Advanced Techniques & Deployment</li>
                    </ul>
                  </div>

                  <Button variant="secondary" className="w-full md:w-auto">
                    Register for GenAI Workshop
                  </Button>
                </CardContent>
              </Card>
            </section>

            {/* Agentic AI Workshop */}
            <section className="animate-fade-in" style={{ animationDelay: "200ms" }}>
              <Card className="border-border shadow-lg">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shadow-md">
                      <Rocket className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">Agentic AI & Rapid Prototyping Workshop</CardTitle>
                      <CardDescription>
                        Build autonomous AI agents and rapid prototyping systems
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    Learn to create autonomous AI agents that can reason, plan, and execute complex tasks. Master rapid
                    prototyping techniques to quickly validate AI concepts and bring ideas to production.
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Key Benefits:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Build autonomous AI agents</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Rapid prototyping methodologies</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Agent orchestration and workflows</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Production deployment strategies</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Workshop Format:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Interactive hands-on sessions</li>
                      <li>• Build 3+ real-world agent projects</li>
                      <li>• Peer collaboration and code reviews</li>
                      <li>• Take-home resources and templates</li>
                    </ul>
                  </div>

                  <Button className="w-full md:w-auto">
                    Register for Agentic AI Workshop
                  </Button>
                </CardContent>
              </Card>
            </section>

            {/* FAQ Section */}
            <section className="animate-fade-in" style={{ animationDelay: "300ms" }}>
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                    <AccordionTrigger className="hover:no-underline">
                      <span className="text-left font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Testimonials */}
            <Card className="border-border shadow-lg sticky top-20">
              <CardHeader>
                <CardTitle>Student Testimonials</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="space-y-2">
                    <Quote className="h-6 w-6 text-primary" />
                    <p className="text-sm italic text-muted-foreground">"{testimonial.quote}"</p>
                    <div>
                      <p className="text-sm font-semibold">{testimonial.author}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                    {index < testimonials.length - 1 && <div className="border-t border-border pt-6" />}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Education;
