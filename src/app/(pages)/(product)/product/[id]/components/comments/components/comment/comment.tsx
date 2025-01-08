import { Rating } from '@mui/material'

import { ICONS } from '@/utils/config/icons'

import styles from '././../../../../product.module.scss'

export const Comment: React.FC = () => {
  return (
    <div className={styles.comments__list_item}>
      <div className={styles.comments__list_item_top}>
        <p className={styles.comments__list_item_top_name}>Данііл Батюк</p>
        <div className={styles.comments__list_item_top_right}>
          <Rating defaultValue={5} max={5} size='large' readOnly />
          <p className={styles.comments__list_item_top_right_date}>22 дні тому</p>
        </div>
      </div>
      <div className={styles.comments__list_item_body}>
        <div className={styles.comments__list_item_body_left}>
          <Rating defaultValue={5} max={5} size='large' readOnly />
          <div className={styles.comments__list_item_body_recommendation}>
            {ICONS.mark()}
            <p></p>
          </div>
        </div>
        <div className={styles.comments__list_item_body_main}>
          <h5>Гарний товар</h5>
          <p>
            Дуже люблю ексклюзивні речі. Ці парасольки з цієї категорії. Це прикраса, аксесуар,
            ознака смаку й дуже важлива річ для вжитку. Дуже швидко прийняли замовлення й відправка
            була в той же день. Все ретельно запаковане. Я дуже задоволена. Сподіваюся оновлений
            магазин буде ще кращим за попередній
          </p>
        </div>
      </div>
    </div>
  )
}
