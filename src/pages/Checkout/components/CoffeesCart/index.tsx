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
import { useFormContext } from 'react-hook-form'
// import { newCoffeeFormData } from '../../../../contexts/FormContext'
import { useNavigate } from 'react-router-dom'

export function CoffeesCart() {
  const {
    coffeeList,
    setCoffeeListToContext,
    paymentMethodAction,
    setPaymentMethodActionToContext,
  } = useContext(CartContext)
  const { handleSubmit, watch } = useFormContext()
  const navigate = useNavigate()

  function handleConfirmToCoffee(data: any) {
    console.log(data)

    localStorage.setItem(
      '@ignite-coffee-delivery:delivery-address-1.0.0',
      JSON.stringify(data),
    )

    navigate('/success')

    localStorage.setItem(
      '@ignite-coffee-delivery:products-state-1.0.0',
      JSON.stringify([]),
    )
    setCoffeeListToContext([])
    setPaymentMethodActionToContext('')
  }

  const cep = watch('cep')
  const rua = watch('rua')
  const numero = watch('numero')
  const bairro = watch('bairro')
  const cidade = watch('cidade')
  const uf = watch('uf')
  const isSubmitForm =
    !cep || !rua || !numero || !bairro || !cidade || !uf || !paymentMethodAction

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

        <ConfirmOrder
          disabled={isSubmitForm}
          onClick={handleSubmit(handleConfirmToCoffee)}
        >
          Confirmar pedido
        </ConfirmOrder>
      </TotalCartContainer>
    </CoffeesCartContainer>
  )
}
