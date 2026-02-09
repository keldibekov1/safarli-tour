import { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { mockTours, mockAgencies } from "@/data/mockData"; // yo'lini mosla

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  CheckCircle2,
  MapPin,
  Calendar,
  Clock,
  Users,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const TourDetail = () => {
  const { id } = useParams();

  const tour = useMemo(() => mockTours.find((t) => t.id === id), [id]);

  const agency = useMemo(() => {
    if (!tour) return null;
    return mockAgencies.find((a) => a.id === tour.agencyId) || null;
  }, [tour]);

  if (!tour) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-10">
          <Card className="p-6 space-y-3">
            <h1 className="text-2xl font-bold">Tur topilmadi</h1>
            <p className="text-muted-foreground">
              Bunday tur mavjud emas yoki o‘chirib yuborilgan.
            </p>
            <Link to="/">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" /> Bosh sahifa
              </Button>
            </Link>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  const images = (tour.images || []).filter(Boolean);
  const [imgIndex, setImgIndex] = useState(0);

  const prevImg = () => {
    if (images.length <= 1) return;
    setImgIndex((i) => (i - 1 + images.length) % images.length);
  };

  const nextImg = () => {
    if (images.length <= 1) return;
    setImgIndex((i) => (i + 1) % images.length);
  };

  const isSoldOut =
    tour.status === "sold_out" || (tour.availableSpots ?? 0) <= 0;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-5">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Orqaga
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* LEFT */}
          <div className="lg:col-span-2 space-y-6">
            {/* GALLERY (slider) */}
            <Card className="overflow-hidden">
              <div className="p-2">
                <div className="relative">
                  <img
                    src={images[imgIndex]}
                    alt={`${tour.title}-${imgIndex}`}
                    className="h-72 w-full rounded-md object-cover md:h-[420px]"
                  />

                  {images.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={prevImg}
                        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow hover:bg-background"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>

                      <button
                        type="button"
                        onClick={nextImg}
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow hover:bg-background"
                        aria-label="Next image"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>

                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-background/80 px-3 py-1 text-xs">
                        {imgIndex + 1} / {images.length}
                      </div>
                    </>
                  )}
                </div>

                {images.length > 1 && (
                  <div className="mt-2 flex gap-2 overflow-x-auto pb-1">
                    {images.map((img, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setImgIndex(idx)}
                        className={`shrink-0 overflow-hidden rounded-md border ${
                          idx === imgIndex
                            ? "border-foreground"
                            : "border-transparent"
                        }`}
                        aria-label={`Select image ${idx + 1}`}
                      >
                        <img
                          src={img}
                          alt={`${tour.title}-thumb-${idx}`}
                          className="h-16 w-24 object-cover"
                          loading="lazy"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </Card>

            {/* TITLE */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-3xl font-bold">{tour.title}</h1>
                {tour.isVerified && (
                  <Badge className="gap-1">
                    <CheckCircle2 className="h-3 w-3" /> Verified
                  </Badge>
                )}
                {isSoldOut && <Badge variant="destructive">Sold out</Badge>}
              </div>

              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-4 w-4" /> {tour.destination},{" "}
                  {tour.country}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-4 w-4" /> {tour.duration} kun
                </span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-4 w-4" /> {tour.startDate} —{" "}
                  {tour.endDate}
                </span>
              </div>
            </div>

            {/* DESCRIPTION */}
            <Card className="p-5 space-y-3">
              <h2 className="text-xl font-semibold">Tur haqida</h2>
              <p className="text-muted-foreground leading-relaxed">
                {tour.description}
              </p>
            </Card>

            {/* INCLUSIONS */}
            <Card className="p-5 space-y-3">
              <h2 className="text-xl font-semibold">Nimalar kiritilgan</h2>
              <ul className="grid gap-2 sm:grid-cols-2">
                {(tour.inclusions || []).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* AGENCY */}
            {agency && (
              <Card className="p-5 space-y-3">
                <h2 className="text-xl font-semibold">Agentlik</h2>
                <div className="flex items-center gap-4">
                  <img
                    src={agency.logo}
                    alt={agency.name}
                    className="h-14 w-14 rounded-md object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-semibold">{agency.name}</p>
                      {agency.isVerified && (
                        <Badge variant="secondary">Verified</Badge>
                      )}
                      <Badge variant="outline">⭐ {agency.rating}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {agency.description}
                    </p>
                    <div className="mt-2 text-sm">
                      <span className="text-muted-foreground">Tel: </span>
                      <a
                        className="hover:underline"
                        href={`tel:${agency.phone}`}
                      >
                        {agency.phone}
                      </a>
                      <span className="mx-2 text-muted-foreground">•</span>
                      <span className="text-muted-foreground">Telegram: </span>
                      <span>{agency.telegram}</span>
                    </div>
                  </div>
                </div>
              </Card>
            )}
          </div>

          {/* RIGHT */}
          <div className="space-y-4">
            <Card className="p-5 space-y-4 sticky top-4">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Narx</p>
                  <p className="text-3xl font-bold">
                    {tour.price.toLocaleString("uz-UZ")} so‘m
                  </p>
                </div>
                <Badge variant="outline" className="gap-1">
                  <Users className="h-3 w-3" /> {tour.availableSpots} bo‘sh joy
                </Badge>
              </div>

              <div className="grid gap-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Agentlik</span>
                  <span className="text-foreground">{tour.agencyName}</span>
                </div>
              </div>

              <Button disabled={isSoldOut} className="w-full">
                {isSoldOut ? "Joy qolmagan" : "Bron qilish"}
              </Button>

              <Button variant="outline" className="w-full">
                Agentlikka yozish
              </Button>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TourDetail;
