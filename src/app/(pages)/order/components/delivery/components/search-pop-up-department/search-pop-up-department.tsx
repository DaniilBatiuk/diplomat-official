import { Dispatch, SetStateAction } from 'react'

import { HeaderList } from '@/components/shared/header/components/header-list/header-list'

import { PopUpDelivery } from '../pop-up-delivery/pop-up-delivery'

import styles from './../pop-up-delivery/search-pop-up.module.scss'

interface SearchPopUpDepartmentProps<T> {
  searchValue: string
  setSearchValue: Dispatch<SetStateAction<string>>
  searchActive: boolean
  searchClose: () => void
  inputRef: React.RefObject<HTMLInputElement | null>
  listData: T[]
  setSelected: Dispatch<string>
  filterKey: keyof T
}

export const SearchPopUpDepartment = <T extends Department | DepartmentUkr>({
  searchValue,
  setSearchValue,
  searchActive,
  searchClose,
  inputRef,
  listData,
  setSelected,
  filterKey,
}: SearchPopUpDepartmentProps<T>) => {
  const regex = new RegExp(`(${searchValue.trim()})`, 'gi')

  return (
    <PopUpDelivery
      searchActive={searchActive}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      inputRef={inputRef}
    >
      {inputRef.current &&
        inputRef.current === document.activeElement &&
        listData.filter(item => regex.test(item[filterKey as keyof T] as string)).length > 0 && (
          <HeaderList>
            {listData
              .filter(item => regex.test(item[filterKey as keyof T] as string))
              .slice(0, 10)
              .map((item, index) => {
                const parts = (item[filterKey as keyof T] as string).split(regex)
                return (
                  <div
                    className={styles.list_item}
                    key={item[filterKey as keyof T] as string}
                    onClick={() => {
                      setSelected(item[filterKey as keyof T] as string)
                      setSearchValue(item[filterKey as keyof T] as string)
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
