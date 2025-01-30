import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { Dispatch, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'

import { CustomButton } from '@/components/ui/custom-button/custom-button'

import { ICONS, LINKS } from '@/utils/constants'

import { CustomField } from '../../../../ui/custom-field/custom-field'
import styles from '../../sign-in.module.scss'

import { useSubmit } from './hooks/use-submit'
import { LoginType, loginSchema } from '@/utils/validators/user-validator'

interface SignInProps {
  setSignUp: Dispatch<SetStateAction<boolean>>
  onClickClose: () => void
}
export const SignInPage: React.FC<SignInProps> = ({ setSignUp, onClickClose }: SignInProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const { onSubmit } = useSubmit({ onClickClose })

  return (
    <>
      <h2>Вхід</h2>
      <h3>Введіть свої облікові дані, щоб продовжити користуватися нашими послугами.</h3>
      <button
        className={styles.signIn__button_google}
        onClick={() =>
          signIn('google', {
            callbackUrl: LINKS.Home,
            redirect: true,
          })
        }
      >
        {ICONS.google()} <p>Google</p>
      </button>
      <div className={styles.signIn__or}>Або</div>
      <form className={styles.signIn__form} noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.signIn__form_inputs}>
          <CustomField
            type='email'
            fullWidth
            isWhite
            idName='email'
            {...register(`email`)}
            error={Boolean(errors.email?.message)}
            label={errors.email?.message || 'Введіть E-mail'}
          />
          <CustomField
            type='password'
            fullWidth
            isWhite
            idName='password'
            {...register(`password`)}
            error={Boolean(errors.password?.message)}
            label={errors.password?.message || 'Введіть свій пароль'}
          />
        </div>
        <CustomButton fullWidth big type='submit' disabled={isSubmitting}>
          Увійти
        </CustomButton>
      </form>
      <div className={styles.signIn__footer}>
        <p>
          Немає профілю? <span onClick={() => setSignUp(true)}>Зареєструйтеся</span>
        </p>
      </div>
    </>
  )
}
