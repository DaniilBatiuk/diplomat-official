import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { LINKS } from '@/utils/config/links'

import { createProduct, updateProduct } from '@/utils/lib/actions/product'

import { convertData } from '../helpers/convert-data'

import { CreateProduct, productScheme } from '@/utils/validators/product-validator'

interface productDataUpdateProps {
  allCategories: IBaseCategory[]
  productDataUpdate?: IProductUpdate
}

export const useCreateForm = ({ productDataUpdate, allCategories }: productDataUpdateProps) => {
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
  }
}
