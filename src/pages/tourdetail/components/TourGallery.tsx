import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TourGallery = ({ images, title }: { images: string[]; title: string }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-muted">
      <img src={images[index]} alt={title} className="w-full h-full object-cover" />

      <button
        onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
        className="gallery-btn left-4"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={() => setIndex((i) => (i + 1) % images.length)}
        className="gallery-btn right-4"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default TourGallery;
