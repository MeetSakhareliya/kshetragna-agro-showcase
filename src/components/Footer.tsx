import { Facebook, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-6 px-6">
       <div className="text-center">
          <p className="text-sm mb-2">
            © {new Date().getFullYear()} Kshetragna Agri Engitech. All rights reserved.
          </p>
          <p className="text-sm opacity-90">
            Here, There And Everywhere - Serving Farmers with Pride
          </p>
        </div>
    </footer>
  );
};
