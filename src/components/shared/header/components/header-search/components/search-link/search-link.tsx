import { Link } from '@/components/ui/link/link'

import styles from './../../header-search.module.scss'
import { useHeaderSearchStore } from '@/utils/lib/store/header-search-store'

interface SearchLinkProps {
  name: string
  link: string
  inputRef: React.RefObject<HTMLInputElement | null>
}

export const SearchLink: React.FC<SearchLinkProps> = ({
  name,
  link,
  inputRef,
}: SearchLinkProps) => {
  const { searchValue, setSearchActive, setSearchMobileActive } = useHeaderSearchStore()

  const match = name.toLowerCase().startsWith(searchValue.toLowerCase())
  const matchText = name.slice(0, searchValue.length)
  const remainingText = name.slice(searchValue.length)

  const clickLink = () => {
    setSearchActive(false)
    setSearchMobileActive(false)
    if (inputRef.current) inputRef.current.blur()
  }
  return (
    <Link href={link} className={styles.list_item} onClick={clickLink} prefetch>
      {match ? (
        <>
          <span className={styles.highlight}>{matchText.toLowerCase()}</span>
          {remainingText}
        </>
      ) : (
        name.toLowerCase()
      )}
    </Link>
  )
}
