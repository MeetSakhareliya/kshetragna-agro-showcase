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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
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
          {/* Main Testimonial */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="max-w-3xl mx-auto border-border shadow-lg">
                    <CardContent className="p-8 md:p-12">
                      <Quote className="w-12 h-12 text-accent mb-6" />
                      <p className="text-xl md:text-2xl text-foreground mb-6 leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center gap-2 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-accent text-2xl">★</span>
                        ))}
                      </div>
                      <div>
                        <p className="font-bold text-lg text-foreground">{testimonial.name}</p>
                        <p className="text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
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
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
