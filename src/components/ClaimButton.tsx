
import React from 'react';

interface ClaimButtonProps {
  onClick: () => void;
  disabled: boolean;
}

const ClaimButton: React.FC<ClaimButtonProps> = ({ onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full py-10 px-10 rounded-2xl font-black text-xl tracking-wider transition-all duration-300 transform relative overflow-hidden
        ${disabled 
          ? 'bg-gradient-to-br from-gray-700 to-gray-900 text-gray-400 cursor-not-allowed border-2 border-gray-600 shadow-inner' 
          : 'bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-300 hover:via-yellow-400 hover:to-yellow-500 text-yellow-900 shadow-[0_0_40px_rgba(255,215,0,0.6)] hover:shadow-[0_0_60px_rgba(255,215,0,0.8)] hover:scale-105 border-2 border-yellow-300'
        }
        ${!disabled && 'hover:shadow-2xl active:scale-95'}
      `}
    >
      {!disabled && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
      )}
      
      {disabled ? (
        <span className="flex items-center justify-center space-x-3 relative z-10">
          <span className="text-2xl">🔒</span>
          <span>VAULT LOCKED</span>
          <span className="text-2xl">🔒</span>
        </span>
      ) : (
        <span className="flex items-center justify-center space-x-3 relative z-10">
          <span className="text-2xl animate-bounce">💰</span>
          <span className="drop-shadow-lg">CLAIM JACKPOT</span>
          <span className="text-2xl animate-bounce">💰</span>
        </span>
      )}
      
      {!disabled && (
        <>
          <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full opacity-60"></div>
          <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full opacity-60"></div>
          <div className="absolute bottom-1 left-1 w-2 h-2 bg-white rounded-full opacity-60"></div>
          <div className="absolute bottom-1 right-1 w-2 h-2 bg-white rounded-full opacity-60"></div>
        </>
      )}
    </button>
  );
};

export default ClaimButton;
