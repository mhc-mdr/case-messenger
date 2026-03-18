import { motion } from "framer-motion";

const TypingIndicator = () => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    className="flex justify-start mb-1 px-4"
  >
    <div className="bg-bubble-contact rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1.5">
      <span className="typing-dot w-2 h-2 rounded-full bg-muted-foreground inline-block" />
      <span className="typing-dot w-2 h-2 rounded-full bg-muted-foreground inline-block" />
      <span className="typing-dot w-2 h-2 rounded-full bg-muted-foreground inline-block" />
    </div>
  </motion.div>
);

export default TypingIndicator;
