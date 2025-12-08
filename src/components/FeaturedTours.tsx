import { useTours } from "@/hooks/useTours";
import TourCard from "./TourCard";
import Loading from "./common/Loading";

const FeaturedTours = () => {
  const { data: tours = [], isLoading, isError } = useTours();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div className="py-20 text-center">Xatolik</div>;
  }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Mashhur turlar
            </h2>
            <p className="text-muted-foreground">
              Eng kop tanlangan va ishonchli turlar
            </p>
          </div>

          <a href="/tours" className="text-accent font-medium hover:underline">
            Barcha turlarni korish →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour: any) => (
            <TourCard key={tour.id} {...tour} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
