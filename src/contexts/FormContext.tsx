import z from 'zod'
import { useForm, FormProvider, UseFormReturn } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode, createContext } from 'react'

interface FormContextType {
  newCoffeeForm: UseFormReturn
}

export const FormContext = createContext({} as FormContextType)

const schemaCoffeeFormZOD = z.object({
  cep: z
    .string()
    .min(8, 'O CEP Precisa ser de no minimo 8 digitos')
    .max(8, 'O CEP Precisa ser de no maximo 8 digitos'),
  rua: z.string().min(1, 'RUA Precisa ser de no minimo 1 digito'),
  numero: z.number().min(1, 'NUMERO Precisa ser de no minimo 1 digito'),
  bairro: z.string().min(1, 'BAIRRO Precisa ser de no minimo 1 digito'),
  cidade: z.string().min(1, 'CIDADE Precisa ser de no minimo 1 digito'),
  uf: z.string().min(1, 'ESTADO Precisa ser de no minimo 2 digitos'),
})

export type newCoffeeFormData = z.infer<typeof schemaCoffeeFormZOD>

export function FormContextProvider({ children }: { children: ReactNode }) {
  const newCoffeeForm = useForm<newCoffeeFormData>({
    resolver: zodResolver(schemaCoffeeFormZOD),
    defaultValues: {
      cep: '',
      rua: '',
      numero: 0,
      bairro: '',
      cidade: '',
      uf: '',
    },
  })

  return <FormProvider {...newCoffeeForm}>{children}</FormProvider>
}
