import { FormControl, InputLabel, Select } from '@mui/material'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'

interface ControlledSelectProps<T extends FieldValues> {
  label: string
  fullWidth?: boolean
  className?: string
  disabled?: boolean
  children: React.ReactNode
  errorMessage?: string
  control: Control<T>
  name: Path<T>
}

export const ControlledSelect = <T extends FieldValues>({
  label,
  fullWidth,
  className,
  disabled,
  children,
  errorMessage,
  control,
  name,
}: ControlledSelectProps<T>) => {
  return (
    <FormControl
      fullWidth={fullWidth}
      className={className}
      disabled={disabled}
      error={!!errorMessage}
    >
      <InputLabel error={!!errorMessage}>{!!errorMessage || label}</InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select {...field} error={!!errorMessage} label={!!errorMessage || label}>
            {children}
          </Select>
        )}
      />
    </FormControl>
  )
}
