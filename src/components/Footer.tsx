const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-10">
    <div className="container mx-auto text-center">
      <img src={`${import.meta.env.BASE_URL}images/banner-png.PNG`} alt="Banner" className="mx-auto mb-4 h-16 object-contain" />
      <p className="font-serif text-lg font-bold mb-2">
        Bright<span className="text-secondary">Minds</span> Academy
      </p>
      <p className="text-primary-foreground/60 text-sm">
        © {new Date().getFullYear()} BrightMinds Academy. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
