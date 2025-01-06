import clsx from 'clsx'

import styles from './form-block.module.scss'

interface FormBlockProps {
  children: React.ReactNode
  title: string
  className?: string
}

export const FormBlock: React.FC<FormBlockProps> = ({
  children,
  title,
  className,
}: FormBlockProps) => {
  return (
    <div className={clsx(styles.form_block, className)}>
      <h2>{title}</h2>
      {children}
    </div>
  )
}
