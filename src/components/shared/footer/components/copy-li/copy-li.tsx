'use client'
export const CopyLi: React.FC = () => {
  const handleCopy = (text: string): void => {
    navigator.clipboard.writeText(text)
  }

  return (
    <>
      <li title='Копіювати' onClick={() => handleCopy('+38 (068) 905 06 93')}>
        +38 (068) 905 06 93
      </li>
      <li title='Копіювати' onClick={() => handleCopy('diplomat@gmail.com')}>
        diplomat@gmail.com
      </li>
    </>
  )
}
