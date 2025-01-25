import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { History } from './components/history/history'
import { LeftSide } from './components/left-side/left-side'
import { PersonalData } from './components/personal-data/personal-data'
import styles from './profile.module.scss'
import { Title } from '@/components'
import { getUserSession } from '@/utils/helpers/get-user-session'
import { prisma } from '@/utils/lib/db'
import { getUserDetails } from '@/utils/lib/queries'

export async function generateStaticParams() {
  const users = await prisma.user.findMany()
  return users.map(user => ({
    id: user.id,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const id = (await params).id
  const user = await getUserDetails(id)

  return {
    title: `${user.name} ${user.surname}`,
  }
}

export default async function Profile({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id
  const userFromSession = await getUserSession()
  const user = await getUserDetails(id)

  if (!userFromSession || userFromSession.id !== user.id) return notFound()

  return (
    <div className={styles.profile}>
      <section className={styles.profile__container}>
        <Title isH1 className={styles.profile__title}>
          Особистий кабінет
        </Title>
        <div className={styles.profile__content}>
          <LeftSide user={user} />
          <div className={styles.profile__content_right}>
            <PersonalData user={user} />
            {user.orders.length > 0 && <History user={user} />}
          </div>
        </div>
      </section>
    </div>
  )
}
