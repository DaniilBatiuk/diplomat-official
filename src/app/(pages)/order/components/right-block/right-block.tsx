import { Skeleton } from '@mui/material'

import { ICONS } from '@/utils/config/icons'

import styles from './../../order.module.scss'
import { CustomButton, FormBlock } from '@/components'

interface RightBlockProps {
  cart: ICartDto | null | undefined
  isCartLoading: boolean
  createOrderPending: boolean
}

export const RightBlock: React.FC<RightBlockProps> = ({
  cart,
  isCartLoading,
  createOrderPending,
}: RightBlockProps) => {
  return (
    <FormBlock title='' className={styles.order__right_block}>
      <div className={styles.order__right}>
        <p className={styles.order__right_text}>До оплати:</p>
        {isCartLoading ? (
          <Skeleton variant='rectangular' className={styles.order__right_skeleton_price} />
        ) : (
          <>
            <h3>{cart && cart.totalPrice > 0 ? cart.totalPrice.toLocaleString('uk-UA') : 0} ₴</h3>
          </>
        )}
        <div className={styles.order__right_line}>
          <div className={styles.order__right_line_left}>
            {ICONS.box()} <p>Ціна кошика: </p>
          </div>
          {isCartLoading ? (
            <Skeleton variant='rectangular' className={styles.order__right_skeleton_price_min} />
          ) : (
            <h4>{cart && cart.totalPrice > 0 ? cart.totalPrice.toLocaleString('uk-UA') : 0} ₴</h4>
          )}
        </div>
      </div>
      <div className={styles.order__right_footer}>
        <CustomButton
          className={styles.order__right_footer__button}
          fullWidth
          type='submit'
          disabled={createOrderPending || !!(cart && cart.totalPrice === 0)}
        >
          Оформити замовлення
          {ICONS.arrowRight()}
        </CustomButton>
      </div>
    </FormBlock>
  )
}
