import { useState, useRef, useEffect, useCallback } from "react";
import { Send, ChevronLeft, Wifi, Battery, Signal } from "lucide-react";
import { chatScript, type ScriptMessage } from "@/data/chatScript";
import ChatBubble from "./ChatBubble";
import TypingIndicator from "./TypingIndicator";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  type: "text" | "file";
  fileName?: string;
  fileUrl?: string;
}

const IPhoneChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [scriptIndex, setScriptIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(0);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  // Send the first block automatically on mount
  useEffect(() => {
    if (chatScript.length > 0) {
      sendContactMessages(chatScript[0], 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendContactMessages = async (blocks: ScriptMessage[], startFromScript: number) => {
    setIsProcessing(true);
    for (let i = 0; i < blocks.length; i++) {
      const msg = blocks[i];
      if (msg.type === "text") {
        setIsTyping(true);
        const delay = Math.min(3000, Math.max(1000, msg.text.length * 8));
        await new Promise((r) => setTimeout(r, delay));
        setIsTyping(false);
      } else {
        await new Promise((r) => setTimeout(r, 600));
      }

      const id = nextId.current++;
      setMessages((prev) => [...prev, {
        id,
        text: msg.text,
        isUser: false,
        type: msg.type,
        fileName: msg.fileName,
        fileUrl: msg.fileUrl,
      }]);

      if (i < blocks.length - 1) {
        await new Promise((r) => setTimeout(r, 400));
      }
    }
    setScriptIndex(startFromScript + 1);
    setIsProcessing(false);
  };

  const handleSend = () => {
    const text = inputValue.trim();
    if (!text || isProcessing) return;

    const id = nextId.current++;
    setMessages((prev) => [...prev, { id, text, isUser: true, type: "text" }]);
    setInputValue("");

    if (scriptIndex < chatScript.length) {
      sendContactMessages(chatScript[scriptIndex], scriptIndex);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const currentTime = new Date().toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <div className="relative w-[375px] h-[812px] bg-card rounded-[50px] shadow-2xl border-[3px] border-iphone-frame overflow-hidden flex flex-col">
        {/* Dynamic Island */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[120px] h-[34px] bg-notch rounded-full z-50" />

        {/* Status Bar */}
        <div className="flex items-center justify-between px-8 pt-4 pb-1 text-foreground text-xs font-semibold z-40">
          <span>{currentTime}</span>
          <div className="flex items-center gap-1">
            <Signal className="w-3.5 h-3.5" />
            <Wifi className="w-3.5 h-3.5" />
            <Battery className="w-4.5 h-3.5" />
          </div>
        </div>

        {/* Header */}
        <div className="flex items-center gap-2 px-4 py-2 bg-header-bg border-b border-border z-30 mt-4">
          <ChevronLeft className="w-6 h-6 text-primary" />
          <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-muted-foreground fill-current">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-foreground leading-tight">Contacto Policial</p>
            <p className="text-xs text-muted-foreground">iMessage</p>
          </div>
        </div>

        {/* Messages - WhatsApp background */}
        <div className="flex-1 overflow-y-auto hide-scrollbar py-3 bg-chat-bg chat-wallpaper">
          {messages.map((msg) => (
            <ChatBubble
              key={msg.id}
              text={msg.text}
              isUser={msg.isUser}
              type={msg.type}
              fileName={msg.fileName}
              fileUrl={msg.fileUrl}
            />
          ))}
          {isTyping && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="px-3 py-2 bg-header-bg border-t border-border flex items-end gap-2 pb-8">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="iMessage"
            disabled={isProcessing || scriptIndex > chatScript.length}
            className="flex-1 bg-card border border-border rounded-full px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50"
          />
          <button
            onClick={handleSend}
            disabled={!inputValue.trim() || isProcessing}
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center disabled:opacity-30 transition-opacity"
          >
            <Send className="w-4 h-4 text-primary-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IPhoneChat;
