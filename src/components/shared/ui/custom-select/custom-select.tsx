'use client'

import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { ReactNode, useState } from 'react'

interface CustomSelectProp {
  label?: ReactNode
  fullWidth?: boolean
}

export const CustomSelect: React.FC<CustomSelectProp> = ({
  label,
  fullWidth,
}: CustomSelectProp) => {
  const [select, setSelect] = useState('Новинки')

  const handleChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value)
  }

  return (
    <FormControl fullWidth={fullWidth}>
      <InputLabel>{label}</InputLabel>
      <Select value={select} label={label} fullWidth={fullWidth} onChange={handleChange}>
        <MenuItem value={'Новинки'}>Новинки</MenuItem>
        <MenuItem value={'Дешеві'}>Дешеві</MenuItem>
        <MenuItem value={'Дорогі'}>Дорогі</MenuItem>
      </Select>
    </FormControl>
  )
}
