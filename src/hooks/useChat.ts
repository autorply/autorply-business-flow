
import { useState, useEffect, useRef } from 'react';
import { Message } from '@/types/chat';

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

  const chatWithOpenAI = async (userMessage: string) => {
    const openaiApiKey = import.meta.env.VITE_OPENAI_API_KEY;
    const assistantId = import.meta.env.VITE_ASSISTANT_ID;

    if (!openaiApiKey) {
      throw new Error('OpenAI API key not configured');
    }

    // If we have an assistant ID, use the Assistants API
    if (assistantId) {
      // Create a thread
      const threadResponse = await fetch('https://api.openai.com/v1/threads', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${openaiApiKey}`,
          'Content-Type': 'application/json',
          'OpenAI-Beta': 'assistants=v2'
        },
        body: JSON.stringify({})
      });

      const thread = await threadResponse.json();

      // Add message to thread
      await fetch(`https://api.openai.com/v1/threads/${thread.id}/messages`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${openaiApiKey}`,
          'Content-Type': 'application/json',
          'OpenAI-Beta': 'assistants=v2'
        },
        body: JSON.stringify({
          role: 'user',
          content: userMessage
        })
      });

      // Run the assistant
      const runResponse = await fetch(`https://api.openai.com/v1/threads/${thread.id}/runs`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${openaiApiKey}`,
          'Content-Type': 'application/json',
          'OpenAI-Beta': 'assistants=v2'
        },
        body: JSON.stringify({
          assistant_id: assistantId
        })
      });

      const run = await runResponse.json();

      // Poll for completion
      let runStatus = run;
      while (runStatus.status !== 'completed' && runStatus.status !== 'failed') {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const statusResponse = await fetch(`https://api.openai.com/v1/threads/${thread.id}/runs/${run.id}`, {
          headers: {
            'Authorization': `Bearer ${openaiApiKey}`,
            'OpenAI-Beta': 'assistants=v2'
          }
        });
        runStatus = await statusResponse.json();
      }

      if (runStatus.status === 'failed') {
        throw new Error('Assistant run failed');
      }

      // Get messages
      const messagesResponse = await fetch(`https://api.openai.com/v1/threads/${thread.id}/messages`, {
        headers: {
          'Authorization': `Bearer ${openaiApiKey}`,
          'OpenAI-Beta': 'assistants=v2'
        }
      });

      const messagesData = await messagesResponse.json();
      const lastMessage = messagesData.data[0];
      
      return lastMessage.content[0].text.value;
    } else {
      // Use regular chat completion
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${openaiApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { 
              role: 'system', 
              content: 'أنت مساعد ذكي لخدمة العملاء في شركة اوتوربلاي التي تقدم خدمات WhatsApp API. أجب بالعربية بطريقة مهنية ومفيدة.' 
            },
            { role: 'user', content: userMessage }
          ],
          max_tokens: 500,
          temperature: 0.7
        }),
      });

      const data = await response.json();
      return data.choices[0].message.content;
    }
  };

  const handleSendMessage = async () => {
    if (message.trim() && !isLoading) {
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
