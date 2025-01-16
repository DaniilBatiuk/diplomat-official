'use client'

import { useState } from 'react'

import { Photo } from '../photo/photo'

import { CategoriesFields } from './components/categories-fields/categories-fields'
import { CreateCategoryModal } from './components/create-category-modal/create-category-modal'
import { CreateSubcategoryModal } from './components/create-subcategory-modal/create-subcategory-modal'
import { MainFields } from './components/main-fields/main-fields'
import { PropertiesFields } from './components/properties-fields/properties-fields'
import { useCreateForm } from './hooks/use-create-form'
import { CustomButton } from '@/components'

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
    handleSubmit,
    onSubmit,
    errors,
    register,
    setSelectCategoryId,
    setSelectSubcategoryId,
    selectCategoryId,
    selectSubcategoryId,
    propertyFields,
    propertyAppend,
    propertyRemove,
    photos,
    setPhotos,
    isPending,
  } = useCreateForm({
    allCategories,
    productDataUpdate,
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
