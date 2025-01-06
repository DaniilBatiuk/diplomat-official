'use client'

import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { useState } from 'react'

interface RadioButtonsProp {
  values: string[]
}

export const RadioButtons: React.FC<RadioButtonsProp> = ({ values }: RadioButtonsProp) => {
  const [value, setValue] = useState(values[0])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value)
  }

  return (
    <RadioGroup value={value} onChange={handleChange}>
      {values.map(value => (
        <FormControlLabel key={value} value={value} control={<Radio />} label={value} />
      ))}
    </RadioGroup>
  )
}
