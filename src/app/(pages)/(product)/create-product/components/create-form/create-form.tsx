'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'

import { Photo } from '../photo/photo'

import { CategoriesFields } from './components/categories-fields/categories-fields'
import { CreateCategoryModal } from './components/create-category-modal/create-category-modal'
import { CreateSubcategoryModal } from './components/create-subcategory-modal/create-subcategory-modal'
import { MainFields } from './components/main-fields/main-fields'
import { PropertiesFields } from './components/properties-fields/properties-fields'
import { useCreateForm } from './hooks/use-create-form'
import { CustomButton } from '@/components'
import { CreateProduct, productScheme } from '@/utils/validators/product-validator'

interface CreateFormProps {
  allCategories: IBaseCategory[]
  productDataUpdate?: IProductUpdate
}

export const CreateForm: React.FC<CreateFormProps> = ({
  allCategories,
  productDataUpdate,
}: CreateFormProps) => {
  const [createCategoryModalActive, setCreateCategoryModalActive] = useState(false)
  const [createSubcategoryModalActive, setCreateSubcategoryModalActive] = useState(false)

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

  const {
    onSubmit,
    setSelectCategoryId,
    setSelectSubcategoryId,
    selectCategoryId,
    selectSubcategoryId,
    photos,
    setPhotos,
    isPending,
  } = useCreateForm({
    allCategories,
    productDataUpdate,
    propertyAppend,
    reset,
  })

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <MainFields register={register} errors={errors} />
        <CategoriesFields
          setCreateCategoryModalActive={setCreateCategoryModalActive}
          setCreateSubcategoryModalActive={setCreateSubcategoryModalActive}
          setSelectCategoryId={setSelectCategoryId}
          setSelectSubcategoryId={setSelectSubcategoryId}
          allCategories={allCategories}
          selectCategoryId={selectCategoryId}
          selectSubcategoryId={selectSubcategoryId}
        />
        <PropertiesFields
          errors={errors}
          register={register}
          propertyFields={propertyFields}
          propertyAppend={propertyAppend}
          propertyRemove={propertyRemove}
        />
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
