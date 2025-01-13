import styles from './../../../../profile.module.scss'
import { CustomButton, CustomField, Modal } from '@/components'

interface ChangePasswordModalProps {
  modalActive: boolean
  setModalActive: (value: boolean) => void
}

export const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({
  modalActive,
  setModalActive,
}: ChangePasswordModalProps) => {
  return (
    <Modal active={modalActive} setActive={setModalActive} maxDivWidth='440px'>
      <Modal.Title>Змінити пароль</Modal.Title>
      <Modal.SubTitle>
        Зміна пароля призведе до виходу з усіх інших пристроїв де ви авторизовані
      </Modal.SubTitle>
      <Modal.Main>
        <form noValidate>
          <div className={styles.profile__change_password_fields}>
            <CustomField label='Введіть старий пароль' fullWidth type='password' />
            <CustomField label='Введіть новий пароль' fullWidth type='password' />
            <CustomField label='Підтвердіть новий пароль' fullWidth type='password' />
          </div>
          <Modal.Footer>
            <CustomButton type='submit' fullWidth>
              Змінити
            </CustomButton>
          </Modal.Footer>
        </form>
      </Modal.Main>
    </Modal>
  )
}
