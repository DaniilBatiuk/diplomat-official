import Image from 'next/image'

import { LINKS } from '@/utils/constants'

import styles from './../../basket.module.scss'
import Empty from '@/../public/empty.png'
import { CustomButton, Link } from '@/components'

interface BasketEmptyProps {
  setBasketActive?: (menuActive: boolean) => void
}

export const BasketEmpty: React.FC<BasketEmptyProps> = ({ setBasketActive }: BasketEmptyProps) => {
  return (
    <div className={styles.empty}>
      <p className={styles.empty_title}>Кошик порожній</p>
      <p className={styles.empty_subtitle}>
        <span>Подивіться наш каталог, ви обов'язково</span>
        <span>щось знайдете</span>
      </p>

      <Image
        src={Empty}
        alt='MainPhoto'
        placeholder='blur'
        loading={'eager'}
        decoding='sync'
        quality={100}
      />
      <Link
        href={LINKS.Categories}
        prefetch
        onClick={() => setBasketActive && setBasketActive(false)}
      >
        <CustomButton fullWidth>До категорій</CustomButton>
      </Link>
    </div>
  )
}
