import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, MapPin, Calendar, DollarSign, X } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { mockTours } from "@/data/mockData";
import { TourCard } from "./components/TourCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const countries = ["Hammasi", "O'zbekiston", "BAA", "Turkiya", "Misr"];
const durations = ["Hammasi", "1-3 kun", "4-7 kun", "8+ kun"];
const priceRanges = ["Hammasi", "3M gacha", "3-6M", "6M dan yuqori"];

const Tours = () => {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get("search") || searchParams.get("destination") || "";
  
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCountry, setSelectedCountry] = useState("Hammasi");
  const [selectedDuration, setSelectedDuration] = useState("Hammasi");
  const [selectedPrice, setSelectedPrice] = useState("Hammasi");
  const [showFilters, setShowFilters] = useState(false);

  const filteredTours = useMemo(() => {
    return mockTours.filter((tour) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
          tour.title.toLowerCase().includes(query) ||
          tour.destination.toLowerCase().includes(query) ||
          tour.country.toLowerCase().includes(query);
        if (!matchesSearch) return false;
      }

      // Country filter
      if (selectedCountry !== "Hammasi" && tour.country !== selectedCountry) {
        return false;
      }

      // Duration filter
      if (selectedDuration !== "Hammasi") {
        if (selectedDuration === "1-3 kun" && (tour.duration < 1 || tour.duration > 3)) return false;
        if (selectedDuration === "4-7 kun" && (tour.duration < 4 || tour.duration > 7)) return false;
        if (selectedDuration === "8+ kun" && tour.duration < 8) return false;
      }

      // Price filter
      if (selectedPrice !== "Hammasi") {
        if (selectedPrice === "3M gacha" && tour.price > 3000000) return false;
        if (selectedPrice === "3-6M" && (tour.price < 3000000 || tour.price > 6000000)) return false;
        if (selectedPrice === "6M dan yuqori" && tour.price < 6000000) return false;
      }

      return true;
    });
  }, [searchQuery, selectedCountry, selectedDuration, selectedPrice]);

  const hasActiveFilters = selectedCountry !== "Hammasi" || selectedDuration !== "Hammasi" || selectedPrice !== "Hammasi";

  const clearFilters = () => {
    setSelectedCountry("Hammasi");
    setSelectedDuration("Hammasi");
    setSelectedPrice("Hammasi");
    setSearchQuery("");
  };

  return (
    <div>
      <Header/>
      <div className="bg-muted/30 py-8">
        <div className="container">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-foreground md:text-3xl">Barcha turlar</h1>
            <p className="mt-1 text-muted-foreground">
              {filteredTours.length} ta tur topildi
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="mb-6 flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Tur yoki manzilni qidiring..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-12 pl-10"
              />
            </div>
            <Button
              variant={showFilters ? "default" : "outline"}
              size="lg"
              onClick={() => setShowFilters(!showFilters)}
              className="gap-2"
            >
              <Filter className="h-4 w-4" />
              Filtrlar
              {hasActiveFilters && (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs text-primary">
                  !
                </span>
              )}
            </Button>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="mb-6 rounded-xl border border-border bg-card p-4 animate-scale-in">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-foreground">Filtrlar</h3>
                {hasActiveFilters && (
                  <Button variant="ghost" size="sm" onClick={clearFilters} className="gap-1 text-muted-foreground">
                    <X className="h-4 w-4" />
                    Tozalash
                  </Button>
                )}
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {/* Country Filter */}
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    Davlat
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {countries.map((country) => (
                      <Button
                        key={country}
                        variant={selectedCountry === country ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCountry(country)}
                      >
                        {country}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Duration Filter */}
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    Davomiylik
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {durations.map((duration) => (
                      <Button
                        key={duration}
                        variant={selectedDuration === duration ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedDuration(duration)}
                      >
                        {duration}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <DollarSign className="h-4 w-4" />
                    Narx
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {priceRanges.map((range) => (
                      <Button
                        key={range}
                        variant={selectedPrice === range ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedPrice(range)}
                      >
                        {range}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tours Grid */}
          {filteredTours.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-border bg-card p-12 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium text-foreground">Turlar topilmadi</h3>
              <p className="mt-1 text-muted-foreground">
                Filtrlarni o'zgartirib ko'ring yoki qidiruv so'rovini yangilang.
              </p>
              <Button variant="outline" className="mt-4" onClick={clearFilters}>
                Filtrlarni tozalash
              </Button>
            </div>
          )}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Tours;