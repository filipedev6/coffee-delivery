import { CoffeeCard } from '../CoffeeCard'
import { OthersContainer, OthersContent, TitleOrthersCoffee } from './styles'

export function OthersCoffee() {
  return (
    <OthersContainer className="container">
      <TitleOrthersCoffee>Nossos cafés</TitleOrthersCoffee>

      <OthersContent>
        <CoffeeCard />
      </OthersContent>
    </OthersContainer>
  )
}
