import { useSession } from 'next-auth/react'
import Link from 'next/link'

import { ICONS, LINKS } from '@/utils/constants'

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
          <Link href={LINKS.Profile + '/' + session.user.id} prefetch aria-label='Profile'>
            {ICONS.user()}
          </Link>
        </li>
      )}
    </>
  )
}
