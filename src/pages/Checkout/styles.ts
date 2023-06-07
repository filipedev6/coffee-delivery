import styled from 'styled-components'

export const CheckoutContainer = styled.section`
  margin-top: 2.5rem;

  display: flex;
`

export const CheckoutContent = styled.div`
  width: 100%;
  display: flex;
  gap: 32px;

  padding-inline: 18px;

  h2 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-800']};

    margin-bottom: 15px;
  }
`

export const CheckoutOrder = styled.div`
  display: flex;
  flex-direction: column;
`

export const CheckoutCoffees = styled.div`
  width: 28rem;
`
