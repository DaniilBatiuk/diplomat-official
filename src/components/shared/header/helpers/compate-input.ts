export const compareInput = (userInput: string, targetString: string): boolean => {
  const normalizedUserInput = userInput.toLowerCase().trim()
  const normalizedTargetString = targetString.toLowerCase().trim()

  if (normalizedUserInput.includes(' ') && normalizedUserInput.length > 1) {
    return normalizedTargetString.includes(normalizedUserInput)
  }

  const words = normalizedTargetString.split(/[\s,.'"]+/).filter(word => word.length > 0)
  return words.some(word => word.startsWith(normalizedUserInput))
}
