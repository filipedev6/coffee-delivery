import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['base-200']};

  position: fixed;
  left: 0;
  right: 0;
`

export const HeaderContent = styled.div`
  max-width: 70rem;
  height: 104px;
  margin-inline: auto;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    list-style: none;

    display: flex;
    gap: 12px;

    li {
      height: 38px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-inline: 8px;
      border-radius: 6px;
    }
  }
`

export const Location = styled.li`
  background: ${(props) => props.theme['purple-300']};

  display: flex;
  gap: 4px;

  font-size: 0.875rem;
  font-weight: 400;
  line-height: 130%;
  color: ${(props) => props.theme['purple-700']};
`

export const CheckoutCart = styled.li`
  background: ${(props) => props.theme['yellow-300']};
`
