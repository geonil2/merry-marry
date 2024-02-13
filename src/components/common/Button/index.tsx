import React, { HTMLAttributes } from 'react';

import { LoadingSpinner } from '@/components/common/LoadingSpinner';
import classNames from '@/helper/classNames';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className = ``,
  text,
  fullWidth,
  isLoading,
  ...props
}) => {
  return (
    //   boxShadow: theme.shadows.button,
    //   padding: '8px 22px',
    //   cursor: 'pointer',
    //   transition: `background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    // box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`,
    //
    //   '&:hover': {
    //   backgroundColor: theme.colors.sub,
    //     boxShadow: theme.shadows.buttonHover,
    // },

    <button
      className={classNames(
        className,
        `inline-flex justify-center items-center min-w-[64px] h-42 text-base font-semibold text-white bg-main rounded-lg shadow-button py-2 px-[22px] cursor-pointer transition-colors	transition-shadow	hover:bg-sub hover:shadow-buttonHover
        ${fullWidth ? `w-full` : `w-auto`}
        `,
      )}
      type="button"
      {...props}
    >
      {isLoading ? <LoadingSpinner /> : text}
    </button>
  );
};

export default Button;
