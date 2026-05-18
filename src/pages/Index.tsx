
import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedTours from "@/components/FeaturedTours";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import HotTours from "@/components/HotTours";

import { Bot, X } from "lucide-react";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Aiagent from "@/components/aiagent";

const Index = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-[60] rounded-full bg-foreground p-4 text-background shadow-lg hover:opacity-90"
        aria-label="AI Agent"
      >
        <Bot className="h-8 w-8" />
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="z-[70] p-0 sm:max-w-[520px]">
          <div className="flex items-center justify-between border-b px-4 py-3">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              <p className="font-semibold">AI Agent</p>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(false)}
              className="h-9 w-9"
              aria-label="Close"
            ></Button>
          </div>

          <div className="p-4">
            <Aiagent />
          </div>
        </DialogContent>
      </Dialog>

      <main>
        <HeroSection />
        <HotTours />
        <FeaturedTours />
        <TrustSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
