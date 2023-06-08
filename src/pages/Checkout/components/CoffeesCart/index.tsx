import { useContext } from 'react'
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
import { CartContext } from '../../../../contexts/CartContext'

export function CoffeesCart() {
  const { coffeeList } = useContext(CartContext)

  return (
    <CoffeesCartContainer>
      <ContentCoffeesCart>
        {coffeeList.map((productCoffee) => {
          return (
            <Product key={productCoffee.id} productCoffee={productCoffee} />
          )
        })}
      </ContentCoffeesCart>

      <TotalCartContainer>
        <AllFees>
          <TotalItens>
            <span>Total de itens</span>
            <span>
              {coffeeList
                .reduce((sumTotal, productCoffee) => {
                  return (
                    sumTotal + productCoffee.valuePrice * productCoffee.quantity
                  )
                }, 0)
                .toFixed(2)
                .replace('.', ',')}
            </span>
          </TotalItens>

          <DeliveryRate>
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </DeliveryRate>

          <TotalOrder>
            <span>Total</span>
            <span>
              R${' '}
              {coffeeList
                .reduce((sumTotal, productCoffee) => {
                  return (
                    sumTotal + productCoffee.valuePrice * productCoffee.quantity
                  )
                }, 3.5)
                .toFixed(2)
                .replace('.', ',')}
            </span>
          </TotalOrder>
        </AllFees>

        <ConfirmOrder>Confirmar pedido</ConfirmOrder>
      </TotalCartContainer>
    </CoffeesCartContainer>
  )
}
