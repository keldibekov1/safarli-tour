import { Link } from "react-router-dom";
import { Clock, Users, MapPin, BadgeCheck } from "lucide-react";

interface TourCardProps {
  id: string;
  images: string;
  title: string;
  destination: string;
  duration: string;
  price: number;
  availableSeats: number;
  agencyName: string;
  isVerified: boolean;
}

const TourCard = ({
  id,
  images,
  title,
  destination,
  duration,
  price,
  availableSeats,
  agency,
}: any) => {
  return (
    <Link to={`/tour/${id}`} className="group block">
      <article className="bg-card rounded-xl overflow-hidden card-shadow border border-border">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={images[0]}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 right-4 bg-card/95 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-lg">
            <span className="text-sm font-semibold text-foreground">
              {price.toLocaleString()} so'm
            </span>
            <span className="text-xs text-muted-foreground block">
              dan boshlab
            </span>
          </div>
          {availableSeats <= 5 && (
            <div className="absolute top-4 left-4 bg-destructive/90 backdrop-blur-sm rounded-lg px-3 py-1.5">
              <span className="text-xs font-medium text-destructive-foreground">
                Faqat {availableSeats} o'rin qoldi!
              </span>
            </div>
          )}
        </div>

        <div className="p-5">
          <div className="flex items-center gap-1.5 text-muted-foreground mb-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{destination}</span>
          </div>

          <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-accent transition-colors">
            {title}
          </h3>

          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{duration}</span>
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Users className="w-4 h-4" />
              <span className="text-sm">{availableSeats} o'rin</span>
            </div>
          </div>

          <div className="border-t border-border pt-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                {agency.name}
              </span>
              {agency.isVerified && (
                <div className="verified-badge">
                  <BadgeCheck className="w-3.5 h-3.5" />
                  <span>Tasdiqlangan</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default TourCard;
