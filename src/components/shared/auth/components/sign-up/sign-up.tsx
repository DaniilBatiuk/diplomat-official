import { useQueryClient } from '@tanstack/react-query'
import { signIn } from 'next-auth/react'
import { Dispatch, SetStateAction, useActionState } from 'react'
import { toast } from 'react-toastify'

import { CustomButton } from '@/components/ui/custom-button/custom-button'

import { initialState } from '@/utils/config/initial-state'

import { useFormResultProcess } from '@/utils/hooks/useFormResultProcess/useFormResultProcess'

import { setCartToken } from '@/utils/lib/actions/cart'
import { registerUser } from '@/utils/lib/actions/user'

import { CustomField } from '../../../../ui/custom-field/custom-field'
import styles from '../../sign-in.module.scss'

import { ActionState } from '@/utils/lib/middleware'

interface SignUpProps {
  setSignUp: Dispatch<SetStateAction<boolean>>
  onClickClose: () => void
}

export const SignUpPage: React.FC<SignUpProps> = ({ setSignUp, onClickClose }: SignUpProps) => {
  const queryClient = useQueryClient()
  const [registerState, registerFormAction, registerPending] = useActionState<
    ActionState,
    FormData
  >(registerUser, initialState)

  useFormResultProcess({
    state: registerState,
    isPending: registerPending,
    onSuccess: async () => {
      await signIn('credentials', {
        email: registerState.inputs.email,
        password: registerState.inputs.password,
        redirect: false,
      })
      await setCartToken()
      queryClient.invalidateQueries({
        queryKey: ['cart'],
      })
      setSignUp(false)
      onClickClose()
      toast.success('Ви успішно зареєструвались')
    },
    onError: () => {
      toast.error(registerState.errors?.message)
    },
  })

  return (
    <>
      <h2>Реєстрація</h2>
      <h3>Заповніть всі поля нижче, щоб створити свій профіль.</h3>
      <form className={styles.signIn__form} noValidate action={registerFormAction}>
        <div className={styles.signIn__form_inputs}>
          <div className={styles.signIn__form_inputs_block}>
            <CustomField
              fullWidth
              isWhite
              idName='name'
              defaultValue={registerState.inputs.name}
              label={registerState.errors.name ?? "Введіть ім'я"}
              error={!!registerState.errors.name}
            />
            <CustomField
              fullWidth
              isWhite
              idName='surname'
              defaultValue={registerState.inputs.surname}
              label={registerState.errors.surname ?? 'Введіть прізвище'}
              error={!!registerState.errors.surname}
            />
          </div>
          <CustomField
            type='email'
            fullWidth
            isWhite
            idName='email'
            defaultValue={registerState.inputs.email}
            label={registerState.errors.email ?? 'Введіть E-mail'}
            error={!!registerState.errors.email}
          />
          <CustomField
            type='password'
            fullWidth
            isWhite
            idName='password'
            defaultValue={registerState.inputs.password}
            label={registerState.errors.password ?? 'Введіть свій пароль'}
            error={!!registerState.errors.password}
          />
          <CustomField
            type='password'
            fullWidth
            isWhite
            idName='confirmPassword'
            defaultValue={registerState.inputs.confirmPassword}
            label={registerState.errors.confirmPassword ?? 'Підтвердіть свій пароль'}
            error={!!registerState.errors.confirmPassword}
          />
        </div>
        <CustomButton fullWidth big type='submit' disabled={registerPending}>
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
