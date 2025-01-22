type IProductDto = {
  id: string
  name: string
  description: string
  price: number
  count: number
  imageUrls: string[]
  status: $Enums.Status
  discountPercent: number | null
  subcategoryId: string
  createdAt: Date
}

type ICartDto = {
  id: string
  token: string
  totalPrice: number
  userId: string | null
  items: ICartItemDto[]
}

type ICartItemDto = {
  id: string
  quantity: number
  productId: string
  cartId: string
  createdAt: Date
  product: IProductDto
}

type IProductEntity = Omit<IProductDto, 'createdAt'>
type IProductCreate = {
  properties: {
    name: string
    value: string
  }[]
} & Omit<IProductDto, 'createdAt' | 'status' | 'id'>

type IProductUpdate = {
  properties: {
    name: string
    value: string
  }[]
} & Omit<IProductDto, 'createdAt' | 'status'>

type IProductWithProperties = IProductDto & {
  properties: {
    name: string
    value: string
  }[]
}

type IPropertyDto = {
  id: string
  name: string
  value: string
  productId: string
  subcategoryId: string
}

type IPropertyEntity = Omit<IPropertyDto, 'subcategoryId' | 'productId'>
type IPropertyCreate = Omit<IPropertyDto, 'id'>

type ICommentDto = {
  id: string
  comment: string
  title: string
  starCount: number
  recommend: boolean | null
  createdAt: Date
}

type ICommentAndUser = {
  user: IUserBase
} & ICommentDto

type IProductOne = IProductEntity & {
  properties: IPropertyEntity[]
  comments: ICommentAndUser[]
}

type ICategoryDto = {
  id: string
  name: string
}

type ICategory = ICategoryDto & {
  subcategories: {
    products: { id: string; name: string }[]
    id: string
    name: string
    properties: { id: string; name: string }[]
  }[]
}

type Role = 'User' | 'Manager' | 'Admin'

type ISearch = {
  id: string
  name: string
}

type ISearchData = {
  categories: ISearch[]
  subcategories: {
    categoryName: string
    id: string
    name: string
  }[]
  products: ISearch[]
}

// Types for api Nova Poshta And Ukr Poshta

type Address = {
  Present: string
  DeliveryCity: string
}

type Department = {
  Description: string
}

type NovaPoshtaCity = {
  data: { Addresses: Address[]; TotalCount: number }[]
  errors: string[]
}
type NovaPoshtaDepartment = {
  data: Department[]
  errors: string[]
}

type AddressUrk = {
  city_doc_id: string
  city_name: string
}
type DepartmentUkr = {
  name: string
  warehouse_doc_id: string
}

type UkrPoshtaCity = {
  data: { cities: AddressUrk[] }
}

type UkrPoshtaDepartment = {
  data: { warehouses: DepartmentUkr[] }
}
