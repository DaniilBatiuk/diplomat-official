'use client'

import { Checkbox } from '@mui/material'
import { useState } from 'react'

import styles from './../../../../categories.module.scss'

interface CheckBoxCategoriesProps {
  material: string
}

export const CheckBoxCategories: React.FC<CheckBoxCategoriesProps> = ({
  material,
}: CheckBoxCategoriesProps) => {
  const [checked, setChecked] = useState(false)

  const handleChange = () => {
    setChecked(prev => !prev)
  }
  return (
    <div className={styles.aside__checkbox} onClick={handleChange}>
      <Checkbox checked={checked} name={material} />
      <p>{material}</p>
    </div>
  )
}
