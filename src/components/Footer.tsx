const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-8">
    <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between gap-4">
      <div className="flex items-center gap-4">
        <img src={`${import.meta.env.BASE_URL}images/banner-png.PNG`} alt="Banner" className="h-12 md:h-16 object-contain" />
        <div>
          <p className="font-serif text-base md:text-lg font-bold mb-0">
            St. Mother Teressa International School
          </p>
          <p className="text-primary-foreground/60 text-xs md:text-sm">
            a unit of Utthan Krishna Charitable Trust
          </p>
          <p className="text-primary-foreground/60 text-xs md:text-sm mt-2">
            © {new Date().getFullYear()} St. Mother Teressa International School. All rights reserved.
          </p>
        </div>
      </div>

      <div className="text-center md:text-right text-sm text-primary-foreground/70">
        <p className="mb-1">Contact: info@stmotherteressa.edu</p>
        <p>Follow us on social media</p>
      </div>
    </div>
  </footer>
);

export default Footer;
