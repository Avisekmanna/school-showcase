import { FC } from "react";

const HeroSection: FC = () => {
  const banner = `${import.meta.env.BASE_URL}images/banner.jpeg`;

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden pt-20 md:pt-24">
      <img src={banner} alt="Banner" className="absolute inset-0 w-full h-full object-cover" />

      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] text-center px-6 md:px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-3 animate-fade-in-up leading-tight">
          St. Mother Teressa International School
        </h1>
        <p className="text-sm md:text-base text-primary-foreground/80 max-w-xl md:max-w-2xl mb-4 font-medium">
          a unit of Utthan Krishna Charitable Trust
        </p>
        <p className="text-base md:text-lg text-primary-foreground/80 max-w-xl md:max-w-2xl mb-8 font-light animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Nurturing excellence, inspiring futures. Where every student discovers their potential.
        </p>
        <a
          href="#about"
          onClick={(e) => { e.preventDefault(); document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }); }}
          className="bg-secondary text-secondary-foreground px-6 py-2 rounded-md font-semibold hover:opacity-90 transition-opacity animate-fade-in-up text-sm md:text-base"
          style={{ animationDelay: "0.4s" }}
        >
          Explore Our Programs
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
