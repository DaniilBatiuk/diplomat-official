import { CreateProduct } from '@/utils/validators/product-validator'

export const convertData = (
  product: CreateProduct,
  selectSubcategoryId: string,
  photos: {
    id: string
    url: string
  }[],
) => {
  const productCreate: IProductCreate = {
    name: product.name.trim().charAt(0).toUpperCase() + product.name.trim().slice(1),
    description:
      product.description.trim().charAt(0).toUpperCase() + product.description.trim().slice(1),
    imageUrls: photos.map(photo => photo.url),
    count: +product.count,
    price: +product.price,
    subcategoryId: selectSubcategoryId,
    discountPercent: product.discountPercent ? +product.discountPercent : null,
    properties: product.properties
      .filter(el => el.value !== '')
      .map(el => ({
        name: el.name.trim().charAt(0).toUpperCase() + el.name.trim().slice(1),
        value: el.value.trim().charAt(0).toUpperCase() + el.value.trim().slice(1),
      })),
  }

  return productCreate
}
