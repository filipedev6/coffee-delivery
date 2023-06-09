import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'
import {
  ContentPaymentMethodHeader,
  PaymentMethodButton,
  PaymentMethodContainer,
  PaymentMethodContent,
  PaymentMethodHeader,
} from './styles'
import { useEffect, useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'

export function PaymentMethod() {
  const { paymentMethodAction, setPaymentMethodActionToContext } =
    useContext(CartContext)

  useEffect(() => {
    localStorage.setItem(
      '@ignite-coffee-delivery:payment-option-state-1.0.0',
      paymentMethodAction,
    )
  }, [paymentMethodAction])

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
        <PaymentMethodButton
          className={
            paymentMethodAction === 'Cartão de crédito'
              ? 'styleActivePayment'
              : ''
          }
          onClick={() => setPaymentMethodActionToContext('Cartão de crédito')}
        >
          <CreditCard color="#8047F8" size={16} />
          Cartão de crédito
        </PaymentMethodButton>
        <PaymentMethodButton
          className={
            paymentMethodAction === 'Cartão de débito'
              ? 'styleActivePayment'
              : ''
          }
          onClick={() => setPaymentMethodActionToContext('Cartão de débito')}
        >
          <Bank color="#8047F8" size={16} />
          Cartão de débito
        </PaymentMethodButton>
        <PaymentMethodButton
          className={
            paymentMethodAction === 'Dinheiro' ? 'styleActivePayment' : ''
          }
          onClick={() => setPaymentMethodActionToContext('Dinheiro')}
        >
          <Money color="#8047F8" size={16} />
          Dinheiro
        </PaymentMethodButton>
      </PaymentMethodContent>
    </PaymentMethodContainer>
  )
}
