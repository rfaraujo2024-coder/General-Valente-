import React from 'react';
import { useAuth } from '../components/AuthContext';
import { motion } from 'motion/react';
import { Layout, LogIn, Target, ShieldCheck, Zap } from 'lucide-react';

export default function Login() {
  const { login } = useAuth();

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#00ff9d]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full"
      >
        <div className="bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 md:p-12 shadow-2xl relative">
          <div className="flex flex-col items-center text-center mb-10">
            <div className="w-20 h-20 bg-gradient-to-br from-[#00ff9d] to-blue-500 rounded-3xl flex items-center justify-center mb-6 shadow-lg shadow-[#00ff9d]/20">
              <Layout size={40} className="text-black" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Life Manager</h1>
            <p className="text-gray-400 text-sm max-w-[280px]">
              Sua central de produtividade e gestão pessoal com segurança avançada.
            </p>
          </div>

          <div className="space-y-6 mb-10">
            <div className="flex items-center gap-4 text-left p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                <Target size={20} className="text-blue-400" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-widest text-[10px]">Gestão de Metas</h3>
                <p className="text-xs text-gray-500">Acompanhe seu progresso em tempo real.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-left p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#00ff9d]/10 flex items-center justify-center shrink-0">
                <Zap size={20} className="text-[#00ff9d]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-widest text-[10px]">Habilidades & Hábitos</h3>
                <p className="text-xs text-gray-500">Construa rotinas sólidas e escale resultados.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-left p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
                <ShieldCheck size={20} className="text-purple-400" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-widest text-[10px]">Login Seguro</h3>
                <p className="text-xs text-gray-500">Seus dados protegidos pelo Google Cloud.</p>
              </div>
            </div>
          </div>

          <button
            onClick={login}
            className="w-full relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00ff9d] to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <div className="relative flex items-center justify-center gap-3 w-full py-4 bg-[#00ff9d] text-black font-bold rounded-2xl hover:bg-[#00e58d] transition-all">
              <LogIn size={20} />
              ENTRAR COM GOOGLE
            </div>
          </button>

          <p className="text-center mt-8 text-[10px] font-mono text-gray-600 uppercase tracking-widest">
            LIFE_MANAGER_V2.0 // SECURITY_ENABLED
          </p>
        </div>
      </motion.div>
    </div>
  );
}
