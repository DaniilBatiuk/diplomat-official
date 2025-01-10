import { CreateForm } from './components/create-form/create-form'
import styles from './create-product.module.scss'
import { Title } from '@/components'

export default function CreateProduct() {
  return (
    <div className={styles.create}>
      <section className={styles.create__container}>
        <Title isH1 className={styles.create__title}>
          Створення товару
        </Title>
        <CreateForm />
      </section>
    </div>
  )
}
