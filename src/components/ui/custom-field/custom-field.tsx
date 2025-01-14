import { TextField, TextFieldProps } from '@mui/material'
import clsx from 'clsx'

import styles from './custom-field.module.scss'

interface CustomFieldProps extends Omit<TextFieldProps, 'inputRef'> {
  isWhite?: boolean
  inputRef?: (node: HTMLInputElement) => void
  readOnly?: boolean
}

export const CustomField: React.FC<CustomFieldProps> = ({
  isWhite,
  inputRef,
  className,
  fullWidth,
  readOnly,
  ...rest
}: CustomFieldProps) => {
  return (
    <TextField
      {...rest}
      className={clsx(styles.input, className)}
      fullWidth={fullWidth}
      inputRef={inputRef}
      slotProps={{
        input: {
          readOnly: readOnly,
        },
      }}
      sx={
        isWhite
          ? {
              '& .MuiOutlinedInput-root': {
                color: 'white', // Цвет текста
                '& fieldset': {
                  borderColor: 'white', // Цвет обводки
                },
                '&:hover fieldset': {
                  borderColor: 'white', // Цвет обводки при наведении
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white', // Цвет обводки при фокусе
                },
              },
              '& .MuiInputLabel-root': {
                color: 'white', // Цвет текста у label
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: 'white', // Цвет текста у label при фокусе
              },
            }
          : {}
      }
    />
  )
}
