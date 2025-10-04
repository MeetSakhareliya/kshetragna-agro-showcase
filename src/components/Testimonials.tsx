import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Maharashtra",
    text: "Excellent quality products at reasonable prices. The wheat quality is outstanding and my customers love it. Highly recommend Kshetragna!",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Punjab",
    text: "Very reliable service. The organic vegetables are always fresh and delivered on time. Great support for farmers like us.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Patel",
    location: "Gujarat",
    text: "Best agricultural products supplier I've worked with. Their commitment to quality and farmer welfare is commendable.",
    rating: 5,
  },
  {
    id: 4,
    name: "Sunita Devi",
    location: "Uttar Pradesh",
    text: "The pulses and rice varieties are of premium quality. Fair pricing and honest business practices. Truly trustworthy!",
    rating: 5,
  },
  {
    id: 5,
    name: "Vikram Singh",
    location: "Haryana",
    text: "Outstanding service and product quality. They understand the needs of farmers and deliver accordingly. Five stars!",
    rating: 5,
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 5000);

    return () => clearInterval(timer);
  }, [totalPages]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const getCurrentTestimonials = () => {
    const start = currentIndex * itemsPerPage;
    return testimonials.slice(start, start + itemsPerPage);
  };

  return (
    <section id="testimonials" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          What Our Customers Say
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12">
          Trusted by farmers and businesses across India
        </p>

        <div className="relative">
          {/* Testimonial Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {getCurrentTestimonials().map((testimonial) => (
              <Card key={testimonial.id} className="border-border shadow-lg animate-fade-in">
                <CardContent className="p-8">
                  <Quote className="w-10 h-10 text-accent mb-4" />
                  <p className="text-lg text-foreground mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-accent text-xl">★</span>
                    ))}
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
