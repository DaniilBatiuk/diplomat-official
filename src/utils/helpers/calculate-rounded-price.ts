export const calculateRoundedPrice = (price: number, discountPercent: number | null): string => {
  const discountedPrice = discountPercent ? price - (price * discountPercent) / 100 : price
  const roundedPrice = Math.round(discountedPrice)
  return roundedPrice.toLocaleString('uk-UA')
}
