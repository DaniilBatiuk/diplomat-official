import React from 'react'

import { compareInput } from '@/components/shared/header/helpers/compate-input'
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

  const renderHighlightedText = () => {
    if (!normalizedSearchValue) return name
    const hasSpace = normalizedSearchValue.includes(' ') && normalizedSearchValue.length > 1
    if (hasSpace) {
      const index = name.toLowerCase().indexOf(normalizedSearchValue)
      if (index === -1) return name

      const needSpaceBefore = name[index - 1] === ' '
      const needSpaceAfter = name[index + searchValue.trim().length] === ' '

      return (
        <>
          {name.slice(0, index)}
          {needSpaceBefore && <span style={{ visibility: 'hidden' }}>.</span>}
          <span className={styles.highlight}>
            {name.slice(index, index + normalizedSearchValue.length)}
          </span>
          {needSpaceAfter && <span style={{ visibility: 'hidden' }}>.</span>}
          {name.slice(index + normalizedSearchValue.length)}
        </>
      )
    }

    return name.split(/(\s+)/).map((part, index, array) => {
      if (compareInput(normalizedSearchValue, part)) {
        const findWord = name
          .split(/(\s+)/)
          .find(item =>
            item.toLocaleLowerCase().trim().startsWith(searchValue.toLocaleLowerCase().trim()),
          )
        const needSpaceBefore = index > 0 && array[index - 1] === ' '
        const needSpaceAfter = findWord
          ? name[name.indexOf(findWord) + searchValue.trim().length] === ' '
          : false

        return (
          <React.Fragment key={index}>
            {needSpaceBefore && <span style={{ visibility: 'hidden' }}>.</span>}
            <span className={styles.highlight}>{part.slice(0, normalizedSearchValue.length)}</span>
            {part.slice(normalizedSearchValue.length)}
            {needSpaceAfter && <span style={{ visibility: 'hidden' }}>.</span>}
          </React.Fragment>
        )
      }
      return part
    })
  }

  return (
    <Link href={link} className={styles.list_item} onClick={clickLink} prefetch>
      {renderHighlightedText()}
    </Link>
  )
}
