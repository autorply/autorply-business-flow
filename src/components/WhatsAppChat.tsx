
import { useState, useEffect, useRef } from 'react';
import { Send, Phone, Video, MoreVertical, Loader2, Plus, Mic } from 'lucide-react';
import { motion } from 'framer-motion';
import { useMutation } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

const WhatsAppChat = () => {
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'أهلاً وسهلاً! كيف يمكنني مساعدتك اليوم؟',
      sender: 'autorply',
      time: '10:30',
      isBot: true
    },
    {
      id: 2,
      text: 'مرحباً، أريد معرفة المزيد عن خدماتكم',
      sender: 'user',
      time: '10:31',
      isBot: false
    },
    {
      id: 3,
      text: 'بكل سرور! نحن نقدم حلول WhatsApp API المتكاملة للشركات. هل تريد معرفة تفاصيل أكثر عن الباقات؟',
      sender: 'autorply',
      time: '10:31',
      isBot: true
    }
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const chatWithAI = useMutation({
    mutationFn: async (userMessage: string) => {
      const { data, error } = await supabase.functions.invoke('chat-with-openai', {
        body: { message: userMessage },
      });

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
    onSuccess: (data) => {
      console.log('AI response received:', data);
      
      const aiReply = {
        id: Date.now() + 1,
        text: data.reply || 'شكراً لك على رسالتك! سيقوم أحد ممثلينا بالرد عليك قريباً.',
        sender: 'autorply',
        time: new Date().toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' }),
        isBot: true
      };
      
      setMessages(prev => [...prev, aiReply]);
    },
    onError: (error: Error) => {
      console.error('Failed to get AI response:', error);
      
      const fallbackReply = {
        id: Date.now() + 1,
        text: 'شكراً لك على رسالتك! سيقوم أحد ممثلينا بالرد عليك قريباً.',
        sender: 'autorply',
        time: new Date().toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' }),
        isBot: true
      };
      
      setMessages(prev => [...prev, fallbackReply]);
    },
  });

  const handleSendMessage = () => {
    if (message.trim() && !chatWithAI.isPending) {
      const newMessage = {
        id: Date.now(),
        text: message,
        sender: 'user',
        time: new Date().toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' }),
        isBot: false
      };

      setMessages(prev => [...prev, newMessage]);
      
      // Get AI response only
      chatWithAI.mutate(message);
      
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
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

          {/* WhatsApp Header */}
          <div className="bg-[#f7f3f0] text-gray-800 px-4 py-4 pt-8 flex items-center justify-between border-b border-gray-200 flex-shrink-0">
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden border border-gray-200">
                <img 
                  src="https://autorply.sa/assets/img/logo_64.svg" 
                  alt="Autorply" 
                  className="w-6 h-6 object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-sm text-gray-900">Autorply</h3>
                <p className="text-xs text-gray-500">متصل الآن</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 space-x-reverse text-[#00b386]">
              <Video className="w-5 h-5" />
              <Phone className="w-5 h-5" />
              <MoreVertical className="w-5 h-5" />
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 space-y-3 bg-[#efeae2] overflow-y-auto min-h-0">
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`max-w-xs p-3 rounded-lg relative ${
                  msg.isBot 
                    ? 'bg-white text-gray-800 rounded-tl-none shadow-sm' 
                    : 'bg-[#d8fdd2] text-gray-800 rounded-tr-none'
                }`}>
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                  <div className={`flex items-center justify-end mt-1 space-x-1 space-x-reverse ${
                    msg.isBot ? 'text-gray-500' : 'text-gray-600'
                  }`}>
                    <span className="text-xs">{msg.time}</span>
                    {!msg.isBot && (
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
            ))}
            {chatWithAI.isPending && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Loader2 className="w-4 h-4 animate-spin text-gray-500" />
                    <span className="text-sm text-gray-500">جاري الكتابة...</span>
                  </div>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Message Input */}
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
                disabled={chatWithAI.isPending}
              />
            </div>
            <button
              onClick={handleSendMessage}
              disabled={chatWithAI.isPending}
              className="w-8 h-8 flex items-center justify-center text-[#00b386] hover:text-[#00a073] transition-colors disabled:text-gray-400"
            >
              {chatWithAI.isPending ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : message.trim() ? (
                <Send className="w-5 h-5 transform rotate-180" />
              ) : (
                <Mic className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WhatsAppChat;
