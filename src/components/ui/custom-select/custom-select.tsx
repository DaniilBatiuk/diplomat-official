'use client'

import { FormControl, InputLabel, Select, SelectChangeEvent } from '@mui/material'
import { Dispatch, ReactNode, SetStateAction, useState } from 'react'

interface CustomSelectProp {
  label: string
  fullWidth?: boolean
  className?: string
  disabled?: boolean
  error?: string | undefined
  idName: string
  children: ReactNode
  selectControl?: string
  setSelectControl?: Dispatch<SetStateAction<string>>
}

export const CustomSelect: React.FC<CustomSelectProp> = ({
  label,
  fullWidth,
  className,
  disabled,
  error,
  idName,
  children,
  selectControl,
  setSelectControl,
}: CustomSelectProp) => {
  const [select, setSelect] = useState('')
  const handleChange = (event: SelectChangeEvent) => {
    setSelectControl ? setSelectControl(event.target.value) : setSelect(event.target.value)
  }

  return (
    <FormControl fullWidth error={!!error} disabled={disabled} className={className}>
      <InputLabel>{error ?? label}</InputLabel>
      <Select
        id={idName}
        name={idName}
        value={selectControl ?? select}
        label={error ?? label}
        fullWidth={fullWidth}
        onChange={handleChange}
      >
        {children}
      </Select>
    </FormControl>
  )
}
