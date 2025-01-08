import { Dispatch, SetStateAction } from 'react'

import { CustomButton } from '@/components/ui/custom-button/custom-button'

import { CustomField } from '../../../../ui/custom-field/custom-field'
import styles from '../../sign-in.module.scss'

interface SignUpProps {
  setSignUp: Dispatch<SetStateAction<boolean>>
}
export const SignUpPage: React.FC<SignUpProps> = ({ setSignUp }: SignUpProps) => {
  return (
    <>
      <h2>Реєстрація</h2>
      <h3>Заповніть всі поля нижче, щоб створити свій профіль.</h3>
      <form className={styles.signIn__form} noValidate>
        <div className={styles.signIn__form_inputs}>
          <div className={styles.signIn__form_inputs_block}>
            <CustomField label="Введіть ім'я" fullWidth isWhite />
            <CustomField label='Введіть прізвище' fullWidth isWhite />
          </div>
          <CustomField label='Введіть свій e-mail' type='email' fullWidth isWhite />
          <CustomField label='Введіть свій пароль' type='password' fullWidth isWhite />
          <CustomField label='Підтвердіть свій пароль' type='password' fullWidth isWhite />
        </div>
        <CustomButton fullWidth big>
          Зареєструватись
        </CustomButton>
      </form>
      <div className={styles.signIn__footer}>
        <p>
          Вже є профіль? <span onClick={() => setSignUp(false)}>Увійдіть</span>
        </p>
      </div>
    </>
  )
}
