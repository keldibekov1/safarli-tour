import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Users, BadgeCheck } from "lucide-react";


export function TourCard({ tour }) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("uz-UZ").format(price) + " so'm";
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("uz-UZ", {
      day: "numeric",
      month: "short",
    });
  };

  return (
    <Link to={`/tours/${tour.id}`}>
      <Card className="group overflow-hidden border-border/50 hover:border-accent/50">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={tour.images[0]}
            alt={tour.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
          
          {tour.status === "sold_out" && (
            <div className="absolute inset-0 flex items-center justify-center bg-primary/70">
              <span className="rounded-lg bg-destructive px-4 py-2 text-sm font-semibold text-destructive-foreground">
                Sotilgan
              </span>
            </div>
          )}
          
          <div className="absolute bottom-3 left-3 right-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-sm text-primary-foreground">
                <MapPin className="h-4 w-4" />
                <span className="font-medium">{tour.destination}</span>
              </div>
              <Badge  className="font-semibold">
                {tour.duration} kun
              </Badge>
            </div>
          </div>
        </div>

        <CardContent className="space-y-3 p-4">
          <h3 className="line-clamp-2 font-semibold leading-snug text-foreground transition-colors group-hover:text-accent">
            {tour.title}
          </h3>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(tour.startDate)} - {formatDate(tour.endDate)}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-muted-foreground">dan</span>
              <span className="text-lg font-bold text-primary">{formatPrice(tour.price)}</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>{tour.availableSpots} o'rin</span>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-border/50 pt-3">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">{tour.agencyName}</span>
              {tour.isVerified && (
                <BadgeCheck className="h-4 w-4 text-accent" />
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
