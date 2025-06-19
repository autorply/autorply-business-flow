
import { useState, useEffect, useRef } from 'react';
import { useMutation } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Message } from '@/types/chat';

export const useChat = () => {
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
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
      
      const aiReply: Message = {
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
      
      const fallbackReply: Message = {
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
      const newMessage: Message = {
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

  return {
    message,
    setMessage,
    messages,
    messagesEndRef,
    chatWithAI,
    handleSendMessage,
    handleKeyPress
  };
};
