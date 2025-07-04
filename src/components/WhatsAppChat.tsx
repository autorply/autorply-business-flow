
import { motion } from 'framer-motion';
import { useChat } from '@/hooks/useChat';
import ChatHeader from './chat/ChatHeader';
import ChatMessages from './chat/ChatMessages';
import ChatInput from './chat/ChatInput';

const WhatsAppChat = () => {
  const {
    message,
    setMessage,
    messages,
    messagesEndRef,
    isLoading,
    handleSendMessage,
    handleKeyPress
  } = useChat();

  const handleSendMessageWithoutScroll = (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    handleSendMessage();
  };

  const handleKeyPressWithoutScroll = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      e.stopPropagation();
      handleSendMessageWithoutScroll();
    }
  };

  return (
    <motion.div 
      className="relative mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {/* iPhone Frame */}
      <div className="relative w-72 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl">
        <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative flex flex-col">
          {/* iPhone Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>

          <ChatHeader />
          
          <ChatMessages 
            messages={messages}
            isLoading={isLoading}
            messagesEndRef={messagesEndRef}
          />

          <form onSubmit={handleSendMessageWithoutScroll} onClick={(e) => e.stopPropagation()}>
            <ChatInput
              message={message}
              setMessage={setMessage}
              handleSendMessage={handleSendMessageWithoutScroll}
              handleKeyPress={handleKeyPressWithoutScroll}
              isLoading={isLoading}
            />
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default WhatsAppChat;
