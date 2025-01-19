import { Skeleton } from '@mui/material'

import styles from './../../categories.module.scss'

export const LoadingProperties: React.FC = () => {
  return (
    <>
      {Array.from({ length: 3 }).map((_, index) => (
        <div className={styles.aside__filter} key={index}>
          <h2>
            <Skeleton variant='rectangular' className={styles.skeleton__property_item_h2} />
          </h2>
          <ul>
            {Array.from({ length: 4 }).map((_, index) => (
              <li key={index}>
                <Skeleton variant='rectangular' className={styles.skeleton__property_item} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}
