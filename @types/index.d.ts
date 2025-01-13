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

type IProductBase = Omit<IProduct, 'createdAt' | 'subcategoryId' | 'status'>

type IProperty = {
  id: string
  name: string
  value: string
  productId: string
  subcategoryId: string
}

type IPropertyBase = Omit<IProperty, 'subcategoryId' | 'productId'>

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

// Combined types
type ICommentAndUser = {
  user: IUserBase
} & ICommentBase

type IProductOne = IProductBase & {
  properties: IPropertyBase[]
  comments: ICommentAndUser[]
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
