import { Rating } from '@mui/material'

import { ICONS } from '@/utils/config/icons'

import styles from '././../../../../product.module.scss'
import { getTimeAgo } from '@/utils/helpers'

interface CommentProps {
  comment: ICommentAndUser
}

export const Comment: React.FC<CommentProps> = ({ comment }: CommentProps) => {
  return (
    <div className={styles.comments__list_item}>
      <div className={styles.comments__list_item_top}>
        <p className={styles.comments__list_item_top_name}>
          {comment.user.name + ' ' + comment.user.surname}
        </p>
        <div className={styles.comments__list_item_top_right}>
          <Rating defaultValue={comment.starCount} max={comment.starCount} size='large' readOnly />
          <p className={styles.comments__list_item_top_right_date}>
            {getTimeAgo(comment.createdAt)}
          </p>
        </div>
      </div>
      <div className={styles.comments__list_item_body}>
        <div className={styles.comments__list_item_body_left}>
          <Rating defaultValue={comment.starCount} max={comment.starCount} size='large' readOnly />

          <div className={styles.comments__list_item_body_recommendation}>
            {comment.recommend && (
              <>
                {ICONS.mark()}
                <p></p>
              </>
            )}
          </div>
        </div>
        <div className={styles.comments__list_item_body_main}>
          <h2> {comment.title}</h2>
          <p>{comment.comment}</p>
        </div>
      </div>
    </div>
  )
}
