import { LINKS } from '@/utils/config/links'

import { HeaderList } from '../../../header-list/header-list'
import { SearchLink } from '../search-link/search-link'

import { useHeaderSearchStore } from '@/utils/lib/store/header-search-store'

interface SearchListProps {
  inputRef: React.RefObject<HTMLInputElement | null>
  absolutePosition?: boolean
}

export const SearchList: React.FC<SearchListProps> = ({
  inputRef,
  absolutePosition,
}: SearchListProps) => {
  const { searchValue, searchActive, searchDataView } = useHeaderSearchStore()

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
            inputRef={inputRef}
          />
        ))}

      {searchDataView.subcategories.length > 0 &&
        searchDataView.subcategories.map(subcategory => (
          <SearchLink
            key={subcategory.id}
            name={subcategory.name}
            link={`${LINKS.Categories}/${subcategory.categoryName}/${subcategory.name}`}
            inputRef={inputRef}
          />
        ))}

      {searchDataView.products.length > 0 &&
        searchDataView.products.map(product => (
          <SearchLink
            key={product.id}
            name={product.name}
            link={`${LINKS.Product}/${product.id}`}
            inputRef={inputRef}
          />
        ))}
    </HeaderList>
  )
}
