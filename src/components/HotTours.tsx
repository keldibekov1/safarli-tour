import { useMemo, useState, useEffect, useRef } from "react";
import { mockTours } from "@/data/mockData";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Flame, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const AUTOPLAY_MS = 2000;

const HotTours = () => {
  const hotTours = useMemo(() => {
    return [...mockTours]
      .filter((t) => t.status === "active" && (t.availableSpots ?? 0) > 0)
      .sort((a, b) => (b.views ?? 0) - (a.views ?? 0))
      .slice(0, 12);
  }, []);

  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [index, setIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const viewportRef = useRef<HTMLDivElement | null>(null);

  // responsive
  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth;
      const next = w < 640 ? 1 : w < 1024 ? 2 : 3;
      setCardsPerPage(next);
      setIndex(0);
    };

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  if (hotTours.length === 0) return null;

  const maxIndex = Math.max(0, hotTours.length - cardsPerPage);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  // autoplay (hover bo'lsa to'xtaydi)
  useEffect(() => {
    if (isHovering) return;
    if (hotTours.length <= cardsPerPage) return;

    const t = window.setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, AUTOPLAY_MS);

    return () => window.clearInterval(t);
  }, [isHovering, hotTours.length, cardsPerPage, maxIndex]);

  // track translateX: har bir card kengligi = viewportWidth / cardsPerPage
  const translatePercent = (index * 100) / cardsPerPage;

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-6 flex items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <Flame className="h-5 w-5 text-red-700" />
              <h2 className="text-2xl font-bold">Qaynoq Turlar</h2>
            </div>
            <p className="text-muted-foreground mt-1">
              Hozir eng ommabop va tez tugab qoladigan turlar
            </p>
          </div>

          <Link to="/hot">
            <Button variant="outline">Barchasini ko‘rish</Button>
          </Link>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Prev */}
          <button
            type="button"
            onClick={prev}
            disabled={index === 0}
            className="absolute -left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/90 p-2 shadow hover:bg-background disabled:opacity-40"
            aria-label="Prev"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={next}
            disabled={index === maxIndex}
            className="absolute -right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/90 p-2 shadow hover:bg-background disabled:opacity-40"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Viewport */}
          <div ref={viewportRef} className="overflow-hidden">
            {/* Track */}
            <div
              className="flex gap-5 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${translatePercent}%)` }}
            >
              {hotTours.map((t) => (
                <div
                  key={t.id}
                  className="shrink-0"
                  style={{ width: `calc(${100 / cardsPerPage}% - ${(5 * (cardsPerPage - 1)) / cardsPerPage}px)` }}
                >
                  <Link to={`/hots/${t.id}`} className="block">
                    <Card className="overflow-hidden">
                      <div className="relative">
                        <img
                          src={t.images?.[0]}
                          alt={t.title}
                          className="h-[220px] w-full object-cover"
                          loading="lazy"
                        />

                        <div className="absolute left-3 top-3">
                          <Badge className="gap-1">
                            <Flame className="h-3 w-3" /> Hot
                          </Badge>
                        </div>

                        <div className="absolute right-3 top-3">
                          <Badge variant="secondary" className="gap-1">
                            <Eye className="h-3 w-3" /> {t.views ?? 0}
                          </Badge>
                        </div>
                      </div>

                      <div className="p-4 space-y-2">
                        <h3 className="font-semibold line-clamp-2">{t.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {t.destination} • {t.duration} kun
                        </p>

                        <div className="flex items-center justify-between pt-2">
                          <div>
                            <div className="text-lg font-bold">
                              {t.price.toLocaleString("uz-UZ")} so‘m
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Bo‘sh joy: {t.availableSpots}
                            </div>
                          </div>

                          <Button>Bron qilish</Button>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          {maxIndex > 0 && (
            <div className="mt-5 flex items-center justify-center gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`h-2 w-2 rounded-full ${
                    i === index ? "bg-foreground" : "bg-muted"
                  }`}
                  aria-label={`Go to ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HotTours;
