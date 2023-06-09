import styled from 'styled-components'

export const SuccessContainer = styled.section`
  height: 34rem;

  display: flex;
  align-items: center;
`

export const SuccessContent = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;

  flex: 1;

  padding-inline: 18px;
`

export const OrderConfirmed = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

export const HeaderOrderConfirmed = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h1 {
    color: ${(props) => props.theme['yellow-700']};
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
  }

  p {
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-800']};
  }
`

export const OrderContent = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 2rem;
  position: relative;

  width: 32.87rem;
  height: 16.87rem;

  border-radius: 6px 36px 6px 36px;
  background: ${(props) => props.theme['base-100']};

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`

export const ContentInfosOrder = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`

export const ContentIcon = styled.div`
  height: 32px;
  width: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding-inline: 8px;

  color: white;
  border-radius: 1000px;

  &.Map {
    background: ${(props) => props.theme['purple-500']};
  }

  &.Timer {
    background: ${(props) => props.theme['yellow-500']};
  }

  &.Dollar {
    background: ${(props) => props.theme['yellow-700']};
  }
`

export const InfosContent = styled.div`
  p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-700']};
  }

  strong {
    color: ${(props) => props.theme['base-800']};
  }
`

export const Illustration = styled.img``
