import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { memo } from 'react'

import { ICONS } from '@/utils/config/icons'
import { LINKS } from '@/utils/config/links'

import { SearchList } from '../header-search/components/search-list/search-list'

import styles from './search-mobile.module.scss'
import { DarkBackground } from '@/components'
import { useHeaderSearchStore } from '@/utils/lib/store/header-search-store'

interface SearchMobileProps {
  inputRefMobile: React.RefObject<HTMLInputElement | null>
}
export const SearchMobile: React.FC<SearchMobileProps> = memo(
  ({ inputRefMobile }: SearchMobileProps) => {
    const router = useRouter()
    const {
      searchValue,
      searchDataView,
      setSearchValue,
      searchMobileActive,
      setSearchMobileActive,
    } = useHeaderSearchStore()

    const onSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      router.push(LINKS.Categories + `?Search=${searchValue}`)
      setSearchMobileActive(false)
      if (inputRefMobile.current) inputRefMobile.current.blur()
    }

    return (
      <>
        <DarkBackground
          backgroundActive={searchMobileActive}
          onClick={() => setSearchMobileActive(false)}
        />
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
              searchDataView.subcategories.length > 0) && <SearchList inputRef={inputRefMobile} />}
        </form>
      </>
    )
  },
)
SearchMobile.displayName = 'SearchMobile'
