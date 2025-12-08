import { MapPin, Clock, Calendar, Users } from "lucide-react";
import { Tour } from "../types";
import Stat from "./Stat";

const TourInfo = ({ tour }: { tour: Tour }) => {
  return (
    <>
      <div className="flex gap-2 text-muted-foreground">
        <MapPin className="w-4 h-4" />
        {tour.destination}
      </div>

      <h1 className="text-4xl font-bold">{tour.title}</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Stat icon={<Clock />} label="Davomiyligi" value={tour.duration} />
        <Stat icon={<Calendar />} label="Sana" value={tour.dates} />
        <Stat
          icon={<Users />}
          label="Bo'sh o'rinlar"
          value={`${tour.availableSeats} ta`}
        />
        <Stat
          label="Narx"
          value={`${tour.price.toLocaleString()} so'm`}
          accent
        />
      </div>

      <p className="whitespace-pre-line text-muted-foreground">
        {tour.description}
      </p>
    </>
  );
};

export default TourInfo;
