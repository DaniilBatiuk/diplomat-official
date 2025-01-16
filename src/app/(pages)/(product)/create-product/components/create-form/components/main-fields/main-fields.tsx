import { TextField } from '@mui/material'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

import styles from './../../../../create-product.module.scss'
import { FormBlock } from '@/components'
import { CreateProduct } from '@/utils/validators/product-validator'

interface MainFieldsProps {
  register: UseFormRegister<CreateProduct>
  errors: FieldErrors<CreateProduct>
}

export const MainFields: React.FC<MainFieldsProps> = ({ register, errors }: MainFieldsProps) => {
  return (
    <FormBlock title='Основні поля'>
      <div className={styles.create__form_block}>
        <div className={styles.create__form_block_left}>
          <TextField
            fullWidth
            {...register(`name`)}
            error={Boolean(errors.name?.message)}
            label={errors.name?.message || 'Введіть назву товару'}
          />
          <TextField
            multiline
            rows={4}
            {...register(`description`)}
            error={Boolean(errors.description?.message)}
            label={errors.description?.message || 'Введіть опис'}
          />
        </div>
        <div className={styles.create__form_block_right}>
          <TextField
            type='number'
            {...register(`price`)}
            error={Boolean(errors.price?.message)}
            label={errors.price?.message || 'Введіть ціну товару'}
          />
          <TextField
            fullWidth
            type='number'
            {...register(`discountPercent`)}
            error={Boolean(errors.discountPercent?.message)}
            label={errors.discountPercent?.message || 'Введіть знижку товару'}
          />
          <TextField
            fullWidth
            type='number'
            {...register(`count`)}
            error={Boolean(errors.count?.message)}
            label={errors.count?.message || 'Введіть кількість одиниць товару'}
          />
        </div>
      </div>
    </FormBlock>
  )
}
