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
import { useContext, useState } from 'react'
import { CartContext, typeCoffeeList } from '../../../../contexts/CartContext'

interface CoffeeCardProps {
  productCoffee: typeCoffeeList
}

export function CoffeeCard({ productCoffee }: CoffeeCardProps) {
  const [quantityCoffeeProduct, setQuantityCoffeeProduct] = useState(1)
  const { addCoffeeToCart } = useContext(CartContext)

  function handlePlusQuantityCoffeeProduct() {
    setQuantityCoffeeProduct((state) => state + 1)
  }

  function handleMinusQuantityCoffeeProduct() {
    if (quantityCoffeeProduct === 1) {
      setQuantityCoffeeProduct(1)
      return
    }

    setQuantityCoffeeProduct((state) => state - 1)
  }

  function handleAddCoffeeList() {
    addCoffeeToCart(productCoffee, quantityCoffeeProduct)
  }

  return (
    <CardCoffeeContainer>
      <ImageCoffee src={productCoffee.urlImg} alt="Coffee" />

      <ListTagsCoffee>
        {productCoffee.labelsTag.map((label: string) => {
          return <TagListCoffe key={label}>{label}</TagListCoffe>
        })}
      </ListTagsCoffee>

      <TitleCoffeeContainer>{productCoffee.name}</TitleCoffeeContainer>
      <DescriptionCoffeeContainer>
        {productCoffee.description}
      </DescriptionCoffeeContainer>

      <BuyContainerCoffee>
        <PriceContainerCoffee>
          R${' '}
          <strong>
            {productCoffee.valuePrice.toFixed(2).replace('.', ',')}
          </strong>
        </PriceContainerCoffee>

        <AmountCoffeeContainer>
          <AmountCoffe>
            <button onClick={handleMinusQuantityCoffeeProduct}>
              <Minus color="#8047F8" size={14} />
            </button>
            <QuantityCoffee>{quantityCoffeeProduct}</QuantityCoffee>
            <button onClick={handlePlusQuantityCoffeeProduct}>
              <Plus color="#8047F8" size={14} />
            </button>
          </AmountCoffe>
          <CartCoffee
            onClick={handleAddCoffeeList}
            title="Adicionar no carrinho"
          >
            <ShoppingCart weight="fill" color="#F3F2F2" />
          </CartCoffee>
        </AmountCoffeeContainer>
      </BuyContainerCoffee>
    </CardCoffeeContainer>
  )
}
