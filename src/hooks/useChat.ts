
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
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
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

    console.log('Starting chat with OpenAI...', { userMessage, assistantId });

    // If we have an assistant ID, use the Assistants API
    if (assistantId) {
      try {
        console.log('Using Assistants API...');
        
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

        if (!threadResponse.ok) {
          const errorData = await threadResponse.json();
          console.error('Thread creation failed:', errorData);
          throw new Error('Failed to create thread');
        }

        const thread = await threadResponse.json();
        console.log('Thread created:', thread.id);

        // Add message to thread
        const messageResponse = await fetch(`https://api.openai.com/v1/threads/${thread.id}/messages`, {
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

        if (!messageResponse.ok) {
          const errorData = await messageResponse.json();
          console.error('Message addition failed:', errorData);
          throw new Error('Failed to add message to thread');
        }

        console.log('Message added to thread');

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

        if (!runResponse.ok) {
          const errorData = await runResponse.json();
          console.error('Run creation failed:', errorData);
          throw new Error('Failed to run assistant');
        }

        const run = await runResponse.json();
        console.log('Run started:', run.id);

        // Poll for completion with timeout
        let runStatus = run;
        let attempts = 0;
        const maxAttempts = 30; // 30 seconds timeout
        
        while (runStatus.status !== 'completed' && runStatus.status !== 'failed' && attempts < maxAttempts) {
          console.log(`Polling attempt ${attempts + 1}, status: ${runStatus.status}`);
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          const statusResponse = await fetch(`https://api.openai.com/v1/threads/${thread.id}/runs/${run.id}`, {
            headers: {
              'Authorization': `Bearer ${openaiApiKey}`,
              'OpenAI-Beta': 'assistants=v2'
            }
          });
          
          if (!statusResponse.ok) {
            const errorData = await statusResponse.json();
            console.error('Status check failed:', errorData);
            throw new Error('Failed to check run status');
          }
          
          runStatus = await statusResponse.json();
          attempts++;
        }

        if (runStatus.status === 'failed') {
          console.error('Assistant run failed:', runStatus);
          throw new Error('Assistant run failed');
        }

        if (attempts >= maxAttempts) {
          console.error('Assistant run timed out');
          throw new Error('Assistant run timed out');
        }

        console.log('Run completed successfully');

        // Get messages
        const messagesResponse = await fetch(`https://api.openai.com/v1/threads/${thread.id}/messages`, {
          headers: {
            'Authorization': `Bearer ${openaiApiKey}`,
            'OpenAI-Beta': 'assistants=v2'
          }
        });

        if (!messagesResponse.ok) {
          const errorData = await messagesResponse.json();
          console.error('Messages retrieval failed:', errorData);
          throw new Error('Failed to get messages');
        }

        const messagesData = await messagesResponse.json();
        const lastMessage = messagesData.data[0];
        
        console.log('Response received:', lastMessage.content[0].text.value);
        return lastMessage.content[0].text.value;
      } catch (error) {
        console.error('Assistants API error:', error);
        // Fall back to regular chat completion
        return await fallbackChatCompletion(userMessage, openaiApiKey);
      }
    } else {
      return await fallbackChatCompletion(userMessage, openaiApiKey);
    }
  };

  const fallbackChatCompletion = async (userMessage: string, apiKey: string) => {
    console.log('Using fallback chat completion...');
    
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
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

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Chat completion failed:', errorData);
      throw new Error('OpenAI API request failed');
    }

    const data = await response.json();
    console.log('Fallback response received:', data.choices[0].message.content);
    return data.choices[0].message.content;
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
        console.log('Message exchange completed successfully');
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
