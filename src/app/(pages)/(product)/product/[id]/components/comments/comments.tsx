'use client'

import { Rating } from '@mui/material'
import { useSession } from 'next-auth/react'
import { useState } from 'react'

import styles from './../../product.module.scss'
import { Comment } from './components/comment/comment'
import { CreateCommentModal } from './components/create-comment-modal/create-comment-modal'
import { CustomButton, Title } from '@/components'
import { calculateAverageStarCount } from '@/utils/helpers'

interface CommentsProps {
  comments: ICommentAndUser[]
  productId: string
}

export const Comments: React.FC<CommentsProps> = ({ comments, productId }: CommentsProps) => {
  const { data: session } = useSession()
  const [modalActive, setModalActive] = useState(false)

  return (
    <section className={styles.comments}>
      <div className={styles.comments__header}>
        <Title>Відгуки користувачів</Title>
        <CustomButton outline onClick={() => setModalActive(true)} disabled={!session}>
          Написати відгук
        </CustomButton>
      </div>
      {comments.length > 0 && (
        <>
          <div className={styles.comments__stars}>
            <p className={styles.comments__stars_text}>{calculateAverageStarCount(comments)}</p>
            <Rating defaultValue={1} max={1} size='large' readOnly />
            <p className={styles.comments__stars_text_2}>{comments.length} відгуків</p>
          </div>
          <CustomButton outline fullWidth onClick={() => setModalActive(true)} disabled={!session}>
            Написати відгук
          </CustomButton>
          <div className={styles.comments__list}>
            {comments.map(comment => (
              <Comment comment={comment} key={comment.id} />
            ))}
          </div>
        </>
      )}
      <CreateCommentModal
        modalActive={modalActive}
        setModalActive={setModalActive}
        productId={productId}
      />
    </section>
  )
}
