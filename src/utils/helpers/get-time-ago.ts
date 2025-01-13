export const getTimeAgo = (createdAt: Date) => {
  const now = new Date()
  const commentDate = new Date(createdAt)

  const diffInMilliseconds = +now - +commentDate
  const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24))
  const diffInMonths = Math.floor(diffInDays / 30)
  const diffInYears = Math.floor(diffInDays / 365)

  if (diffInDays <= 0) {
    return 'сьогодні' // If the comment was created today
  }

  if (diffInDays < 30) {
    return `${diffInDays} дні тому` // If the comment was created within the last 30 days
  }

  if (diffInMonths === 1) {
    return 'місяць тому' // If the comment was created one month ago
  }

  if (diffInMonths > 1 && diffInMonths < 12) {
    return `${diffInMonths} місяців тому` // If the comment was created several months ago
  }

  if (diffInYears === 1) {
    return 'рік тому' // If the comment was created one year ago
  }

  return `${diffInYears} років тому` // If the comment was created more than a year ago
}
