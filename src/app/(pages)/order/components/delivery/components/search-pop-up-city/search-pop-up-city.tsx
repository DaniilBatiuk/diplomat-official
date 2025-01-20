import { Dispatch, SetStateAction } from 'react'

import { HeaderList } from '@/components/shared/header/components/header-list/header-list'

import { PopUpDelivery } from '../pop-up-delivery/pop-up-delivery'

import styles from './../search-pop-up-nova/search-pop-up.module.scss'

interface SearchPopUpCityProps<T> {
  searchValue: string
  setSearchValue: Dispatch<SetStateAction<string>>
  searchActive: boolean
  searchClose: () => void
  inputRef: React.RefObject<HTMLInputElement | null>
  listData: T[]
  setSelected: Dispatch<SetStateAction<T | undefined>>
  filterKey: keyof T
}

export const SearchPopUpCity = <T extends Record<string, any>>({
  searchValue,
  setSearchValue,
  searchActive,
  searchClose,
  inputRef,
  listData,
  setSelected,
  filterKey,
}: SearchPopUpCityProps<T>) => {
  return (
    <PopUpDelivery
      searchActive={searchActive}
      searchClose={searchClose}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      inputRef={inputRef}
    >
      {inputRef.current &&
        inputRef.current === document.activeElement &&
        listData.filter(item => {
          const regex = new RegExp(`(${searchValue.trim()})`, 'gi')
          return regex.test(item[filterKey] as string)
        }).length > 0 && (
          <HeaderList>
            {listData
              .filter(item => {
                const regex = new RegExp(`(${searchValue.trim()})`, 'gi')
                return regex.test(item[filterKey] as string)
              })
              .slice(0, 10)
              .map(item => {
                const regex = new RegExp(`(${searchValue.trim()})`, 'gi')
                const parts = (item[filterKey] as string).split(regex)

                return (
                  <div
                    className={styles.list_item}
                    key={item[filterKey] as string}
                    onClick={() => {
                      setSelected(item)
                      setSearchValue(item[filterKey] as string)
                      searchClose()
                    }}
                  >
                    <p>
                      {parts.map((part, index) =>
                        part.toLowerCase() === searchValue.trim().toLowerCase() ? (
                          <b key={index}>{part}</b>
                        ) : (
                          <span key={index}>{part}</span>
                        ),
                      )}
                    </p>
                  </div>
                )
              })}
          </HeaderList>
        )}
    </PopUpDelivery>
  )
}
