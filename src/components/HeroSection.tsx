import { Search, MapPin, DollarSign, Clock } from "lucide-react";
import { Calendar as CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "./ui/calendar";

import { useState } from "react";
import { format } from "date-fns";
import { uz } from "date-fns/locale";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const HeroSection = () => {
  const [date, setDate] = useState<Date | undefined>();
  return (
    <section className="relative hero-gradient overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container relative py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground">
              Dunyo bo'ylab 150+ tur
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-slide-up">
            Sayohatingizni ishonchli{" "}
            <span className="text-accent">firmalar</span> bilan tanlang
          </h1>

          <p
            className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            Tekshirilgan tur firmalaridan real turlar. Narxlarni solishtiring,
            eng yaxshisini tanlang.
          </p>

          <div
            className="bg-card rounded-2xl p-4 md:p-6 shadow-2xl animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Qayerga?"
                  className="pl-10 h-12 bg-muted border-0 text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div className="relative">
                <Popover>
                  <PopoverTrigger asChild>
                    <button type="button" className="w-full">
                      <div className="relative">
                        <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          readOnly
                          placeholder="Sana"
                          value={
                            date
                              ? format(date, "dd MMM yyyy", { locale: uz })
                              : ""
                          }
                          className="pl-10 h-12 bg-muted border-0 text-foreground placeholder:text-muted-foreground cursor-pointer"
                        />
                      </div>
                    </button>
                  </PopoverTrigger>

                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Muddat"
                  className="pl-10 h-12 bg-muted border-0 text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <Button variant="accent" size="lg" className="h-12 gap-2">
                <Search className="w-5 h-5" />
                <span>Qidirish</span>
              </Button>
            </div>
          </div>

          <div
            className="flex flex-wrap justify-center gap-8 mt-10 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <span className="text-lg font-bold text-accent">50+</span>
              </div>
              <span className="text-sm">Ishonchli firmalar</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <span className="text-lg font-bold text-accent">1K+</span>
              </div>
              <span className="text-sm">Mamnun sayohatchilar</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <span className="text-lg font-bold text-accent">24/7</span>
              </div>
              <span className="text-sm">Qo'llab-quvvatlash</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
