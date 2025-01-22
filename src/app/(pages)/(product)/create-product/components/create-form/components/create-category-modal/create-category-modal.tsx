import { useActionState } from 'react'
import { toast } from 'react-toastify'

import { initialState } from '@/utils/config/initial-state'

import { useFormResultProcess } from '@/utils/hooks/useFormResultProcess/useFormResultProcess'

import { createCategory } from '@/utils/lib/actions/category'

import styles from './../../../../create-product.module.scss'
import { CustomButton, CustomField, Modal } from '@/components'
import { ActionState } from '@/utils/lib/middleware'

interface CreateCommentModalProps {
  modalActive: boolean
  setModalActive: (value: boolean) => void
}

export const CreateCategoryModal: React.FC<CreateCommentModalProps> = ({
  modalActive,
  setModalActive,
}: CreateCommentModalProps) => {
  const [createCategoryState, createCategoryFormAction, createCategoryPending] = useActionState<
    ActionState,
    FormData
  >(createCategory, initialState)

  useFormResultProcess({
    state: createCategoryState,
    isPending: createCategoryPending,
    onSuccess: () => {
      toast.success('Категорія успішно створена')
      setModalActive(false)
    },
    onError: () => {
      toast.error('Виникла помилка при створенні категорії')
    },
  })

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
              idName='name'
              defaultValue={createCategoryState.inputs.name}
              label={createCategoryState.errors.name ?? 'Введіть назву катогорії'}
              error={!!createCategoryState.errors.name}
            />
          </div>
          <Modal.Footer>
            <CustomButton type='submit' fullWidth disabled={createCategoryPending}>
              {createCategoryPending ? 'Створення...' : 'Створити'}
            </CustomButton>
          </Modal.Footer>
        </form>
      </Modal.Main>
    </Modal>
  )
}
