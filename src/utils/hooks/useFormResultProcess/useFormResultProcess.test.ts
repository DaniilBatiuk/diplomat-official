import { renderHook } from '@testing-library/react'

import { useFormResultProcess } from './useFormResultProcess'
import { ActionState } from '@/utils/lib/middleware'

const mockOnSuccess = vi.fn()
const mockOnError = vi.fn()
const initialProps = {
  state: { success: false, errors: {}, inputs: {} } as ActionState,
  isPending: true,
  onSuccess: mockOnSuccess,
  onError: mockOnError,
}

beforeEach(() => {
  vi.clearAllMocks()
})

it('Should use form result process', () => {
  const { result } = renderHook(useFormResultProcess, {
    initialProps: {
      ...initialProps,
    },
  })

  expect(result.current).toBeUndefined()
})

it('Should call onSuccess when isPending becomes false and success is true', () => {
  const { rerender } = renderHook(useFormResultProcess, {
    initialProps: {
      ...initialProps,
    },
  })

  rerender({
    ...initialProps,
    isPending: false,
    state: { ...initialProps.state, success: true },
  })

  expect(mockOnSuccess).toHaveBeenCalledTimes(1)
  expect(mockOnError).not.toHaveBeenCalled()
})

it('Should call onError when isPending becomes false and success is false and errors object is not empty', () => {
  const { rerender } = renderHook(useFormResultProcess, {
    initialProps: {
      ...initialProps,
    },
  })

  rerender({
    ...initialProps,
    isPending: false,
    state: { ...initialProps.state, errors: { field: 'Error' }, success: false },
  })

  expect(mockOnError).toHaveBeenCalledTimes(1)
  expect(mockOnSuccess).not.toHaveBeenCalled()
})

it('Should not call callbacks when isPending remains true', () => {
  const { rerender } = renderHook(useFormResultProcess, {
    initialProps,
  })

  rerender({
    ...initialProps,
    state: { ...initialProps.state, success: true },
  })

  expect(mockOnSuccess).not.toHaveBeenCalled()
  expect(mockOnError).not.toHaveBeenCalled()
})

it('Should not call callbacks when isPending changes from false to false', () => {
  const { rerender } = renderHook(useFormResultProcess, {
    initialProps: { ...initialProps, isPending: false },
  })

  rerender({
    ...initialProps,
    isPending: false,
    state: { ...initialProps.state, success: true },
  })

  expect(mockOnSuccess).not.toHaveBeenCalled()
  expect(mockOnError).not.toHaveBeenCalled()
})
