import { FC } from "react";

const HeroSection: FC = () => {
  const banner = `${import.meta.env.BASE_URL}images/banner.jpeg`;

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <img src={banner} alt="Banner" className="absolute inset-0 w-full h-full object-cover" />

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
    </section>
  );
};

export default HeroSection;
