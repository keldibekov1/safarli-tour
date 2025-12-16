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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tours;
