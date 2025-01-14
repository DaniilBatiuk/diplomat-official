import { useActionState, useEffect } from 'react'
import { toast } from 'react-toastify'

import styles from './../../../../create-product.module.scss'
import { createCategory } from './actions'
import { CustomButton, CustomField, Modal } from '@/components'
import { ActionState } from '@/utils/lib/middleware'

interface CreateCommentModalProps {
  modalActive: boolean
  setModalActive: (value: boolean) => void
}

const initialState = {
  error: '',
  success: false,
}

export const CreateCategoryModal: React.FC<CreateCommentModalProps> = ({
  modalActive,
  setModalActive,
}: CreateCommentModalProps) => {
  const [createCategoryState, createCategoryFormAction, createCategoryPending] = useActionState<
    ActionState,
    FormData
  >(createCategory, initialState)

  useEffect(() => {
    if (!createCategoryPending && createCategoryState.success) {
      setModalActive(false)
      toast.success('Категорія успішно створена')
    }
  }, [createCategoryPending])

  return (
    <Modal active={modalActive} setActive={setModalActive} maxDivWidth='440px'>
      <Modal.Title>Створити категорію</Modal.Title>
      <Modal.SubTitle>
        Створення категорії ще не значить що користувач зможе її використовувати. Для цього
        категорія моє мати хоча б 1 товар.
      </Modal.SubTitle>
      <Modal.Main>
        <form action={createCategoryFormAction}>
          <div className={styles.create_category_fields}>
            <CustomField
              id='name'
              name='name'
              aria-label='name'
              defaultValue={createCategoryState?.inputs?.name}
              label={
                !!createCategoryState?.error ? createCategoryState.error : 'Введіть назву катогорії'
              }
              error={!!createCategoryState?.error}
            />
          </div>
          <Modal.Footer>
            <CustomButton
              type='submit'
              fullWidth
              disabled={createCategoryPending}
              formAction={createCategoryFormAction}
            >
              Створити
            </CustomButton>
          </Modal.Footer>
        </form>
      </Modal.Main>
    </Modal>
  )
}
