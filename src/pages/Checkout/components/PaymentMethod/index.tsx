import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'
import {
  ContentPaymentMethodHeader,
  PaymentMethodButton,
  PaymentMethodContainer,
  PaymentMethodContent,
  PaymentMethodHeader,
} from './styles'

export function PaymentMethod() {
  return (
    <PaymentMethodContainer>
      <PaymentMethodHeader>
        <CurrencyDollar size={22} color="#8047F8" />

        <ContentPaymentMethodHeader>
          <span>Pagamento</span>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </ContentPaymentMethodHeader>
      </PaymentMethodHeader>
      <PaymentMethodContent>
        <PaymentMethodButton>
          <CreditCard color="#8047F8" size={16} />
          Cartão de crédito
        </PaymentMethodButton>
        <PaymentMethodButton>
          <Bank color="#8047F8" size={16} />
          Cartão de débito
        </PaymentMethodButton>
        <PaymentMethodButton>
          <Money color="#8047F8" size={16} />
          Dinheiro
        </PaymentMethodButton>
      </PaymentMethodContent>
    </PaymentMethodContainer>
  )
}
