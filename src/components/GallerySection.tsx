import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  { src: `${import.meta.env.BASE_URL}images/gallery/science-lab.jpg`, alt: "Science Laboratory" },
  { src: `${import.meta.env.BASE_URL}images/gallery/library.jpg`, alt: "School Library" },
  { src: `${import.meta.env.BASE_URL}images/gallery/sports.jpg`, alt: "Sports Field" },
  { src: `${import.meta.env.BASE_URL}images/gallery/art-class.jpg`, alt: "Art Class" },
  { src: `${import.meta.env.BASE_URL}images/gallery/computer-lab.jpg`, alt: "Computer Lab" },
  { src: `${import.meta.env.BASE_URL}images/gallery/assembly.jpg`, alt: "School Assembly" },
];

const GallerySection = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((i) => (i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : null));
  const nextImage = () => setLightboxIndex((i) => (i !== null ? (i + 1) % galleryImages.length : null));

  return (
    <section id="gallery" className="section-padding bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground gold-underline-center">
            Campus Gallery
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto text-lg">
            Take a visual tour of our state-of-the-art facilities and vibrant campus life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <button
              key={img.src}
              onClick={() => openLightbox(i)}
              className="group relative aspect-square overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-end">
                <span className="text-primary-foreground font-semibold px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                  {img.alt}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button onClick={closeLightbox} className="absolute top-6 right-6 text-primary-foreground/80 hover:text-primary-foreground" aria-label="Close lightbox">
            <X size={32} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 text-primary-foreground/60 hover:text-primary-foreground"
            aria-label="Previous image"
          >
            <ChevronLeft size={40} />
          </button>
          <img
            src={galleryImages[lightboxIndex].src}
            alt={galleryImages[lightboxIndex].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 text-primary-foreground/60 hover:text-primary-foreground"
            aria-label="Next image"
          >
            <ChevronRight size={40} />
          </button>
          <p className="absolute bottom-6 text-primary-foreground/80 text-sm">
            {galleryImages[lightboxIndex].alt} — {lightboxIndex + 1} / {galleryImages.length}
          </p>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
