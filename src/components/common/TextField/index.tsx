import React, {
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  useImperativeHandle,
  useRef,
} from 'react';

import useFocusInput from '@/hooks/common/useFocusInput';

export interface TextFieldProps extends HTMLAttributes<HTMLInputElement> {
  autoComplete?: string;
  type?: InputHTMLAttributes<unknown>['type'];
  disabled?: boolean;
  value?: string;
  fullWidth?: boolean;
  error?: boolean;
  label?: ReactNode;
  helperText?: ReactNode;
  placeholder?: string;
  icon?: ReactNode;
  id?: string;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

type Props = TextFieldProps;

const TextField = (
  { id, label, helperText, error, icon, fullWidth, ...props }: Props,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);
  const [isActive] = useFocusInput(inputRef);
  const inputLabelId = label && id ? `${id}-label` : undefined;

  return (
    <div className="bg-white py-[10px]">
      <div className="relative">
        {label && (
          <label
            className={`absolute left-0 top-0 block bg-white pointer-events-auto select-none translate-x-[14px] translate-y-[-9px] scale-[0.75] origin-top-left whitespace-nowrap overflow-hidden text-ellipsis py-[2px] px-[5px] ${
              error ? `text-red` : isActive ? `text-main` : `text-gray_400`
            }`}
            htmlFor={id}
            id={inputLabelId}
          >
            {label}
          </label>
        )}
      </div>

      <div
        className={`flex items-center w-${
          fullWidth ? `full` : `auto`
        } h-12 text-letter-black border-[1px] 
         rounded-[8px] bg-none m-0  
        border-solid ${isActive ? `border-main` : `border-gray-400`}
        hover:border-${error ? `red` : isActive ? `main` : `black`}`}
      >
        <input
          className="w-full h-full text-sm p-[14px]"
          {...props}
          ref={inputRef}
        />
        {icon}
      </div>

      {helperText && (
        <p className="text-3 text-xs leading-6 text-red">{helperText}</p>
      )}
    </div>
  );
};

export default forwardRef<HTMLInputElement, Props>(TextField);
