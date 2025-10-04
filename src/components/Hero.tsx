import { Quote } from "lucide-react";
import heroBackground from "@/assets/hero-farm-background.jpg";
import kaeLogo from "@/assets/kae-logo.png";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/75 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-36 text-center animate-fade-in">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
          Kshetragna Agri Engitech
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
          Here, There And Everywhere
        </p>

        {/* Info Cards */}
        <div className="flex flex-wrap justify-center gap-6 my-12">
          <div className="bg-card/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-md border border-border hover:shadow-lg transition-shadow">
            <p className="text-lg font-semibold text-primary">Premium Quality Equipment</p>
          </div>
          <div className="bg-card/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-md border border-border hover:shadow-lg transition-shadow">
            <p className="text-lg font-semibold text-primary">Most Trusted</p>
          </div>
          <div className="bg-card/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-md border border-border hover:shadow-lg transition-shadow">
            <p className="text-lg font-semibold text-primary">For Farmers, By Farmers</p>
          </div>
        </div>

        {/* Quote */}
        <div className="max-w-2xl mx-auto mt-12 bg-card/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-border">
          <Quote className="w-12 h-12 mx-auto mb-4 text-accent" />
          <p className="text-2xl md:text-3xl font-bold text-primary mb-2">
            जय जवान, जय किसान
          </p>
          <p className="text-lg text-muted-foreground italic">
            "Hail the Soldier, Hail the Farmer"
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full mx-auto flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};
