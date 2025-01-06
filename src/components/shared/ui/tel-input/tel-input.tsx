'use client'

import { TextField } from '@mui/material'
import { useMask } from '@react-input/mask'
import { useState } from 'react'

export const TelInput: React.FC = () => {
  const [value, setValue] = useState('')

  const inputRef = useMask({
    mask: '__ (___) ___-__-__',
    replacement: { _: /\d/ },
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  console.log('value', value)

  return (
    <TextField
      inputRef={inputRef}
      type='tel'
      label='Введіть номер телефону'
      variant='outlined'
      fullWidth
      value={value}
      onChange={handleChange}
    />
  )
}
