import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Contact as KAEContact} from "@/components/Contact";
import { Download, Handshake, Scale, TrendingUp, Building, Users, FileText, Award, Contact } from "lucide-react";
import brochurePdf from "@/assets/brochure/kshetragna-agri-engitech.pdf";

const AboutUs = () => {
  const handleDownloadBrochure = () => {
    // brochurePdf is a string URL to the bundled asset provided by Vite
    const link = document.createElement("a");
    link.href = brochurePdf;
    link.download = "Kshetragna-Agri-Engitech-Brochure.pdf";
    // Ensure it's added to the DOM for the click to work in all browsers
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-background to-background/80">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            About Us
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <Card className="border-border shadow-lg">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Established in <span className="font-bold text-foreground">2023</span>, <span className="font-bold text-foreground">Kshetragna Agri Engitech</span> is engaged as <span className="font-bold text-foreground">Wholesaler</span> of Lawn Mower, Brush Cutter, Garden Shears, Trimmer Line and Head, Power Reaper, Wheel Barrow, Petrol Chain Saw, Heavy Duty Brass Impact Sprinkler, etc.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Further, our range is highly demanded in for its optimum quality. All the efforts of the company to ensure excellent quality products for their customers has enabled them to build long lasting business relationships with their clients.
              </p>
              <div className="mt-8 text-center">
                <Button onClick={handleDownloadBrochure} size="lg" className="gap-2">
                  <Download className="w-5 h-5" />
                  Download Brochure
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Company Details Grid */}
      <section className="py-16 px-6 bg-background/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-border">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground mb-2">Nature of Business</p>
                <p className="font-bold text-foreground">Trader - Wholesaler/Distributor</p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground mb-2">Legal Status of Firm</p>
                <p className="font-bold text-foreground">Partnership</p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground mb-2">Annual Turnover</p>
                <p className="font-bold text-foreground">40 L - 1.5 Cr</p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground mb-2">GST Registration Date</p>
                <p className="font-bold text-foreground">13-09-2023</p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground mb-2">Total Number of Employees</p>
                <p className="font-bold text-foreground">11 to 25 People</p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground mb-2">GST Number</p>
                <p className="font-bold text-foreground">24ABAFK7325H1ZI</p>
              </CardContent>
            </Card>

            <Card className="border-border md:col-span-2">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground mb-2">IndiaMART Certification</p>
                <p className="font-bold text-foreground">Trust Seal Verified</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To become the leading provider of high-quality agricultural equipment in India, empowering farmers with innovative tools and technology. We envision a future where every farmer has access to reliable, efficient, and affordable equipment that enhances productivity and sustainability in agriculture.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our mission is to deliver excellence in agricultural equipment distribution by maintaining the highest standards of quality, providing exceptional customer service, and building lasting relationships with our clients. We are committed to supporting the farming community through reliable products and dedicated support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <KAEContact/>
      <Footer />
    </div>
  );
};

export default AboutUs;