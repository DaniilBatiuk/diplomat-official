'use client'

import { Alert, AlertTitle } from '@mui/material'
import { useSession } from 'next-auth/react'

export const Warning: React.FC = () => {
  const { data: session } = useSession()
  return (
    <>
      {session === null && (
        <Alert severity='warning' style={{ marginBottom: '1rem' }}>
          <AlertTitle>Попередження</AlertTitle>
          Якщо ви зробите замовлення без авторизації, то ви не зможете переглянути свою історію
          замовлень.
        </Alert>
      )}
    </>
  )
}
