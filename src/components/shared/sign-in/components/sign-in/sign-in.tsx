import { Dispatch, SetStateAction } from 'react'

import { CustomButton } from '@/components/ui/custom-button/custom-button'

import { ICONS } from '@/utils/config/icons'

import { CustomField } from '../../../../ui/custom-field/custom-field'
import styles from '../../sign-in.module.scss'

interface SignInProps {
  setSignUp: Dispatch<SetStateAction<boolean>>
}
export const SignInPage: React.FC<SignInProps> = ({ setSignUp }: SignInProps) => {
  return (
    <>
      <h2>Вхід</h2>
      <h3>Введіть свої облікові дані, щоб продовжити користуватися нашими послугами.</h3>
      <button className={styles.signIn__button_google}>
        {ICONS.google()} <p>Google</p>
      </button>
      <div className={styles.signIn__or}>Або</div>
      <form className={styles.signIn__form} noValidate>
        <div className={styles.signIn__form_inputs}>
          <CustomField label='Введіть свій e-mail' type='email' fullWidth isWhite />
          <CustomField label='Введіть свій пароль' type='password' fullWidth isWhite />
        </div>
        <CustomButton fullWidth big>
          Увійти
        </CustomButton>
      </form>
      <div className={styles.signIn__footer}>
        <p>
          Немає профілю? <span onClick={() => setSignUp(true)}>Зареєструйтеся</span>
        </p>
        <p>
          Забули пароль? <span>Змінити</span>
        </p>
      </div>
    </>
  )
}
