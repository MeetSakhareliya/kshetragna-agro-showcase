import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { VideoGallery } from "@/components/VideoGallery";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // If navigation included a scroll target, scroll to that element after mount
    const state = location.state as { scrollTo?: string } | null;
    if (state && state.scrollTo) {
      const el = document.getElementById(state.scrollTo);
      if (el) {
        // small timeout to ensure elements are in the DOM
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 50);
        // Clear state so repeated mounts don't scroll again
        try {
          window.history.replaceState({}, document.title);
        } catch (e) {
          /* ignore */
        }
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Products />
      <VideoGallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
