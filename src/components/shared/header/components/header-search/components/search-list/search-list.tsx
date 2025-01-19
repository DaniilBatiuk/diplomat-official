import { LINKS } from '@/utils/config/links'

import { HeaderList } from '../../../header-list/header-list'
import { SearchLink } from '../search-link/search-link'

interface SearchListProps {
  searchValue: string
  setSearchActive: React.Dispatch<React.SetStateAction<boolean>>
  inputRef: React.RefObject<HTMLInputElement | null>
  searchActive: boolean
  searchDataView: ISearchData
  absolutePosition?: boolean
}

export const SearchList: React.FC<SearchListProps> = ({
  searchActive,
  searchValue,
  searchDataView,
  setSearchActive,
  inputRef,
  absolutePosition,
}: SearchListProps) => {
  console.log('rerender HeaderList')
  return (
    <HeaderList
      isAbsolute={absolutePosition}
      isActive={
        searchActive &&
        searchValue.length > 0 &&
        (searchDataView.categories.length > 0 ||
          searchDataView.products.length > 0 ||
          searchDataView.subcategories.length > 0)
      }
    >
      {searchDataView.categories.length > 0 &&
        searchDataView.categories.map(category => (
          <SearchLink
            key={category.id}
            name={category.name}
            link={`${LINKS.Categories}/${category.name}`}
            searchValue={searchValue}
            setSearchActive={setSearchActive}
            inputRef={inputRef}
          />
        ))}

      {searchDataView.subcategories.length > 0 &&
        searchDataView.subcategories.map(subcategory => (
          <SearchLink
            key={subcategory.id}
            name={subcategory.name}
            link={`${LINKS.Categories}/${subcategory.categoryName}/${subcategory.name}`}
            searchValue={searchValue}
            setSearchActive={setSearchActive}
            inputRef={inputRef}
          />
        ))}

      {searchDataView.products.length > 0 &&
        searchDataView.products.map(product => (
          <SearchLink
            key={product.id}
            name={product.name}
            link={`${LINKS.Product}/${product.id}`}
            searchValue={searchValue}
            setSearchActive={setSearchActive}
            inputRef={inputRef}
          />
        ))}
    </HeaderList>
  )
}
