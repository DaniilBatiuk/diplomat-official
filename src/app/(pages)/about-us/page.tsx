import clsx from 'clsx'
import { Metadata } from 'next'
import Image from 'next/image'

import styles from './about-us.module.scss'
import About1 from '@/../public/about-us1.webp'
import About2 from '@/../public/about-us2.webp'
import About3 from '@/../public/about-us3.webp'
import { Title } from '@/components'

export const metadata: Metadata = {
  title: 'Про нас',
}

export default function AboutUs() {
  return (
    <div className={styles.about}>
      <div className={styles.about__container}>
        <Title isH1 className={styles.about__title}>
          Про нас
        </Title>
        <div className={styles.about__content}>
          <div className={styles.about__item}>
            <div className={styles.about__item_info}>
              <h2>Ласкаво просимо до Дипломат!</h2>
              <p>
                Вже майже 30 років ми допомагаємо створювати особливі моменти, пропонуючи
                ексклюзивні подарунки, які запам’ятовуються надовго. Наш магазин розпочав свій шлях
                у самому серці Кременчука, ставши місцем, де кожен міг знайти щось унікальне для
                близьких або для себе.
              </p>
            </div>
            <Image
              src={About1}
              alt='AboutPhoto1'
              placeholder='blur'
              loading={'eager'}
              quality={100}
            />
          </div>
          <div className={clsx(styles.about__item, styles.about__item_reverse)}>
            <div className={styles.about__item_info}>
              <h2>Дипломат тепер завжди поруч із вами</h2>
              <p>
                Сьогодні ми відкриваємо нову сторінку нашої історії. Розуміючи сучасні тенденції та
                ваші потреби, "Дипломат" повністю перейшов в онлайн-формат. Тепер наш асортимент
                доступний у будь-якому куточку України, не виходячи з дому.
              </p>
            </div>
            <Image
              src={About2}
              alt='AboutPhoto3'
              placeholder='blur'
              loading={'eager'}
              quality={100}
            />
          </div>
          <div className={styles.about__item}>
            <div className={styles.about__item_info}>
              <h2>Подарунки, що говорять за вас</h2>
              <p>
                Ми пропонуємо широкий вибір подарунків для будь-якої нагоди – днів народжень, свят,
                корпоративних подій чи просто, щоб зробити приємність. Кожен товар обирається з
                увагою до деталей, аби відповідати високим стандартам якості.
              </p>
            </div>
            <Image
              src={About3}
              alt='AboutPhoto3'
              placeholder='blur'
              loading={'eager'}
              quality={100}
            />
          </div>
          <h2>
            Дякуємо, що обираєте "Дипломат". Разом із вами ми продовжуємо дарувати щирі емоції та
            створювати незабутні моменти.
          </h2>
        </div>
      </div>
    </div>
  )
}
