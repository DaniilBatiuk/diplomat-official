import { notFound } from 'next/navigation'

import { CreateForm } from '../../create-product/components/create-form/create-form'

import styles from './../../create-product/create-product.module.scss'
import { Title } from '@/components'
import { metadataFactory } from '@/utils/helpers'
import { prisma } from '@/utils/lib/db'
import { getCategories, getProductDetails } from '@/utils/lib/queries'

export async function generateStaticParams() {
  const products = await prisma.product.findMany()
  return products.map(product => ({
    id: product.id,
  }))
}

export const metadata = metadataFactory('Зміна товару')

export default async function CreateProduct({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id

  const product = await getProductDetails(id)
  const allCategories = await getCategories()

  if (!product) return notFound()

  return (
    <div className={styles.create}>
      <section className={styles.create__container}>
        <Title isH1 className={styles.create__title}>
          Оновлення товару
        </Title>
        <CreateForm allCategories={allCategories} productDataUpdate={product} />
      </section>
    </div>
  )
}
