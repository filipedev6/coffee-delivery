import styled from 'styled-components'

export const PaymentMethodContainer = styled.div`
  background: ${(props) => props.theme['base-200']};
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const PaymentMethodHeader = styled.header`
  display: flex;
  gap: 8px;
`

export const ContentPaymentMethodHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  span {
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-800']};
  }

  p {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-700']};
  }
`

export const PaymentMethodContent = styled.div`
  display: flex;
  gap: 12px;
`

export const PaymentMethodButton = styled.button`
  flex: 1;
  height: 51px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  padding-inline: 16px;

  background: ${(props) => props.theme['base-400']};
  border: 0;
  border-radius: 6px;
  cursor: pointer;

  text-transform: uppercase;

  font-weight: 400;
  font-size: 0.75rem;
  line-height: 160%;

  color: ${(props) => props.theme['base-700']};
  border: 1px solid transparent;

  &.styleActivePayment {
    border: 1px solid ${(props) => props.theme['purple-500']};
    background: ${(props) => props.theme['purple-300']};
    border-radius: 6px;
  }
`
