'use client'

import { UseMutateFunction } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import { ICONS } from '@/utils/config/icons'

import styles from './counter.module.scss'
import { useDebounceCallback } from '@/utils/hooks'

interface CounterProps {
  mutation: UseMutateFunction<
    void,
    Error,
    {
      id: string
      quantity: number
    },
    unknown
  >
  id: string
  quantity: number
}

export const Counter: React.FC = ({ mutation, id, quantity }: CounterProps) => {
  const [count, setCount] = useState(quantity)
  const debouncedUpdateCartItem = useDebounceCallback(() => mutation({ id, quantity: count }), 300)

  useEffect(() => {
    setCount(quantity)
  }, [quantity])

  useEffect(() => {
    if (count !== quantity) {
      debouncedUpdateCartItem()
    }
  }, [count])
  return (
    <div className={styles.counter}>
      <button
        onClick={() => setCount(prev => prev - 1)}
        disabled={count <= 1}
        type='button'
        aria-label='Додати'
      >
        {ICONS.minus()}
      </button>
      <input
        type='number'
        value={count}
        onChange={e => {
          if (+e.target.value > 99) {
            setCount(99)
          } else if (+e.target.value < 1) {
            setCount(1)
          } else {
            setCount(+e.target.value)
          }
        }}
      />
      <button
        onClick={() => setCount(prev => prev + 1)}
        disabled={count >= 99}
        type='button'
        aria-label='Відняти'
      >
        {ICONS.plus()}
      </button>
    </div>
  )
}
