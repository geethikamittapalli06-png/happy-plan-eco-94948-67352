import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Send } from "lucide-react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Chat() {
  const [searchParams] = useSearchParams();
  const vendorId = searchParams.get("vendor") || "vendor";
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, sender: "vendor", text: "Hello! How can I help you with your event planning?", time: "10:30 AM" },
    { id: 2, sender: "user", text: "I'd like to discuss catering for 150 guests", time: "10:32 AM" },
    { id: 3, sender: "vendor", text: "Great! We can definitely accommodate that. What type of cuisine are you interested in?", time: "10:33 AM" },
  ]);

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        sender: "user",
        text: message,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      setMessage("");
      
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: prev.length + 1,
          sender: "vendor",
          text: "Thank you for your message! I'll get back to you with details shortly.",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen gradient-subtle">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="h-[calc(100vh-200px)] flex flex-col">
            <div className="p-6 border-b">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback>JC</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="font-semibold">Jaipur Caterers</h2>
                  <p className="text-sm text-muted-foreground">Online</p>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[70%] rounded-lg p-4 ${
                      msg.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <p className={`text-xs mt-1 ${msg.sender === "user" ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t">
              <div className="flex gap-2">
                <Input
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                />
                <Button onClick={handleSend}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
