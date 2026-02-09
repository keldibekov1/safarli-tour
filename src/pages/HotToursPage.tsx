import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { mockTours } from "@/data/mockData";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Flame, Eye, MapPin, Clock, Search } from "lucide-react";

const HotToursPage = () => {
  const [q, setQ] = useState("");

  const hotTours = useMemo(() => {
    const list = [...mockTours]
      .filter((t) => t.status === "active")
      .sort((a, b) => (b.views ?? 0) - (a.views ?? 0));

    const query = q.trim().toLowerCase();
    if (!query) return list;

    return list.filter((t) => {
      const hay =
        `${t.title} ${t.destination} ${t.country} ${t.agencyName}`.toLowerCase();
      return hay.includes(query);
    });
  }, [q]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Flame className="h-5 w-5" />
              <h1 className="text-3xl font-bold">Hot Tours</h1>
            </div>
            <p className="mt-1 text-muted-foreground">
              Eng ommabop turlar (views bo‘yicha saralangan)
            </p>
          </div>

          <div className="relative w-full md:w-[360px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Qidirish: Dubay, Istanbul..."
              className="w-full rounded-md border bg-background py-2 pl-9 pr-3 outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {hotTours.map((t) => {
            const isSoldOut =
              t.status === "sold_out" || (t.availableSpots ?? 0) <= 0;

            return (
              <Link to={`/hots/${t.id}`}>
                <Card key={t.id} className="overflow-hidden">
                  <div className="relative">
                    <img
                      src={t.images?.[0]}
                      alt={t.title}
                      className="h-[220px] w-full object-cover"
                      loading="lazy"
                    />

                    <div className="absolute left-3 top-3 flex gap-2">
                      <Badge className="gap-1">
                        <Flame className="h-3 w-3" /> Hot
                      </Badge>
                      {t.isVerified && (
                        <Badge variant="secondary">Verified</Badge>
                      )}
                      {isSoldOut && (
                        <Badge variant="destructive">Sold out</Badge>
                      )}
                    </div>

                    <div className="absolute right-3 top-3">
                      <Badge variant="secondary" className="gap-1">
                        <Eye className="h-3 w-3" /> {t.views ?? 0}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-4 space-y-2">
                    <h3 className="font-semibold line-clamp-2">{t.title}</h3>

                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-4 w-4" /> {t.destination}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-4 w-4" /> {t.duration} kun
                      </span>
                    </div>

                    <div className="flex items-end justify-between pt-2">
                      <div>
                        <div className="text-lg font-bold">
                          {t.price.toLocaleString("uz-UZ")} so‘m
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Bo‘sh joy: {t.availableSpots}
                        </div>
                      </div>

                      <Button>Ko‘rish</Button>
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>

        {hotTours.length === 0 && (
          <Card className="p-6 mt-6">
            <p className="text-muted-foreground">Hech narsa topilmadi.</p>
          </Card>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default HotToursPage;
