
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

      // Handle streaming response
      if (data instanceof ReadableStream) {
        const reader = data.getReader();
        const decoder = new TextDecoder();
        let fullResponse = '';

        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value, { stream: true });
            const lines = chunk.split('\n');

            for (const line of lines) {
              if (line.startsWith('data: ') && line !== 'data: [DONE]') {
                try {
                  const jsonData = JSON.parse(line.slice(6));
                  if (jsonData.choices?.[0]?.delta?.content) {
                    fullResponse += jsonData.choices[0].delta.content;
                    
                    // Update message in real-time
                    setMessages(prev => {
                      const newMessages = [...prev];
                      const lastMessageIndex = newMessages.length - 1;
                      
                      if (newMessages[lastMessageIndex]?.isBot && newMessages[lastMessageIndex]?.id === Date.now() + 1) {
                        newMessages[lastMessageIndex].text = fullResponse;
                      } else {
                        newMessages.push({
                          id: Date.now() + 1,
                          text: fullResponse,
                          sender: 'autorply',
                          time: new Date().toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' }),
                          isBot: true
                        });
                      }
                      
                      return newMessages;
                    });
                  }
                } catch (e) {
                  console.log('Error parsing JSON:', e);
                }
              }
            }
          }
        } catch (streamError) {
          console.error('Stream reading error:', streamError);
          throw streamError;
        }

        return { reply: fullResponse };
      }

      return data;
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
      
      // Get AI response with streaming
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
