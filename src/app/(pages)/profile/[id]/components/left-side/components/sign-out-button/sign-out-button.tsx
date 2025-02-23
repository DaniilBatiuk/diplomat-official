'use client'

import Cookies from 'js-cookie'
import { signOut, useSession } from 'next-auth/react'

import { LINKS, TOKENS } from '@/utils/constants'

import styles from './../../../../profile.module.scss'
import { CustomButton } from '@/components'

export const SignOutButton: React.FC = () => {
  const { data: session } = useSession()

  return (
    <CustomButton
      onClick={async () => {
        signOut({ callbackUrl: LINKS.Home })
        Cookies.remove(TOKENS.CART_TOKEN)
      }}
      disabled={!!!session}
      fullWidth
      className={styles.sign_out}
    >
      Вийти
    </CustomButton>
  )
}
