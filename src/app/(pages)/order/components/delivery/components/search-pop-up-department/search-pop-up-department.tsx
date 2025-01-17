import { Dispatch, SetStateAction } from 'react'

import { HeaderList } from '@/components/shared/header/components/header-list/header-list'

import { PopUpDelivery } from '../pop-up-delivery/pop-up-delivery'

import styles from './../search-pop-up/search-pop-up.module.scss'

interface SearchPopUpDepartmentProp {
  searchValue: string
  setSearchValue: Dispatch<SetStateAction<string>>
  searchActive: boolean
  searchClose: () => void
  inputRef: React.RefObject<HTMLInputElement | null>
  listData: Department[]
  setSelected: Dispatch<SetStateAction<Department | null>>
}

export const SearchPopUpDepartment: React.FC<SearchPopUpDepartmentProp> = ({
  searchActive,
  searchClose,
  searchValue,
  setSearchValue,
  inputRef,
  listData,
  setSelected,
}: SearchPopUpDepartmentProp) => {
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
          return regex.test(item.Description)
        }).length > 0 && (
          <HeaderList>
            {listData
              .filter(item => {
                const regex = new RegExp(`(${searchValue.trim()})`, 'gi')
                return regex.test(item.Description)
              })
              .slice(0, 10)
              .map(item => {
                const regex = new RegExp(`(${searchValue.trim()})`, 'gi')
                const parts = item.Description.split(regex)

                return (
                  <div
                    className={styles.list_item}
                    key={item.Description}
                    onClick={() => {
                      setSelected(item)
                      setSearchValue(item.Description)
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
