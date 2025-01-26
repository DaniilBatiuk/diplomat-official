import clsx from 'clsx'
import { useState } from 'react'

import { ICONS } from '@/utils/config/icons'

import styles from './header-contacts-popup.module.scss'
import { useClickOutside } from '@/utils/hooks'

export const HeaderContactsPopUp: React.FC = () => {
  const [isContactsActive, setIsContactsActive] = useState(false)

  const clickOutsideRef = useClickOutside<HTMLDivElement>(() => {
    setIsContactsActive(false)
  })

  return (
    <>
      <li
        className={clsx(styles.header_contacts_icon, { [styles.active]: isContactsActive })}
        onClick={() => setIsContactsActive(true)}
      >
        {ICONS.contacts()}
        {isContactsActive && (
          <div className={styles.contacts} ref={clickOutsideRef}>
            <div className={styles.contact}>
              {ICONS.contactPhone()}
              <div className={styles.contact_info}>
                <p className={styles.contact_info_title}>+38 (068) 905 06 93</p>
                <p className={styles.contact_info_subtitle}>Пн - Нд: 8:00 - 19:00</p>
              </div>
            </div>
            <div className={styles.contact}>
              {ICONS.contactGoogle()}
              <div className={styles.contact_info}>
                <p className={styles.contact_info_title}>diplomat@gmail.com</p>
              </div>
            </div>
          </div>
        )}
      </li>
    </>
  )
}
