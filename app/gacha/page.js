'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Gacha() {
  const [currentImage, setCurrentImage] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [imageError, setImageError] = useState(false);

  const drawCard = async () => {
    setIsDrawing(true);
    setShowShare(false);
    
    // 模擬抽卡動畫
    const animationDuration = 2000; // 2秒
    const frameInterval = 100; // 每100ms切換一次圖片
    const startTime = Date.now();
    
    const animateDrawing = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      
      if (elapsed < animationDuration) {
        // 在動畫期間隨機顯示1-6
        const randomNum = Math.floor(Math.random() * 6) + 1;
        setCurrentImage(`/images/char0${randomNum}.png`);
        requestAnimationFrame(animateDrawing);
      } else {
        // 動畫結束，選擇最終結果
        const finalResult = Math.floor(Math.random() * 6) + 1;
        setCurrentImage(`/images/char0${finalResult}.png`);
        setIsDrawing(false);
        setShowShare(true);
      }
    };

    requestAnimationFrame(animateDrawing);
  };

  const shareResult = () => {
    if (navigator.share) {
      navigator.share({
        title: 'AMIA抽抽樂結果',
        text: '來看看我在AMIA抽到了什麼！',
        url: window.location.href
      });
    } else {
      alert('您的瀏覽器不支援分享功能');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4" style={{backgroundColor: 'rgb(74, 72, 90)'}}>
      <div className="bg-white rounded-lg p-8 shadow-xl max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-8">AMIA抽抽樂</h1>
        
        <div className="relative aspect-square w-full mb-8 bg-gray-100 rounded-lg overflow-hidden">
          {isDrawing && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-2xl font-bold text-gray-600 animate-pulse">
                抽卡中...
              </div>
            </div>
          )}
          
          {currentImage && (
            <Image
              src={currentImage}
              alt="抽卡結果"
              fill
              className="object-contain"
              onError={() => {
                console.error(`圖片載入失敗: ${currentImage}`);
                setImageError(true);
              }}
              priority
            />
          )}
          
          {imageError && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-xl text-red-500">
                圖片載入失敗，請確認圖片路徑是否正確
              </div>
            </div>
          )}
          
          {!currentImage && !isDrawing && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-xl text-gray-400">
                點擊下方按鈕開始抽卡
              </div>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <button
            onClick={drawCard}
            disabled={isDrawing}
            className={`w-full py-3 px-6 rounded-lg text-white font-bold transition-all ${
              isDrawing 
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {isDrawing ? '抽卡中...' : '開始抽卡'}
          </button>

          {showShare && (
            <button
              onClick={shareResult}
              className="w-full py-3 px-6 rounded-lg bg-green-600 hover:bg-green-700 text-white font-bold transition-all"
            >
              分享結果
            </button>
          )}
        </div>
      </div>
    </div>
  );
} 