const brands = [
  "ADIDAS",
  "YONEX",
  "PUMA",
  "SG",
  "NIKE",
  "REEBOK",
  "ASICS",
  "NEW BALANCE",
];

const BrandStrip = () => {
  return (
    <section className="py-12 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-sm font-bold text-muted-foreground uppercase tracking-widest mb-8">
          Trusted By Top Brands
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {brands.map((brand) => (
            <div
              key={brand}
              className="flex items-center justify-center h-16 group cursor-pointer"
            >
              <span className="text-xl lg:text-2xl font-black text-muted-foreground/50 group-hover:text-primary transition-colors duration-300 uppercase tracking-tight">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandStrip;
