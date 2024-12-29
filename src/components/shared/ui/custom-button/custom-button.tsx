import clsx from 'clsx'

import styles from './custom-button.module.scss'

export interface CustomButtonProp extends React.ComponentProps<'button'> {
  fullWidth?: boolean
  big?: boolean
}
export const CustomButton: React.FC<CustomButtonProp> = ({
  children,
  className,
  fullWidth,
  big,
  ...props
}: CustomButtonProp) => {
  return (
    <button
      className={clsx(styles.button, className, {
        [styles.button__full_width]: fullWidth,
        [styles.button__big]: big,
      })}
      {...props}
    >
      {children}
    </button>
  )
}
