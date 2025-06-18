
import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  onTimerComplete: () => void;
  resetTrigger: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ onTimerComplete, resetTrigger }) => {
  const [timeLeft, setTimeLeft] = useState(60);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    setTimeLeft(60);
    setIsActive(true);
  }, [resetTrigger]);

  useEffect(() => {
    if (timeLeft > 0 && isActive) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && isActive) {
      setIsActive(false);
      onTimerComplete();
    }
  }, [timeLeft, isActive, onTimerComplete]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = ((60 - timeLeft) / 60) * 100;

  return (
    <div className="bg-gradient-to-br from-red-950 via-red-900 to-orange-900 rounded-2xl p-6 border-2 border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.4)] relative overflow-hidden">
      <div className="absolute top-2 left-2 text-red-400 text-lg animate-spin">⏰</div>
      <div className="absolute top-2 right-2 text-orange-400 text-lg animate-bounce">🔥</div>
      
      <div className="text-center">
        <p className="text-red-200 text-sm font-bold mb-3 tracking-wider">🎰 NEXT CLAIM AVAILABLE IN 🎰</p>
        <div className={`text-5xl font-black ${timeLeft <= 10 ? 'text-red-300 animate-pulse' : 'text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-red-300 to-red-400'} drop-shadow-[0_0_20px_rgba(255,165,0,0.8)] font-mono tracking-wider`}>
          {formatTime(timeLeft)}
        </div>
        
        <div className="mt-4 bg-red-900 rounded-full h-3 overflow-hidden border-2 border-red-500/50 shadow-inner">
          <div 
            className="h-full bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 transition-all duration-1000 ease-linear shadow-[0_0_10px_rgba(255,165,0,0.6)]"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        {timeLeft === 0 && (
          <div className="mt-3 text-yellow-300 text-lg font-bold animate-bounce">
            <span className="inline-block animate-spin mr-2">🎯</span>
            JACKPOT READY!
            <span className="inline-block animate-spin ml-2">🎯</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountdownTimer;
