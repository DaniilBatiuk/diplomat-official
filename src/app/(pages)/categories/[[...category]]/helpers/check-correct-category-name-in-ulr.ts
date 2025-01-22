export const checkCorrectCategoryNameInUlr = ({
  paramsData,
  allCategories,
}: {
  paramsData: {
    category: string | undefined
    subcategory: string | undefined
  }
  allCategories: ICategory[]
}) => {
  if (paramsData.subcategory) {
    const foundCategory = allCategories.find(category =>
      category.subcategories.find(subcategory => subcategory.name === paramsData.subcategory),
    )
    if (!foundCategory) return false
  }
  if (paramsData.category) {
    const foundCategory = allCategories.find(category => category.name === paramsData.category)
    if (!foundCategory) return false
  }
  return true
}
