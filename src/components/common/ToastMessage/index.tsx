'use client';

import React from 'react';
import Image from 'next/image';

import useToastMessage from '@/hooks/common/useToastMessage';
import SuccessIcon from '@/assets/images/common/success-icon.svg';
import ErrorIcon from '@/assets/images/common/error-icon.svg';
import InfoIcon from '@/assets/images/common/info-icon.svg';

const ToastMessage = () => {
  const { message, isOpenToast, type } = useToastMessage();
  const ToastIcon = {
    success: SuccessIcon,
    error: ErrorIcon,
    info: InfoIcon,
  };

  return (
    <>
      {isOpenToast && (
        <div className="fixed z-[11] top-5 right-5 flex justify-start items-center min-w-[200px] h-12 text-sm	font-semibold text-letter-black bg-white shadow-basic rounded-xl -translate-x-full px-6 animate-fadeInRight">
          <div className="relative w-[18px] h-[18px] mr-2.5">
            <Image src={ToastIcon[type]} alt="Toast message icon" fill />
          </div>
          {message}
        </div>
      )}
    </>
  );
};

export default ToastMessage;
