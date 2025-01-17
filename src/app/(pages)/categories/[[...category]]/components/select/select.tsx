'use client'

import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import * as React from 'react'

export const SelectCategories: React.FC = () => {
  const [sortBy, setSortBy] = React.useState('Новинки')

  const handleChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value)
  }

  return (
    <Select
      sx={{ minWidth: 100 }}
      value={sortBy}
      label='Age'
      onChange={handleChange}
      variant='standard'
    >
      <MenuItem value={'Новинки'}>Новинки</MenuItem>
      <MenuItem value={'Дешеві'}>Дешеві</MenuItem>
      <MenuItem value={'Дорогі'}>Дорогі</MenuItem>
    </Select>
  )
}
