import { Check, X } from "lucide-react";

const TourIncludes = ({
  included,
  notIncluded,
}: {
  included: string[];
  notIncluded: string[];
}) => (
  <div className="grid md:grid-cols-2 gap-6">
    <Box title="Narxga kiradi" items={included} ok />
    
  </div>
);

const Box = ({ title, items, ok }: any) => (
  <div className="bg-card border rounded-xl p-6">
    <h4 className="font-semibold flex gap-2 mb-4">
      {ok ? <Check className="text-success" /> : <X className="text-destructive" />}
      {title}
    </h4>
    <ul className="space-y-2">
      {items.map((i: string) => (
        <li key={i} className="flex gap-2 text-muted-foreground">
          {ok ? <Check /> : <X />}
          {i}
        </li>
      ))}
    </ul>
  </div>
);

export default TourIncludes;
