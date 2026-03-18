import { motion } from "framer-motion";

interface ChatBubbleProps {
  text: string;
  isUser: boolean;
}

const ChatBubble = ({ text, isUser }: ChatBubbleProps) => (
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

export default ChatBubble;
