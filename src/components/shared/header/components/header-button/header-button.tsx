import clsx from 'clsx'
import React from 'react'

import styles from './header-button.module.scss'

export interface HeaderButtonProp extends React.ComponentProps<'button'> {}

export const HeaderButton: React.FC<HeaderButtonProp> = ({
  children,
  className,
  ...props
}: HeaderButtonProp) => {
  return (
    <button className={clsx(styles.button, className)} {...props}>
      {children}
    </button>
  )
}
