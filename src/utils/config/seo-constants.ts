export const WEB_NAME = 'Diplomat'

export const COMMON_METADATA = {
  title: WEB_NAME,
  description:
    'Diplomat – місце, де ви знайдете подарунки на любий смак. Зробіть своє привітання незабутнім, даруючи щось особливе.',
  authors: [{ name: 'Daniil' }, { name: 'Daniil', url: 'https://github.com/DaniilBatiuk' }],
  publisher: 'Daniil Batiuk',
  creator: 'Daniil Batiuk',
  image: {
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/opengraph-image.png`,
    width: 1200,
    height: 630,
    alt: 'Logo',
  },
  url: process.env.NEXT_PUBLIC_BASE_URL,
}
