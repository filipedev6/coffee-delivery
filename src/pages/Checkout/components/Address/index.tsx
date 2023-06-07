import { MapPinLine } from '@phosphor-icons/react'
import {
  AddressContainer,
  AddressHeader,
  ContentAddress,
  ContentAddressHeader,
} from './styles'

export function Address() {
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
        <input name="cep" type="text" placeholder="CEP" />
        <input name="rua" type="text" placeholder="Rua" />
        <input name="numero" type="text" placeholder="Número" />
        <input name="complemento" type="text" placeholder="Complemento" />
        <input name="bairro" type="text" placeholder="Bairro" />
        <input name="cidade" type="text" placeholder="Cidade" />
        <input name="uf" type="text" placeholder="UF" />
      </ContentAddress>
    </AddressContainer>
  )
}
