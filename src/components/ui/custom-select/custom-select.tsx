'use client'

import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { ReactNode, useState } from 'react'

interface CustomSelectProp {
  label?: ReactNode
  fullWidth?: boolean
  values: string[]
  className?: string
}

export const CustomSelect: React.FC<CustomSelectProp> = ({
  label,
  fullWidth,
  values,
  className,
}: CustomSelectProp) => {
  const [select, setSelect] = useState<string>('')

  const handleChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value)
  }

  return (
    <FormControl fullWidth={fullWidth} className={className}>
      <InputLabel>{label}</InputLabel>
      <Select value={select} label={label} fullWidth={fullWidth} onChange={handleChange}>
        {values?.map(value => (
          <MenuItem key={value} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
