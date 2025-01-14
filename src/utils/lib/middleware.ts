/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from 'zod'

export type ActionState = {
  error?: string
  success?: boolean
  [key: string]: any // This allows for additional properties
}

type ValidatedActionFunction<S extends z.ZodType<any, any>, T> = (
  data: z.infer<S>,
  formData: FormData,
) => Promise<T>

export function validatedAction<S extends z.ZodType<any, any>, T>(
  schema: S,
  action: ValidatedActionFunction<S, T>,
) {
  return async (prevState: ActionState, formData: FormData): Promise<T> => {
    const result = schema.safeParse(Object.fromEntries(formData))
    if (!result.success) {
      return {
        success: false,
        error: result.error.errors[0].message,
        inputs: Object.fromEntries(formData),
      } as T
    }

    return action(result.data, formData)
  }
}

// import { zodResolver } from '@hookform/resolvers/zod'
// import { UseMutationOptions, useMutation } from '@tanstack/react-query'
// import { DefaultValues, FieldValues, SubmitHandler, UseFormProps, useForm } from 'react-hook-form'
// import { toast } from 'react-toastify'
// import { z } from 'zod'

// interface UseFormWithSubmitProps<TFormData extends FieldValues, TResponse> {
//   // Схема валидации Zod
//   validationSchema: z.Schema<TFormData>
//   // Функция для отправки данных на сервер
//   mutationFn: (data: TFormData) => Promise<TResponse>
//   // Начальные значения формы
//   defaultValues?: DefaultValues<TFormData> | DefaultValues<TFormData>
//   // Колбэк при успешном выполнении
//   onSuccess?: (response: TResponse) => void
//   // Дополнительные опции для useForm
//   formOptions?: Omit<UseFormProps<TFormData>, 'resolver' | 'defaultValues'>
//   // Дополнительные опции для useMutation
//   mutationOptions?: Omit<
//     UseMutationOptions<TResponse, Error, TFormData>,
//     'mutationFn' | 'onSuccess' | 'onError'
//   >
// }

// export function useFormWithSubmit<TFormData extends FieldValues, TResponse = any>({
//   validationSchema,
//   mutationFn,
//   defaultValues,
//   onSuccess,
//   formOptions = {},
//   mutationOptions = {},
// }: UseFormWithSubmitProps<TFormData, TResponse>) {
//   // Инициализация react-hook-form
//   const formMethods = useForm<TFormData>({
//     resolver: zodResolver(validationSchema),
//     defaultValues,
//     mode: 'onSubmit',
//     ...formOptions,
//   })

//   // Инициализация мутации
//   const { mutate, isPending } = useMutation({
//     mutationFn,
//     onSuccess: response => {
//       onSuccess?.(response)
//     },
//     onError: (error: Error) => {
//       toast.error(error.message)
//     },
//     ...mutationOptions,
//   })

//   const onSubmit: SubmitHandler<TFormData> = data => {
//     mutate(data)
//   }

//   return {
//     ...formMethods,
//     onSubmit: formMethods.handleSubmit(onSubmit),
//     isPending,
//   }
// }
