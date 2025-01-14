'use client'

import { useState } from 'react'

import { Photo } from '../photo/photo'

import styles from './../../create-product.module.scss'
import { CreateCategoryModal } from './components/create-category-modal/create-category-modal'
import { CreateSubcategoryModal } from './components/create-subcategory-modal/create-subcategory-modal'
import { CustomButton, CustomSelect, FormBlock } from '@/components'

interface CreateFormProps {
  allCategories: IBaseCategory[]
}

export const CreateForm: React.FC<CreateFormProps> = ({ allCategories }: CreateFormProps) => {
  const [photos, setPhotos] = useState<{ id: string; url: string }[]>([])

  const [createCategoryModalActive, setCreateCategoryModalActive] = useState(false)
  const [createSubcategoryModalActive, setCreateSubcategoryModalActive] = useState(false)

  const [selectCategoryName, setSelectCategoryName] = useState<string>('')
  // const [selectSubCategory, setSelectSubCategory] = useState<string>('')

  // const {
  //   control,
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<CreateProduct>({
  //   defaultValues: {
  //     name: '',
  //     description: '',
  //     price: 0,
  //     count: 1,
  //     properties: [],
  //     discountPercent: undefined,
  //   },
  //   mode: 'onSubmit',
  //   resolver: zodResolver(productScheme),
  // })

  // const {
  //   fields: propertyFields,
  //   append: propertyAppend,
  //   remove: propertyRemove,
  // } = useFieldArray({ control, name: `properties` })

  // const onSubmit: SubmitHandler<CreateProduct> = async data => {
  //   if (!!!selectCategoryName.length) {
  //     toast.error('Категорія має бути вибрана.')
  //     return
  //   }
  //   if (!!!selectSubCategory.length) {
  //     toast.error('Підкатегорія має бути вибрана.')
  //     return
  //   }
  //   if (!!!photos.length) {
  //     toast.error('Має бути як мінімум 1 фото.')
  //     return
  //   }
  //   const res: IProductCreate = {
  //     ...data,
  //     name: data.name.trim().charAt(0).toUpperCase() + data.name.trim().slice(1),
  //     description:
  //       data.description.trim().charAt(0).toUpperCase() + data.description.trim().slice(1),
  //     imageUrls: photos.map(photo => photo.url),
  //     count: +data.count,
  //     price: +data.price,
  //     subcategoryId:
  //       allCategories
  //         .find(category => category.name === selectCategoryName)
  //         ?.subcategories.find(subcategory => subcategory.name === selectSubCategory)?.id ?? '',
  //     discountPercent: data.discountPercent ? +data.discountPercent : null,
  //     properties: data.properties
  //       .filter(el => el.value !== '')
  //       .map(el => ({
  //         name: el.name.trim().charAt(0).toUpperCase() + el.name.trim().slice(1),
  //         value: el.value.trim().charAt(0).toUpperCase() + el.value.trim().slice(1),
  //       })),
  //   }
  //   console.log('res', res)
  //   mutate(res)
  // }

  // const { isPending, mutate } = useMutation({
  //   mutationFn: createProduct,
  //   onSuccess: () => {
  //     toast.success('Товар був успішно створений.')
  //     // queryClient.invalidateQueries({
  //     //   queryKey: ["products"],
  //     // });
  //     // router.push(`/admin`);
  //   },
  //   onError: error => {
  //     toast.error(error.message)
  //   },
  // })

  return (
    <>
      <form>
        {/* <FormBlock title='Основні поля'>
          <div className={styles.create__form_block}>
            <div className={styles.create__form_block_left}>
              <CustomField
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
              <CustomField
                type='number'
                {...register(`price`)}
                error={Boolean(errors.price?.message)}
                label={errors.price?.message || 'Введіть ціну товару'}
              />
              <CustomField
                fullWidth
                type='number'
                {...register(`discountPercent`)}
                error={Boolean(errors.discountPercent?.message)}
                label={errors.discountPercent?.message || 'Введіть знижку товару'}
              />
              <CustomField
                fullWidth
                type='number'
                {...register(`count`)}
                error={Boolean(errors.count?.message)}
                label={errors.count?.message || 'Введіть кількість одиниць товару'}
              />
            </div>
          </div>
        </FormBlock> */}
        <FormBlock title='Поля категорії'>
          <div className={styles.create__form_block_2}>
            <div className={styles.create__form_block_select}>
              <CustomSelect
                fullWidth
                setSelect={setSelectCategoryName}
                select={selectCategoryName}
                values={allCategories.map(category => category.name)}
                label={'Виберіть категорію'}
              />
              <p>
                Немає необхійдої категорії?{' '}
                <span onClick={() => setCreateCategoryModalActive(true)}>Створити</span>.
              </p>
            </div>
            <div className={styles.create__form_block_select}>
              {/* <CustomSelect
                fullWidth
                disabled={!selectCategoryName.length}
                setSelect={setSelectSubCategory}
                select={selectSubCategory}
                values={
                  allCategories
                    .find(category => category.name === selectCategoryName)
                    ?.subcategories.map(category => category.name) ?? []
                }
                label={'Виберіть категорію'}
              /> */}
              <p>
                Немає необхійдої категорії?{' '}
                <span onClick={() => setCreateSubcategoryModalActive(true)}>Створити</span>.
              </p>
            </div>
          </div>
        </FormBlock>
        {/* <FormBlock title='Поля характеристики' className={styles.create__form_block_3_row_gap}>
          {propertyFields.map((field, index) => (
            <div className={styles.create__form_block_3} key={field.id}>
              <div className={styles.create__form_block_3_inputs}>
                <CustomField
                  fullWidth
                  {...register(`properties.${index}.name`)}
                  error={Boolean(errors?.properties && errors?.properties[index]?.name?.message)}
                  label={
                    (errors?.properties && errors?.properties[index]?.name?.message) ||
                    'Введіть властивість'
                  }
                />
                <CustomField
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
        </FormBlock> */}
        <Photo photos={photos} setPhotos={setPhotos} />
        <CustomButton type='submit'>Створити</CustomButton>
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
