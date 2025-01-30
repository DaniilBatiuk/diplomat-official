'use client'

import clsx from 'clsx'
import { usePathname } from 'next/navigation'

import { LINKS } from '@/utils/constants'

import styles from './../../info.module.scss'
import { Link } from '@/components'

export const InfoAside: React.FC = () => {
  const pathname = usePathname()

  return (
    <aside className={styles.aside}>
      <ul>
        <li>
          <Link href={LINKS.Payment} prefetch>
            <button className={clsx(pathname === LINKS.Payment && styles.active)}>Оплата</button>
          </Link>
        </li>
        <li>
          <Link href={LINKS.Delivery} prefetch>
            <button className={clsx(pathname === LINKS.Delivery && styles.active)}>Доставка</button>
          </Link>
        </li>
        <li>
          <Link href={LINKS.ReturnProduct} prefetch>
            <button className={clsx(pathname === LINKS.ReturnProduct && styles.active)}>
              Повернення
            </button>
          </Link>
        </li>
        <li>
          <Link href={LINKS.RulesAndConditions} prefetch>
            <button className={clsx(pathname === LINKS.RulesAndConditions && styles.active)}>
              Правила та умови
            </button>
          </Link>
        </li>
        <li>
          <Link href={LINKS.PrivacyPolicy} prefetch>
            <button className={clsx(pathname === LINKS.PrivacyPolicy && styles.active)}>
              Політика конфіденційності
            </button>
          </Link>
        </li>
      </ul>
    </aside>
  )
}
