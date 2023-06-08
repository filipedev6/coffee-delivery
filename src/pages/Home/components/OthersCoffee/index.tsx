import { typeCoffeeList } from '../../../../contexts/CartContext'

import { CoffeeCard } from '../CoffeeCard'
import { OthersContainer, OthersContent, TitleOrthersCoffee } from './styles'

const productsCoffeeHome: typeCoffeeList[] = [
  {
    id: 1,
    urlImg: '/coffees/Type=Expresso.png',
    labelsTag: ['Tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    valuePrice: 9.9,
    quantity: 1,
  },
  {
    id: 2,
    urlImg: '/coffees/Type=Americano.png',
    labelsTag: ['Tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    valuePrice: 9.9,
    quantity: 1,
  },
  {
    id: 3,
    urlImg: '/coffees/Type=Expresso Cremoso.png',
    labelsTag: ['Tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    valuePrice: 9.9,
    quantity: 1,
  },
  {
    id: 4,
    urlImg: '/coffees/Type=Café Gelado.png',
    labelsTag: ['Tradicional', 'Gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    valuePrice: 9.9,
    quantity: 1,
  },
]

export function OthersCoffee() {
  return (
    <OthersContainer className="container">
      <TitleOrthersCoffee>Nossos cafés</TitleOrthersCoffee>

      <OthersContent>
        {productsCoffeeHome.map((productCoffee) => {
          return (
            <CoffeeCard key={productCoffee.id} productCoffee={productCoffee} />
          )
        })}
      </OthersContent>
    </OthersContainer>
  )
}
