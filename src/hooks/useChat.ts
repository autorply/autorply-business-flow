
import { useState, useEffect, useRef } from 'react';
import { Message } from '@/types/chat';
import { chatWithOpenAI } from '@/utils/openai';

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
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (message.trim() && !isLoading) {
      const newMessage: Message = {
        id: Date.now(),
        text: message,
        sender: 'user',
        time: new Date().toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' }),
        isBot: false
      };

      // Add user message immediately
      setMessages(prev => [...prev, newMessage]);
      
      const userMessage = message;
      setMessage('');
      setIsLoading(true);

      // Add empty bot message for streaming
      const botMessageId = Date.now() + 1;
      const initialBotMessage: Message = {
        id: botMessageId,
        text: '',
        sender: 'autorply',
        time: new Date().toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' }),
        isBot: true
      };
      
      setMessages(prev => [...prev, initialBotMessage]);

      try {
        const response = await chatWithOpenAI(userMessage);

        if (process.env.USE_STREAMING === 'true' && response.body) {
          const reader = response.body.getReader();
          const decoder = new TextDecoder();
          let fullResponse = '';

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
                    
                    setMessages(prev => {
                      const newMessages = [...prev];
                      const messageIndex = newMessages.findIndex(msg => msg.id === botMessageId);
                      
                      if (messageIndex !== -1) {
                        newMessages[messageIndex] = {
                          ...newMessages[messageIndex],
                          text: fullResponse
                        };
                      }
                      
                      return newMessages;
                    });
                  }
                } catch (e) {
                  console.error('Error parsing JSON:', e);
                }
              }
            }
          }
        } else {
          const data = await response.json();
          const reply = data.choices?.[0]?.message?.content || 'عذراً، حدث خطأ في النظام. يرجى المحاولة مرة أخرى.';
          
          setMessages(prev => {
            const newMessages = [...prev];
            const messageIndex = newMessages.findIndex(msg => msg.id === botMessageId);
            
            if (messageIndex !== -1) {
              newMessages[messageIndex] = {
                ...newMessages[messageIndex],
                text: reply
              };
            }
            
            return newMessages;
          });
        }
      } catch (error) {
        console.error('Failed to get AI response:', error);
        
        setMessages(prev => {
          const newMessages = [...prev];
          const messageIndex = newMessages.findIndex(msg => msg.id === botMessageId);
          
          if (messageIndex !== -1) {
            newMessages[messageIndex] = {
              ...newMessages[messageIndex],
              text: 'عذراً، حدث خطأ في النظام. يرجى المحاولة مرة أخرى.'
            };
          }
          
          return newMessages;
        });
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
