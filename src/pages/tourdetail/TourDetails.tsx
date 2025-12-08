import { Link, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

import TourGallery from "./components/TourGallery";
import TourInfo from "./components/TourInfo";
import TourIncludes from "./components/TourIncludes";
import TourAgencyCard from "./components/TourAgencyCard";
import { useTour } from "@/hooks/useTours";
import Loading from "@/components/common/Loading";

const TourDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data: tour, isLoading, isError } = useTour(id);

  if (isLoading) {
    return <Loading />;
  }

  if (isError || !tour) {
    return <div className="py-40 text-center text-destructive">Topilmadi</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 mb-6 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4" />
          Orqaga
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <TourGallery images={tour.images} title={tour.title} />
            <TourInfo tour={tour} />
            <TourIncludes
              included={tour.included}
              notIncluded={tour.notIncluded}
            />
          </div>

          <TourAgencyCard agency={tour.agency} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TourDetails;
