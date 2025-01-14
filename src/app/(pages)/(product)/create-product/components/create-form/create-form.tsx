'use client'

import { TextField } from '@mui/material'
import { useState } from 'react'

import { ICONS } from '@/utils/config/icons'

import { Photo } from '../photo/photo'

import styles from './../../create-product.module.scss'
import { CreateCategoryModal } from './components/create-category-modal/create-category-modal'
import { CreateSubcategoryModal } from './components/create-subcategory-modal/create-subcategory-modal'
import { CustomField, CustomSelect, FormBlock, useCategories } from '@/components'

export const CreateForm: React.FC = () => {
  const [photos, setPhotos] = useState<{ id: string; url: string }[]>([])

  const [createCategoryModalActive, setCreateCategoryModalActive] = useState(false)
  const [createSubcategoryModalActive, setCreateSubcategoryModalActive] = useState(false)

  const categories = useCategories()
  console.log('categories', categories)
  return (
    <>
      <form noValidate>
        <FormBlock title='Основні поля'>
          <div className={styles.create__form_block}>
            <div className={styles.create__form_block_left}>
              <CustomField label='Введіть назву товару' fullWidth />
              <TextField label='Введіть опис' multiline rows={4} />
            </div>
            <div className={styles.create__form_block_right}>
              <CustomField label='Введіть ціну товару' />
              <CustomField label='Введіть знижку товару' fullWidth type='number' />
              <CustomField label='Введіть кількість одиниць товару' fullWidth type='number' />
            </div>
          </div>
        </FormBlock>
        <FormBlock title='Поля категорії'>
          <div className={styles.create__form_block_2}>
            <div className={styles.create__form_block_select}>
              <CustomSelect
                label='Виберіть категорію'
                fullWidth
                values={['Київ', 'Львів', 'Одеса']}
              />
              <p>
                Немає необхійдої категорії?{' '}
                <span onClick={() => setCreateCategoryModalActive(true)}>Створити</span>.
              </p>
            </div>
            <div className={styles.create__form_block_select}>
              <CustomSelect
                label='Виберіть підкатегорію'
                fullWidth
                values={['Київ', 'Львів', 'Одеса']}
              />
              <p>
                Немає необхійдої категорії?{' '}
                <span onClick={() => setCreateSubcategoryModalActive(true)}>Створити</span>.
              </p>
            </div>
          </div>
        </FormBlock>
        <FormBlock title='Поля характеристики' className={styles.create__form_block_3_row_gap}>
          <div className={styles.create__form_block_3}>
            <div className={styles.create__form_block_3_inputs}>
              <CustomField label='Введіть властивість' fullWidth />
              <CustomField label='Введіть значення' fullWidth />
            </div>
            <button type='button'>{ICONS.bigMinus()}</button>
          </div>
          <div className={styles.create__form_block_3}>
            <div className={styles.create__form_block_3_inputs}>
              <CustomField label='Введіть властивість' fullWidth />
              <CustomField label='Введіть значення' fullWidth />
            </div>
            <button type='button'>{ICONS.bigMinus()}</button>
          </div>
          <div className={styles.create__form_block_3}>
            <div className={styles.create__form_block_3_inputs}>
              <CustomField label='Введіть властивість' fullWidth />
              <CustomField label='Введіть значення' fullWidth />
            </div>
            <button type='button'>{ICONS.bigMinus()}</button>
          </div>
        </FormBlock>
        <Photo photos={photos} setPhotos={setPhotos} />
      </form>
      <CreateCategoryModal
        modalActive={createCategoryModalActive}
        setModalActive={setCreateCategoryModalActive}
      />
      <CreateSubcategoryModal
        modalActive={createSubcategoryModalActive}
        setModalActive={setCreateSubcategoryModalActive}
      />
    </>
  )
}
