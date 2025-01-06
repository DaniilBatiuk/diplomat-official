import clsx from 'clsx'

import style from './title.module.scss'

export interface TitleProps extends React.ComponentProps<'h2'> {
  isH1?: boolean
}

export const Title: React.FC<TitleProps> = ({
  children,
  isH1,
  className,
  ...props
}: TitleProps) => {
  return (
    <div className={clsx(style.title, className)}>
      <div></div>
      {isH1 ? <h1 {...props}>{children}</h1> : <h2 {...props}>{children}</h2>}
    </div>
  )
}
