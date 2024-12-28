'use client'

import clsx from 'clsx'
import { useEffect } from 'react'

import styles from './dark-background.module.scss'

interface DarkBackgroundProp {
  backgroundActive: boolean
  onClick: () => void
  isLow?: boolean
}
export const DarkBackground: React.FC<DarkBackgroundProp> = ({
  onClick,
  backgroundActive,
  isLow,
}: DarkBackgroundProp) => {
  useEffect(() => {
    if (backgroundActive) {
      document.documentElement.classList.add('no-scroll')
    } else {
      document.documentElement.classList.remove('no-scroll')
    }
  }, [backgroundActive])

  return (
    <div
      className={clsx(styles.dark, {
        [styles.active]: backgroundActive,
        [styles.low]: isLow && backgroundActive,
      })}
      onClick={onClick}
    ></div>
  )
}
