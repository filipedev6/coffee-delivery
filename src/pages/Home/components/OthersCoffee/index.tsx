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
  {
    id: 5,
    urlImg: '/coffees/Type=Café com Leite.png',
    labelsTag: ['Tradicional', 'Com leite'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    valuePrice: 9.9,
    quantity: 1,
  },
  {
    id: 6,
    urlImg: '/coffees/Type=Latte.png',
    labelsTag: ['Tradicional', 'Com leite'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    valuePrice: 9.9,
    quantity: 1,
  },
  {
    id: 7,
    urlImg: '/coffees/Type=Capuccino.png',
    labelsTag: ['Tradicional', 'Com leite'],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    valuePrice: 9.9,
    quantity: 1,
  },
  {
    id: 8,
    urlImg: '/coffees/Type=Macchiato.png',
    labelsTag: ['Tradicional', 'Com leite'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    valuePrice: 9.9,
    quantity: 1,
  },
  {
    id: 9,
    urlImg: '/coffees/Type=Mocaccino.png',
    labelsTag: ['Tradicional', 'Com leite'],
    name: 'Mocaccino',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    valuePrice: 9.9,
    quantity: 1,
  },
  {
    id: 10,
    urlImg: '/coffees/Type=Chocolate Quente.png',
    labelsTag: ['Especial', 'Com leite'],
    name: 'Chocolate Quente',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    valuePrice: 9.9,
    quantity: 1,
  },
  {
    id: 11,
    urlImg: '/coffees/Type=Cubano.png',
    labelsTag: ['Especial', 'Alcoólico', 'Gelado'],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    valuePrice: 9.9,
    quantity: 1,
  },
  {
    id: 12,
    urlImg: '/coffees/Type=Havaiano.png',
    labelsTag: ['Especial'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    valuePrice: 9.9,
    quantity: 1,
  },
  {
    id: 13,
    urlImg: '/coffees/Type=Árabe.png',
    labelsTag: ['Especial'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    valuePrice: 9.9,
    quantity: 1,
  },
  {
    id: 14,
    urlImg: '/coffees/Type=Irlandês.png',
    labelsTag: ['Especial', 'Alcoólico'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
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
