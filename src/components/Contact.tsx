import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import kaeLogo from "@/assets/kae-logo.png";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Get In Touch
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12">
          We'd love to hear from you. Reach out to us for any inquiries.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card className="border-border">
            <CardContent className="p-8">
              <img 
                src={kaeLogo} 
                alt="Kshetragna Agri Engitech" 
                className="w-32 h-32 mx-auto mb-6"
              />
              <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
                Kshetragna Agri Engitech
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Address</p>
                    <p className="text-muted-foreground">
                      B-22 Gopal Charan Industrial Park Bakrol <br />
                      Ahmedabad, Gujarat - 382430<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Phone</p>
                    <p className="text-muted-foreground">+91 90811 81191</p>
                    <p className="text-muted-foreground">+91 90811 81191</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Email</p>
                    <p className="text-muted-foreground">info@kshetragna.com</p>
                    <p className="text-muted-foreground">support@kshetragna.com</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Media & Map */}
          <div className="space-y-8">
            <Card className="border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="http://instagram.com/kshetragna_agri_engitech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                  >
                    <Instagram className="w-7 h-7 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                  >
                    <Facebook className="w-7 h-7 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-14 h-14 rounded-full bg-blue-400 flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                  >
                    <Twitter className="w-7 h-7 text-white" />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Business Hours</h3>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex justify-between">
                    <span className="font-semibold">Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Saturday</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
