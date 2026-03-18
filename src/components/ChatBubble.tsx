import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";

interface ChatBubbleProps {
  text: string;
  isUser: boolean;
  type?: "text" | "file";
  fileName?: string;
  fileUrl?: string;
}

const ChatBubble = ({ text, isUser, type = "text", fileName, fileUrl }: ChatBubbleProps) => {
  if (type === "file") {
    return (
      <motion.div
        initial={{ scale: 0.85, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="flex justify-start mb-1 px-4"
      >
        <a
          href={fileUrl}
          download={fileName}
          className="max-w-[75%] bg-bubble-contact rounded-2xl rounded-bl-sm px-3.5 py-2.5 flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer"
        >
          <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
            <FileText className="w-5 h-5 text-accent" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[14px] font-medium text-bubble-contact-foreground truncate">{fileName}</p>
            <p className="text-[11px] text-muted-foreground">Documento</p>
          </div>
          <Download className="w-4 h-4 text-muted-foreground flex-shrink-0" />
        </a>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ scale: 0.85, opacity: 0, y: 10 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-1 px-4`}
    >
      <div
        className={`max-w-[75%] px-3.5 py-2 text-[15px] leading-snug ${
          isUser
            ? "bg-bubble-user text-bubble-user-foreground rounded-2xl rounded-br-sm"
            : "bg-bubble-contact text-bubble-contact-foreground rounded-2xl rounded-bl-sm"
        }`}
      >
        {text}
      </div>
    </motion.div>
  );
};

export default ChatBubble;
