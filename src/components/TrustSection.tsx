import { Shield, BadgeCheck, Users, Headphones } from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "Tasdiqlangan firmalar",
    description:
      "Barcha firmalar tekshirilgan va litsenziyalangan. Faqat ishonchli hamkorlar.",
  },
  {
    icon: Shield,
    title: "Xavfsiz tranzaksiyalar",
    description:
      "Sizning ma'lumotlaringiz himoyalangan. Hech qanday yashirin to'lovlar yo'q.",
  },
  {
    icon: Users,
    title: "Real sharhlar",
    description:
      "Haqiqiy sayohatchilar tajribalarini o'qing va to'g'ri tanlov qiling.",
  },
  {
    icon: Headphones,
    title: "24/7 yordam",
    description: "Har qanday savolingizga tez javob. Biz doim aloqadamiz.",
  },
];

const TrustSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nima uchun <span className="text-accent">Safarli</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            Biz sizning xavfsiz va yoqimli sayohatingizni ta'minlash uchun
            ishlaymiz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card rounded-xl p-6 border border-border card-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
