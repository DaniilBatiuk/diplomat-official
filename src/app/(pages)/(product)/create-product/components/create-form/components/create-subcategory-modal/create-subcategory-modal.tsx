import { MenuItem } from '@mui/material'
import { useActionState } from 'react'
import { toast } from 'react-toastify'

import { initialState } from '@/utils/constants'

import { useFormResultProcess } from '@/utils/hooks/useFormResultProcess/useFormResultProcess'

import { createSubcategory } from '@/utils/lib/actions/subcategory'

import styles from './../../../../create-product.module.scss'
import { CustomButton, CustomField, CustomSelect, Modal } from '@/components'
import { ActionState } from '@/utils/lib/middleware'

interface CreateCommentModalProps {
  modalActive: boolean
  setModalActive: (value: boolean) => void
  allCategories: ICategory[]
}

export const CreateSubcategoryModal: React.FC<CreateCommentModalProps> = ({
  modalActive,
  setModalActive,
  allCategories,
}: CreateCommentModalProps) => {
  const [createSubcategoryState, createSubcategoryFormAction, createSubcategoryPending] =
    useActionState<ActionState, FormData>(createSubcategory, initialState)

  useFormResultProcess({
    state: createSubcategoryState,
    isPending: createSubcategoryPending,
    onSuccess: () => {
      toast.success('Підкатегорія успішно створена')
      setModalActive(false)
    },
    onError: () => {
      toast.error('Виникла помилка при створенні підкатегорії')
    },
  })

  return (
    <Modal active={modalActive} setActive={setModalActive} maxDivWidth='440px'>
      <Modal.Title>Створити категорію</Modal.Title>
      <Modal.SubTitle>
        Створення підкатегорії ще не значить що користувач зможе її використовувати. Для цього
        підкатегорія моє мати хоча б 1 товар.
      </Modal.SubTitle>
      <Modal.Main>
        <form action={createSubcategoryFormAction}>
          <div className={styles.create_category_fields}>
            <CustomSelect
              idName='categoryId'
              label='Виберіть категорію'
              fullWidth
              error={createSubcategoryState.errors.categoryId}
            >
              {allCategories.map(category => (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </CustomSelect>
            <CustomField
              idName='name'
              defaultValue={createSubcategoryState.inputs.name}
              label={createSubcategoryState.errors.name ?? 'Введіть назву підкатогорії'}
              error={!!createSubcategoryState.errors.name}
            />
          </div>
          <Modal.Footer>
            <CustomButton type='submit' fullWidth disabled={createSubcategoryPending}>
              {createSubcategoryPending ? 'Створення...' : 'Створити'}
            </CustomButton>
          </Modal.Footer>
        </form>
      </Modal.Main>
    </Modal>
  )
}
