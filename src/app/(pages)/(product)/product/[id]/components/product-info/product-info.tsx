import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import clsx from 'clsx'

import { ICONS } from '@/utils/config/icons'

import styles from './../../product.module.scss'
import { CustomButton } from '@/components'

interface ProductInfoProps {
  product: Product
}

export const ProductInfo: React.FC<ProductInfoProps> = ({ product }: ProductInfoProps) => {
  return (
    <div className={styles.product__info}>
      <h1 className={styles.product__info_title}>{product.title}</h1>
      <div className={styles.product__info_price_buy}>
        <div className={styles.product__info_prices}>
          {product.discountPercentage > 0 && (
            <p className={styles.product__info_sale}>{product.price.toLocaleString('uk-UA')} ₴</p>
          )}
          <p
            className={clsx(styles.product__info_price, {
              [styles.product__info_price_discount]: product.discountPercentage > 0,
            })}
          >
            {(() => {
              const discountedPrice =
                product.price - (product.price * product.discountPercentage) / 100
              const roundedPrice = Math.round(discountedPrice)
              return roundedPrice.toLocaleString('uk-UA')
            })()}{' '}
            ₴
          </p>
        </div>
        <CustomButton>
          {ICONS.buy()}
          <p>В кошик</p>
        </CustomButton>
      </div>
      <Accordion className={styles.product__info_accordion_no_before} defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <p className={styles.product__info_accordion_title}>ОПИС</p>
        </AccordionSummary>
        <AccordionDetails>
          <p className={styles.product__info_about}>
            Порцелянова фігурка «Дівчинка з мольбертом и палітрою» італійської фабрики «Zampiva»,
            створені італійським дизайнером Ліно Зампіва (Lino Zampiva) - це справжній витвір
            мистецтва. Кожна фігурка розфарбовується вручну, тому є унікальною. Порцелянові фігурки
            італійської фабрики «Zampiva»це ідеальний подарунком друзям, стануть відмінним презентом
            на весілля, день народження, день закоханих або просто поповнять чиюсь колекцію новим
            оригінальним персонажем. Фігурка випущена обмеженим тиражем 3000 шт.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <p className={styles.product__info_accordion_title}>ХАРАКТЕРИСТИКИ</p>
        </AccordionSummary>
        <AccordionDetails>
          <div className={styles.product__info__list}>
            <div className={styles.product__info__list_item}>
              <p className={styles.product__info__list_characteristic}>Матеріал</p>
              <p className={styles.product__info__list_data}>Олово</p>
            </div>
            <div className={styles.product__info__list_item}>
              <p className={styles.product__info__list_characteristic}>Країна виробник</p>
              <p className={styles.product__info__list_data}>Німеччина</p>
            </div>
            <div className={styles.product__info__list_item}>
              <p className={styles.product__info__list_characteristic}>Виробник</p>
              <p className={styles.product__info__list_data}>Artina</p>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <p className={styles.product__info_accordion_title}>ЗАДАТИ ПИТАННЯ</p>
        </AccordionSummary>
        <AccordionDetails>
          <div className={styles.product__info_contact}>
            <p className={styles.product__info_about}>
              Зв'яжіться з менеджером у чаті або за телефоном:
            </p>
            <div>
              {ICONS.contactTelegram()} <p>+ 38 (068) 905 06 93</p>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
