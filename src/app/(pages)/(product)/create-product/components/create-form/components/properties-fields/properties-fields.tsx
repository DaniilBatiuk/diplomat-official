import { TextField } from '@mui/material'
import {
  FieldArrayWithId,
  FieldErrors,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFormRegister,
} from 'react-hook-form'

import { ICONS } from '@/utils/constants'

import styles from './../../../../create-product.module.scss'
import { CustomButton, FormBlock } from '@/components'
import { CreateProduct } from '@/utils/validators/product-validator'

interface PropertiesFieldsProps {
  register: UseFormRegister<CreateProduct>
  errors: FieldErrors<CreateProduct>
  propertyFields: FieldArrayWithId<CreateProduct>[]
  propertyAppend: UseFieldArrayAppend<CreateProduct>
  propertyRemove: UseFieldArrayRemove
}

export const PropertiesFields: React.FC<PropertiesFieldsProps> = ({
  register,
  errors,
  propertyFields,
  propertyAppend,
  propertyRemove,
}: PropertiesFieldsProps) => {
  return (
    <FormBlock title='Поля характеристики' className={styles.create__form_block_3_row_gap}>
      {propertyFields.map((field, index) => (
        <div className={styles.create__form_block_3} key={field.id}>
          <div className={styles.create__form_block_3_inputs}>
            <TextField
              fullWidth
              {...register(`properties.${index}.name`)}
              error={Boolean(errors?.properties && errors?.properties[index]?.name?.message)}
              label={
                (errors?.properties && errors?.properties[index]?.name?.message) ||
                'Введіть властивість'
              }
            />
            <TextField
              fullWidth
              {...register(`properties.${index}.value`)}
              error={Boolean(errors?.properties && errors?.properties[index]?.value?.message)}
              label={
                (errors?.properties && errors?.properties[index]?.value?.message) ||
                'Введіть значення'
              }
            />
          </div>
          <button type='button' onClick={() => propertyRemove(index)}>
            {ICONS.bigMinus()}
          </button>
        </div>
      ))}
      <CustomButton
        type='button'
        onClick={() =>
          propertyAppend({
            name: '',
            value: '',
          })
        }
      >
        Додати характеристику
      </CustomButton>
    </FormBlock>
  )
}
