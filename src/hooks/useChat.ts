
import { useState, useEffect, useRef } from 'react';
import { Message } from '@/types/chat';
import { supabase } from '@/integrations/supabase/client';

export const useChat = () => {
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
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
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const chatWithOpenAI = async (userMessage: string) => {
    console.log('Starting secure chat with OpenAI via Edge Function...', { userMessage });

    try {
      const { data, error } = await supabase.functions.invoke('chat-with-openai', {
        body: { message: userMessage }
      });

      if (error) {
        console.error('Edge function error:', error);
        throw new Error(error.message || 'Failed to get AI response');
      }

      if (!data || !data.reply) {
        console.error('Invalid response from Edge function:', data);
        throw new Error('Invalid response from AI service');
      }

      console.log('Secure response received:', data.reply);
      return data.reply;
    } catch (error) {
      console.error('Error calling secure chat function:', error);
      throw error;
    }
  };

  const handleSendMessage = async () => {
    if (message.trim() && !isLoading) {
      console.log('Sending message:', message);
      
      const newMessage: Message = {
        id: Date.now(),
        text: message,
        sender: 'user',
        time: new Date().toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' }),
        isBot: false
      };

      setMessages(prev => [...prev, newMessage]);
      
      const userMessage = message;
      setMessage('');
      setIsLoading(true);

      try {
        const reply = await chatWithOpenAI(userMessage);
        
        const botMessage: Message = {
          id: Date.now() + 1,
          text: reply,
          sender: 'autorply',
          time: new Date().toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' }),
          isBot: true
        };
        
        setMessages(prev => [...prev, botMessage]);
        console.log('Secure message exchange completed successfully');
      } catch (error) {
        console.error('Failed to get AI response:', error);
        
        const errorMessage: Message = {
          id: Date.now() + 1,
          text: 'عذراً، حدث خطأ في النظام. يرجى المحاولة مرة أخرى.',
          sender: 'autorply',
          time: new Date().toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' }),
          isBot: true
        };
        
        setMessages(prev => [...prev, errorMessage]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return {
    message,
    setMessage,
    messages,
    messagesEndRef,
    isLoading,
    handleSendMessage,
    handleKeyPress
  };
};
