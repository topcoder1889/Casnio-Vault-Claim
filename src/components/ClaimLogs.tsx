
import React from 'react';

interface ClaimLog {
  id: string;
  amount: number;
  timestamp: string;
}

interface ClaimLogsProps {
  logs: ClaimLog[];
}

const ClaimLogs: React.FC<ClaimLogsProps> = ({ logs }) => {
  return (
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-2xl p-5 border-2 border-slate-600 shadow-[0_0_25px_rgba(71,85,105,0.4)] relative overflow-hidden">
      <div className="absolute top-2 left-2 text-slate-400 text-xs">📋</div>
      <div className="absolute top-2 right-2 text-slate-400 text-xs">💎</div>
      
      <h3 className="text-slate-200 text-sm font-black mb-4 text-center tracking-wider">
        🎲 WINNING HISTORY 🎲
      </h3>
      
      <div className="space-y-3 max-h-36 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800">
        {logs.length === 0 ? (
          <p className="text-slate-400 text-xs text-center py-3 font-semibold">No wins yet - Start playing!</p>
        ) : (
          logs.map((log, index) => (
            <div key={log.id} className="flex justify-between items-center bg-gradient-to-r from-slate-800/80 to-slate-900/80 rounded-xl p-3 border border-slate-700/50 shadow-inner hover:shadow-lg transition-all duration-200">
              <div className="flex items-center space-x-2">
                <span className="text-lg">{index === 0 ? '🏆' : '💰'}</span>
                <span className="text-emerald-400 font-bold text-sm">
                  +{log.amount.toLocaleString()} ST
                </span>
              </div>
              <span className="text-slate-300 text-xs font-semibold">
                {new Date(log.timestamp).toLocaleTimeString()}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ClaimLogs;
