export const calculateRoundedPrice = (
  price: number,
  discountPercent: number | null,
  quantity: number = 1,
): string => {
  const discountedPrice = Math.round(
    discountPercent ? price - (price * discountPercent) / 100 : price,
  )
  const roundedPrice = Math.round(discountedPrice * quantity)

  return roundedPrice.toLocaleString('uk-UA')
}
