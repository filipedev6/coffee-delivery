import {
  HeaderContainer,
  HeaderContent,
  Location,
  CheckoutCart,
} from './styles'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import LogoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to="/" title="Home">
          <img src={LogoCoffeeDelivery} alt="Logo Coffee Delivery" />
        </NavLink>

        <ul>
          <Location>
            <MapPin weight="fill" color="#8047F8" size={22} />
            Belo Horizonte, MG
          </Location>
          <NavLink to="/checkout" title="Checkout">
            <CheckoutCart>
              <ShoppingCart weight="fill" size={22} color="#C47F17" />
            </CheckoutCart>
          </NavLink>
        </ul>
      </HeaderContent>
    </HeaderContainer>
  )
}
