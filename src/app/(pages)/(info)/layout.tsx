import { InfoAside } from './components/aside/aside'
import styles from './info.module.scss'

export default function InfoLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={styles.info__container}>
      <InfoAside />
      <section>{children}</section>
    </div>
  )
}
