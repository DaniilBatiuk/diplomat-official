'use client'

import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'

interface RadioButtonsProp<T> {
  values: T[]
  className?: string
  value: T
  setValue: Dispatch<SetStateAction<T>>
  idName?: string
  labels: string[]
}

export const RadioButtons = <T,>({
  values,
  className,
  value,
  setValue,
  idName,
  labels,
}: RadioButtonsProp<T>) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value as T)
  }

  return (
    <RadioGroup
      value={value}
      onChange={handleChange}
      className={className}
      id={idName}
      name={idName}
    >
      {values.map((value, index) => (
        <FormControlLabel
          key={String(value)}
          value={value}
          control={<Radio />}
          label={labels ? labels[index] : ''}
        />
      ))}
    </RadioGroup>
  )
}
