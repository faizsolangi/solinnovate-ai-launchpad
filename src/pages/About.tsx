import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb, Users, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">About Solinnovate</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Leading the AI automation revolution through innovation, education, and intelligent solutions
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-border shadow-lg">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground">
                  To empower businesses and individuals with cutting-edge AI automation solutions and comprehensive
                  education, enabling them to thrive in the digital age and achieve unprecedented efficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-lg">
              <CardContent className="p-8">
                <Lightbulb className="h-12 w-12 text-secondary mb-4" />
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground">
                  To become the global leader in AI automation and education, transforming industries through
                  intelligent systems and cultivating the next generation of AI professionals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="border-border text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  Continuously pushing boundaries to deliver cutting-edge solutions
                </p>
              </CardContent>
            </Card>

            <Card className="border-border text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold mb-2">Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  Committed to delivering the highest quality in every project
                </p>
              </CardContent>
            </Card>

            <Card className="border-border text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold mb-2">Collaboration</h3>
                <p className="text-sm text-muted-foreground">
                  Building strong partnerships for mutual success
                </p>
              </CardContent>
            </Card>

            <Card className="border-border text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold mb-2">Education</h3>
                <p className="text-sm text-muted-foreground">
                  Empowering through knowledge and skill development
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Story</h2>
            <p className="text-muted-foreground">
              Solinnovate was founded with a vision to democratize AI automation and make cutting-edge technology
              accessible to businesses of all sizes. What started as a small team of passionate AI engineers has grown
              into a comprehensive automation and education initiative.
            </p>
            <p className="text-muted-foreground">
              Today, we serve clients across industries, from manufacturing to healthcare, helping them leverage AI
              automation to transform their operations. Our education programs have trained thousands of professionals,
              equipping them with the skills needed to excel in the AI-driven economy.
            </p>
            <p className="text-muted-foreground">
              We believe that the future of work is augmented by intelligent automation, and we're committed to being
              at the forefront of this transformation. Through our services and training programs, we're not just
              implementing technology—we're building a community of innovators ready to shape tomorrow.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
