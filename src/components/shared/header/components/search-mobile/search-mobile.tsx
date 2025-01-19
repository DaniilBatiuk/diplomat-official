import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { Dispatch, SetStateAction } from 'react'

import { ICONS } from '@/utils/config/icons'
import { LINKS } from '@/utils/config/links'

import { SearchList } from '../header-search/components/search-list/search-list'

import styles from './search-mobile.module.scss'
import { DarkBackground } from '@/components'

interface SearchMobileProp {
  searchValue: string
  setSearchValue: Dispatch<SetStateAction<string>>
  searchMobileActive: boolean
  searchMobileClose: () => void
  inputRefMobile: React.RefObject<HTMLInputElement | null>
  searchDataView: ISearchData
  setSearchActive: React.Dispatch<React.SetStateAction<boolean>>
}
export const SearchMobile: React.FC<SearchMobileProp> = ({
  searchMobileActive,
  searchMobileClose,
  searchValue,
  setSearchValue,
  inputRefMobile,
  searchDataView,
  setSearchActive,
}: SearchMobileProp) => {
  const router = useRouter()

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(LINKS.Categories + `?Search=${searchValue}`)
    setSearchActive(false)
    if (inputRefMobile.current) inputRefMobile.current.blur()
  }

  return (
    <>
      <DarkBackground backgroundActive={searchMobileActive} onClick={searchMobileClose} />
      <form
        onSubmit={onSubmit}
        className={clsx(styles.search_mobile, { [styles.active]: searchMobileActive })}
      >
        <div
          className={styles.search_mobile_form}
          onClick={() => inputRefMobile.current && inputRefMobile.current.focus()}
        >
          <div>
            {ICONS.search({ className: styles.search_icon })}
            <input
              ref={inputRefMobile}
              type='text'
              placeholder='Я шукаю...'
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
            ></input>
          </div>
          {ICONS.close({
            className: clsx(styles.close_icon, { [styles.active]: searchValue.length }),
            onClick: () => setSearchValue(''),
          })}
        </div>
        {searchValue.length > 0 &&
          (searchDataView.categories.length > 0 ||
            searchDataView.products.length > 0 ||
            searchDataView.subcategories.length > 0) && (
            <SearchList
              searchActive={searchMobileActive}
              searchDataView={searchDataView}
              inputRef={inputRefMobile}
              searchValue={searchValue}
              setSearchActive={setSearchActive}
            />
          )}
      </form>
    </>
  )
}
