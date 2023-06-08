import { HeaderContainer, Location, CheckoutCart } from './styles'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import LogoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { coffeeList } = useContext(CartContext)

  return (
    <HeaderContainer>
      <div className="container">
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
              {coffeeList.length !== 0 && <span>{coffeeList.length}</span>}
              <ShoppingCart weight="fill" size={22} color="#C47F17" />
            </CheckoutCart>
          </NavLink>
        </ul>
      </div>
    </HeaderContainer>
  )
}
