'use client'

import { FormControlLabel, Radio, RadioGroup } from '@mui/material'

interface RadioButtonsProp<T> {
  values: T[]
  className?: string
  value: T
  idName?: string
  labels: string[]
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const RadioButtons = <T,>({
  values,
  className,
  value,
  idName,
  labels,
  handleChange,
}: RadioButtonsProp<T>) => {
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
