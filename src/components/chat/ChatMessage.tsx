
import { motion } from 'framer-motion';
import { Message } from '@/types/chat';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  return (
    <motion.div
      key={message.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
    >
      <div className={`max-w-xs p-3 rounded-lg relative ${
        message.isBot 
          ? 'bg-white text-gray-800 rounded-tl-none shadow-sm' 
          : 'bg-[#d8fdd2] text-gray-800 rounded-tr-none'
      }`}>
        <p className="text-sm leading-relaxed">{message.text}</p>
        <div className={`flex items-center justify-end mt-1 space-x-1 space-x-reverse ${
          message.isBot ? 'text-gray-500' : 'text-gray-600'
        }`}>
          <span className="text-xs">{message.time}</span>
          {!message.isBot && (
            <div className="flex space-x-0.5">
              <div className="w-2 h-2">
                <svg viewBox="0 0 16 15" className="fill-current text-[#4fc3f7]">
                  <path d="m15.01 3.316-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.063-.51z"/>
                  <path d="m5.09 9.050a.32.32 0 0 1-.484.032l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033L10.666 3.9a.32.32 0 0 0-.033-.484l-.325-.358a.319.319 0 0 0-.484.032L5.09 9.050z"/>
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ChatMessage;
