import { TextField } from '@mui/material'

import styles from './../../order.module.scss'
import { FormBlock } from '@/components'

export const Comment: React.FC = () => {
  return (
    <FormBlock title='5. Коментар'>
      <div className={styles.order__comment}>
        <TextField label="Введіть коментар (не обов'язково)" multiline rows={6} fullWidth />
      </div>
    </FormBlock>
  )
}
