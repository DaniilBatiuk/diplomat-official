import { TextField } from '@mui/material'

import styles from './../../order.module.scss'
import { FormBlock } from '@/components'
import { ActionState } from '@/utils/lib/middleware'

interface CommentProps {
  createOrderState: ActionState
}

export const Comment: React.FC<CommentProps> = ({ createOrderState }: CommentProps) => {
  return (
    <FormBlock title='5. Коментар'>
      <div className={styles.order__comment}>
        <TextField
          multiline
          rows={6}
          fullWidth
          id='comment'
          name='comment'
          defaultValue={createOrderState.inputs.comment}
          label={createOrderState.errors.comment ?? "Введіть коментар (не обов'язково)"}
          error={!!createOrderState.errors.comment}
        />
      </div>
    </FormBlock>
  )
}
