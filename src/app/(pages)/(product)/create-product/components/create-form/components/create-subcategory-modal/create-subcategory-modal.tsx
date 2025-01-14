import { useState } from 'react'

import { CustomButton, Modal } from '@/components'

interface CreateCommentModalProps {
  modalActive: boolean
  setModalActive: (value: boolean) => void
}

export const CreateSubcategoryModal: React.FC<CreateCommentModalProps> = ({
  modalActive,
  setModalActive,
}: CreateCommentModalProps) => {
  const [checked, setChecked] = useState(false)

  const handleChange = () => {
    setChecked(prev => !prev)
  }

  return (
    <Modal active={modalActive} setActive={setModalActive} maxDivWidth='440px'>
      <Modal.Title>Створити категорію</Modal.Title>
      <Modal.SubTitle>
        Створення підкатегорії ще не значить що користувач зможе її використовувати. Для цього
        підкатегорія моє мати хоча б 1 товар.
      </Modal.SubTitle>
      <Modal.Main>
        <form noValidate>
          {/* <div className={styles.create_category_fields}>
            <CustomSelect
              label='Виберіть категорію'
              fullWidth
              values={['Київ', 'Львів', 'Одеса']}
            />
            <CustomField label='Введіть назву підкатогорії' />
          </div> */}
          <Modal.Footer>
            <CustomButton type='submit' fullWidth>
              Створити
            </CustomButton>
          </Modal.Footer>
        </form>
      </Modal.Main>
    </Modal>
  )
}
