'use client'

import { useMutation } from '@tanstack/react-query'
import clsx from 'clsx'
import { toast } from 'react-toastify'

import { Link } from '@/components/ui/link/link'

import { ICONS, LINKS } from '@/utils/constants'

import { deleteProduct } from '@/utils/lib/actions/product'

import styles from './../../card.module.scss'

interface AdminBlockProp {
  id: string
}

export const AdminBlock: React.FC<AdminBlockProp> = ({ id }: AdminBlockProp) => {
  const { mutate, isPending } = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      toast.success('Товар успішно видалено')
    },
    onError: error => {
      toast.error(error.message)
    },
  })

  return (
    <div className={styles.card__admin}>
      <div
        className={clsx({ [styles.disable]: isPending })}
        onClick={e => {
          e.stopPropagation()
          mutate(id)
        }}
      >
        {ICONS.delete()}
      </div>

      <Link href={LINKS.UpdateProduct + '/' + id} prefetch>
        {ICONS.update()}
      </Link>
    </div>
  )
}
