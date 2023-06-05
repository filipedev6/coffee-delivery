import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import {
  AmountCoffe,
  AmountCoffeeContainer,
  BuyContainerCoffee,
  CardCoffeeContainer,
  CartCoffee,
  DescriptionCoffeeContainer,
  ImageCoffee,
  ListTagsCoffee,
  PriceContainerCoffee,
  QuantityCoffee,
  TagListCoffe,
  TitleCoffeeContainer,
} from './styles'

export function CoffeeCard() {
  return (
    <CardCoffeeContainer>
      <ImageCoffee src="/coffees/Type=Americano.png" alt="Coffee" />

      <ListTagsCoffee>
        <TagListCoffe>Tradicional</TagListCoffe>
      </ListTagsCoffee>

      <TitleCoffeeContainer>Expresso Tradicional</TitleCoffeeContainer>
      <DescriptionCoffeeContainer>
        O tradicional café feito com água quente e grãos moídos
      </DescriptionCoffeeContainer>

      <BuyContainerCoffee>
        <PriceContainerCoffee>
          R$ <strong>9,90</strong>
        </PriceContainerCoffee>

        <AmountCoffeeContainer>
          <AmountCoffe>
            <button>
              <Minus color="#8047F8" size={14} />
            </button>
            <QuantityCoffee>1</QuantityCoffee>
            <button>
              <Plus color="#8047F8" size={14} />
            </button>
          </AmountCoffe>
          <CartCoffee>
            <ShoppingCart weight="fill" color="#F3F2F2" />
          </CartCoffee>
        </AmountCoffeeContainer>
      </BuyContainerCoffee>
    </CardCoffeeContainer>
  )
}
