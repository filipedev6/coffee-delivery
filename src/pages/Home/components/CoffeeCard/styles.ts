import styled from 'styled-components'

export const CardCoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 256px;

  padding-inline: 24px;
  padding-bottom: 20px;

  background: ${(props) => props.theme['base-200']};

  border-radius: 6px 36px;
`

export const ImageCoffee = styled.img`
  margin-top: -1.25rem;
  margin-bottom: 12px;
`

export const ListTagsCoffee = styled.div`
  display: flex;
  gap: 4px;

  margin-bottom: 16px;
`

export const TagListCoffe = styled.span`
  height: 21px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  padding-inline: 8px;

  color: ${(props) => props.theme['yellow-700']};

  text-transform: uppercase;

  font-weight: 700;
  font-size: 0.625rem;
  line-height: 130%;

  background: ${(props) => props.theme['yellow-300']};

  border-radius: 100px;
`

export const TitleCoffeeContainer = styled.h2`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;

  color: ${(props) => props.theme['base-800']};

  margin-bottom: 8px;
`

export const DescriptionCoffeeContainer = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;

  color: ${(props) => props.theme['base-600']};

  text-align: center;

  margin-bottom: 33px;
`

export const BuyContainerCoffee = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const PriceContainerCoffee = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;

  color: ${(props) => props.theme['base-700']};

  text-transform: uppercase;

  > strong {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 24px;
    line-height: 130%;

    color: ${(props) => props.theme['base-700']};
  }
`

export const AmountCoffeeContainer = styled.div`
  display: flex;
  gap: 8px;
`

export const AmountCoffe = styled.div`
  background: ${(props) => props.theme['base-400']};
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  padding: 0.5rem;

  button {
    width: 0.875rem;
    height: 0.875rem;
    background: 0;
    border: 0;
    cursor: pointer;
  }
`

export const QuantityCoffee = styled.span`
  width: 1.25rem;
  height: 1.25rem;

  font-weight: 400;
  font-size: 16px;
  line-height: 130%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme['base-900']};
`

export const CartCoffee = styled.button`
  width: 38px;
  height: 38px;

  border: 0;

  background: ${(props) => props.theme['purple-700']};
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`
