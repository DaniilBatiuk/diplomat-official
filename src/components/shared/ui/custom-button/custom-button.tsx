import clsx from 'clsx'

import styles from './custom-button.module.scss'

export interface CustomButtonProp extends React.ComponentProps<'button'> {
  fullWidth?: boolean
  big?: boolean
  extraBig?: boolean
}
export const CustomButton: React.FC<CustomButtonProp> = ({
  children,
  className,
  fullWidth,
  big,
  extraBig,
  ...props
}: CustomButtonProp) => {
  return (
    <button
      className={clsx(
        styles.button,
        className,
        {
          [styles.button__full_width]: fullWidth,
          [styles.button__big]: big,
          [styles.button__extra_big]: extraBig,
        },
        styles.button,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
