import { Dispatch, SetStateAction } from 'react'

import { HeaderList } from '@/components/shared/header/components/header-list/header-list'

import { PopUpDelivery } from '../pop-up-delivery/pop-up-delivery'

import styles from './search-pop-up.module.scss'

interface SearchPopUpProp {
  searchValue: string
  setSearchValue: Dispatch<SetStateAction<string>>
  searchActive: boolean
  searchClose: () => void
  inputRef: React.RefObject<HTMLInputElement | null>
  listData: Address[]
  setSelected: Dispatch<SetStateAction<Address | null>>
}

export const SearchPopUp: React.FC<SearchPopUpProp> = ({
  searchActive,
  searchClose,
  searchValue,
  setSearchValue,
  inputRef,
  listData,
  setSelected,
}: SearchPopUpProp) => {
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
          return regex.test(item.Present)
        }).length > 0 && (
          <HeaderList>
            {listData
              .filter(item => {
                const regex = new RegExp(`(${searchValue.trim()})`, 'gi')
                return regex.test(item.Present)
              })
              .slice(0, 10)
              .map(item => {
                const regex = new RegExp(`(${searchValue.trim()})`, 'gi')
                const parts = item.Present.split(regex)

                return (
                  <div
                    className={styles.list_item}
                    key={item.Present}
                    onClick={() => {
                      setSelected(item)
                      setSearchValue(item.Present)
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
