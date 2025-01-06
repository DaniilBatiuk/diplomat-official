export const PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Смартфон Apple iPhone 14 з гарним чохлом на вель єкран на безкошкомвою камерою',
    price: 371999,
    description: 'Новітній iPhone з чипом A16 Bionic та просунутою камерою.',
    category: {
      id: '1',
      name: 'Настільні ігри',
    },
    image: 'https://example.com/images/iphone14.jpg',
    discountPercentage: 10,
  },
  {
    id: '2',
    title: 'Кросівки Nike Air Max 270',
    price: 5499,
    description: 'Стильні та комфортні кросівки для щоденного використання.',
    category: {
      id: '2',
      name: 'Посуд',
    },
    image: 'https://example.com/images/nike-air-max-270.jpg',
    discountPercentage: 0,
  },
  {
    id: '3',
    title: 'Телевізор Samsung 4K Smart TV',
    price: 19999,
    description: '55-дюймовий телевізор з роздільною здатністю 4K Ultra HD.',
    category: {
      id: '3',
      name: "Інтер'єр та декор",
    },
    image: 'https://example.com/images/samsung-tv.jpg',
    discountPercentage: 5,
  },
  {
    id: '4',
    title: 'Книга "Ловець у житі"',
    price: 299,
    description: 'Класичний роман Джерома Девіда Селінджера.',
    category: {
      id: '4',
      name: 'Фігурки та статуетки',
    },
    image: 'https://example.com/images/catcher-in-the-rye.jpg',
    discountPercentage: 0,
  },
  {
    id: '5',
    title: 'Шкіряне офісне крісло',
    price: 8999,
    description: 'Ергономічне крісло зі шкіри для максимальної зручності під час роботи.',
    category: {
      id: '5',
      name: 'Годинники',
    },
    image: 'https://example.com/images/leather-chair.jpg',
    discountPercentage: 20,
  },
  {
    id: '6',
    title: 'Книга "Ловець у житі"',
    price: 299,
    description: 'Класичний роман Джерома Девіда Селінджера.',
    category: {
      id: '6',
      name: 'Символи року',
    },
    image: 'https://example.com/images/catcher-in-the-rye.jpg',
    discountPercentage: 0,
  },
  {
    id: '7',
    title: 'Шкіряне офісне крісло',
    price: 8999,
    description: 'Ергономічне крісло зі шкіри для максимальної зручності під час роботи.',
    category: {
      id: '6',
      name: 'Символи року',
    },
    image: 'https://example.com/images/leather-chair.jpg',
    discountPercentage: 20,
  },
  {
    id: '8',
    title: 'Книга "Ловець у житі"',
    price: 299,
    description: 'Класичний роман Джерома Девіда Селінджера.',
    category: {
      id: '6',
      name: 'Символи року',
    },
    image: 'https://example.com/images/catcher-in-the-rye.jpg',
    discountPercentage: 0,
  },
  {
    id: '9',
    title: 'Шкіряне офісне крісло',
    price: 8999,
    description: 'Ергономічне крісло зі шкіри для максимальної зручності під час роботи.',
    category: {
      id: '2',
      name: 'Посуд',
    },
    image: 'https://example.com/images/leather-chair.jpg',
    discountPercentage: 20,
  },
  {
    id: '10',
    title: 'Книга "Ловець у житі"',
    price: 299,
    description: 'Класичний роман Джерома Девіда Селінджера.',
    category: {
      id: '4',
      name: 'Фігурки та статуетки',
    },
    image: 'https://example.com/images/catcher-in-the-rye.jpg',
    discountPercentage: 0,
  },
  {
    id: '11',
    title: 'Книга "Ловець у житі"',
    price: 299,
    description: 'Класичний роман Джерома Девіда Селінджера.',
    category: {
      id: '4',
      name: 'Фігурки та статуетки',
    },
    image: 'https://example.com/images/catcher-in-the-rye.jpg',
    discountPercentage: 0,
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
