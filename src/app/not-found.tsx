import { ICONS } from '@/utils/config/icons'
import { LINKS } from '@/utils/config/links'

import styles from './not-found.module.scss'
import { CustomButton, Link } from '@/components'

export default function Page() {
  return (
    <section className={styles.error__container}>
      <div className={styles.error__left}>
        <h1 className={styles.error__title}>404</h1>
        <h2 className={styles.error__subtitle}>Сторінку не знайдено</h2>
        <Link href={LINKS.Home} prefetch>
          <CustomButton>На головну</CustomButton>
        </Link>
      </div>
      <div className={styles.error__right}>{ICONS.error()}</div>
    </section>
  )
}
