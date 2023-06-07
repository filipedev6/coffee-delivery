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
import { Coffee } from '../OthersCoffee'
import { useState } from 'react'

export function CoffeeCard({
  name,
  tagsLabel,
  description,
  price,
  coffeeImg,
}: Coffee) {
  const [quantityCoffee, setQuantityCoffee] = useState(1)

  function handleMinusQuantityCoffee() {
    if (quantityCoffee > 1) {
      setQuantityCoffee((state) => state - 1)
    }
  }

  function handlePlusQuantityCoffee() {
    setQuantityCoffee((state) => state + 1)
  }

  return (
    <CardCoffeeContainer>
      <ImageCoffee src={coffeeImg} alt="Coffee" />

      <ListTagsCoffee>
        {tagsLabel.map((tag) => {
          return <TagListCoffe key={tag}>{tag}</TagListCoffe>
        })}
      </ListTagsCoffee>

      <TitleCoffeeContainer>{name}</TitleCoffeeContainer>
      <DescriptionCoffeeContainer>{description}</DescriptionCoffeeContainer>

      <BuyContainerCoffee>
        <PriceContainerCoffee>
          R$ <strong>{price.toFixed(2).replace('.', ',')}</strong>
        </PriceContainerCoffee>

        <AmountCoffeeContainer>
          <AmountCoffe>
            <button onClick={handleMinusQuantityCoffee}>
              <Minus color="#8047F8" size={14} />
            </button>
            <QuantityCoffee>{quantityCoffee}</QuantityCoffee>
            <button onClick={handlePlusQuantityCoffee}>
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
