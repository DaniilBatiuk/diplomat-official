import { Checkbox, Rating, TextField } from '@mui/material'
import { useActionState, useState } from 'react'
import { toast } from 'react-toastify'

import { initialState } from '@/utils/config/initial-state'

import { useFormResultProcess } from '@/utils/hooks/useFormResultProcess/useFormResultProcess'

import { createComment } from '@/utils/lib/actions/comment'

import styles from '././../../../../product.module.scss'
import { CustomButton, CustomField, Modal } from '@/components'
import { ActionState } from '@/utils/lib/middleware'

interface CreateCommentModalProps {
  modalActive: boolean
  setModalActive: (value: boolean) => void
  productId: string
}

export const CreateCommentModal: React.FC<CreateCommentModalProps> = ({
  modalActive,
  setModalActive,
  productId,
}: CreateCommentModalProps) => {
  const [recommendChecked, setRecommendChecked] = useState(false)
  const [rating, setRating] = useState<number>(1)

  const [createCommentState, createCommentFormAction, createCommentPending] = useActionState<
    ActionState,
    FormData
  >(createComment, initialState)

  useFormResultProcess({
    state: createCommentState,
    isPending: createCommentPending,
    onSuccess: () => {
      toast.success('Комментар успішно створений')
      setModalActive(false)
    },
    onError: () => {
      toast.error('Виникла помилка при створенні комментаря')
    },
  })

  return (
    <Modal active={modalActive} setActive={setModalActive} maxDivWidth='440px'>
      <form noValidate className={styles.comments__form} action={createCommentFormAction}>
        <input type='hidden' name='productId' value={productId} />
        <input type='hidden' name='userId' value='cm5zobqpu000mot6wvlm18dzz' />
        <div className={styles.comments__form_fields}>
          <div className={styles.comments__form_rating}>
            <p>Виберіть рейтинг:</p>
            <Rating
              id='starCount'
              name='starCount'
              defaultValue={1}
              max={5}
              size='medium'
              value={rating}
              onChange={(event, newValue) => {
                setRating(newValue ?? 1)
              }}
            />
          </div>
          <CustomField
            fullWidth
            idName='title'
            defaultValue={createCommentState.inputs.title}
            label={createCommentState.errors.title ?? 'Введіть заголовок відгуку'}
            error={!!createCommentState.errors.title}
          />
          <TextField
            multiline
            rows={6}
            id='comment'
            name='comment'
            defaultValue={createCommentState.inputs.comment}
            label={createCommentState.errors.comment ?? 'Введіть відгук'}
            error={!!createCommentState.errors.comment}
          />
          <div
            className={styles.comments__form_checkbox}
            onClick={() => setRecommendChecked(prev => !prev)}
          >
            <Checkbox
              value={recommendChecked}
              checked={recommendChecked}
              id='recommend'
              name='recommend'
              sx={{
                color: '#b5b5b5',
              }}
            />
            <p>Я рекомендую цей товар</p>
          </div>
        </div>
        <Modal.Footer>
          <CustomButton type='submit' disabled={createCommentPending}>
            Опублікувати
          </CustomButton>
        </Modal.Footer>
      </form>
    </Modal>
  )
}
