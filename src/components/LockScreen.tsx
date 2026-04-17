import React, { useState } from 'react';
import { Shield, Lock, Unlock, Zap } from 'lucide-react';
import { motion } from 'motion/react';

interface LockScreenProps {
  onUnlock: () => void;
  userName: string;
}

export default function LockScreen({ onUnlock, userName }: LockScreenProps) {
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    // Default PIN for the system
    if (pin === '2026') {
      onUnlock();
    } else {
      setError(true);
      setPin('');
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-[#050505] flex items-center justify-center overflow-hidden">
      <div className="scanline" />
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00ff9d]/5 rounded-full blur-[120px]" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full max-w-md p-8 flex flex-col items-center"
      >
        <div className="w-20 h-20 rounded-3xl bg-[#00ff9d]/10 border border-[#00ff9d]/20 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(0,255,157,0.1)]">
          <Shield size={40} className="text-[#00ff9d]" />
        </div>

        <h1 className="text-2xl font-mono font-bold text-white tracking-tighter uppercase mb-2">
          {userName.toUpperCase().replace(' ', '_')}_OS
        </h1>
        <p className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.4em] mb-12">
          SISTEMA_BLOQUEADO
        </p>

        <form onSubmit={handleUnlock} className="w-full space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest ml-1">Insira o PIN de Acesso</label>
            <div className="relative">
              <input 
                type="password" 
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="****"
                className={`w-full bg-white/5 border ${error ? 'border-red-500/50' : 'border-white/10'} rounded-2xl px-6 py-4 text-center text-2xl tracking-[1em] focus:outline-none focus:border-[#00ff9d]/50 transition-all font-mono`}
                autoFocus
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600">
                <Lock size={18} />
              </div>
            </div>
            {error && (
              <p className="text-[10px] font-mono text-red-500 text-center uppercase tracking-widest animate-pulse">Acesso Negado: PIN Incorreto</p>
            )}
          </div>

          <button 
            type="submit"
            className="w-full bg-[#00ff9d] text-black font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-[#00cc7d] transition-all shadow-[0_0_20px_rgba(0,255,157,0.2)] uppercase tracking-widest text-xs"
          >
            <Unlock size={18} /> Desbloquear Sistema
          </button>
        </form>

        <div className="mt-12 flex items-center gap-4 opacity-30">
          <div className="flex items-center gap-2">
            <Zap size={12} className="text-[#00ff9d]" />
            <span className="text-[8px] font-mono text-white uppercase tracking-widest">Encrypted_v2.0</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-gray-600" />
          <span className="text-[8px] font-mono text-white uppercase tracking-widest">Core_Active</span>
        </div>

        <p className="mt-8 text-[9px] font-mono text-gray-600 uppercase tracking-widest text-center">
          Dica: O PIN padrão é <span className="text-gray-400">2026</span>
        </p>
      </motion.div>
    </div>
  );
}
