import Image from "next/image";

const slides = [
  { src: "/images/hero-globe.webp", position: "object-center" },
  { src: "/images/logistics.webp", position: "object-center" },
  { src: "/images/materials.webp", position: "object-center" },
];

export function HeroVisual() {
  return (
    <div className="relative h-full min-h-[24rem] overflow-hidden bg-ink">
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className="hero-slide"
          style={{ ["--hero-delay" as string]: `${index * 9000}ms` }}
          aria-hidden="true"
        >
          <Image
            src={slide.src}
            alt=""
            fill
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "auto"}
            sizes="(min-width: 1024px) 48vw, 100vw"
            className={`object-cover ${slide.position}`}
          />
        </div>
      ))}

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent lg:bg-gradient-to-r lg:from-ink lg:via-ink/10 lg:to-transparent"
        aria-hidden="true"
      />

      <p className="absolute inset-x-6 bottom-6 font-display text-[0.6rem] uppercase leading-relaxed tracking-[0.2em] text-paper/60">
        Istanbul · Gulf · Europe · Africa · Asia · Oceania
      </p>
    </div>
  );
}
