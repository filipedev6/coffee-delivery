import { CoffeeCard } from '../CoffeeCard'
import { OthersContainer, OthersContent, TitleOrthersCoffee } from './styles'

export interface Coffee {
  id: number
  name: string
  description: string
  tagsLabel: string[]
  price: number
  coffeeImg: string
}

const coffeeList: Coffee[] = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    tagsLabel: ['Tradicional'],
    coffeeImg: '/coffees/Type=Expresso.png',
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    tagsLabel: ['Tradicional'],
    coffeeImg: '/coffees/Type=Americano.png',
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    tagsLabel: ['Tradicional'],
    coffeeImg: '/coffees/Type=Expresso Cremoso.png',
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    tagsLabel: ['Tradicional', 'Gelado'],
    coffeeImg: '/coffees/Type=Café Gelado.png',
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    tagsLabel: ['Tradicional', 'Com leite'],
    coffeeImg: '/coffees/Type=Café com Leite.png',
  },
  {
    id: 6,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    tagsLabel: ['Tradicional', 'Com leite'],
    coffeeImg: '/coffees/Type=Latte.png',
  },
  {
    id: 7,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    tagsLabel: ['Tradicional', 'Com leite'],
    coffeeImg: '/coffees/Type=Capuccino.png',
  },
  {
    id: 8,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    tagsLabel: ['Tradicional', 'Com leite'],
    coffeeImg: '/coffees/Type=Macchiato.png',
  },
]

export function OthersCoffee() {
  return (
    <OthersContainer className="container">
      <TitleOrthersCoffee>Nossos cafés</TitleOrthersCoffee>

      <OthersContent>
        {coffeeList.map((coffee) => {
          return (
            <CoffeeCard
              id={coffee.id}
              key={coffee.id}
              name={coffee.name}
              description={coffee.description}
              coffeeImg={coffee.coffeeImg}
              price={coffee.price}
              tagsLabel={coffee.tagsLabel}
            />
          )
        })}
      </OthersContent>
    </OthersContainer>
  )
}
