import { useEffect } from 'react'

import { ActionState } from '@/utils/lib/middleware'

interface useFormResultProcessProps {
  state: ActionState
  isPending: boolean
  onSuccess?: () => void
  onError?: () => void
}

/**
 * @name useFormResultProcess
 * @description - A hook to handle form result processing based on the action state and loading status.
 *
 * @param {useFormResultProcessProps} props The properties to configure the hook
 * @param {ActionState} props.state The current action state containing `success`, `inputs` and `errors`
 * @param {boolean} props.isPending Indicates if the form action is in a pending state
 * @param {() => void} [props.onSuccess] Callback executed on successful form action
 * @param {() => void} [props.onError] Callback executed when form action encounters errors
 *
 * @example
 * useFormResultProcess({
 *   state: { success: true, errors: {} },
 *   isPending: false,
 *   onSuccess: () => console.log('Form succeeded!'),
 *   onError: () => console.error('Form encountered errors'),
 * });
 */

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
