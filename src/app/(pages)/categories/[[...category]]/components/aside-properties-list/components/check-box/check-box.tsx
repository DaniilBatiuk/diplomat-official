'use client'

import { Checkbox } from '@mui/material'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useState, useTransition } from 'react'

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
  const [_, startTransition] = useTransition()

  const [checked, setChecked] = useState(
    () => searchParams.get(propertyName)?.split(',').includes(value) ?? false,
  )

  const updateURL = useCallback(
    (newChecked: boolean) => {
      console.log('starting transition')
      const params = new URLSearchParams(Array.from(searchParams.entries()))
      let existingValues = params.getAll(propertyName)[0]?.split(',') ?? []

      if (!existingValues.includes(value) && newChecked) {
        existingValues.push(value)
      } else if (existingValues.includes(value) && !newChecked) {
        existingValues = existingValues.filter(existingValue => existingValue !== value)
      }

      params.delete(propertyName)
      if (existingValues.length > 0) {
        params.append(propertyName, existingValues.join(','))
      }

      const newURL = `${pathname}?${params.toString()}`

      startTransition(() => {
        replace(newURL, {
          scroll: false,
        })
      })
      console.log('finish transition')
    },
    [pathname, searchParams, propertyName, value, replace],
  )

  const changeCheckBox = useCallback(() => {
    const newChecked = !checked
    setChecked(newChecked)
    updateURL(newChecked)
  }, [checked, updateURL])

  return (
    <div className={styles.aside__checkbox} onClick={changeCheckBox}>
      <Checkbox checked={checked} name={value} />
      <p>{value}</p>
    </div>
  )
}
