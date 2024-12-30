import clsx from 'clsx'

import styles from './custom-button.module.scss'

export interface CustomButtonProp extends React.ComponentProps<'button'> {
  fullWidth?: boolean
  big?: boolean
  extraBig?: boolean
  extraBig58?: boolean
}
export const CustomButton: React.FC<CustomButtonProp> = ({
  children,
  className,
  fullWidth,
  big,
  extraBig,
  extraBig58,
  ...props
}: CustomButtonProp) => {
  return (
    <button
      className={clsx(styles.button, className, {
        [styles.button__full_width]: fullWidth,
        [styles.button__big]: big,
        [styles.button__extra_big]: extraBig,
        [styles.button__extra_big_58]: extraBig58,
      })}
      {...props}
    >
      {children}
    </button>
  )
}
