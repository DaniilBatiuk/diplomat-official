'use client'

import { FormControl, InputLabel, Select, SelectChangeEvent } from '@mui/material'
import { ReactNode, useState } from 'react'

interface CustomSelectProp {
  label: string
  fullWidth?: boolean
  className?: string
  disabled?: boolean
  error: string | undefined
  idName: string
  children: ReactNode
}

export const CustomSelect: React.FC<CustomSelectProp> = ({
  label,
  fullWidth,
  className,
  disabled,
  error,
  idName,
  children,
}: CustomSelectProp) => {
  const [select, setSelect] = useState('')
  const handleChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value)
  }

  return (
    <FormControl fullWidth error={!!error} disabled={disabled} className={className}>
      <InputLabel>{error ?? label}</InputLabel>
      <Select
        id={idName}
        name={idName}
        value={select}
        label={error ?? label}
        fullWidth={fullWidth}
        onChange={handleChange}
      >
        {children}
      </Select>
    </FormControl>
  )
}
