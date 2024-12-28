import clsx from 'clsx'
import { useState } from 'react'

import { ICONS } from '@/utils/config/icons'

import styles from './header-contacts-popup.module.scss'

export const HeaderContactsPopUp: React.FC = () => {
  const [isContactsActive, setIsContactsActive] = useState(false)

  return (
    <>
      <div
        className={clsx(styles.invisible, { [styles.active]: isContactsActive })}
        onClick={() => setIsContactsActive(false)}
      ></div>
      <li
        className={clsx(styles.header_contacts_icon, { [styles.active]: isContactsActive })}
        onClick={() => setIsContactsActive(true)}
      >
        {ICONS.contacts()}
        {isContactsActive && (
          <div className={styles.contacts}>
            <div className={styles.contact}>
              {ICONS.contactPhone()}
              <div className={styles.contact_info}>
                <p className={styles.contact_info_title}>+38 (068) 905 06 93</p>
                <p className={styles.contact_info_subtitle}>Пн - Нд: 8:00 - 19:00</p>
              </div>
            </div>
            <div className={styles.contact}>
              {ICONS.contactTelegram()}
              <div className={styles.contact_info}>
                <p className={styles.contact_info_title}>
                  Написати у <span>Telegram</span>
                </p>
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
