import { toast } from 'react-toastify'

import styles from './../../../../create-product.module.scss'
import { createCategory } from './actions'
import { CustomButton, CustomField, Modal } from '@/components'
import { useFormWithSubmit } from '@/utils/lib/middleware'
import { CreateCategory, categoryScheme } from '@/utils/validators/category-validator'

interface CreateCommentModalProps {
  modalActive: boolean
  setModalActive: (value: boolean) => void
}

export const CreateCategoryModal: React.FC<CreateCommentModalProps> = ({
  modalActive,
  setModalActive,
}: CreateCommentModalProps) => {
  const {
    register,
    onSubmit,
    formState: { errors },
    isPending,
  } = useFormWithSubmit<CreateCategory>({
    validationSchema: categoryScheme,
    mutationFn: createCategory,
    defaultValues: {
      name: '',
    },
    onSuccess: () => {
      toast.success('Категорія створена успішно')
      setModalActive(false)
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
        <form onSubmit={onSubmit}>
          <div className={styles.create_category_fields}>
            <CustomField
              {...register(`name`)}
              label={!!errors.name?.message ? errors.name?.message : 'Введіть назву катогорії'}
              error={!!errors.name?.message}
            />
          </div>
          <Modal.Footer>
            <CustomButton type='submit' fullWidth disabled={isPending}>
              Створити
            </CustomButton>
          </Modal.Footer>
        </form>
      </Modal.Main>
    </Modal>
  )
}
