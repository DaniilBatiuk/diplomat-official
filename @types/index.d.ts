types
type IProduct = {
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

type IProductBase = Omit<IProduct, 'createdAt'>
type IProductCreate = {
  properties: {
    name: string
    value: string
  }[]
} & Omit<IProduct, 'createdAt' | 'status' | 'id'>
type IProductUpdate = {
  properties: {
    name: string
    value: string
  }[]
} & Omit<IProduct, 'createdAt' | 'status'>

type IProperty = {
  id: string
  name: string
  value: string
  productId: string
  subcategoryId: string
}

type IPropertyBase = Omit<IProperty, 'subcategoryId' | 'productId'>
type IPropertyCreate = Omit<IProperty, 'id'>

type IComment = {
  id: string
  comment: string
  title: string
  starCount: number
  recommend: boolean | null
  createdAt: Date
}

type ICommentBase = Omit<IComment, 'subcategoryId' | 'productId'>

type IUser = {
  id: string
  name: string
  surname: string
  email: string
  passwordHash: string
  address: string | null
  phone: string | null
  role: $Enums.UserRole
  provider: string | null
  providerId: string | null
  createdAt: Date
}

type IUserBase = Omit<IUser, 'provider' | 'providerId' | 'createdAt'>

type ICategory = {
  id: string
  name: string
}

type ISubcategory = {
  id: string
  name: string
}

// Combined types
type ICommentAndUser = {
  user: IUserBase
} & ICommentBase

type IProductOne = IProductBase & {
  properties: IPropertyBase[]
  comments: ICommentAndUser[]
}

type IBaseCategory = ICategory & {
  subcategories: { products: { id: string; name: string }[]; id: string; name: string }[]
}

///////////////////////////

type Category = {
  id: string
  name: string
}

type Role = 'User' | 'Manager' | 'Admin'

type Address = {
  Present: string
  AddressDeliveryAllowed: boolean
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
