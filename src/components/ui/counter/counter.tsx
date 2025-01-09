'use client'

import { useState } from 'react'

import { ICONS } from '@/utils/config/icons'

import styles from './counter.module.scss'

export const Counter: React.FC = () => {
  const [count, setCount] = useState(1)
  return (
    <div className={styles.counter}>
      <button onClick={() => setCount(prev => prev - 1)} disabled={count <= 1} type='button'>
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
      <button onClick={() => setCount(prev => prev + 1)} disabled={count >= 99} type='button'>
        {ICONS.plus()}
      </button>
    </div>
  )
}
