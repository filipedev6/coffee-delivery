import styled from 'styled-components'

export const ProductContainer = styled.div`
  display: flex;
  gap: 20px;

  border-bottom: 1px solid ${(props) => props.theme['base-400']};
  padding-bottom: 24px;
  margin-bottom: 24px;
`

export const ProductImage = styled.img`
  width: 4rem;
  height: 4rem;
`

export const ContentProduct = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`

export const ContentInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  > span {
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;

    ${(props) => props.theme['base-800']}
  }
`

export const PriceContent = styled.div`
  color: ${(props) => props.theme['base-700']};

  font-weight: 700;
  font-size: 1rem;
  line-height: 130%;
`

export const ContentButtons = styled.div`
  display: flex;
  gap: 8px;
`

export const AmountCoffe = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 72px;
  height: 32px;
  padding-inline: 8px;

  border-radius: 6px;

  background: ${(props) => props.theme['base-400']};

  button {
    width: 0.875rem;
    height: 0.875rem;
    border: 0;
    background: 0;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const QuantityCoffee = styled.span`
  width: 20px;
  height: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;

  color: ${(props) => props.theme['base-900']};
`

export const RemoveCart = styled.button`
  background: ${(props) => props.theme['base-400']};

  width: 90px;
  height: 32px;

  border-radius: 6px;

  display: flex;
  align-items: center;

  gap: 4px;

  text-transform: uppercase;

  cursor: pointer;

  font-weight: 400;
  font-size: 0.75rem;
  line-height: 160%;

  color: ${(props) => props.theme['base-700']};

  border: 0;

  padding-inline: 8px;
`
