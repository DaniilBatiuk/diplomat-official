'use client'

import { useActionState } from 'react'
import { toast } from 'react-toastify'

import { initialState } from '@/utils/config/initial-state'

import { useFormResultProcess } from '@/utils/hooks/useFormResultProcess/useFormResultProcess'

import { updateUser } from '@/utils/lib/actions/user'

import styles from './../../profile.module.scss'
import { useDataChange } from './hooks/use-data-change'
import { CustomButton, CustomField, FormBlock } from '@/components'
import { ActionState } from '@/utils/lib/middleware'

interface PersonalDataProps {
  user: IUserDetails
}

export const PersonalData: React.FC<PersonalDataProps> = ({ user }: PersonalDataProps) => {
  const { handleChange, isDisabled } = useDataChange({ user })

  const [updateUserState, updateUserFormAction, updateUserPending] = useActionState<
    ActionState,
    FormData
  >(updateUser, initialState)

  useFormResultProcess({
    state: updateUserState,
    isPending: updateUserPending,
    onSuccess: () => {
      toast.success('Дані успішно змінені')
    },
    onError: () => {
      if (updateUserState.errors.message) {
        toast.error(updateUserState.errors.message)
      } else {
        toast.error('Виникла помилка при змінені даних користувача')
      }
    },
  })

  return (
    <FormBlock title='Персональні дані'>
      <form noValidate className={styles.profile__content_right_form} action={updateUserFormAction}>
        <div className={styles.profile__content_right_form_fields}>
          <CustomField
            idName='name'
            fullWidth
            label={updateUserState.errors.name ?? "Введіть ім'я"}
            error={!!updateUserState.errors.name}
            defaultValue={updateUserState.inputs.name ?? user.name}
            onChange={handleChange}
          />
          <CustomField
            idName='surname'
            fullWidth
            label={updateUserState.errors.surname ?? 'Введіть прізвище'}
            error={!!updateUserState.errors.surname}
            defaultValue={updateUserState.inputs.surname ?? user.surname}
            onChange={handleChange}
          />
        </div>
        <CustomField
          idName='email'
          fullWidth
          type='email'
          label={updateUserState.errors.email ?? 'Введіть E-mail'}
          error={!!updateUserState.errors.email}
          defaultValue={updateUserState.inputs.email ?? user.email}
          onChange={handleChange}
        />

        <div className={styles.profile__content_right_form_footer}>
          <CustomButton
            type='submit'
            disabled={isDisabled || updateUserPending}
            className={styles.profile__content_right_form_footer_button}
          >
            Змінити
          </CustomButton>
        </div>
      </form>
    </FormBlock>
  )
}
