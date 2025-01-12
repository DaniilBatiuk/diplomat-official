import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
async function main() {
  // Seed Categories
  await prisma.category.createMany({
    data: [
      { id: 'cat1', name: 'Electronics' },
      { id: 'cat2', name: 'Books' },
      { id: 'cat3', name: 'Clothing' },
    ],
  })

  // Seed Subcategories
  await prisma.subcategory.createMany({
    data: [
      { id: 'subcat1', name: 'Smartphones', categoryId: 'cat1' },
      { id: 'subcat2', name: 'Laptops', categoryId: 'cat1' },
      { id: 'subcat3', name: 'Fiction', categoryId: 'cat2' },
    ],
  })

  // Seed Products
  await prisma.product.createMany({
    data: [
      {
        id: 'prod1',
        name: 'iPhone 13',
        description: 'Latest Apple smartphone',
        price: 999,
        count: 50,
        imageUrls: ['url1', 'url2'],
        status: 'active',
        discountPercent: 10,
        subcategoryId: 'subcat1',
      },
      {
        id: 'prod2',
        name: 'MacBook Pro',
        description: 'High-performance laptop',
        price: 1999,
        count: 30,
        imageUrls: ['url3', 'url4'],
        status: 'inactive',
        discountPercent: null,
        subcategoryId: 'subcat2',
      },
      {
        id: 'prod3',
        name: 'The Great Gatsby',
        description: 'Classic novel by F. Scott Fitzgerald',
        price: 14,
        count: 100,
        imageUrls: ['url5', 'url6'],
        status: 'active',
        discountPercent: 20,
        subcategoryId: 'subcat3',
      },
    ],
  })

  // Seed Property
  await prisma.property.createMany({
    data: [
      { id: 'prop1', name: 'Color', value: 'Black', productId: 'prod1', subcategoryId: 'subcat1' },
      {
        id: 'prop2',
        name: 'Battery Life',
        value: '20 hours',
        productId: 'prod1',
        subcategoryId: 'subcat1',
      },
      {
        id: 'prop3',
        name: 'Screen Size',
        value: '6.1 inches',
        productId: 'prod1',
        subcategoryId: 'subcat1',
      },

      {
        id: 'prop4',
        name: 'Processor',
        value: 'M1 Pro',
        productId: 'prod2',
        subcategoryId: 'subcat2',
      },
      { id: 'prop5', name: 'RAM', value: '16GB', productId: 'prod2', subcategoryId: 'subcat2' },
      {
        id: 'prop6',
        name: 'Storage',
        value: '512GB SSD',
        productId: 'prod2',
        subcategoryId: 'subcat2',
      },

      {
        id: 'prop7',
        name: 'Author',
        value: 'F. Scott Fitzgerald',
        productId: 'prod3',
        subcategoryId: 'subcat3',
      },
      {
        id: 'prop8',
        name: 'Genre',
        value: 'Fiction',
        productId: 'prod3',
        subcategoryId: 'subcat3',
      },
      { id: 'prop9', name: 'Pages', value: '180', productId: 'prod3', subcategoryId: 'subcat3' },
    ],
  })

  // Seed Users
  await prisma.user.createMany({
    data: [
      {
        id: 'user1',
        name: 'John',
        surname: 'Doe',
        email: 'john.doe@example.com',
        passwordHash: 'hashedpassword1',
        address: '123 Main St',
        phone: '1234567890',
        role: 'user',
        cartId: 'cart1',
      },
      {
        id: 'user2',
        name: 'Jane',
        surname: 'Smith',
        email: 'jane.smith@example.com',
        passwordHash: 'hashedpassword2',
        address: '456 Elm St',
        phone: '0987654321',
        role: 'manager',
        cartId: 'cart2',
      },
      {
        id: 'user3',
        name: 'Alice',
        surname: 'Johnson',
        email: 'alice.johnson@example.com',
        passwordHash: 'hashedpassword3',
        address: null,
        phone: null,
        role: 'admin',
        cartId: 'cart3',
      },
    ],
  })

  // Seed Carts
  await prisma.cart.createMany({
    data: [
      { id: 'cart1', token: 'token1', totalPrice: 0, userId: 'user1' },
      { id: 'cart2', token: 'token2', totalPrice: 0, userId: 'user2' },
      { id: 'cart3', token: 'token3', totalPrice: 0, userId: 'user3' },
    ],
  })

  // Seed CartItems
  await prisma.cartItem.createMany({
    data: [
      { id: 'cartitem1', quantity: 2, productId: 'prod1', cartId: 'cart1' },
      { id: 'cartitem2', quantity: 1, productId: 'prod2', cartId: 'cart2' },
      { id: 'cartitem3', quantity: 3, productId: 'prod3', cartId: 'cart3' },
    ],
  })

  // Seed Orders
  await prisma.order.createMany({
    data: [
      {
        id: 'order1',
        name: 'John',
        surname: 'Doe',
        email: 'john.doe@example.com',
        phone: '1234567890',
        city: 'New York',
        department: 'Nova Poshta',
        orderStatus: 'inProgress',
        paymentStatus: 'inProgress',
        deliveryWay: 'novaPoshta',
        deliveryVariants: 'department',
        paymentWays: 'uponReceipt',
        cartSnapshot: JSON.stringify([{ productId: 'prod1', quantity: 2 }]),
        cartId: 'cart1',
        userId: 'user1',
        token: 'token1',
      },
      {
        id: 'order2',
        name: 'Jane',
        surname: 'Smith',
        email: 'jane.smith@example.com',
        phone: '0987654321',
        city: 'Los Angeles',
        department: 'Ukr Poshta',
        orderStatus: 'confirmed',
        paymentStatus: 'completed',
        deliveryWay: 'ukrPoshta',
        deliveryVariants: 'courier',
        paymentWays: 'privateBank',
        cartSnapshot: JSON.stringify([{ productId: 'prod2', quantity: 1 }]),
        cartId: 'cart2',
        userId: 'user2',
        token: 'token2',
      },
      {
        id: 'order3',
        name: 'Alice',
        surname: 'Johnson',
        email: 'alice.johnson@example.com',
        phone: '5551234567',
        city: 'Chicago',
        department: 'Nova Poshta',
        orderStatus: 'completed',
        paymentStatus: 'completed',
        deliveryWay: 'novaPoshta',
        deliveryVariants: 'postomat',
        paymentWays: 'cashless',
        cartSnapshot: JSON.stringify([{ productId: 'prod3', quantity: 3 }]),
        cartId: 'cart3',
        userId: 'user3',
        token: 'token3',
      },
    ],
  })

  // Seed Comments
  await prisma.comment.createMany({
    data: [
      {
        id: 'comment1',
        title: 'Great Product!',
        comment: 'Loved the iPhone 13, excellent performance.',
        starCount: 5,
        recommend: true,
        userId: 'user1',
        productId: 'prod1',
      },
      {
        id: 'comment2',
        title: 'Good Value',
        comment: 'The Great Gatsby is a classic. Highly recommend!',
        starCount: 4,
        recommend: true,
        userId: 'user2',
        productId: 'prod3',
      },
      {
        id: 'comment3',
        title: 'Could be better',
        comment: 'MacBook Pro is great but overpriced.',
        starCount: 3,
        recommend: false,
        userId: 'user3',
        productId: 'prod2',
      },
    ],
  })

  console.log('Seed data successfully added')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
