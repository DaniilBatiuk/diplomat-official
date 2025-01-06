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
