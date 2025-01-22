export const calculateAverageStarCount = (comments: ICommentDto[]): string => {
  if (comments.length === 0) {
    return '0'
  }

  const totalStarCount = comments.reduce((sum, comment) => sum + comment.starCount, 0)
  const averageStarCount = totalStarCount / comments.length

  return averageStarCount.toFixed(1)
}
