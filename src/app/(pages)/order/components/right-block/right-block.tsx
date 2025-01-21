import { useFormStatus } from 'react-dom'

import { ICONS } from '@/utils/config/icons'

import styles from './../../order.module.scss'
import { CustomButton, FormBlock } from '@/components'

interface RightBlockProps {
  cart: ICartDto | undefined
}

export const RightBlock: React.FC<RightBlockProps> = ({ cart }: RightBlockProps) => {
  const { pending } = useFormStatus()

  return (
    <FormBlock title='' className={styles.order__right_block}>
      <div className={styles.order__right}>
        <p className={styles.order__right_text}>До оплати:</p>
        <h3>{cart && cart.totalPrice.toLocaleString('uk-UA')} ₴</h3>
        <div className={styles.order__right_line}>
          <div className={styles.order__right_line_left}>
            {ICONS.box()} <p>Ціна кошика: </p>
          </div>
          <h4>{cart && cart.totalPrice.toLocaleString('uk-UA')} ₴</h4>
        </div>
      </div>
      <div className={styles.order__right_footer}>
        <CustomButton
          className={styles.order__right_footer__button}
          fullWidth
          type='submit'
          disabled={pending}
        >
          Оформити замовлення
          {ICONS.arrowRight()}
        </CustomButton>
      </div>
    </FormBlock>
  )
}
