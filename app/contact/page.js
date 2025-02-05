'use client';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 這裡可以添加表單提交的邏輯
    console.log('表單數據：', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="container mx-auto p-4 pt-24 min-h-screen" style={{backgroundColor: 'rgb(74, 72, 90)'}}>
      <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-white text-center">聯絡我</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-white mb-2">姓名</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/20 border border-gray-300 text-white placeholder-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="請輸入您的姓名"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-white mb-2">電子郵件</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/20 border border-gray-300 text-white placeholder-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="請輸入您的電子郵件"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-white mb-2">訊息內容</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full p-3 rounded-lg bg-white/20 border border-gray-300 text-white placeholder-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="請輸入您的訊息"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-200"
          >
            送出訊息
          </button>
        </form>
      </div>
    </div>
  );
} 