import { MapPinLine } from '@phosphor-icons/react'
import {
  AddressContainer,
  AddressHeader,
  ContentAddress,
  ContentAddressHeader,
} from './styles'
import { useFormContext } from 'react-hook-form'

export function Address() {
  const { register } = useFormContext()

  return (
    <AddressContainer>
      <AddressHeader>
        <MapPinLine size={22} color="#C47F17" />

        <ContentAddressHeader>
          <span>Endereço de Entrega</span>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </ContentAddressHeader>
      </AddressHeader>
      <ContentAddress>
        <input {...register('cep')} name="cep" type="text" placeholder="CEP" />
        <input {...register('rua')} name="rua" type="text" placeholder="Rua" />
        <input
          {...register('numero', { valueAsNumber: true })}
          name="numero"
          type="text"
          placeholder="Número"
        />
        <input
          {...register('complemento')}
          name="complemento"
          type="text"
          placeholder="Complemento"
        />
        <input
          {...register('bairro')}
          name="bairro"
          type="text"
          placeholder="Bairro"
        />
        <input
          {...register('cidade')}
          name="cidade"
          type="text"
          placeholder="Cidade"
        />
        <input {...register('uf')} name="uf" type="text" placeholder="UF" />
      </ContentAddress>
    </AddressContainer>
  )
}
