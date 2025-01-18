'use client'

import { Checkbox } from '@mui/material'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import styles from './../../../../categories.module.scss'

interface CheckBoxCategoriesProps {
  value: string
  propertyName: string
}

export const CheckBoxCategories: React.FC<CheckBoxCategoriesProps> = ({
  value,
  propertyName,
}: CheckBoxCategoriesProps) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const isFirstRender = useRef(true)

  const [checked, setChecked] = useState(
    () => searchParams.get(propertyName)?.split(',').includes(value) ?? false,
  )

  const changeCheckBox = () => {
    setChecked(prev => !prev)
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    const params = new URLSearchParams(searchParams)
    let existingValues = params.getAll(propertyName)[0]?.split(',') ?? []

    if (!existingValues.includes(value) && checked) {
      existingValues.push(value)
    } else if (existingValues.includes(value) && !checked) {
      existingValues = existingValues.filter(existingValue => existingValue !== value)
    }

    params.delete(propertyName)

    if (existingValues.length > 0) {
      params.append(propertyName, existingValues.join(','))
    }
    replace(`${pathname}?${params.toString()}`)
  }, [checked])

  return (
    <div className={styles.aside__checkbox} onClick={changeCheckBox}>
      <Checkbox checked={checked} name={value} />
      <p>{value}</p>
    </div>
  )
}
