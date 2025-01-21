export function isCartDto(cart: ICartDto | ICartEmpty): cart is ICartDto {
  return 'id' in cart
}
