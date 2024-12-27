'use client'

import { Dispatch, SetStateAction } from 'react'

import { ICONS } from '@/utils/config/icons'

import { HeaderList } from '../header-list/header-list'

import styles from './header-search.module.scss'
import { UseRerenderReturns } from '@/utils/hooks'

type SearchMobileProp = {
  searchValue: string
  setSearchValue: Dispatch<SetStateAction<string>>
  inputRef: React.RefObject<HTMLInputElement | null>
  rerender: UseRerenderReturns
}

export const HeaderSearch: React.FC<SearchMobileProp> = ({
  inputRef,
  searchValue,
  setSearchValue,
  rerender,
}: SearchMobileProp) => {
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <>
      <form className={styles.search} onSubmit={submitHandler}>
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
            onFocus={() => rerender.update()}
          ></input>
        </div>
        <button type='submit'>Знайти</button>
        <HeaderList
          isAbsolute={true}
          isActive={
            inputRef.current &&
            inputRef.current === document.activeElement &&
            searchValue.length > 0
              ? true
              : false
          }
        />
      </form>
    </>
  )
}
