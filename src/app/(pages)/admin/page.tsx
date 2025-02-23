import styles from './admin.module.scss'
import { AdminHeader } from './components/admin-header/admin-header'
import { Card } from '@/components'
import { metadataFactory } from '@/utils/helpers'
import { getProducts } from '@/utils/lib/queries'

export const metadata = metadataFactory('Адмін')

export default async function Admin() {
  const products = await getProducts()

  return (
    <div className={styles.admin}>
      <section className={styles.admin__container}>
        <AdminHeader />
        <div className={styles.admin__content}>
          {products.map(product => (
            <Card key={product.id} product={product} onAdminPage />
          ))}
        </div>
      </section>
    </div>
  )
}
