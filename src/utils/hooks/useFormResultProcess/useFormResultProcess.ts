import { useEffect } from 'react'

import { ActionState } from '@/utils/lib/middleware'

interface useFormResultProcessProps {
  state: ActionState
  isPending: boolean
  onSuccess?: () => void
  onError?: () => void
}

export const useFormResultProcess = ({
  state,
  isPending,
  onSuccess,
  onError,
}: useFormResultProcessProps) => {
  useEffect(() => {
    if (!isPending) {
      if (state.success) {
        onSuccess?.()
      } else if (Object.keys(state.errors).length) {
        onError?.()
      }
    }
  }, [isPending])
}
