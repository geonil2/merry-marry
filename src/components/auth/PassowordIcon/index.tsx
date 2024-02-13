import React from 'react';
import Image from 'next/image';

import OpenIcon from '@/assets/images/auth/eye-open.svg';
import CloseIcon from '@/assets/images/auth/eye-slash.svg';

interface Props {
  showPassword: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const PasswordIcon: React.FC<Props> = ({ showPassword, onClick }) => {
  return (
    <button
      className="relative inline-flex items-center justify-center w-10 h-10"
      onClick={onClick}
      type="button"
    >
      <Image
        src={showPassword ? OpenIcon : CloseIcon}
        className="w-full h-full p-2"
        alt="Password show/hide icon"
        fill
      />
    </button>
  );
};

export default PasswordIcon;
