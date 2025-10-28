import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import kaeLogo from "@/assets/kae-logo.png";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (id: string, type: string) => {
    if (type === "link") {
      // Use react-router navigation so the router's basename is respected
      navigate(id);
      setIsOpen(false);
      return;
    }

    // For scroll links, if we're already on the home page, just scroll.
    // If we're on a different route (for example /about), navigate to the
    // home route and pass the target id in location.state so the home page
    // can scroll to it after mounting.
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setIsOpen(false);
      return;
    }

    // Not on home: navigate to home and pass the id in state
    navigate('/', { state: { scrollTo: id } });
    setIsOpen(false);
  };

  const navItems = [
    // Home should scroll to the top of the page rather than navigate to a route
    { label: "Home", id: "/", type: "link" },
    { label: "Equipment", id: "products", type: "scroll" },
    { label: "Videos", id: "videos", type: "scroll" },
    { label: "About Us", id: "/about", type: "link" },
    { label: "Testimonials", id: "testimonials", type: "scroll" },
    { label: "Contact", id: "contact", type: "scroll" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavigation("home", "scroll")}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img src={kaeLogo} alt="Kshetragna" className="w-12 h-12" />
            <span className="font-bold text-lg text-foreground hidden md:block">
              Kshetragna Agri Engitech
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id, item.type)}
                className="text-muted-foreground hover:text-primary font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id, item.type)}
                  className="text-left text-muted-foreground hover:text-primary font-medium transition-colors py-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
