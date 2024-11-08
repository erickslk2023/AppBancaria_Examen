import React, { createContext, useState, useContext, ReactNode } from 'react';

type BancaContextType = {
  balance: number;
  transacciones: string[];
  depositos: (cantidad: number) => void;
  transferencia: (cantidad: number) => boolean;
};

const BancaContext = createContext<BancaContextType | undefined>(undefined);

export const useBanca = (): BancaContextType => {
  const context = useContext(BancaContext);
  if (!context) {
    throw new Error('useBank must be used within a BankProvider');
  }
  return context;
};

interface BancaProviderProps {
  children: ReactNode;
}

export const BancaProvider: React.FC<BancaProviderProps> = ({ children }) => {
  const [balance, setBalance] = useState<number>(10000); // saldo inicial
  const [transacciones, setTransacciones] = useState<string[]>([
    "Depósito de L.500",
    "Retiro de L.200",
    "Depósito de L.300",
    "Retiro de L.100",
    "Depósito de L.400"
  ]);

  const depositos = (cantidad: number) => {
    setBalance(balance + cantidad);
    setTransacciones([...transacciones, `Depósito de L.${cantidad}`]);
  };

  const transferencia = (cantidad: number): boolean => {
    if (cantidad <= balance) {
      setBalance(balance - cantidad);
      setTransacciones([...transacciones, `Transferencia de L.${cantidad}`]);
      return true;
    }
    return false;
  };

  return (
    <BancaContext.Provider value={{ balance, transacciones, depositos, transferencia }}>
      {children}
    </BancaContext.Provider>
  );
};
