import { Badge } from '@mui/material'
import { $Enums } from '@prisma/client'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import { RefObject } from 'react'

import { Link } from '@/components/ui/link/link'

import { ICONS, LINKS } from '@/utils/constants'

import { getCart } from '@/utils/lib/actions/cart'

import { HeaderContactsPopUp } from '../header-contacts-popup/header-contacts-popup'

import styles from './../../header.module.scss'
import { ProfileLi } from './components/profile-li/profile-li'
import { useHeaderSearchStore } from '@/utils/lib/store/header-search-store'

interface HeaderNavProps {
  inputRefMobile: RefObject<HTMLInputElement | null>
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ inputRefMobile }: HeaderNavProps) => {
  const { setBasketActive, setSearchMobileActive } = useHeaderSearchStore()
  const { data: user } = useSession()

  const { data: cart } = useQuery({
    queryKey: ['cart'],
    queryFn: getCart,
    placeholderData: keepPreviousData,
  })

  return (
    <nav>
      <ul>
        <li
          onClick={() => {
            setSearchMobileActive(true)
            inputRefMobile.current?.focus()
          }}
        >
          {ICONS.search()}
        </li>
        <HeaderContactsPopUp />

        {user && user.user.role === $Enums.UserRole.admin && (
          <li className={styles.admin}>
            <Link href={LINKS.Admin} prefetch aria-label='Admin'>
              {ICONS.admin()}
            </Link>
          </li>
        )}

        <ProfileLi />
        <li onClick={() => setBasketActive(true)}>
          {cart && cart?.items.length > 0 ? (
            <Badge badgeContent={cart?.items.length} color='error' showZero max={9}>
              {ICONS.cart()}
            </Badge>
          ) : (
            ICONS.cart()
          )}
        </li>
      </ul>
    </nav>
  )
}
