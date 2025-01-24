import { useEffect, useState } from 'react'

interface IUseDataChange {
  user: IUserDetails
}
export const useDataChange = ({ user }: IUseDataChange) => {
  const { name: initialName, surname: initialSurname, email: initialEmail } = user

  const [formData, setFormData] = useState({
    name: initialName,
    surname: initialSurname,
    email: initialEmail,
  })

  const [isDisabled, setIsDisabled] = useState(true)

  useEffect(() => {
    const isUnchanged =
      formData.name === initialName &&
      formData.surname === initialSurname &&
      formData.email === initialEmail

    setIsDisabled(isUnchanged)
  }, [formData, initialName, initialSurname, initialEmail])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  return {
    handleChange,
    isDisabled,
  }
}
