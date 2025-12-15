import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Tours = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="min-h-[70vh] container mx-auto bg-background py-8">
        <div>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 mb-6 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4" />
            Orqaga
          </button>
        </div>
        <div className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          doloremque dicta distinctio? Aut, expedita vitae. Dolor blanditiis
          odit aliquid quisquam debitis, modi explicabo culpa doloremque
          voluptatum deleniti tenetur quis animi harum aut neque iure delectus,
          iusto incidunt tempora nulla maiores necessitatibus ab veniam aliquam.
          Earum officia iste adipisci necessitatibus accusamus quibusdam quae
          fuga unde illum, animi, repellendus, dolorum iusto minima quod
          molestias minus consequuntur commodi nostrum maxime voluptate id
          laudantium nulla dolor. Necessitatibus tempore repellat corporis,
          assumenda quasi architecto magni quam, eveniet officia commodi porro
          voluptates, laboriosam rerum? Animi inventore possimus est vitae
          aliquam quae libero velit autem delectus iste?ddd
          wsss
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tours;
