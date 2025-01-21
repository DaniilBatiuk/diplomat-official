export const calculateTotalPrice = (cart: ICartDto): number => {
  return cart.items.reduce((acc, item) => {
    const discountedPrice = Math.round(
      item.product.discountPercent
        ? item.product.price - (item.product.price * item.product.discountPercent) / 100
        : item.product.price,
    )
    const roundedPrice = Math.round(discountedPrice * item.quantity)
    return acc + roundedPrice
  }, 0)
}
