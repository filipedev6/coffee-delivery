import { Address } from './components/Address'
import { CoffeesCart } from './components/CoffeesCart'
import { PaymentMethod } from './components/PaymentMethod'
import {
  CheckoutCoffees,
  CheckoutContainer,
  CheckoutContent,
  CheckoutOrder,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CheckoutContent className="container">
        <CheckoutOrder>
          <h2>Complete seu pedido</h2>

          <Address />
          <PaymentMethod />
        </CheckoutOrder>

        <CheckoutCoffees>
          <h2>Cafés selecionados</h2>

          <CoffeesCart />
        </CheckoutCoffees>
      </CheckoutContent>
    </CheckoutContainer>
  )
}
