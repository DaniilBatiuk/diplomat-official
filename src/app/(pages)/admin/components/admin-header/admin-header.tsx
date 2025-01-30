import Link from 'next/link'

import { LINKS } from '@/utils/constants'

import styles from './../../admin.module.scss'
import { CustomButton, Title } from '@/components'

export const AdminHeader: React.FC = () => {
  return (
    <div className={styles.admin__header}>
      <Title isH1 className={styles.admin__title}>
        Адмін
      </Title>
      <Link href={LINKS.CreateProduct} prefetch>
        <CustomButton outline>Створити товар</CustomButton>
      </Link>
    </div>
  )
}
