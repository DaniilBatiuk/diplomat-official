'use client'

import { Rating } from '@mui/material'
import { useState } from 'react'

import styles from './../../product.module.scss'
import { Comment } from './components/comment/comment'
import { CreateCommentModal } from './components/create-comment-modal/create-comment-modal'
import { CustomButton, Title } from '@/components'

export const Comments: React.FC = () => {
  const [activeModal, setActiveModal] = useState(false)

  return (
    <section className={styles.comments}>
      <div className={styles.comments__header}>
        <Title>Відгуки користувачів</Title>
        <CustomButton outline onClick={() => setActiveModal(true)}>
          Написати відгук
        </CustomButton>
      </div>
      <div className={styles.comments__stars}>
        <p className={styles.comments__stars_text}>4.5</p>
        <Rating defaultValue={1} max={1} size='large' readOnly />
        <p className={styles.comments__stars_text_2}>610 відгуків</p>
      </div>
      <CustomButton outline fullWidth onClick={() => setActiveModal(true)}>
        Написати відгук
      </CustomButton>
      <div className={styles.comments__list}>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
      <CreateCommentModal activeModal={activeModal} setActiveModal={setActiveModal} />
    </section>
  )
}
