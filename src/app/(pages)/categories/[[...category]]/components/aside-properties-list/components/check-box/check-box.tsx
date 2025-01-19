'use client'

import { Checkbox } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'

import styles from './../../../../categories.module.scss'

interface CheckBoxCategoriesProps {
  propertyStates: Record<string, string>
  propertyName: string
  value: string
  setPropertyStates: Dispatch<SetStateAction<Record<string, string>>>
}

export const CheckBoxCategories: React.FC<CheckBoxCategoriesProps> = ({
  propertyStates,
  propertyName,
  value,
  setPropertyStates,
}: CheckBoxCategoriesProps) => {
  const onClickCheckBox = () => {
    const propertyStateArray = propertyStates[propertyName].split(', ')

    if (propertyStateArray.includes(value)) {
      setPropertyStates(prevState => ({
        ...prevState,
        [propertyName]: propertyStateArray.filter(item => item !== value).join(', '),
      }))
    } else {
      setPropertyStates(prevState => ({
        ...prevState,
        [propertyName]: propertyStateArray.concat(value).join(', '),
      }))
    }
  }
  return (
    <div className={styles.aside__checkbox} onClick={onClickCheckBox}>
      <Checkbox checked={propertyStates[propertyName].split(', ').includes(value)} name={value} />
      <p>{value}</p>
    </div>
  )
}
