import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Agencies = () => {
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          doloremque cumque nobis ad ducimus dolorem labore blanditiis dolores,
          fugiat tempora suscipit earum velit inventore. Iste, aliquid neque
          fuga sint temporibus corporis repellat! Dolorum voluptate earum
          eligendi quam voluptas velit quae optio quod atque? Nisi voluptates
          aperiam officiis incidunt ad ullam, veniam qui sapiente consequuntur
          tempora ipsam iste vitae natus id, obcaecati quia sed ab. Accusamus
          velit aliquam veritatis totam ex sequi, modi architecto est,
          distinctio dolor quam sit expedita omnis soluta fugiat adipisci nemo!
          Autem itaque quas sunt alias voluptatibus!
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Agencies;
