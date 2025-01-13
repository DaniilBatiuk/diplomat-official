import { Product } from '@prisma/client'

export const PRODUCTS: Product[] = [
  {
    id: 'prod1',
    name: 'iPhone 13',
    description: 'Latest Apple smartphone',
    price: 999,
    count: 50,
    imageUrls: ['https://utfs.io/f/74a3895f-3d51-46e7-a477-3aa676173a74-dmlwn5.webp'],
    status: 'active',
    discountPercent: 10,
    subcategoryId: 'subcat1',
    createdAt: new Date(),
  },
  {
    id: 'prod2',
    name: 'MacBook Pro',
    description: 'High-performance laptop',
    price: 1999,
    count: 30,
    imageUrls: ['https://utfs.io/f/95c25da8-b7f6-49db-b245-8d5bcb0e73bf-dmly5e.webp'],
    status: 'inactive',
    discountPercent: null,
    subcategoryId: 'subcat2',
    createdAt: new Date(),
  },
]

export const MATERIAL = ['Скло', 'Кераміка', 'Порцелян', 'Олово']
export const COUNTRIES = ['Чехія', 'Україна', 'Китай', 'Німеччина', 'Італія']
export const COLORS = ['Янтарний', 'Чорний', 'Бежевий', 'Білий', 'Рожевий']

export const CATEGORIES = [
  { name: 'Посуд', href: '/Посуд' },
  { name: 'Фігурки та статуетки', href: '/Фігурки та статуетки' },
  { name: 'Годинники', href: '/Годинники' },
  { name: 'Символи року', href: '/Символи року' },
  { name: "Інтер'єр та декор", href: "/Інтер'єр та декор" },
  { name: 'Настільні ігри', href: '/Настільні ігри' },
]
