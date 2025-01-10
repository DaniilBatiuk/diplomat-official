import { TextField } from '@mui/material'
import clsx from 'clsx'
import { HTMLInputTypeAttribute } from 'react'

import styles from './custom-field.module.scss'

interface CustomFieldProps {
  type?: HTMLInputTypeAttribute
  label?: string
  fullWidth?: boolean
  isWhite?: boolean
  className?: string
  inputRef?: (node: HTMLInputElement) => void
  onClick?: () => void
  readOnly?: boolean
  value?: string
  disabled?: boolean
}
export const CustomField: React.FC<CustomFieldProps> = ({
  inputRef,
  type,
  label,
  fullWidth,
  isWhite,
  className,
  readOnly,
  onClick,
  value,
  disabled,
}: CustomFieldProps) => {
  return (
    <TextField
      className={clsx(styles.input, className, {
        [styles.readOnly]: readOnly,
      })}
      type={type}
      label={label}
      disabled={disabled}
      inputRef={inputRef}
      variant='outlined'
      fullWidth={fullWidth}
      onClick={onClick}
      focused={readOnly ? false : undefined}
      value={value}
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
