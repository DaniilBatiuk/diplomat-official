import style from './title.module.scss'

export interface TitleProps extends React.ComponentProps<'h2'> {}

export const Title: React.FC<TitleProps> = ({ children, ...props }: TitleProps) => {
  return (
    <div className={style.title}>
      <div></div>
      <h2 {...props}>{children}</h2>
    </div>
  )
}
