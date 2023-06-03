import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import {
  HeroContainer,
  HeroContent,
  HeroContentInfo,
  InfoContentList,
  DtIcon,
} from './styles'
import HeroImagem from '../../../../assets/hero-imagem.png'

export function Hero() {
  return (
    <HeroContainer>
      <HeroContent className="container">
        <HeroContentInfo>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <InfoContentList>
            <li>
              <DtIcon className="DtOrange">
                <ShoppingCart weight="fill" color="#FAFAFA" />
              </DtIcon>
              Compra simples e segura
            </li>
            <li>
              <DtIcon className="DtGray">
                <Package weight="fill" color="#FAFAFA" />
              </DtIcon>
              Embalagem mantém o café intacto
            </li>
            <li>
              <DtIcon className="DtYellow">
                <Timer weight="fill" color="#FAFAFA" />
              </DtIcon>
              Entrega rápida e rastreada
            </li>
            <li>
              <DtIcon className="DtPurple">
                <Coffee weight="fill" color="#FAFAFA" />
              </DtIcon>
              O café chega fresquinho até você
            </li>
          </InfoContentList>
        </HeroContentInfo>
        <img src={HeroImagem} alt="Copo de cafe" />
      </HeroContent>
    </HeroContainer>
  )
}
