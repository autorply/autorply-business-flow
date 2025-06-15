
import { useState } from 'react';
import { Send, Phone, Video, MoreVertical, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useMutation } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { toast } from "sonner";

const WhatsAppChat = () => {
  const [message, setMessage] = useState('');
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

  const sendMessageMutation = useMutation({
    mutationFn: async (text: string) => {
        const targetPhoneNumber = '966564455333'; // For demo, sending to the company number
        const { data, error } = await supabase.functions.invoke('send-whatsapp-message', {
            body: { 
                message: text,
                phone_number: targetPhoneNumber
            },
        });

        if (error) {
            throw new Error(error.message);
        }

        if (data.status === '0') {
            throw new Error(data.message || 'فشل في إرسال الرسالة.');
        }

        return data;
    },
    onSuccess: (data) => {
        console.log('Message sent successfully:', data);
        toast.success("تم إرسال رسالتك بنجاح!");
        
        // محاكاة رد تلقائي للحفاظ على شكل المحادثة
        setTimeout(() => {
          const autoReply = {
            id: Date.now() + 1,
            text: 'شكراً لك على رسالتك! سيقوم أحد ممثلينا بالرد عليك قريباً.',
            sender: 'autorply',
            time: new Date().toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' }),
            isBot: true
          };
          setMessages(prev => [...prev, autoReply]);
        }, 1000);
    },
    onError: (error: Error) => {
        console.error('Failed to send message:', error);
        toast.error(error.message || "لم نتمكن من إرسال رسالتك. يرجى المحاولة مرة أخرى.");
    },
  });

  const handleSendMessage = () => {
    if (message.trim() && !sendMessageMutation.isPending) {
      const newMessage = {
        id: Date.now(),
        text: message,
        sender: 'user',
        time: new Date().toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' }),
        isBot: false
      };

      setMessages(prev => [...prev, newMessage]);
      sendMessageMutation.mutate(message);
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
        <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
          {/* iPhone Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
          
          {/* WhatsApp Header */}
          <div className="bg-green-600 text-white p-4 pt-8 flex items-center justify-between">
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                A
              </div>
              <div>
                <h3 className="font-semibold text-sm">Autorply</h3>
                <p className="text-xs text-green-100">متصل الآن</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 space-x-reverse">
              <Video className="w-5 h-5" />
              <Phone className="w-5 h-5" />
              <MoreVertical className="w-5 h-5" />
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 space-y-3 bg-gray-50 h-96 overflow-y-auto">
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`max-w-xs p-3 rounded-lg ${
                  msg.isBot 
                    ? 'bg-white text-gray-800' 
                    : 'bg-green-500 text-white'
                }`}>
                  <p className="text-sm">{msg.text}</p>
                  <p className={`text-xs mt-1 ${
                    msg.isBot ? 'text-gray-500' : 'text-green-100'
                  }`}>
                    {msg.time}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 bg-white border-t flex items-center space-x-2 space-x-reverse">
            <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 flex items-center">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="اكتب رسالة..."
                className="flex-1 bg-transparent outline-none text-sm text-right"
                disabled={sendMessageMutation.isPending}
              />
            </div>
            <button
              onClick={handleSendMessage}
              disabled={sendMessageMutation.isPending}
              className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors disabled:bg-green-400"
            >
              {sendMessageMutation.isPending ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Send className="w-5 h-5 transform rotate-180" />
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WhatsAppChat;
