'use client'

import Cookies from 'js-cookie'
import { signOut, useSession } from 'next-auth/react'

import { TOKENS } from '@/utils/config/enum-tokens'
import { LINKS } from '@/utils/config/links'

import styles from './../../../../profile.module.scss'
import { CustomButton } from '@/components'

export const SignOutButton: React.FC = () => {
  const { data: session } = useSession()
  return (
    <>
      {session && (
        <CustomButton
          onClick={async () => {
            signOut({ callbackUrl: LINKS.Home })
            Cookies.remove(TOKENS.CART_TOKEN)
          }}
          fullWidth
          className={styles.sign_out}
        >
          Вийти
        </CustomButton>
      )}
    </>
  )
}
