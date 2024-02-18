import { useContext } from 'react';

import { ToastMessageContext } from '@/contexts/ToastMessageContext';

const useToastMessage = () => useContext(ToastMessageContext);

export default useToastMessage;
