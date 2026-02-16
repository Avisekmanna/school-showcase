import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { src: "/images/hero-1.jpg", alt: "School campus" },
  { src: "/images/hero-2.jpg", alt: "Classroom learning" },
  { src: "/images/hero-3.jpg", alt: "Graduation ceremony" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 animate-fade-in-up">
          Bright<span className="text-secondary">Minds</span> Academy
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-8 font-light animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Nurturing excellence, inspiring futures. Where every student discovers their potential.
        </p>
        <a
          href="#about"
          onClick={(e) => { e.preventDefault(); document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }); }}
          className="bg-secondary text-secondary-foreground px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Explore Our Programs
        </a>
      </div>

      {/* Arrows */}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-primary-foreground/60 hover:text-primary-foreground transition-colors" aria-label="Previous slide">
        <ChevronLeft size={40} />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-primary-foreground/60 hover:text-primary-foreground transition-colors" aria-label="Next slide">
        <ChevronRight size={40} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-secondary w-8" : "bg-primary-foreground/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
