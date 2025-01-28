export const PRODUCTS: IProductDto[] = [
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
