'use client'

import { useState } from 'react'

import styles from './../../profile.module.scss'
import { ChangePasswordModal } from './components/change-password-modal/change-password-modal'
import { CustomButton, CustomField, FormBlock, TelInput } from '@/components'

export const PersonalData: React.FC = () => {
  const [modalActive, setModalActive] = useState(false)
  return (
    <FormBlock title='Персональні дані'>
      <form noValidate className={styles.profile__content_right_form}>
        <div className={styles.profile__content_right_form_fields}>
          <CustomField label="Введіть ім'я" fullWidth />
          <CustomField label='Введіть прізвище' fullWidth />
          <CustomField label='Введіть e-mail' fullWidth type='email' />
          <TelInput />
        </div>
        <CustomField label='Введіть адресу' fullWidth />

        <div className={styles.profile__content_right_form_footer}>
          <p>
            Хочете змінити пароль <span onClick={() => setModalActive(true)}>Змінити</span>.
          </p>
          <CustomButton
            type='submit'
            disabled
            className={styles.profile__content_right_form_footer_button}
          >
            Змінити
          </CustomButton>
        </div>
      </form>
      <ChangePasswordModal modalActive={modalActive} setModalActive={setModalActive} />
    </FormBlock>
  )
}
