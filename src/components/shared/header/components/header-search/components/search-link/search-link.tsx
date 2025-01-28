import React from 'react'

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
  const normalizedSearchValue = searchValue.toLowerCase().trim()

  const clickLink = () => {
    setSearchActive(false)
    setSearchMobileActive(false)
    inputRef.current?.blur()
  }
  const index = name.toLowerCase().indexOf(normalizedSearchValue)

  return (
    <Link href={link} className={styles.list_item} onClick={clickLink} prefetch>
      <span>
        {name.slice(0, index)}
        <b>{name.slice(index, index + normalizedSearchValue.length)}</b>
        {name.slice(index + normalizedSearchValue.length)}
      </span>
    </Link>
  )
}
