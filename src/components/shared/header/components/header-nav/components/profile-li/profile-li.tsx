import { useSession } from 'next-auth/react'
import Link from 'next/link'

import { ICONS } from '@/utils/config/icons'
import { LINKS } from '@/utils/config/links'

import { useHeaderSearchStore } from '@/utils/lib/store/header-search-store'

export const ProfileLi: React.FC = () => {
  const { setSignInActive } = useHeaderSearchStore()

  const { data: session } = useSession()

  return (
    <>
      {!session ? (
        <li onClick={() => setSignInActive(true)}>{ICONS.user()}</li>
      ) : (
        <li>
          <Link href={LINKS.Profile} prefetch>
            {ICONS.user()}
          </Link>
        </li>
      )}
    </>
  )
}
