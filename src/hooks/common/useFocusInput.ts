import {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

const useFocusInput = (
  el: RefObject<HTMLInputElement>,
): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    if (el.current) {
      el.current.onfocus = () => {
        setActive(true);
      };
      el.current.onblur = () => {
        setActive(false);
      };
    }
  }, [el]);

  return [isActive, setActive];
};

export default useFocusInput;
