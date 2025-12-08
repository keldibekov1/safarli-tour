import { Button } from "@/components/ui/button";
import { ArrowRight, Building2 } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="hero-gradient rounded-3xl p-8 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent rounded-full blur-3xl" />
          </div>

          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Tur firmasimisiz?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-6">
                Safarli platformasida o'z turlaringizni joylashtiring va minglab sayohatchilarga yeting. Ro'yxatdan o'tish bepul va oson.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="gap-2">
                  <Building2 className="w-5 h-5" />
                  Ro'yxatdan o'tish
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="heroOutline" size="lg">
                  Batafsil ma'lumot
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">0%</div>
                <p className="text-primary-foreground/70 text-sm">Boshlang'ich to'lov</p>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">1K+</div>
                <p className="text-primary-foreground/70 text-sm">Oylik tashriflar</p>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">24h</div>
                <p className="text-primary-foreground/70 text-sm">Tasdiqlash vaqti</p>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">50+</div>
                <p className="text-primary-foreground/70 text-sm">Hamkor firmalar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
