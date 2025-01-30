'use client'

import clsx from 'clsx'
import React, { ReactNode, useEffect } from 'react'

import { ICONS } from '@/utils/constants'

import styles from './modal.module.scss'

export interface ModalProps {
  active: boolean
  children: React.ReactNode
  maxDivWidth: string
  setActive: (value: boolean) => void
}

const Modal: React.FC<ModalProps> & {
  Title: React.FC<{ children: ReactNode }>
  SubTitle: React.FC<{ children: ReactNode }>
  Main: React.FC<{ children: ReactNode }>
  Footer: React.FC<{ children: ReactNode }>
} = ({ active, children, maxDivWidth, setActive }: ModalProps) => {
  useEffect(() => {
    if (active) {
      document.documentElement.classList.add('no-scroll')
    } else {
      document.documentElement.classList.remove('no-scroll')
    }
  }, [active])

  return (
    <section
      className={clsx(styles.modal, { [styles.active]: active })}
      onClick={() => setActive(false)}
    >
      <div
        className={clsx(styles.modal__content, { [styles.active]: active })}
        style={{ maxWidth: maxDivWidth }}
        onClick={e => e.stopPropagation()}
      >
        <button
          aria-label='Закрити'
          onClick={() => setActive(false)}
          className={styles.modal__close_button}
        >
          {ICONS.close({ className: styles.modal__close })}
        </button>
        {children}
      </div>
    </section>
  )
}

Modal.Title = function ModalTitle({ children }: { children: ReactNode }) {
  return <h2 className={clsx(styles.modal__h2)}>{children}</h2>
}
Modal.SubTitle = function ModalSubTitle({ children }: { children: ReactNode }) {
  return <p className={clsx(styles.modal__p)}>{children}</p>
}
Modal.Main = function ModalMain({ children }: { children: ReactNode }) {
  return <div className={clsx(styles.modal__main)}>{children}</div>
}
Modal.Footer = function ModalFooter({ children }: { children: ReactNode }) {
  return <div className={clsx(styles.modal__footer)}>{children}</div>
}

export { Modal }
