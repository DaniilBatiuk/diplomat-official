import { TextField, TextFieldProps } from '@mui/material'
import clsx from 'clsx'

import styles from './custom-field.module.scss'

interface CustomFieldProps extends Omit<TextFieldProps, 'inputRef'> {
  isWhite?: boolean
  inputRef?: (node: HTMLInputElement) => void
  fullWidth?: boolean
  readOnly?: boolean
  idName?: string
}

export const CustomField: React.FC<CustomFieldProps> = ({
  isWhite,
  inputRef,
  className,
  fullWidth,
  readOnly,
  idName,
  ...rest
}: CustomFieldProps) => {
  return (
    <TextField
      id={idName}
      name={idName}
      aria-label={idName}
      className={clsx(styles.input, className)}
      fullWidth={fullWidth}
      inputRef={inputRef}
      slotProps={{
        input: {
          readOnly: readOnly,
        },
      }}
      {...rest}
      sx={
        isWhite
          ? {
              '& .MuiOutlinedInput-root': {
                color: 'white',
                '& fieldset': {
                  borderColor: 'white',
                },
                '&:hover fieldset': {
                  borderColor: 'white',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white',
                },
              },
              '& .MuiInputLabel-root': {
                color: 'white',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: 'white',
              },
            }
          : {}
      }
    />
  )
}
