'use client';

import { createContext, ReactNode, useRef, useState } from 'react';

export type ToastMessageContextProps = {
  message: string;
  isOpenToast: boolean;
  type: ToastMessageType;
  showToast: (message: string, type: ToastMessageType) => void;
};

const initialState: ToastMessageContextProps = {
  message: '',
  isOpenToast: false,
  type: 'success',
  showToast: () => {},
};

const ToastMessageContext = createContext(initialState);

type ToastMessageProviderProps = {
  children: ReactNode;
};

export type ToastMessageType = 'success' | 'error' | 'info';

function ToastMessageProvider({ children }: ToastMessageProviderProps) {
  const [message, setMessage] = useState('');
  const [type, setType] = useState<ToastMessageType>('success');
  const [isOpenToast, setIsOpenToast] = useState(false);
  const toastTimer = useRef<NodeJS.Timeout>();

  const showToast = (message: string, type: 'success' | 'error' | 'info') => {
    setType(type);
    setMessage(message);
    setIsOpenToast(true);

    if (toastTimer.current) {
      clearTimeout(toastTimer.current);
    }

    const timer = setTimeout(() => {
      setIsOpenToast(false);
      setMessage('');
    }, 3000);
    toastTimer.current = timer;
  };

  return (
    <ToastMessageContext.Provider
      value={{ message, isOpenToast, type, showToast }}
    >
      {children}
    </ToastMessageContext.Provider>
  );
}

export { ToastMessageProvider, ToastMessageContext };
