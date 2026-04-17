import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  errorInfo: string | null;
}

class ErrorBoundary extends Component<Props, State> {
  props: Props;
  public state: State = {
    hasError: false,
    errorInfo: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, errorInfo: error.message };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    const { hasError, errorInfo } = this.state;
    const { children } = this.props;

    if (hasError) {
      let isFirestoreError = false;
      let firestoreData: any = null;

      try {
        if (errorInfo) {
          firestoreData = JSON.parse(errorInfo);
          if (firestoreData.operationType) isFirestoreError = true;
        }
      } catch (e) {
        // Not a JSON error
      }

      return (
        <div className="min-h-screen bg-black flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center">
            <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="text-red-500" size={32} />
            </div>
            
            <h2 className="text-xl font-bold text-white mb-2">Algo deu errado</h2>
            
            {isFirestoreError ? (
              <div className="text-left bg-black/60 rounded-xl p-4 mb-6 border border-white/5">
                <p className="text-xs font-mono text-red-400 mb-2 uppercase tracking-widest">Erro de Banco de Dados</p>
                <p className="text-sm text-gray-400 mb-2">Operação: <span className="text-white font-mono uppercase">{firestoreData.operationType}</span></p>
                <p className="text-sm text-gray-400 mb-2">Caminho: <span className="text-white font-mono">{firestoreData.path || 'N/A'}</span></p>
                <p className="text-xs text-gray-500 italic mt-4">Verifique suas permissões de acesso.</p>
              </div>
            ) : (
              <p className="text-gray-400 mb-8">
                Ocorreu um erro inesperado. Por favor, tente recarregar a página.
              </p>
            )}

            <button
              onClick={() => window.location.reload()}
              className="flex items-center justify-center gap-2 w-full py-4 bg-[#00ff9d] text-black font-bold rounded-2xl hover:bg-[#00e58d] transition-all"
            >
              <RefreshCw size={20} />
              TENTAR NOVAMENTE
            </button>
          </div>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
