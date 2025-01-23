'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import { ICONS } from '@/utils/config/icons'

import { SignInPage } from './components/sign-in/sign-in'
import { SignUpPage } from './components/sign-up/sign-up'
import styles from './sign-in.module.scss'
import SignInImg from '@/../public/sign-up.webp'

interface AuthProps {
  onClickClose: () => void
}

export const Auth: React.FC<AuthProps> = ({ onClickClose }: AuthProps) => {
  const [signUp, setSignUp] = useState(false)

  useEffect(() => {
    document.documentElement.classList.add('no-scroll-view')

    return () => document.documentElement.classList.remove('no-scroll-view')
  }, [])

  return (
    <section className={styles.signIn}>
      <Image src={SignInImg} alt='MainPhoto' fill priority placeholder='blur' loading={'eager'} />
      <button onClick={onClickClose} className={styles.signIn__close_button}>
        {ICONS.close({ className: styles.signIn__close })}
      </button>
      <div className={styles.signIn__content}>
        {!signUp ? (
          <SignInPage setSignUp={setSignUp} onClickClose={onClickClose} />
        ) : (
          <SignUpPage setSignUp={setSignUp} onClickClose={onClickClose} />
        )}
      </div>
    </section>
  )
}
