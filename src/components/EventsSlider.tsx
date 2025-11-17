import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const EventsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const events = [
    {
      title: "Annual Day 2024",
      date: "December 20, 2024",
      description: "Cultural performances and prize distribution",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop",
    },
    {
      title: "Sports Day",
      date: "January 15, 2025",
      description: "Athletic competitions and team sports",
      image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800&auto=format&fit=crop",
    },
    {
      title: "Science Exhibition",
      date: "February 10, 2025",
      description: "Student projects and demonstrations",
      image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&auto=format&fit=crop",
    },
    {
      title: "Art Competition",
      date: "March 5, 2025",
      description: "Creative arts and crafts showcase",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&auto=format&fit=crop",
    },
  ];
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % events.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [events.length]);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
  };
  
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Recent Events</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Celebrating achievements and memorable moments
          </p>
        </div>
        
        <div className="relative glass-card rounded-3xl overflow-hidden">
          {/* Slides */}
          <div className="relative h-[500px]">
            {events.map((event, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <p className="text-sm font-medium mb-2 text-secondary">{event.date}</p>
                  <h3 className="text-3xl md:text-4xl font-bold mb-3">{event.title}</h3>
                  <p className="text-lg text-white/90">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full w-12 h-12"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full w-12 h-12"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </Button>
          
          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-white w-8"
                    : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSlider;
