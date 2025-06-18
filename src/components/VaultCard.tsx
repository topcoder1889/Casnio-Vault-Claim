
import React from 'react';
import CountdownTimer from './CountdownTimer';
import ClaimButton from './ClaimButton';
import BalanceDisplay from './BalanceDisplay';
import ClaimLogs from './ClaimLogs';

interface VaultCardProps {
  balance: number;
  onClaim: () => void;
  claimDisabled: boolean;
  logs: Array<{
    id: string;
    amount: number;
    timestamp: string;
  }>;
  onTimerComplete: () => void;
  timerResetTrigger: number;
}

const VaultCard: React.FC<VaultCardProps> = ({ 
  balance, 
  onClaim, 
  claimDisabled, 
  logs, 
  onTimerComplete, 
  timerResetTrigger 
}) => {
  return (
    <div className="relative w-full max-w-md mx-auto bg-gradient-to-br from-red-950 via-black to-red-900 rounded-3xl border-4 border-yellow-500 shadow-[0_0_50px_rgba(255,215,0,0.5)] overflow-hidden">
      <div className="absolute top-0 left-0 w-8 h-8 border-l-4 border-t-4 border-yellow-400 rounded-tl-3xl"></div>
      <div className="absolute top-0 right-0 w-8 h-8 border-r-4 border-t-4 border-yellow-400 rounded-tr-3xl"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-l-4 border-b-4 border-yellow-400 rounded-bl-3xl"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-r-4 border-b-4 border-yellow-400 rounded-br-3xl"></div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-transparent to-red-600/30 pointer-events-none animate-pulse"></div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-red-800/40 via-transparent to-black/60 pointer-events-none"></div>
      
      <div className="relative p-8 space-y-6">
        <div className="text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent h-px top-1/2"></div>
          <h1 className="text-3xl font-bold text-yellow-400 tracking-[0.3em] mb-2 drop-shadow-[0_0_10px_rgba(255,215,0,0.8)] relative bg-black/50 px-4 py-2 rounded-xl border border-yellow-500/50">
            💎 SCROOGE VAULT 💎
          </h1>
          <div className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full"></div>
        </div>

        <BalanceDisplay balance={balance} />

        <CountdownTimer onTimerComplete={onTimerComplete} resetTrigger={timerResetTrigger} />

        <ClaimButton onClick={onClaim} disabled={claimDisabled} />

        <ClaimLogs logs={logs} />
      </div>
      
      <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-br from-red-500 to-red-700 rounded-full border-2 border-white opacity-80"></div>
      <div className="absolute -top-1 -right-3 w-4 h-4 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full border border-white opacity-70"></div>
      <div className="absolute -bottom-2 -left-3 w-5 h-5 bg-gradient-to-br from-green-500 to-green-700 rounded-full border-2 border-white opacity-75"></div>
      <div className="absolute -bottom-1 -right-2 w-3 h-3 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full border border-white opacity-80"></div>
    </div>
  );
};

export default VaultCard;
