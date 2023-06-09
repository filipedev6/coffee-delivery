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

export function Success() {
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
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>{' '}
                  <br />
                  Farrapos - Porto Alegre, RS
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
                <strong>Cartão de Crédito</strong>
              </InfosContent>
            </ContentInfosOrder>
          </OrderContent>
        </OrderConfirmed>
        <Illustration src={IllustrationImage} />
      </SuccessContent>
    </SuccessContainer>
  )
}
