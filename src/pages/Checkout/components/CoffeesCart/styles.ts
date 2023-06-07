import styled from 'styled-components'

export const CoffeesCartContainer = styled.div`
  background: ${(props) => props.theme['base-200']};

  padding: 2.5rem;

  border-radius: 6px 44px;
`

export const ContentCoffeesCart = styled.div``

export const TotalCartContainer = styled.div``

export const AllFees = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-bottom: 24px;
`

export const BaseOrders = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const TotalItens = styled(BaseOrders)`
  span {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-700']};
  }
`

export const DeliveryRate = styled(BaseOrders)`
  span {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-700']};
  }
`

export const TotalOrder = styled(BaseOrders)`
  > span {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-800']};
  }
`

export const ConfirmOrder = styled.button`
  width: 100%;
  height: 46px;

  background: ${(props) => props.theme['yellow-500']};
  color: ${(props) => props.theme.white};
  border: 0;
  text-transform: uppercase;

  border-radius: 6px;

  font-weight: 700;
  font-size: 0.875rem;
  line-height: 160%;

  cursor: pointer;
`
