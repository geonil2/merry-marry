import { useFormContext, useController } from 'react-hook-form';
import TextField, { TextFieldProps } from '@/components/common/TextField';

interface Props extends TextFieldProps {
  name: string;
}

const RHFTextField: React.FC<Props> = ({ name, ...props }) => {
  const { control } = useFormContext();
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return (
    <>
      <TextField
        {...field}
        fullWidth
        value={
          typeof field.value === `number` && field.value === 0
            ? ``
            : field.value
        }
        error={!!error}
        helperText={error?.message}
        {...props}
      />
    </>
  );
};

export default RHFTextField;
