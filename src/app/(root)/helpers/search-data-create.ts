export const searchDataCreate = (
  allCategories: ICategory[],
  activeProducts: IProductWithProperties[],
): ISearchData => {
  return {
    categories: allCategories.map(category => ({
      id: category.id,
      name: category.name,
    })),
    subcategories: allCategories
      .map(category =>
        category.subcategories.map(subcategory => ({
          id: subcategory.id,
          name: subcategory.name,
          categoryName: category.name,
        })),
      )
      .flat(),
    products: activeProducts.map(product => ({
      id: product.id,
      name: product.name,
    })),
  }
}
