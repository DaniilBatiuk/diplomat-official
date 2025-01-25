import { Metadata } from 'next'

import { CreateForm } from './components/create-form/create-form'
import styles from './create-product.module.scss'
import { Title } from '@/components'
import { getCategories } from '@/utils/lib/queries'

export const metadata: Metadata = {
  title: 'Створення товару',
}

export default async function CreateProduct() {
  const allCategories = await getCategories()

  return (
    <div className={styles.create}>
      <section className={styles.create__container}>
        <Title isH1 className={styles.create__title}>
          Створення товару
        </Title>
        <CreateForm allCategories={allCategories} />
      </section>
    </div>
  )
}
