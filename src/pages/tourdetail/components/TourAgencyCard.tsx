import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BadgeCheck, Phone, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import type { Agency } from "../types";

const TourAgencyCard = ({ agency }: { agency: Agency }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      toast({
        title: "Xatolik",
        description: "Ism va telefonni to'ldiring",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "So‘rov yuborildi",
        description: "Firma tez orada aloqaga chiqadi",
      });
      setFormData({ name: "", phone: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div className="bg-card rounded-xl p-6 border border-border card-shadow sticky top-24">
        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
          <img
            src={agency.logo}
            alt={agency.name}
            className="w-14 h-14 rounded-xl object-cover"
          />

          <div>
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              {agency.name}
              {agency.isVerified && (
                <BadgeCheck className="w-5 h-5 text-success" />
              )}
            </h3>

            {agency.isVerified && (
              <span className="verified-badge mt-1 inline-flex items-center gap-1 text-xs text-success">
                <BadgeCheck className="w-3.5 h-3.5" />
                Tasdiqlangan firma
              </span>
            )}
          </div>
        </div>

        <div className="flex gap-3 mb-6">
          <Button
            variant="outline"
            className="flex-1 gap-2"
            onClick={() => window.open(`tel:${agency.phone}`)}
          >
            <Phone className="w-4 h-4" />
            Qo'ng'iroq
          </Button>

          <Button
            variant="outline"
            className="flex-1 gap-2"
            onClick={() =>
              window.open(
                `https://t.me/${agency.telegram.replace("@", "")}`,
                "_blank"
              )
            }
          >
            <Send className="w-4 h-4" />
            Telegram
          </Button>
        </div>

        <div className="bg-muted rounded-xl p-4">
          <h4 className="font-semibold text-foreground mb-4">
            So'rov yuborish
          </h4>

          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              placeholder="Ismingiz"
              value={formData.name}
              onChange={(e) =>
                setFormData((p) => ({ ...p, name: e.target.value }))
              }
              className="bg-card"
            />

            <Input
              placeholder="Telefon raqam"
              value={formData.phone}
              onChange={(e) =>
                setFormData((p) => ({ ...p, phone: e.target.value }))
              }
              className="bg-card"
            />

            <Button
              type="submit"
              variant="accent"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Yuborilmoqda..." : "Sorov yuborish"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TourAgencyCard;
