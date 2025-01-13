import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import clsx from 'clsx'

import { ICONS } from '@/utils/config/icons'

import styles from './../../product.module.scss'
import { CustomButton } from '@/components'
import { calculateRoundedPrice } from '@/utils/helpers'

interface ProductInfoProps {
  product: IProductOne
}

export const ProductInfo: React.FC<ProductInfoProps> = ({ product }: ProductInfoProps) => {
  return (
    <div className={styles.product__info}>
      <h1 className={styles.product__info_title}>{product.name}</h1>
      <div className={styles.product__info_price_buy}>
        <div className={styles.product__info_prices}>
          {product.discountPercent && (
            <p className={styles.product__info_sale}>{product.price.toLocaleString('uk-UA')} ₴</p>
          )}

          <p
            className={clsx(styles.product__info_price, {
              [styles.product__info_price_discount]: product.discountPercent,
            })}
          >
            {calculateRoundedPrice(product.price, product.discountPercent)} ₴
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
          <p className={styles.product__info_about}>{product.description}</p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <p className={styles.product__info_accordion_title}>ХАРАКТЕРИСТИКИ</p>
        </AccordionSummary>
        <AccordionDetails>
          <div className={styles.product__info__list}>
            {product.properties.map(property => (
              <div className={styles.product__info__list_item} key={property.id}>
                <p className={styles.product__info__list_characteristic}>{property.name}</p>
                <p className={styles.product__info__list_data}>{property.value}</p>
              </div>
            ))}
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
