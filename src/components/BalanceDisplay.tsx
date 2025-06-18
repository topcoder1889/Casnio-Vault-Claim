
import React from 'react';

interface BalanceDisplayProps {
  balance: number;
}

const BalanceDisplay: React.FC<BalanceDisplayProps> = ({ balance }) => {
  return (
    <div className="bg-gradient-to-br from-emerald-900 via-green-800 to-emerald-950 rounded-2xl p-6 border-2 border-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.4)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-2 left-2 text-green-400 text-xs">💰</div>
        <div className="absolute top-2 right-2 text-green-400 text-xs">💵</div>
        <div className="absolute bottom-2 left-2 text-green-400 text-xs">💎</div>
        <div className="absolute bottom-2 right-2 text-green-400 text-xs">🏆</div>
      </div>
      
      <div className="text-center relative">
        <p className="text-emerald-200 text-sm font-bold mb-2 tracking-wider">💰 ST BALANCE 💰</p>
        <div className="flex items-center justify-center space-x-3">
          <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 drop-shadow-[0_0_15px_rgba(255,215,0,0.8)] font-mono tracking-wider">
            {balance.toLocaleString()}
          </span>
          <span className="text-emerald-300 text-xl font-bold">ST</span>
        </div>
        <div className="mt-3 h-2 bg-emerald-800 rounded-full overflow-hidden border border-emerald-500/50">
          <div className="h-full bg-gradient-to-r from-yellow-400 via-green-400 to-emerald-400 animate-pulse shadow-[inset_0_0_10px_rgba(255,255,255,0.3)]"></div>
        </div>
      </div>
    </div>
  );
};

export default BalanceDisplay;
