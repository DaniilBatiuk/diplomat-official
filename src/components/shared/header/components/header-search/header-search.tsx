'use client'

import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { Dispatch, SetStateAction } from 'react'

import { ICONS } from '@/utils/config/icons'
import { LINKS } from '@/utils/config/links'

import { SearchList } from './components/search-list/search-list'
import styles from './header-search.module.scss'

interface SearchProps {
  searchValue: string
  setSearchValue: Dispatch<SetStateAction<string>>
  inputRef: React.RefObject<HTMLInputElement | null>
  setSearchActive: Dispatch<SetStateAction<boolean>>
  searchActive: boolean
  searchDataView: ISearchData
}

export const HeaderSearch: React.FC<SearchProps> = ({
  inputRef,
  searchValue,
  setSearchValue,
  setSearchActive,
  searchActive,
  searchDataView,
}: SearchProps) => {
  const router = useRouter()
  console.log('rerender HeaderSearch')
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(LINKS.Categories + `?Search=${searchValue}`)
    setSearchActive(false)
    if (inputRef.current) inputRef.current.blur()
  }
  return (
    <form className={styles.search} onSubmit={onSubmit}>
      <div
        onClick={() => inputRef.current && inputRef.current.focus()}
        className={styles.search_input}
      >
        {ICONS.search()}
        <input
          ref={inputRef}
          type='text'
          placeholder='Я шукаю...'
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          onFocus={() => setSearchActive(true)}
        ></input>
        {ICONS.close({
          className: clsx(styles.close_icon, { [styles.active]: searchValue.length }),
          onClick: () => setSearchValue(''),
        })}
      </div>
      <button type='submit'>Знайти</button>
      <SearchList
        absolutePosition
        searchActive={searchActive}
        searchDataView={searchDataView}
        inputRef={inputRef}
        searchValue={searchValue}
        setSearchActive={setSearchActive}
      />
    </form>
  )
}
