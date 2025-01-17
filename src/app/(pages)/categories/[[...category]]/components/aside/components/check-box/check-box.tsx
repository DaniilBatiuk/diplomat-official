'use client'

import { Checkbox } from '@mui/material'
import { useState } from 'react'

import styles from './../../../../categories.module.scss'

interface CheckBoxCategoriesProps {
  value: string
}

export const CheckBoxCategories: React.FC<CheckBoxCategoriesProps> = ({
  value,
}: CheckBoxCategoriesProps) => {
  const [checked, setChecked] = useState(false)

  const handleChange = () => {
    setChecked(prev => !prev)
  }
  return (
    <div className={styles.aside__checkbox} onClick={handleChange}>
      <Checkbox checked={checked} name={value} />
      <p>{value}</p>
    </div>
  )
}
