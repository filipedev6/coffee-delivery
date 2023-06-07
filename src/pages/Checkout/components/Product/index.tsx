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

export function Product() {
  return (
    <ProductContainer>
      <ProductImage src="/coffees/Type=Americano.png" />

      <ContentProduct>
        <ContentInfos>
          <span>Expresso Tradicional</span>

          <ContentButtons>
            <AmountCoffe>
              <button>
                <Minus color="#8047F8" size={14} />
              </button>
              <QuantityCoffee>1</QuantityCoffee>
              <button>
                <Plus color="#8047F8" size={14} />
              </button>
            </AmountCoffe>
            <RemoveCart>
              <Trash size={16} color="#8047F8" />
              Remover
            </RemoveCart>
          </ContentButtons>
        </ContentInfos>
        <PriceContent>R$ 9,90</PriceContent>
      </ContentProduct>
    </ProductContainer>
  )
}
