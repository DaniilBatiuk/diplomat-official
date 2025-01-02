import { Dispatch, SetStateAction } from 'react'

import { CustomButton } from '@/components/shared/ui/custom-button/custom-button'

import styles from '../../sign-in.module.scss'
import { WhiteField } from '../white-field/white-field'

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
            <WhiteField label="Введіть ім'я" fullWidth />
            <WhiteField label='Введіть прізвище' fullWidth />
          </div>
          <WhiteField label='Введіть свій e-mail' type='email' fullWidth />
          <WhiteField label='Введіть свій пароль' type='password' fullWidth />
          <WhiteField label='Підтвердіть свій пароль' type='password' fullWidth />
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
