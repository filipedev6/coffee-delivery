import { useState, useEffect } from 'react'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import IllustrationImage from '../../assets/Illustration.png'
import {
  ContentIcon,
  ContentInfosOrder,
  HeaderOrderConfirmed,
  Illustration,
  InfosContent,
  OrderConfirmed,
  OrderContent,
  SuccessContainer,
  SuccessContent,
} from './styles'

interface deliveryAddressType {
  bairro: string
  cep: string
  cidade: string
  numero: number
  rua: string
  uf: string
}

export function Success() {
  const [paymentMethodCoffee, setPaymentMethodCoffee] = useState('')
  const [deliveryAddressInformation, setDeliveryAddressInformation] =
    useState<deliveryAddressType>({
      cep: '',
      numero: 0,
      cidade: '',
      bairro: '',
      rua: '',
      uf: '',
    })

  useEffect(() => {
    const deliveryAddress = localStorage.getItem(
      '@ignite-coffee-delivery:delivery-address-1.0.0',
    )
    const statePaymentMethod = localStorage.getItem(
      '@ignite-coffee-delivery:payment-option-state-1.0.0',
    )

    if (deliveryAddress) {
      setDeliveryAddressInformation(JSON.parse(deliveryAddress))
    }
    if (statePaymentMethod) {
      setPaymentMethodCoffee(statePaymentMethod)
    }
  })

  return (
    <SuccessContainer>
      <SuccessContent className="container">
        <OrderConfirmed>
          <HeaderOrderConfirmed>
            <h1>Uhu! Pedido confirmado</h1>
            <p>Agora é só aguardar que logo o café chegará até você</p>
          </HeaderOrderConfirmed>
          <OrderContent>
            <ContentInfosOrder>
              <ContentIcon className="Map">
                <MapPin weight="fill" />
              </ContentIcon>

              <InfosContent>
                <p>
                  Entrega em{' '}
                  <strong>
                    {deliveryAddressInformation.rua},{' '}
                    {deliveryAddressInformation.numero}
                  </strong>{' '}
                  <br />
                  {deliveryAddressInformation.bairro} -{' '}
                  {deliveryAddressInformation.cidade},{' '}
                  {deliveryAddressInformation.uf}
                </p>
              </InfosContent>
            </ContentInfosOrder>

            <ContentInfosOrder>
              <ContentIcon className="Timer">
                <Timer weight="fill" />
              </ContentIcon>

              <InfosContent>
                <p>Previsão de entrega</p>
                <strong>20 min - 30 min</strong>
              </InfosContent>
            </ContentInfosOrder>

            <ContentInfosOrder>
              <ContentIcon className="Dollar">
                <CurrencyDollar weight="fill" />
              </ContentIcon>

              <InfosContent>
                <p>Pagamento na entrega</p>
                <strong>{paymentMethodCoffee}</strong>
              </InfosContent>
            </ContentInfosOrder>
          </OrderContent>
        </OrderConfirmed>
        <Illustration src={IllustrationImage} />
      </SuccessContent>
    </SuccessContainer>
  )
}
