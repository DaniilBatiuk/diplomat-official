import { TextField } from '@mui/material'
import { HTMLInputTypeAttribute, ReactNode } from 'react'

import styles from './custom-field.module.scss'

interface CustomFieldProps {
  type?: HTMLInputTypeAttribute
  label?: ReactNode
  fullWidth?: boolean
  isWhite?: boolean
}
export const CustomField: React.FC<CustomFieldProps> = ({
  type,
  label,
  fullWidth,
  isWhite,
}: CustomFieldProps) => {
  return (
    <TextField
      className={styles.input}
      type={type}
      label={label}
      variant='outlined'
      fullWidth={fullWidth}
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
