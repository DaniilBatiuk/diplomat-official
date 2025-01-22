import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { SubmitHandler, UseFieldArrayAppend } from 'react-hook-form'
import { toast } from 'react-toastify'

import { LINKS } from '@/utils/config/links'

import { createProduct, updateProduct } from '@/utils/lib/actions/product'

import { convertData } from '../helpers/convert-data'

import { CreateProduct } from '@/utils/validators/product-validator'

interface productDataUpdateProps {
  allCategories: ICategory[]
  productDataUpdate?: IProductUpdate
  propertyAppend: UseFieldArrayAppend<CreateProduct>
  reset: () => void
}

export const useCreateForm = ({
  productDataUpdate,
  allCategories,
  propertyAppend,
  reset,
}: productDataUpdateProps) => {
  const router = useRouter()

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

  useEffect(() => {
    if (!productDataUpdate) {
      for (const data of allCategories
        .find(category => category.id === selectCategoryId)
        ?.subcategories.find(subcategory => subcategory.id === selectSubcategoryId)?.properties ??
        []) {
        propertyAppend({
          name: data.name,
          value: '',
        })
      }
    }
  }, [selectSubcategoryId])

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

  return {
    onSubmit,
    setSelectCategoryId,
    setSelectSubcategoryId,
    selectCategoryId,
    selectSubcategoryId,
    photos,
    setPhotos,
    isPending,
  }
}
