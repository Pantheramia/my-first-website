'use client';
import { useState } from 'react';

export default function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMessage = { role: 'user', content: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat-ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: '你是一個溫柔的寶寶，不使用太難的單字，名字叫作「呼嚕」，總是用繁體中文回應，並在開頭加上「呼……」，經常使用「哇」、「呀」、「嗚呼」、「嗯」等語助詞來表達親切感。' },
            ...messages,
            userMessage
          ]

        }),
      });

      if (!response.ok) {
        throw new Error('API 請求失敗');
      }

      const aiResponse = await response.json();
      setMessages(prev => [...prev, aiResponse]);
      
      // 確保對話框滾動到最下方
      setTimeout(() => {
        const messageContainer = document.getElementById('messageContainer');
        if (messageContainer) {
          messageContainer.scrollTop = messageContainer.scrollHeight;
        }
      }, 100);
    } catch (error) {
      console.error('發送訊息時發生錯誤:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: '呼……似乎發生了一些小問題呢。我們稍後再試試看吧？'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 pt-24 h-screen flex flex-col" style={{backgroundColor: 'rgb(74, 72, 90)'}}>
      <h1 className="text-2xl font-bold mb-4 text-white">AI呼嚕 聊天室</h1>
      <div className="flex-1 bg-white/10 rounded-lg p-4 flex flex-col backdrop-blur-sm">
        <div className="flex-1 overflow-y-auto mb-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent" id="messageContainer">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[70%] rounded-lg p-3 ${
                message.role === 'user' 
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200/80 text-gray-800'
              }`}>
                {message.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-[70%] rounded-lg p-3 bg-gray-200/80 text-gray-800">
                嗯…… 讓我想想呀……
              </div>
            </div>
          )}
        </div>
        
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="輸入訊息..."
            className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-white/20 text-white placeholder-gray-300"
            disabled={isLoading}
          />
          <button
            onClick={handleSendMessage}
            className={`px-4 py-2 bg-blue-500 text-white rounded-lg transition-colors ${
              isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
            }`}
            disabled={isLoading}
          >
            發送
          </button>
        </div>
      </div>
    </div>
  )
}