import { $Enums } from '@prisma/client'
import { z } from 'zod'

export const orderScheme = z.object({
  name: z
    .string()
    .min(2, "Ім'я має містити не менше 2 символів")
    .max(50, "Ім'я має містити не більше 50 символів")
    .nonempty("Поле з ім'я є обов'язковим"),
  surname: z
    .string()
    .min(2, 'Прізвище має містити не менше 2 символів')
    .max(50, 'Прізвище має містити не більше 50 символів')
    .nonempty("Поле з прізвище є обов'язковим"),
  email: z.string().email('Некоректний e-mail').nonempty("Поле e-mail є обов'язковим"),
  phone: z.string().length(18, 'Некоректний телефон').nonempty("Поле телефон є обов'язковим"),
  city: z.string().nonempty("Поле місто є обов'язковим"),
  department: z.string().nonempty("Поле відділення є обов'язковим"),
  deliveryWay: z.union([
    z.literal($Enums.DeliveryWays.novaPoshta),
    z.literal($Enums.DeliveryWays.ukrPoshta),
  ]),
  paymentWay: z.union([
    z.literal($Enums.PaymentWays.cashless),
    z.literal($Enums.PaymentWays.privateBank),
    z.literal($Enums.PaymentWays.uponReceipt),
  ]),
  comment: z.string().max(500, 'Комментар має містити не більше 500 символів').optional(),
  userId: z.string().cuid(),
  cartId: z.string().cuid(),
})

export type CreateOrder = z.infer<typeof orderScheme>
