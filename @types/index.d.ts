type Product = {
  id: string
  title: string
  price: number
  description: string
  category: Category
  image: string
  discountPercentage: number
}

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
