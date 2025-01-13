export const calculateAverageStarCount = (comments: IComment[]): string => {
  if (comments.length === 0) {
    return '0' // Return '0' if there are no comments
  }

  const totalStarCount = comments.reduce((sum, comment) => sum + comment.starCount, 0)
  const averageStarCount = totalStarCount / comments.length

  // Return the average rounded to one decimal place
  return averageStarCount.toFixed(1)
}
