'use client'

import { TextField } from '@mui/material'
import { useState } from 'react'

import { ICONS } from '@/utils/config/icons'

import { Photo } from './components/photo/photo'
import styles from './create-product.module.scss'
import { CustomField, CustomSelect, FormBlock, Title } from '@/components'

export default function CreateProduct() {
  const [photos, setPhotos] = useState<{ id: string; url: string }[]>([])

  return (
    <div className={styles.create}>
      <section className={styles.create__container}>
        <Title isH1 className={styles.create__title}>
          Створення товару
        </Title>
        <form noValidate>
          <FormBlock title='Основні поля'>
            <div className={styles.create__form_block}>
              <div className={styles.create__form_block_left}>
                <CustomField label='Введіть назву товару' fullWidth />
                <TextField label='Введіть опис' multiline rows={6} />
              </div>
              <div className={styles.create__form_block_right}>
                <CustomField label='Введіть ціну товару' fullWidth />
                <CustomField label='Введіть знижку товару' fullWidth type='number' />
                <CustomField label='Введіть кількість одиниць товару' fullWidth type='number' />
                <CustomField label='Введіть постачальника товару' fullWidth />
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
                  Немає необхійдої категорії? <span>Створити</span>.
                </p>
              </div>
              <div className={styles.create__form_block_select}>
                <CustomSelect
                  label='Виберіть підкатегорію'
                  fullWidth
                  values={['Київ', 'Львів', 'Одеса']}
                />
                <p>
                  Немає необхійдої категорії? <span>Створити</span>.
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
      </section>
    </div>
  )
}
