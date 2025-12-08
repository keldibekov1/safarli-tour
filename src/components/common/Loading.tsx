import { MapPin, Plane, Loader2 } from "lucide-react";

interface LoadingProps {
  text?: string;
}

const Loading = ({ text = " Yuklanmoqda..." }: LoadingProps) => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="relative flex flex-col items-center gap-4 text-center">
        <div className="relative">
          <div className="w-20 h-20 rounded-full border-4 border-muted animate-spin border-t-accent" />

          <div className="absolute inset-0 flex items-center justify-center">
            <Plane className="w-6 h-6 text-accent animate-pulse" />
          </div>
        </div>
        <div className="space-y-1">
          <p className="font-medium text-foreground">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
