'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { MenuItem, TextField } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { ICONS } from '@/utils/config/icons'
import { LINKS } from '@/utils/config/links'

import { createProduct, updateProduct } from '@/utils/lib/actions/product'

import { Photo } from '../photo/photo'

import styles from './../../create-product.module.scss'
import { CreateCategoryModal } from './components/create-category-modal/create-category-modal'
import { CreateSubcategoryModal } from './components/create-subcategory-modal/create-subcategory-modal'
import { convertData } from './helpers/convert-data'
import { CustomButton, CustomSelect, FormBlock } from '@/components'
import { CreateProduct, productScheme } from '@/utils/validators/product-validator'

interface CreateFormProps {
  allCategories: IBaseCategory[]
  productDataUpdate?: IProductUpdate
}

export const CreateForm: React.FC<CreateFormProps> = ({
  allCategories,
  productDataUpdate,
}: CreateFormProps) => {
  const router = useRouter()
  const [createCategoryModalActive, setCreateCategoryModalActive] = useState(false)
  const [createSubcategoryModalActive, setCreateSubcategoryModalActive] = useState(false)

  const [selectCategoryId, setSelectCategoryId] = useState(() =>
    productDataUpdate
      ? (allCategories.find(category =>
          category.subcategories.find(
            subcategory => subcategory.id === productDataUpdate.subcategoryId,
          ),
        )?.id ?? '')
      : '',
  )
  const [selectSubcategoryId, setSelectSubcategoryId] = useState(
    () => productDataUpdate?.subcategoryId ?? '',
  )
  const [photos, setPhotos] = useState<{ id: string; url: string }[]>(
    () => productDataUpdate?.imageUrls.map(image => ({ id: image, url: image })) ?? [],
  )

  const isFirstRender = useRef(true)
  useEffect(() => {
    if (!isFirstRender.current) {
      setSelectSubcategoryId('')
    }
    isFirstRender.current = false
  }, [selectCategoryId])

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateProduct>({
    defaultValues: productDataUpdate
      ? {
          ...productDataUpdate,
          price: productDataUpdate.price.toString(),
          count: productDataUpdate.count.toString(),
          discountPercent: productDataUpdate.discountPercent
            ? productDataUpdate.discountPercent.toString()
            : undefined,
        }
      : {
          name: '',
          description: '',
          price: '0',
          count: '1',
          properties: [],
          discountPercent: undefined,
        },
    mode: 'onSubmit',
    resolver: zodResolver(productScheme),
  })

  const {
    fields: propertyFields,
    append: propertyAppend,
    remove: propertyRemove,
  } = useFieldArray({ control, name: `properties` })

  const onSubmit: SubmitHandler<CreateProduct> = async data => {
    const validations = [
      { condition: !selectCategoryId.length, message: 'Категорія має бути вибрана.' },
      { condition: !selectSubcategoryId.length, message: 'Підкатегорія має бути вибрана.' },
      { condition: !photos.length, message: 'Має бути як мінімум 1 фото.' },
    ]

    for (const { condition, message } of validations) {
      if (condition) {
        toast.error(message)
        return
      }
    }

    const res: IProductCreate = convertData(data, selectSubcategoryId, photos)
    mutate(res)
  }

  const { isPending, mutate } = useMutation({
    mutationFn: productDataUpdate
      ? (product: IProductCreate) => updateProduct(product, productDataUpdate.id)
      : createProduct,
    onSuccess: () => {
      if (!productDataUpdate) {
        reset()
        setPhotos([])
        setSelectCategoryId('')
        setSelectSubcategoryId('')
        toast.success('Товар був успішно створений')
      } else {
        toast.success('Товар був успішно змінений')
        router.push(LINKS.Admin)
      }
    },
    onError: error => {
      toast.error(error.message)
    },
  })

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <Photo photos={photos} setPhotos={setPhotos} />
        {productDataUpdate ? (
          <CustomButton type='submit' disabled={isPending}>
            {isPending ? 'Змінення...' : 'Змінити'}
          </CustomButton>
        ) : (
          <CustomButton type='submit' disabled={isPending}>
            {isPending ? 'Створення...' : 'Створити'}
          </CustomButton>
        )}
      </form>
      <CreateCategoryModal
        modalActive={createCategoryModalActive}
        setModalActive={setCreateCategoryModalActive}
      />
      <CreateSubcategoryModal
        allCategories={allCategories}
        modalActive={createSubcategoryModalActive}
        setModalActive={setCreateSubcategoryModalActive}
      />
    </>
  )
}
