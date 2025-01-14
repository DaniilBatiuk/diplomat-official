'use client'

import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'

interface CustomSelectProp {
  label?: string
  fullWidth?: boolean
  values: string[]
  className?: string
  disabled?: boolean
  select: string
  setSelect: Dispatch<SetStateAction<string>>
  error?: boolean
  value?: string
}

export const CustomSelect: React.FC<CustomSelectProp> = ({
  label,
  fullWidth,
  values,
  className,
  disabled,
  select,
  setSelect,
  error,
  value,
}: CustomSelectProp) => {
  const handleChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value)
  }

  return (
    <FormControl fullWidth={fullWidth} className={className} disabled={disabled} error={error}>
      <InputLabel>{label}</InputLabel>
      <Select value={value ?? select} label={label} fullWidth={fullWidth} onChange={handleChange}>
        {values?.map(value => (
          <MenuItem key={value} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
