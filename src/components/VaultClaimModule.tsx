import React, { useState, useEffect } from 'react';
import VaultCard from './VaultCard';
import { toast } from '@/hooks/use-toast';

const VaultClaimModule: React.FC = () => {
  const [balance, setBalance] = useState(125750);
  const [claimDisabled, setClaimDisabled] = useState(true);
  const [timerResetTrigger, setTimerResetTrigger] = useState(0);
  const [logs, setLogs] = useState([
    {
      id: '1',
      amount: 2500,
      timestamp: new Date(Date.now() - 300000).toISOString(),
    },
    {
      id: '2',
      amount: 1800,
      timestamp: new Date(Date.now() - 1800000).toISOString(),
    },
    {
      id: '3',
      amount: 3200,
      timestamp: new Date(Date.now() - 3600000).toISOString(),
    },
    {
      id: '4',
      amount: 1500,
      timestamp: new Date(Date.now() - 7200000).toISOString(),
    },
    {
      id: '5',
      amount: 2750,
      timestamp: new Date(Date.now() - 10800000).toISOString(),
    },
  ]);

  const handleTimerComplete = () => {
    setClaimDisabled(false);
  };

  const handleClaim = () => {
    const claimAmount = Math.floor(Math.random() * 2000) + 1000;
    
    setBalance(prevBalance => prevBalance + claimAmount);
    
    const newLog = {
      id: Date.now().toString(),
      amount: claimAmount,
      timestamp: new Date().toISOString(),
    };
    
    setLogs(prevLogs => [newLog, ...prevLogs.slice(0, 4)]);
    setClaimDisabled(true);
    
    setTimerResetTrigger(prev => prev + 1);
    
    toast({
      title: "🎰 JACKPOT HIT! 🎰",
      description: `You won ${claimAmount.toLocaleString()} ST tokens! Keep the streak going!`,
      duration: 4000,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-black to-red-900 p-4 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-red-500 rounded-full animate-pulse border border-white"></div>
        <div className="absolute top-3/4 left-1/3 w-2 h-2 bg-blue-500 rounded-full animate-ping border border-white"></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-green-500 rounded-full animate-pulse delay-1000 border border-white"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-500 rounded-full animate-ping delay-500 border border-white"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-700 border border-white"></div>
        
        <div className="absolute top-1/5 left-1/5 w-1 h-1 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute top-2/3 right-1/5 w-1 h-1 bg-yellow-300 rounded-full animate-ping delay-300"></div>
        <div className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-yellow-500 rounded-full animate-ping delay-1000"></div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-yellow-600/10 pointer-events-none"></div>
      
      <VaultCard
        balance={balance}
        onClaim={handleClaim}
        claimDisabled={claimDisabled}
        logs={logs}
        onTimerComplete={handleTimerComplete}
        timerResetTrigger={timerResetTrigger}
      />
    </div>
  );
};

export default VaultClaimModule;
