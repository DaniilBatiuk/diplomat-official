import { Checkbox, Rating, TextField } from '@mui/material'
import { useState } from 'react'

import styles from '././../../../../product.module.scss'
import { CustomButton, CustomField, Modal } from '@/components'

interface CreateCommentModalProps {
  modalActive: boolean
  setModalActive: (value: boolean) => void
}

export const CreateCommentModal: React.FC<CreateCommentModalProps> = ({
  modalActive,
  setModalActive,
}: CreateCommentModalProps) => {
  const [checked, setChecked] = useState(false)

  const handleChange = () => {
    setChecked(prev => !prev)
  }

  return (
    <Modal active={modalActive} setActive={setModalActive} maxDivWidth='440px'>
      <form noValidate className={styles.comments__form}>
        <div className={styles.comments__form_fields}>
          <div className={styles.comments__form_rating}>
            <p>Виберіть рейтинг:</p>
            <Rating defaultValue={1} max={5} size='medium' />
          </div>
          <CustomField label='Введіть заголовок відгуку' fullWidth type='password' />
          <TextField label='Введіть відгук' multiline rows={6} />
          <div className={styles.comments__form_checkbox} onClick={handleChange}>
            <Checkbox
              checked={checked}
              name={'Я рекомендую цей товар'}
              sx={{
                color: '#b5b5b5',
              }}
            />
            <p>Я рекомендую цей товар</p>
          </div>
        </div>
        <Modal.Footer>
          <CustomButton type='submit'>Опублікувати</CustomButton>
        </Modal.Footer>
      </form>
    </Modal>
  )
}
