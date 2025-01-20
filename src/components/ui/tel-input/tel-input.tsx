'use client'

import { TextField, TextFieldProps } from '@mui/material'
import { useMask } from '@react-input/mask'

interface TelInputProps extends Omit<TextFieldProps, 'inputRef'> {
  fullWidth?: boolean
  idName?: string
  readOnly?: boolean
}

export const TelInput: React.FC<TelInputProps> = ({
  className,
  fullWidth,
  idName,
  readOnly,
  ...rest
}: TelInputProps) => {
  const inputRef = useMask({
    mask: '__ (___) ___-__-__',
    replacement: { _: /\d/ },
  })

  return (
    <TextField
      inputRef={inputRef}
      id={idName}
      name={idName}
      aria-label={idName}
      type='tel'
      variant='outlined'
      fullWidth={fullWidth}
      slotProps={{
        input: {
          readOnly: readOnly,
        },
      }}
      {...rest}
    />
  )
}
