import { MenuItem } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'

import styles from './../../../../create-product.module.scss'
import { CustomSelect, FormBlock } from '@/components'

interface CategoriesFieldsProps {
  allCategories: IBaseCategory[]
  selectCategoryId: string
  selectSubcategoryId: string
  setSelectCategoryId: Dispatch<SetStateAction<string>>
  setCreateCategoryModalActive: Dispatch<SetStateAction<boolean>>
  setSelectSubcategoryId: Dispatch<SetStateAction<string>>
  setCreateSubcategoryModalActive: Dispatch<SetStateAction<boolean>>
}

export const CategoriesFields: React.FC<CategoriesFieldsProps> = ({
  allCategories,
  selectCategoryId,
  setSelectCategoryId,
  setCreateCategoryModalActive,
  selectSubcategoryId,
  setSelectSubcategoryId,
  setCreateSubcategoryModalActive,
}: CategoriesFieldsProps) => {
  return (
    <FormBlock title='Поля категорії'>
      <div className={styles.create__form_block_2}>
        <div className={styles.create__form_block_select}>
          <CustomSelect
            idName='categoryId'
            label='Виберіть категорію'
            fullWidth
            selectControl={selectCategoryId}
            setSelectControl={setSelectCategoryId}
          >
            {allCategories.map(category => (
              <MenuItem key={category.id} value={category.id}>
                {category.name}
              </MenuItem>
            ))}
          </CustomSelect>
          <p>
            Немає необхійдої категорії?{' '}
            <span onClick={() => setCreateCategoryModalActive(true)}>Створити</span>.
          </p>
        </div>
        <div className={styles.create__form_block_select}>
          <CustomSelect
            idName='subcategoryId'
            label='Виберіть підкатегорію'
            fullWidth
            selectControl={selectSubcategoryId}
            setSelectControl={setSelectSubcategoryId}
          >
            {allCategories
              .find(category => category.id === selectCategoryId)
              ?.subcategories.map(subcategory => (
                <MenuItem key={subcategory.id} value={subcategory.id}>
                  {subcategory.name}
                </MenuItem>
              ))}
          </CustomSelect>
          <p>
            Немає необхійдої підкатегорії?{' '}
            <span onClick={() => setCreateSubcategoryModalActive(true)}>Створити</span>.
          </p>
        </div>
      </div>
    </FormBlock>
  )
}
