
import { Send, Plus, Mic, Loader2 } from 'lucide-react';

interface ChatInputProps {
  message: string;
  setMessage: (message: string) => void;
  handleSendMessage: () => void;
  handleKeyPress: (e: React.KeyboardEvent) => void;
  isLoading: boolean;
}

const ChatInput = ({ 
  message, 
  setMessage, 
  handleSendMessage, 
  handleKeyPress, 
  isLoading 
}: ChatInputProps) => {
  return (
    <div className="p-3 bg-white flex items-center space-x-2 space-x-reverse flex-shrink-0">
      <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors">
        <Plus className="w-5 h-5" />
      </button>
      <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 flex items-center min-h-[40px]">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="اكتب رسالة..."
          className="flex-1 bg-transparent outline-none text-sm text-right"
          disabled={isLoading}
        />
      </div>
      <button
        onClick={handleSendMessage}
        disabled={!message.trim() || isLoading}
        className="w-8 h-8 flex items-center justify-center text-[#00b386] hover:text-[#00a073] transition-colors disabled:text-gray-400 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : message.trim() ? (
          <Send className="w-5 h-5" />
        ) : (
          <Mic className="w-5 h-5" />
        )}
      </button>
    </div>
  );
};

export default ChatInput;
