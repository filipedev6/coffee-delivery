import { Product } from '../Product'
import {
  AllFees,
  CoffeesCartContainer,
  ConfirmOrder,
  ContentCoffeesCart,
  DeliveryRate,
  TotalCartContainer,
  TotalItens,
  TotalOrder,
} from './styles'

export function CoffeesCart() {
  return (
    <CoffeesCartContainer>
      <ContentCoffeesCart>
        <Product />
        <Product />
      </ContentCoffeesCart>

      <TotalCartContainer>
        <AllFees>
          <TotalItens>
            <span>Total de itens</span>
            <span>R$ 29,70</span>
          </TotalItens>

          <DeliveryRate>
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </DeliveryRate>

          <TotalOrder>
            <span>Total</span>
            <span>R$ 33,20</span>
          </TotalOrder>
        </AllFees>

        <ConfirmOrder>Confirmar pedido</ConfirmOrder>
      </TotalCartContainer>
    </CoffeesCartContainer>
  )
}
