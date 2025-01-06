import clsx from 'clsx'

import styles from './invisible-background.module.scss'

interface InvisibleBackgroundProp {
  backgroundActive: boolean
  onClick: () => void
}

export const InvisibleBackground: React.FC<InvisibleBackgroundProp> = ({
  onClick,
  backgroundActive,
}: InvisibleBackgroundProp) => {
  return (
    <div
      className={clsx(styles.invisible, { [styles.active]: backgroundActive })}
      onClick={onClick}
    ></div>
  )
}
