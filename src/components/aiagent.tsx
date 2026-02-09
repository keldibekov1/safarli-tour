import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Msg = {
  id: string;
  role: "user" | "support";
  text: string;
  time: string;
};

 const now = new Date();    
export default function Aiagent() {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    {
      id: "1",
      role: "support",
      text: "Salom! Sizga qanday yordam bera olaman?",
      time: `${String(now.getHours()).padStart(2, "0")}:${String(
        now.getMinutes(),
      ).padStart(2, "0")}`,
    },
  ]);

  const send = () => {
    const v = text.trim();
    if (!v) return;

    const now = new Date();
    const time = `${String(now.getHours()).padStart(2, "0")}:${String(
      now.getMinutes(),
    ).padStart(2, "0")}`;

    setMessages((p) => [
      ...p,
      { id: crypto.randomUUID(), role: "user", text: v, time },
      {
        id: crypto.randomUUID(),
        role: "support",
        text: "Qabul qildim  Hozir javob tayyorlayapman.",
        time,
      },
    ]);
    setText("");
  };

  return (
    <div className="flex h-[460px] flex-col overflow-hidden rounded-xl border bg-background">
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex items-end gap-2 ${
              m.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {m.role === "support" && (
              <div className="h-9 w-9 shrink-0 rounded-full border bg-muted flex items-center justify-center text-xs">
                AI
              </div>
            )}

            <div
              className={`max-w-[78%] rounded-2xl px-4 py-3 ${
                m.role === "user"
                  ? "bg-foreground text-background"
                  : "bg-muted text-foreground"
              }`}
            >
              <div className="mb-1 flex items-center justify-between gap-3">
                <p className="text-xs opacity-70">
                  {m.role === "user" ? "Siz" : "Yordamchi"}
                </p>
                <p className="text-xs opacity-70">{m.time}</p>
              </div>
              <p className="text-sm leading-relaxed">{m.text}</p>
            </div>

            {m.role === "user" && (
              <div className="h-9 w-9 shrink-0 rounded-full border bg-muted flex items-center justify-center text-xs">
                U
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="border-t p-3">
        <div className="flex items-center gap-2">
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Xabar yozing..."
            onKeyDown={(e) => {
              if (e.key === "Enter") send();
            }}
          />
          <Button onClick={send}>Send</Button>
        </div>
      </div>
    </div>
  );
}
