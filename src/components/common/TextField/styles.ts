import { TextFieldProps } from '@/components/common/TextField/index';
import styled from 'styled-components';
import { bool } from 'yup';
import Button from '@/components/common/Button';

export const TextField = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 10px 0;
`;

export const LabelField = styled.div<{ $isActive: boolean; $error?: boolean }>(
  ({ theme, $isActive, $error }) => ({
    position: 'relative',

    '> label': {
      position: 'absolute',
      left: 0,
      top: 0,
      display: 'block',
      color: $error
        ? theme.colors.red
        : $isActive
          ? theme.colors.main
          : theme.colors.gray_400,
      backgroundColor: theme.colors.white,
      pointerEvents: 'auto',
      userSelect: 'none',
      transform: 'translate(14px, -9px) scale(0.75)',
      transformOrigin: 'top left',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      padding: '2px 5px',
    },
  }),
);

export const InputField = styled.div<{
  $fullWidth?: boolean;
  $isActive: boolean;
  $error?: boolean;
}>(({ theme, $fullWidth, $isActive, $error }) => ({
  display: 'flex',
  alignItems: 'center',
  width: $fullWidth ? '100%' : `auto`,
  height: '3em',
  font: 'inherit',
  letterSpacing: 'inherit',
  color: theme.colors.letter.black,
  border: `1px solid ${
    $error
      ? theme.colors.red
      : $isActive
        ? theme.colors.main
        : theme.colors.gray_400
  }`,
  borderRadius: '8px',
  background: 'none',
  margin: 0,

  '&:hover': {
    borderColor: $error
      ? theme.colors.red
      : $isActive
        ? theme.colors.main
        : theme.colors.black,
  },

  '> input': {
    width: '100%',
    height: '100%',
    padding: '14px',
  },
}));

export const Input = styled.input`
  //width: 100%;
  //height: 100%;
  //border: none;
`;

export const HelperText = styled.p`
  font-size: 0.75rem;
  line-height: 1.5;
  margin: 6px 10px 5px 10px;
  color: ${({ theme }) => theme.colors.red};
`;
