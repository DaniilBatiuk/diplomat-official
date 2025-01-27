import { Alert, AlertTitle } from '@mui/material'

import { getUserSession } from '@/utils/helpers/get-user-session'

export const Warning: React.FC = async () => {
  const user = await getUserSession()
  console.log('user', user)
  return (
    <>
      {user === null && (
        <Alert severity='warning' style={{ marginBottom: '1rem' }}>
          <AlertTitle>Попередження</AlertTitle>
          Якщо ви зробите замовлення без авторизації, то ви не зможете переглянути свою історію
          замовлень.
        </Alert>
      )}
    </>
  )
}
