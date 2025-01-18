'use client'

import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import * as React from 'react'

import { SORT_VARIANTS } from '@/utils/config/sort-variants'

export const SelectCategories: React.FC = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const [sortBy, setSortBy] = React.useState(() => searchParams.get('SortBy') ?? SORT_VARIANTS[0])

  const handleChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value)
    const { value } = event.target
    const params = new URLSearchParams(searchParams)
    params.set('SortBy', value)
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <Select
      sx={{ minWidth: 100 }}
      value={sortBy}
      label='sortBy'
      onChange={handleChange}
      variant='standard'
    >
      {SORT_VARIANTS.map(variant => (
        <MenuItem key={variant} value={variant}>
          {variant}
        </MenuItem>
      ))}
    </Select>
  )
}
