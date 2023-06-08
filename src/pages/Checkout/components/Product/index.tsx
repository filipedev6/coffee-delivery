import { useContext, useState, useEffect } from 'react'
import { Minus, Plus, Trash } from '@phosphor-icons/react'

import {
  AmountCoffe,
  ContentButtons,
  ContentInfos,
  ContentProduct,
  PriceContent,
  ProductContainer,
  ProductImage,
  QuantityCoffee,
  RemoveCart,
} from './styles'
import { CartContext, typeCoffeeList } from '../../../../contexts/CartContext'

interface ProductTypeProps {
  productCoffee: typeCoffeeList
}

export function Product({ productCoffee }: ProductTypeProps) {
  const [quantityCoffee, setQuantityCoffee] = useState(
    productCoffee.quantity || 1,
  )
  const { removeCoffeeToCart, updateCoffeeToCart } = useContext(CartContext)

  function handleMinusQuantity() {
    if (quantityCoffee === 1) {
      setQuantityCoffee(1)
      return
    }

    setQuantityCoffee((state) => state - 1)
  }

  function handlePlusQuantity() {
    setQuantityCoffee((state) => state + 1)
  }

  useEffect(() => {
    updateCoffeeToCart(productCoffee, quantityCoffee)
  }, [quantityCoffee])

  return (
    <ProductContainer>
      <ProductImage src={productCoffee.urlImg} />

      <ContentProduct>
        <ContentInfos>
          <span>{productCoffee.name}</span>

          <ContentButtons>
            <AmountCoffe>
              <button onClick={handleMinusQuantity}>
                <Minus color="#8047F8" size={14} />
              </button>
              <QuantityCoffee>{quantityCoffee}</QuantityCoffee>
              <button onClick={handlePlusQuantity}>
                <Plus color="#8047F8" size={14} />
              </button>
            </AmountCoffe>
            <RemoveCart onClick={() => removeCoffeeToCart(productCoffee)}>
              <Trash size={16} color="#8047F8" />
              Remover
            </RemoveCart>
          </ContentButtons>
        </ContentInfos>
        <PriceContent>
          R$ {productCoffee.valuePrice.toFixed(2).replace('.', ',')}
        </PriceContent>
      </ContentProduct>
    </ProductContainer>
  )
}
