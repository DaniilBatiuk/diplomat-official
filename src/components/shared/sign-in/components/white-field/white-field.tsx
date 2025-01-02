import { TextField } from '@mui/material'
import { HTMLInputTypeAttribute, ReactNode } from 'react'

import styles from '../../sign-in.module.scss'

interface WhiteFieldProps {
  type?: HTMLInputTypeAttribute
  label?: ReactNode
  fullWidth?: boolean
}
export const WhiteField: React.FC<WhiteFieldProps> = ({
  type,
  label,
  fullWidth,
}: WhiteFieldProps) => {
  return (
    <TextField
      className={styles.signIn__form_input}
      type={type}
      label={label}
      variant='outlined'
      fullWidth={fullWidth}
      sx={{
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
      }}
    />
  )
}
